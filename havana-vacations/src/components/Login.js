import { useRef, useState } from "react"
import { apiPost } from "../services/axios-api"

export default function Login() {

    const [credentialsForm, setCredentialsForm] = useState({
        email: "",
        password: ""
    })

    const formRef = useRef()

    async function login() {
        try {
            formRef.current.reportValidity()
            const response = await apiPost("auth/login", credentialsForm)
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (<>
        <form ref={formRef} >
            <span>
                <label>email:</label>
                <input required max={50} onChange={e => { setCredentialsForm({ ...credentialsForm, email: e.target.value }) }} />
            </span>
            <span>
                <label>password:</label>
                <input required minLength={"8"} type="password" onChange={e => { setCredentialsForm({ ...credentialsForm, password: e.target.value }) }} />
            </span>

            <button type="button" onClick={login}>login</button>
        </form>
    </>)

}