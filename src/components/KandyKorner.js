import { Locations } from "./locations/Locations"
import { Products } from "./products/ProductList"

export const KandyKorner = () => {
    return (
        <>
        <h1>Kandy Korner</h1>
        <h2>Locations</h2>
            <Locations />
        <h2>Products</h2>
            <Products />
        </>
    )

}