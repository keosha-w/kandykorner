
import { useHistory } from "react-router-dom"



    
    
    export const SavePurchase = (event) => {
        const history = useHistory()
        event.preventDefault()

        const newOrder = {
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            completionDate: Date.now(),
            productLocationId: parseInt(event.target.key),
            productId: parseInt(event.target.value)
        }

        const fetchOptions = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOrder)
        }

        return fetch("http://localhost:8098/purchases", fetchOptions)
            .then(() => {
                history.push("/")
            })
    }
    
    // return(

    //     <button value={id} onClick={ savePurchase }>Purchase</button>
    // )
