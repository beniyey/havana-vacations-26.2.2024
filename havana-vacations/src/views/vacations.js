import { useNavigate } from "react-router-dom";
import { apiFetch, isLoggedIn } from "../services/axios-api";
import { useEffect, useState } from "react";
import Vacation from "../components/vacation";

export default function Vacations() {
    const navigate = useNavigate()
    const [vacations, setVacations] = useState([])

    async function fetchVacations() {
        try {
            const response = await apiFetch("vacations")
            const vacations = response.data
            setVacations(vacations)
        } catch (error) {
            console.error(error.message)
        }
    }


    useEffect(() => {
        isLoggedIn().then((loggedIn) => {
            if (!loggedIn) {
                navigate("/")
            }
        })
        fetchVacations()
    }, [])

    return (<>
        {
            vacations.map((el, index) => {
                return <Vacation key={index} data={el} />
            })
        }
    </>)
}