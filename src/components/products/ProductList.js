import { useEffect, useState } from "react"


export const Products = () => {

    const [products, setProducts] = useState([])
    

    useEffect(
        () => {
            fetch("http://localhost:8098/products?_expand=productType&&_sort=productTypeId")
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
                    return <>
                        <p key={`product--${productObj.id}`}>{productObj.name} - {productObj.productType.type} {productObj.price} </p> 
                    </>
                }
            )
        }
        </>
    )

}