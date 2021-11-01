import Product from "./Product"

function ProductFeed({ products }) {
    return (
        <div>
            <h1>PRODUCTS HERE...</h1>
            {products.map(({ id, title, price, description, category, image }) => (
                <Product
                    key={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}
        </div>
    )
}

export default ProductFeed