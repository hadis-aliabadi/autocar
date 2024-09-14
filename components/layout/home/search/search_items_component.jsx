import { useEffect, useState } from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
const HomePageSearchItems = (props) => {
  const { item, simplesearches, setsimplesearchname, key } = props;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(item?.make),
      model: dashRemoverForSlug(item?.model),
    }));
  }, []);

  // console.log({...props});
  return (
    <Link
      key={`homeSearchItem${key}`}
      href={`/cars/used/${item?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${item?.idd}`}
    >
      <a
        onClick={() => {
          simplesearches([
            {
              model_year: item?.model_year,
              make: item?.make,
              model: item?.model,
            },
          ]);
          setsimplesearchname(item.cars);
        }}
        className="w-100 p-1 px-3 m-0 my-1 home_search_options-style"
      >
        <div className="p-0 m-0 d-flex justify-content-between align-items-center">
          <span className="" style={{ color: "#d0a518  !important" }}>
            {item?.cars}
          </span>
          <FaAngleRight />
        </div>
      </a>
    </Link>
  );
};

export default HomePageSearchItems;
