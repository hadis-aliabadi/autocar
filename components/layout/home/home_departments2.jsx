import { departmentData } from "../../../data/dapartmentData";
import Link from "next/link";
import styles from "../../../assets/sass/pages/home/homeBrands.module.scss";
import Image from "next/image";

const HomeDepartments2 = () => {
  return (
    <>
      <div className={`m-0 row justify-content-center w-100 ${styles.main}`}>
        <div
          style={{ position: "relative" }}
          className="d-flex row m-0 p-0 pb-5 pb-sm-4 py-4 col-12 col-lg-10 justify-content-center align-items-center text-center"
        >
          {departmentData?.map((item) => (
            <>
              <Link href={item.link} key={`link${item.link}`}>
                <a
                  className="p-0 m-0 p-2 px-lg-3 col-12 col-md-6 col-lg-3 my-xl-0"
                  style={{ aspectRatio:'3/2'}}
                >
                  <div
                    className={`p-0 m-0 w-100 h-100 ${styles.home_special_vehicle_container_style}`}
                    style={{
                      position: "relative",
                    }}
                  >
                    <Image
                      alt="Description"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top left"
                      src={`${item.image}`}
                      className={`w-100 h-100 ${styles.home_special_vehicle_img_style}`}
                    />
                    <div
                      className={`p-0 m-0 w-100 ${styles.home_special_vehicle_background_style}`}
                    >
                      <div
                        className={`w-100 p-0 ${styles.home_special_vehicle_titilebrand_style}`}
                        style={{
                          position: "absolute",
                          top: 0,
                        }}
                      >
                        <h2 className="p-0 m-0 py-2">{item.title}</h2>
                      </div>
                      <div
                        className={`${styles.home_special_vehicle_detail_style} text-white`}
                      >
                        <h5>{item.subTitle}</h5>
                      </div>
                      <div
                        className={`p-2  ${styles.home_special_vehicle_style}`}
                        style={{
                          position: "absolute",
                          top: 0,
                          // padding:"12px"
                        }}
                      >
                        <h3>{item.title}</h3>
                      </div>
                      <div
                        className={`col-12 ${styles.home_special_vehicle_detail_btn_style}`}
                      >
                        <i
                          className={`btn  ${styles.home_special_vehicle_detail_btn}`}
                        >
                          {item.btnName}
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="departments p-2 pt-3">
                    <h5 className="departments__desc-title">{item?.title}</h5>
                    <p className="departments__desc pb-3">
                   {item?.subTitle}
                    </p>
                  </div>
                </a>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeDepartments2;
