import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import { Form, Col, Row, Button } from 'react-bootstrap'


const Edit = () => {
    const friendLayout = {
        name: "",
        age: "",
        email: "",
        id: ""
    }

    const [data, setData] = useState(friendLayout)

    const handleChanges = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const edit = e => {
        e.preventDefault()
        axiosWithAuth()
            .put(`/friends/${data.id}`, data)
            .then(res => {
                console.log('API data to edite here: ', res)
            })
            .catch(error => {
                console.log("Try again BRO!", error)
            })
    }

    const remove = e => {
        e.preventDefault()
        axiosWithAuth()
            .delete(`/friends/${data.id}`)
            .then(res => setData(res.data.filter(item => item.id !== data.id),
                console.log(data.id)))
    }

    return (
        <section className="formField">
            <Form onSubmit={edit}>
                <h1>Edit a Friend</h1>
                <Form.Group as={Row}>
                    <Col sm="12">
                        <Form.Control
                            placeholder="Name"
                            onChange={handleChanges}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>

                    <Col sm="12">
                        <Form.Control
                            placeholder="Age"
                            onChange={handleChanges}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm="12">
                        <Form.Control
                            placeholder="Email"
                            onChange={handleChanges}
                        />
                    </Col>
                </Form.Group>
                <Button variant="outline-secondary">Edit Friend</Button>
            </Form>
            <Form onSubmit={remove}>
                <h1>Delete Friend</h1>
                <Form.Group as={Row}>
                    <Col sm="12">
                        <Form.Control placeholder="Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>

                    <Col sm="12">
                        <Form.Control placeholder="Age" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm="12">
                        <Form.Control placeholder="Email" />
                    </Col>
                </Form.Group>
                <Button variant="outline-secondary">Delete Friend</Button>
            </Form>
            {/* <form onSubmit={edit}>
            <h1>Edit a Friend</h1>
            <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChanges}
            />
            <input
                type="text"
                placeholder="Age"
                name="age"
                onChange={handleChanges}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChanges}
            />
            <button>Edit</button>
        </form>

        <form onSubmit={remove}>
            <h1>Delete a Friend</h1>
            <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChanges}
            />
            <input
                type="text"
                placeholder="Age"
                name="age"
                onChange={handleChanges}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChanges}
            />
            <button>Delete</button>
        </form> */}

        </section >
    )
}

export default Edit