import { apiPost } from "../services/axios-api"
import { useState } from "react"

export default function Register() {

    const [registerForm, setRegisterForm] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    async function register() {
        try {
            const response = await apiPost("auth/register", registerForm)
        } catch (error) {
            console.error(error.message)
        }
    }


    return (<>
        <span>
            <label>first name:</label>
            <input onChange={(e) => setRegisterForm({ ...registerForm, firstName: e.target.value })} />
        </span>
        <span>
            <label>last name:</label>
            <input onChange={(e) => setRegisterForm({ ...registerForm, lastName: e.target.value })} />
        </span>
        <span>
            <label>email:</label>
            <input onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })} />
        </span>
        <span>
            <label>user name:</label>
            <input onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })} />
        </span>
        <span>
            <label>password:</label>
            <input type="password" onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })} />
        </span>

        <button onClick={register}>Register</button>
    </>)
}