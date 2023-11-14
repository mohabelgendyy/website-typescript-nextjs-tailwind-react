import Image from "next/image";
import Link from "next/link";



const Footer = () => (
    <div className='flex flex-col text-black-100   border-t border-gray-100 items-center '>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 '>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
                <p className='text-base text-gray-700'>
                    EzEats 2023 <br />
                    All Rights Reserved &copy;
                </p>
            </div>
        </div>

        <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
            <p>@2023 EZEats. All rights reserved</p>

            <div className="footer__copyrights-link">
                <Link href="/" className="text-gray-500">
                    Privacy & Policy
                </Link>
                <Link href="/" className="text-gray-500">
                    Terms & Condition
                </Link>
            </div>
        </div>
    </div>
);

export default Footer;