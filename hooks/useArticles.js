import { useEffect, useState } from "react";
import agent from "../apis/index";

const useArticles = ({ page = 1, limit = 10, is_show = 1 }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const result = await agent.article.get({
          params: {
            offset: 0,
            limit: limit * page,
            is_show: is_show,
            order: "publishAt,DESC",
          },
        });
        setData(result);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [page, limit, is_show]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useArticles;
