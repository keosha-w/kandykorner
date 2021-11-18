import { useEffect, useState } from "react"


export const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8098/products")
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
        },
        []
    )

    return (
        <>
        {
            products.map(
                (productObj) => {
                    return <p key={`product--${productObj.id}`}>{productObj.name}</p>
                }
            )
        }
        </>
    )

}