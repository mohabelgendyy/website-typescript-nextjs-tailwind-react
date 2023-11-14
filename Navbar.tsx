import link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>

                <Image
                    src="/logo.svg"
                    alt='EZ Eats'
                    width={140}
                    height={70}
                    className='object-contain p-0 m-5'
                />

                <nav className="">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-end h-16">
                            <div className="flex items-center">
                                <div className="hidden md:block">
                                    <div className=" flex justify-end space-x-4 ml-96 ">
                                        <a href="#" className="text-white-300 hover:text-white px-3 py-2 rounded-md text-2xl font-extrabold ">Home</a>
                                        <a href="#" className="text-white-300 hover:text-white px-3 py-2 rounded-md text-2xl font-extrabold">Features</a>
                                        <a href="#" className="text-white-300 hover:text-white px-3 py-2 rounded-md text-2xl font-extrabold">Careers</a>
                                        <a href="#" className="text-white-300 hover:text-white px-3 py-2 rounded-md text-2xl font-extrabold">FAQs</a>
                                        <a href="#" className="text-white-300 hover:text-white px-3 py-2 rounded-md text-2xl font-extrabold">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <CustomButton
                    title='English'
                    btnType='button'
                    containerStyles='text-white rounded-full bg-black min-w-[130px] -ml-20 '

                />
            </nav>
        </header>

    )
}

export default Navbar