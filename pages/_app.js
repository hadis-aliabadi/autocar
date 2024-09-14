import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/sass/main.scss";
//swiper
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import Weblayout from "../components/common/layout/weblayout";
import { httpRequest } from "../apis";
import { stepContext } from "../context/Mycontext";
import Head from "next/head";
import ChatButton from "../components/common/web/button/chat_button";
import { ChatPortalContainer } from "hillz_chat";
import { Translate } from "../components/layout/home/translate";

function MyApp(props) {
  const { Component, pageProps, domain } = props;
  const [currentStepHome, setCurrentStepHome] = useState("");
  const value = { currentStepHome, setCurrentStepHome };
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          sizes="50x24"
          href={props?.dealerData?.prefixUrl + props?.dealerData?.tab_logo_url}
        />
        <script
          src="https://assets.askava.ai/v2/api.js?widgetId=bb1c2ec4bc59&features=modal,customCta"
          async
          defer
        ></script>
      </Head>
      {/* <ChatButton/> */}
      <QueryClientProvider client={queryClient}>
        <stepContext.Provider value={value}>
          <Hydrate state={pageProps?.dehydratedState}>
            <Weblayout
              isHome={Component.isHome}
              dealerData={props?.dealerData}
              domain={props?.domain}
              timeWork={props?.dealerData?.timeWork}
            >
              <Component
                dealerData={props?.dealerData}
                {...pageProps}
                domain={props?.domain}
              />
            </Weblayout>
          </Hydrate>
        </stepContext.Provider>
      </QueryClientProvider>
      <ToastContainer position="top-center" />
      <ChatPortalContainer />
    </>
  );
}
MyApp.getInitialProps = async ({ ctx }) => {
  const domain = ctx.req.headers.host;
  const { data: timeWork, status: timeWorkStatus } = await httpRequest(
    "GET",
    `/api/dealership/timework/get/${domain}`,
    {},
    {},
    false
  );
  const { data, status } = await httpRequest(
    "GET",
    `/api/dealership/single/by/url/${domain}`,
    {},
    {},
    false
  );
  const { data: soldImg, status: soldImgStatus } = await httpRequest(
    "GET",
    `/api/soldImages/${domain}`,
    { sold: "" },
    {},
    false
  );
  if (status === 200) {
    return {
      domain,
      dealerData: {
        ...data,
        timeWork: timeWork,
        soldImg: soldImg,
      },
    };
  }
  return {
    notFound: true,
  };
};
export default MyApp;
// edit
