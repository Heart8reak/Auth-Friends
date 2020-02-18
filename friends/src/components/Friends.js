import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import { Card, Spinner } from 'react-bootstrap'

const Friends = () => {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
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
            {!loading ? (
                <div>
                    <Spinner variant="primary" animation="grow" />
                    <Spinner variant="primary" animation="grow" />
                    <Spinner variant="primary" animation="grow" />
                </div>
            ) : (
                    <div>
                        {info.map(friend => {
                            return (
                                <section key={friend.id} >
                                    <Card bg="dark" style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>{friend.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{friend.age}</Card.Subtitle>
                                            <Card.Text>
                                                {friend.email}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </section>
                            )
                        })
                        }
                    </div>
                )
            }
        </div>

    )
}

export default Friends