import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Detail() {
    const [loading, setloader] = useState(false)
    const [data, setData] = useState([])
    let Api = "https://jsonplaceholder.typicode.com/photos"
    let getData = () => {
        setloader(true)
        axios.get(Api).then((res) => {
            console.log(res)
            setData([...res.data])
            setloader(false)
        }).catch((err) => {
            console.log(err)
            setloader(false)
        })



    }
    useEffect(() => {
        getData()
    });

    const navigate = useNavigate();
    const moveToSingleDetail = (i) => {
        navigate(`/singledetail/${i}`);
    }
    return (
        <>
            {loading ? <p>loading...</p> :
                <>
                    {
                        data.map((e, i) => (
                            <div onClick={() => moveToSingleDetail()} key={i}>
                                <p className="text-dark">
                                    {e.title}

                                </p>
                                <img src={e.thumbnailUrl} width="200px" alt="" />
                            </div>
                        ))
                    }
                </>
            }
        </>


    )
}

export default Detail;