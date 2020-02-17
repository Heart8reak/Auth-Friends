import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import { Card } from 'react-bootstrap'

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
                    <Card bg="dark" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{friend.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{friend.age}</Card.Subtitle>
                            <Card.Text>
                                {friend.email}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* <h3> Name: {friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p> */}
                </section>
            )}

        </div>
    )
}

export default Friends