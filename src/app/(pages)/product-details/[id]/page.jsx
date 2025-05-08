import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import "./product-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import Image from "next/image";
async function getData(iddd) {
  const res = await fetch(`http://localhost:5000/products/${iddd}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    notFound();
  }

  return res.json();
}
export async function generateMetadata({ params }) {
  const objData = await getData(params.id);
  return {
    title: objData.title,
    description: objData.description,
  };
}
const page = async ({ params }) => {
  const objData = await getData(params.id);
// const objData=arrData.find((item) => {
//     return item.id==params.id
// }
// )

  return (
    <div className="product-details"
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
      }}>
      <Header />
      <main style={{ textAlign: "center" }} className="flex">
        <Image width={266} height={260} quality={100} alt="" src={`${objData.productImg}`} />
        <div className="product-details">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <h2>{objData.title}</h2>
            <p className="price">${objData.price}</p>
          </div>
          <p className="description">{objData.description}</p>
          <button className="flex add-to-cart">
            <FontAwesomeIcon style={{ width: "1.1rem" }} icon={faCartPlus} />
            Add To Cart
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default page;
