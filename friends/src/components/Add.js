import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import { Form, Col, Row } from 'react-bootstrap'


const Add = () => {
    const addFriendLayout = {
        name: "",
        age: "",
        email: "",
        id: Date.now()
    }

    const [data, setData] = useState(addFriendLayout)

    const handleChanges = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const add = e => {
        e.preventDefault()
        setData({ ...data })
        axiosWithAuth()
            .post("friends", data)
            .then(res => {
                console.log("Data from the APi", res)
                setData(addFriendLayout)
            })
            .catch(error => {
                console.log("No data to display, becuase you broke it!", error)
            })
    }

    return (
        <section>

            <Form onSubmit={add}>
                <h1>Add a Friend</h1>
                <Form.Group as={Row}>
                    <Col sm="12">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleChanges}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>

                    <Col sm="12">
                        <Form.Control
                            type="text"
                            name="age"
                            placeholder="Age"
                            onChange={handleChanges}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}
                    controlId="formPlainTextEmail">
                    <Col sm="12">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChanges}
                        />
                    </Col>
                </Form.Group>
                <button variant="outline-secondary">Add Friend</button>
            </Form>
        </section>
    )
}

export default Add 