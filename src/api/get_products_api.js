import apiInstance from "./axios";

export const get_products = async () => {
  const res = await apiInstance.get("products", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);

  return res.data;
};
