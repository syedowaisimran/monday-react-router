import axios from "axios";
import { useState } from "react"
function About() {
    const [data, setData] = useState([])
    let api = "https://jsonplaceholder.typicode.com/comments"
    let GetApiData = () => {
        axios.get(api).then((res) => {
            console.log(res)
            setData([...res.data])

        }).catch((err) => {
            console.log(err)
        })
        axios.post(api, {
            name: "syed owais",
            class: "1 semester",
            id: 2,

        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        axios.put(api + "/1", { body: "custom body" })
            .then((res) => {
                console.log("Data and Sucessfully", res)
            }).catch((err) => {
                console.log(err)
            })
        axios.delete(api + "/2", { body: "custom level" })
            .then((res) => {
                console.log("Deleted Data", res)
            }).catch((err) => {
                console.log(err)
            })



    }
    return (
        <>
            <button className="btn btn-primary m-5" onClick={GetApiData} variant="contained">
                GET DATA
            </button>
            {
                data.map((e, i) => (
                    <div>
                        <p>
                            {e.body}

                        </p>
                    </div>
                ))
            }
        </>
    );
}

export default About;