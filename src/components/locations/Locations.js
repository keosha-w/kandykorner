import { useEffect, useState } from "react"


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
                    return <p key={`location--${locationObj.id}`}>{locationObj.name}</p>
                }
            )
        }
        </>
    )

}