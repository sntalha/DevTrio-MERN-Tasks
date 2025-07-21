import React, { useState, useEffect } from 'react'

const Table1 = () => {
    const [albumData, setAlbumData] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
        fetchAlbumData()}, 3000)
        return () => clearInterval(interval)
    }, [])


    const fetchAlbumData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums')
            const data = await response.json()
            setAlbumData(data)
        }
        catch (err) {
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
                    {albumData.map((data) => {
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
export { Table1 }