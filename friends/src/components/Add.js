import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const Add = () => {
    const addFriendLayout = {
        name: "",
        age: "",
        email: "",
        id: ""
    }

    const [data, setData] = useState(addFriendLayout)

    const handleChanges = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const add = e => {
        e.preventDefault()
        setData({ ...data, id: Date.now() })
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

            <form onSubmit={add}>
                <h1>Add a Friend</h1>
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
                <button>Add</button>
            </form>
        </section>
    )
}

export default Add 