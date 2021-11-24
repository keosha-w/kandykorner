import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const Locations = () => {

    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8098/locations")
                .then(response => response.json())
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        []
    )

    return (
        <>
        {
            locations.map(
                (locationObj) => {
                    return <p key={`location--${locationObj.id}`}>
                        <Link to={`/locations/${locationObj.id}`}>{locationObj.name}</Link> : {locationObj.address}</p>
                }
            )
        }
        </>
    )

}