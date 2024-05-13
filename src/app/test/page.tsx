'use client'
import React , {useState} from "react"; 
interface TestResponse {
    code : number,
    message : string,
    data : string,
}

const TestPage = () => {
    const [response, setResponse] = useState<TestResponse>({
        code : 0,
        message : "",
        data : ""
    });
    const handleClick = async () =>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/test`).then((res) => res.json())
        setResponse(res)
    }

    return (
        <div>
            <h2>Test Page</h2>
            <button onClick={handleClick}>GET DATA</button>
            <p>{response.message}</p>
        </div>

    )
}


export default TestPage