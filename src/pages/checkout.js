import Header from "../components/Header";
import Image from 'next/image';

function Checkout() {
    return (
        <div className='bg-gray-100'>
          <Header />

          <main className='lg:flex max-w-screen-xl mx-auto'>
            {/* Left Section */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                    src='https://links.papareact.com/ikj'
                    height={250}
                    width={1020}
                    objectFit='contain'
                />
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>Your Shopping Cart</h1>
                </div>
            </div>



            {/* Right Section */}
            <div>

            </div>

          </main>
        </div>
    )
}

export default Checkout
