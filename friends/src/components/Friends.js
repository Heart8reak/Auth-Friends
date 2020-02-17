import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Friends = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log("Data from API: ", res.data)
                setInfo(res.data)
            })
            .catch(error => {
                console.log('You broke it!', error)
            })
    }, [])

    return (
        <div>
            {info.map(friend =>
                <section>
                    <h3> Name: {friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </section>
            )}

        </div>
    )
}

export default Friends