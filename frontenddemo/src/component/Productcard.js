import React from "react";
import { addItem } from "@/app/store/features/Productslice";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
const Productcard = ({ data }) => {
    const dispatch=useDispatch()
  return (
    <Link
      href={`products/${data._id}`}
    className="m-4"
      style={{
        flex: "0 0 21%",
        backgroundColor: "#f0f0f0",
        borderRadius: "30px",
        display: "block",
        textDecoration: "none",
        color: "#000",
      }}
    >
      <div style={{height:"300px"}}>
        <Image
          src={data?.Productimage}
          width={250}
          height={300}
          className="card-img w-[100%]"
          style={{borderRadius:"30px 30px 0 0"}}
        />
      </div>

      <div
        className="p-6"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 className="card-title">
          <strong>Title :-</strong> {data?.Productname}
        </h2>
        <p className="card-text">
          <strong>Description :-</strong>{" "}
          {data?.Productdescription.slice(0, 150)}{" "}
          <strong>
            <span>...</span>
          </strong>
        </p>
        <p className="card-text">
          <strong>Price :-</strong> {data?.Productprice}₹
        </p>
        <button
          className="card-button"
          onClick={() => dispatch(addItem(data))}
          style={{
            width: "120px",
            padding: "8px 0",
            backgroundColor: "green",
            borderRadius: "25px",
            color: "#fff",
            outline: "none",
            border: "none",
          }}
        >
          Add Cart
        </button>
      </div>
    </Link>
  );
};

export default Productcard;
