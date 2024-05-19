import React from "react";


const JobPage = ({ params }: { params: { id: string } }) => {

    return (
        <div>{params.id}</div>
    )
}


export default JobPage