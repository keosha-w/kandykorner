import { useEffect, useState } from "react"


export const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(
        () => {
<<<<<<< HEAD
            fetch("http://localhost:8098/products?_expand=productType&&_sort=productTypeId")
=======
            fetch("http://localhost:8098/products?_expand=productType")
>>>>>>> 3cc2baae623fdcbc85902cb6328d5f3a85cdfd0f
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
<<<<<<< HEAD
                    return <p key={`product--${productObj.id}`}>{productObj.name} - {productObj.productType.type} {productObj.price}</p>
=======
                    
                    return <>
                     <div>
                         <p key={`product--${productObj.id}`}>{productObj.name}, {productObj.productType.type} : {productObj.price} </p>
                     </div>
                    </>
>>>>>>> 3cc2baae623fdcbc85902cb6328d5f3a85cdfd0f
                }
            )
        }
        </>
    )

}