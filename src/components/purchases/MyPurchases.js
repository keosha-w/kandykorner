import { useEffect, useState } from "react"


export const MyOrders = () => {

    const [orders, setOrders] = useState([])
    
    
    const activeUser = parseInt(localStorage.getItem("kandy_customer"))

  

    useEffect(
        () => {
            fetch(`http://localhost:8098/purchases?customerId=${activeUser}&_expand=product`)
                .then(response => response.json())
                .then((productLocArray) => {
                    setOrders(productLocArray)
                })
        },
        []
    )
    
    

    
    
    
    
    
    
    return (
        <>
        {
            orders.map(
                (orderObj) => {
                    // const product = products.find(product => product.id === orderObj.productLocation.id)
                    return <>
                        <p key={`order--${orderObj.id}`}>{orderObj.id}  {orderObj.productLocationId} {orderObj.product.name} </p> 
                    </>
                }
            )
        }
        </>
    )

}