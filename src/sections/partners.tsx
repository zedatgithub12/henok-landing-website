import Image from "next/image";
import React from "react";

const partnersLogo = [
  "/images/partners/airbnb.png",
  "/images/partners/google.png",
  "/images/partners/nike.png",
  "/images/partners/uber.png",
  "/images/partners/stripe.png",
  "/images/partners/mashable.png",
];
const Partners = () => {
  return (
    <div className="p-4 w-full bg-white shadow-sm shadow-gray-50 overflow-x-auto scrollbar-hide flex gap-4 items-center justify-evenly">
      {partnersLogo.map((logo, index) => (
        <Image
          key={index}
          src={logo}
          alt="partner logo"
          width={80}
          height={80}
          className="object-contain"
        />
      ))}
    </div>
  );
};

export default Partners;
