"use client";
import Loader from "@/component/Loader";
import Singleproduct from "@/component/Singleproduct";
import axios from "axios";
import React, { useEffect, useState } from "react";

const singleProduct = ({ params }) => {
  const [product, setproduct] = useState([]);
  console.log("paramsparams", params.id);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.URL}singleproduct/${params.id}`)
      .then((res) => setproduct(res?.data?.products))
      .catch((e) => console.log("e"))
      .finally(() => setloading(false));
  }, [loading]);
  return (
    <>{loading === true ? <Loader /> : <Singleproduct product={product} />}</>
  );
};

export default singleProduct;
