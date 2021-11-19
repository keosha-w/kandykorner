import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/Employees"
import { Hiring } from "./employees/Hiring"
import { Locations } from "./locations/Locations"
import { Products } from "./products/ProductList"


export const ApplicationViews = () => {
    return (
        <>
            <Route exactpath="/">
                
            </Route>
            <Route path="/products">
                <Products />
            </Route>
            <Route path="/locations">
                <Locations />
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
