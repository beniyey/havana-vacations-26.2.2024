import { useEffect, useState } from "react"
import Login from "../components/Login"
import Register from "../components/Register"
import { apiPost, isLoggedIn } from "../services/axios-api"
import { useNavigate } from "react-router-dom"

export default function Auth() {
    const navigate = useNavigate()

    const [registeredUser, setRegisteredUser] = useState(false)

    useEffect(() => {
        isLoggedIn().then((loggedIn) => {
            if (loggedIn) {
                navigate("/vacations")
            }
        })
    }, [])

    async function login() {
        try {
            const credentials = {
                email: "benSp@gmail.com",
                password: "12345678"
            }
            const response = await apiPost("auth/login", credentials)
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (<>
        <div className="auth-wrapper">
            <div className="auth-content">

                <h1>Havana vacations</h1>

                <span>
                    <button onClick={() => setRegisteredUser(true)}>login</button>
                    <button onClick={() => setRegisteredUser(false)}>register</button>
                </span>

                {registeredUser &&
                    <Login />
                }

                {!registeredUser &&
                    <Register />
                }

                <button onClick={login}>Demo user</button>
            </div>
        </div>
    </>)
}