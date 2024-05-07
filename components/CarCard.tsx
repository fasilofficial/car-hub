"use client";

import { CarCardProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = Number(calculateCarRent(city_mpg, year));
  const currentRate = 80;

  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">Make: {model}</h2>
      </div>

      <div className="flex w-full justify-between items-center">
        <p className="flex mt-6 text-[28px] font-extrabold">
          <span className="self-start text-[14px] font-semibold">$</span>
          {carRent}
          <span className="self-end text-[14px] font-medium">/day</span>
        </p>
        <p className="flex mt-6 text-[28px] font-extrabold">
          <span className="self-start text-[14px] font-semibold">₹</span>
          {Math.floor(carRent * currentRate)}
          <span className="self-end text-[14px] font-medium">/day</span>
        </p>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          fill
          alt={model}
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2 ">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              height={20}
              width={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" height={20} width={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" height={20} width={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View more"
            containerStyles="w-full py-16 rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
