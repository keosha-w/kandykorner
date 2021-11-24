import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/Employees"
import { Hiring } from "./employees/Hiring"
import { Locations } from "./locations/Locations"
import { Products } from "./products/ProductList"
import { ProductLocations } from "./products/productLocationList"
import { MyOrders } from "./purchases/MyPurchases"


export const ApplicationViews = () => {
    return (
        <>
            <Route exactpath="/">
                
            </Route>
            <Route path="/products">
                <Products />
            </Route>
            <Route exact path="/myOrders">
                <MyOrders />
            </Route>
            <Route exact path="/locations">
                <Locations />
            </Route>
            <Route path="/locations/:locationId(\d+)">
                <ProductLocations />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employees/hire">
                <Hiring />
            </Route>

        </>
    )
}
