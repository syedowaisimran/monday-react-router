import React from "react"
import { useParams } from "react-router-dom"


const SingleDetail = () => {
    const params = useParams()
    console.log(params)
    let api = "https://jsonplaceholder.typicode.com/photos/${params.id}"
    return (
        <>
            <h1>hello world</h1>
        </>
    )

}
export default SingleDetail;