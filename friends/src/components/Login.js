import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Form, Spinner } from 'react-bootstrap'


const Login = props => {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    const handleChanges = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        axiosWithAuth()
            .post("/login", login)
            .then(res => {
                localStorage.setItem("token", res.data.payload)
                setLogin(login)
                setLogin({
                    username: "",
                    password: ""
                })
                props.history.push("/friends")
            })
            .catch(err => {
                localStorage.removeItem("token")
                console.log("Sorry try to Log in again", err)
            }, [])
    }

    return (
        <div>
            {!loading ? (
                <form onSubmit={onSubmit}>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={handleChanges}
                        value={login.username}
                    />
                    <br />
                    <Form.Control
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={handleChanges}
                        value={login.password}
                    />
                    <br />
                    <button variant="outline-secondary">Log in</button>
                </form>
            ) : (
                    <div>
                        <Spinner variant="primary" animation="grow" />
                        <Spinner variant="primary" animation="grow" />
                        <Spinner variant="primary" animation="grow" />
                    </div>
                )}
        </div >

    )


}




export default Login