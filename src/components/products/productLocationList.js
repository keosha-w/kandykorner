import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Purchase, SavePurchase } from "../purchases/purchases"

export const ProductLocations = () => {


    
    const [productLocations, setProductLocations] = useState([])
    const { locationId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8098/productLocations?locationId=${locationId}&_expand=product`)
                .then(response => response.json())
                .then((productArray) => {
                    setProductLocations(productArray)
                })
        },
        [locationId]
    )
    

    return (
        <>
        {
            productLocations.map(
                (productLocObj) => {
                    return <>
                        <p key={`product--${productLocObj.id}`}>{productLocObj.product?.name} {productLocObj.product?.price} 
                        <button value={productLocObj.product?.id} onClick={ SavePurchase }>Purchase</button>
                        </p> 
                    </>
                }
            )
        }
        </>
    )

}