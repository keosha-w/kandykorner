import { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    

    useEffect(
        () => {
            fetch("http://localhost:8098/employees?_expand=location")
                .then(res => res.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )
 const history = useHistory()
    return(
        <>
        <button onClick={
            () => {
                history.push("/employees/hire")
            }
        }>
            New Employee
        </button>
        {
            employees.map(
                (employeeObj) => {
                    return <p key={`employee--${employeeObj.id}`}>{employeeObj.name} works at {employeeObj.location.name} location</p>
                }
            )
        }
        </>
    )
}