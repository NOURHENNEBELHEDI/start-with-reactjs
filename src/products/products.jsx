import { useEffect, useState } from "react";
import { get_products } from "../api/get_products_api";

const Products = () => {
  const [data, setData] = useState([]);
  const fetchProduct = async () => {
    const res = await get_products();
    console.log(res);

    setData(res);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    data && (
      <>
        {data.map((item) => {
          return (
            <div>
              <h2>title : {item.title}</h2>
              <p>description : {item.description}</p>
            </div>
          );
        })}
      </>
    )
  );
};
export default Products;
