import React, { useState, useEffect } from 'react'

const Table2 = () => {
    const [postData, setPostData] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
        fetchPostData()}, 3000)
        return () => clearInterval(interval)
    }, [])

    const fetchPostData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPostData(data)
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {postData.map((data) => {
                        return (
                            <>
                                <tr>
                                    <td>{data.userId}</td>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export { Table2 }
