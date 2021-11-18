import { ApplicationViews } from "./ApplicationViews"
import { Locations } from "./locations/Locations"
import { NavBar } from "./Nav/NavBar"
import { Products } from "./products/ProductList"

export const KandyKorner = () => {
    return (
        <>
            <NavBar />
            <h1>Kandy Korner Konfections</h1>
            <ApplicationViews />
        </>
    )

}