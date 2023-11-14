import Image from 'next/image'

const MiddleMenu = () => {
    return (
        <div className='items-center p-10 '>
            <div >
                <h1 className="items-center 2xl:text-[60px] 
                sm:text-[64px] text-[50px] font-extrabold 
                outline-none py-0 ml-96 pt-[100px] gap-0 ">RESTAURANT
                </h1>
                <h1 className="items-center 2xl:text-[60px] sm:text-[64px] text-[50px]
                 font-extrabold outline-none text-red-500 py-0 ml-96 ">BENEFITS
                </h1>
                <h2 className='2xl:text-[20px] text-black py-0 ml-96 pb-20 '>
                    Why Contactless Ordering Will Become The Secret Weapon For Successful Restaurants?
                </h2>
                <div className=' middlemenu  bottom-[-300px] '>
                    <h2 className='text-red-500 outline-none py-0 text-[20px]  '>Reduce Waiters Cost
                        <p className='text-black text-[15]'>Contactless ordering reduces the tasks a waiter has to do, which will lead to a significant decrease in Labor Cost.</p>
                    </h2>
                </div>
                <div className=' middlemenu  bottom-[-300px]'>
                    <h2 className='text-red-500 outline-none py-0 text-[20px]  '>Increase Average Bill
                        <p className='text-black text-[15]'>Your digital menu showcases beautiful imagery, encouraging your customers to order more and make better choices.</p>
                    </h2>
                </div>
                <div className=' middlemenu  bottom-[-300px]  '>
                    <h2 className='text-red-500 outline-none py-0 text-[20px]  '>Increase Table Turnover
                        <p className='text-black text-[15]'>Customers can order and pay instantly, you'll see your table turnover increasing during your peak times.</p>
                    </h2>
                </div>
                <div className=' middlemenu  bottom-[200px] left-[1100px] '>
                    <h2 className='text-red-500 outline-none py-0 text-[20px]  '>Customers Feedback
                        <p className='text-black text-[15]'>By asking your clients for feedback, you can measure their satisfaction, and improve Customer Retention.</p>
                    </h2>
                </div>
                <div className=' middlemenu  bottom-[200px] left-[1100px] '>
                    <h2 className='text-red-500 outline-none py-0 text-[20px]  '>Customers Feedback
                        <p className='text-black text-[15]'>By asking your clients for feedback, you can measure their satisfaction, and improve Customer Retention.</p>
                    </h2>
                </div>
                <div className=' middlemenu  bottom-[200px] left-[1100px] '>
                    <h2 className='text-red-500 outline-none py-0 text-[20px]  '>Customers Feedback
                        <p className='text-black text-[15]'>By asking your clients for feedback, you can measure their satisfaction, and improve Customer Retention.</p>
                    </h2>
                </div>

                <div className="hero__image-container2 gap-0">
                    <div className="hero__image2">
                        <Image src="/features-img-e1694510500983.webp" alt="header " fill
                            className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleMenu