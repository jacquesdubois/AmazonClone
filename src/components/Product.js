import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';

function Product({ id, title, price, description, category, image }) {

    const MAX_RATING = 5;
    const MIN_RATING = 1;

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < 0.5);

    return (
        <div>
            <p>{category}</p>

            <Image
                src={image}
                height={200}
                width={200}
                objectFit='contain'
            />

            <h4>{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className='h-5'/>
                ))}
            </div>

            <p>{description}</p>

            <div>
                <Currency quantity={price}/>
            </div>

            {hasPrime && (
                <div>
                    <img
                        src='https://links.papareact.com/fdw'
                    />
                    <p>FREE Next-day Delivery</p>
                </div>
            )}

            <button>Add to Cart</button>
        </div>
    )
}

export default Product
