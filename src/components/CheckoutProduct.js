import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };

        // Sending the product as an action to the REDUX store... specifically the basketSlice
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        // Remove the item fro REDUX
        dispatch(removeFromBasket({ id }))
    }

    return (
        <div className='grid grid-cols-5'>
            {/* Left */}
            <Image
                src={image}
                height={200}
                width={200}
                objectfit='contain'
            />
            {/* Middle */}
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className='h-5 text-yellow-500'
                            key={i}
                        />
                    ))}
                </div>

                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency
                    quantity={price}
                />
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img className='w-12'
                            loading='lazy'
                            src='https://links.papareact.com/fdw'
                            alt=''
                        />
                        <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                    </div>
                )}
            </div>

            {/* Right */}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button mt-auto'
                    onClick={addItemToBasket}
                >Add to Cart</button>
                <button className='button mt-auto'
                    onClick={removeItemFromBasket}
                >Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
