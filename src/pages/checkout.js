import Header from "../components/Header";
import Image from 'next/image';
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/client';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.stripe_public_key);
import axios from 'axios';

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);

    const [session] = useSession();

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        // Call the Next.js backend to create a checkout session...
        const checkoutSession = await axios.post('/api/create-checkout-session',
        {
            items,
            email: session.user.email,
        });

        // Redirect customer to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if (result.error) alert(result.error.message);
    };

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
                    <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? 'Your Cart is Empty' : 'Your Shopping Cart'}</h1>

                    {items.map((item, i) => (
                        <CheckoutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}
                        />
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className='flex flex-col bg-white p-10 shadow-md'>
                {items.length > 0 && (
                    <>
                        <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):{' '}
                        <span className='font-bold'>
                            <Currency quantity={total} />
                        </span>
                        </h2>

                        <button className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 cursor-not-allowed'}`}
                            role='link'
                            disabled={!session}
                            onClick={createCheckoutSession}
                        >
                            {!session ? 'Sign in to Checkout' : 'Proceed to Checkout'}
                        </button>
                    </>
                )}
            </div>

          </main>
        </div>
    )
}

export default Checkout
