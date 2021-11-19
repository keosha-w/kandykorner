import { useEffect, useState } from "react";
import { useHistory } from "react-router";


export const Hiring = () => {
    const [employee, update] = useState({
        name: "",
        locationId: 1,
        manager: false,
        fulltime: false,
        hourlyRate: 0

    });

    const history = useHistory()
    const [locations, setLocation] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8098/locations")
                .then(res => res.json())
                .then((data) => {
                    setLocation(data)
                })
        },
        []
    )
    
    const saveForm = (event) => {
        event.preventDefault()

        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fulltime: employee.fulltime,
            hourlyRate: employee.hourlyRate
        }

        const fetchOptions = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8098/employees", fetchOptions)
            .then(() => {
                history.push("/employees")
            }) 
    }




    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Employee Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <select
                        className="form-control"

                        placeholder="Choose a Location"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.locationId = parseInt(event.target.value)
                                update(copy)
                            }
                        }>
                            <option value="0">Select a location:</option>
                            {
                            locations.map(
                                (locationObject) => {
                                    return <option value={locationObject.id}>{locationObject.name}</option>
                                }
                            )}
                        

                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Is this employee a manager?</label>
                    <input
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.manager = event.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fulltime?">Fulltime?</label>
                    <input
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.fulltime = event.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate:</label>
                    <input type="number"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.hourlyRate = parseInt(event.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveForm}>
                Submit Employee
            </button>
        </form>
    )
}