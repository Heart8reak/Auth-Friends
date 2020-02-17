import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Form, Col, Row, Button } from 'react-bootstrap'



class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault()
        axiosWithAuth()
            .post("/login", this.state.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload)
                this.props.history.push("/protected")
            })
            .catch(err => {
                localStorage.removeItem('token')
                console.log('invalid login: ', err)
            })
        // console.log(localStorage)

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.login}>
                    <Form.Group as={Row}>

                        <Col sm="12">
                            <Form.Control placeholder="Username" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlainTextPassword">
                        <Col sm="12">
                            <Form.Control placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Button variant="outline-secondary">Log in</Button>
                </Form>

            </div >

        )
    }
}


export default Login