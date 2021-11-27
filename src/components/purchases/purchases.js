
import { useHistory } from "react-router"



    
    
    export const SavePurchase = (event) => {
        event.preventDefault()
        const history = useHistory()

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
