"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () => { }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    MAKE YOUR LIFE EASIER WITH
                </h1>
                <h2 className="hero__title2"> EZ EATS</h2>

                <h2 className="hero__subtitle">
                    INTRODUCING THE NEW WORLD OF DINING SYSTEM</h2>

                < CustomButton
                    title="Request a Demo"
                    containerStyles="bg-red-600 text-white rounded mt-10 "
                    handleClick={handleScroll}
                />

            </div>

            <Image src="/header-shape.webp" alt="header2"
                fill className=" " />



            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/header-img-e1694510553695.webp" alt="header"
                        fill className="object-contain" />


                </div>


            </div>
        </div>
    )
}

export default Hero