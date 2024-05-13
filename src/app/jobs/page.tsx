
import React from "react";
import {gql , request} from 'graphql-request' 
import { NextPage, GetStaticProps } from "next";

interface Job {
    _id : string,
    description : string,
    company : string,
    url : string,
    title : string 
}

interface Response {
    jobs : Job[]
}

export const GetAllJobs = async () => {
    const endpoint : string =  `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/query`
    const query = gql`
    query GetAllJobs{ 
        jobs{ 
            _id 
            title 
            description 
            company 
            url 
        } 
    }
    `
    const res : Response = await request<Response>(endpoint, query)
    const jobs : Job[]  = res.jobs
    return jobs;
}

const JobsPage = async  () => {

    const jobs : Job[] = await GetAllJobs()
    console.log(jobs)
    return (
        <div>
            <h1>All the Jobs</h1>
            {jobs.map((job : Job)=>(
                <div>
                    <p>{job.title}</p>
                    <p>{job.description}</p>
                    <p>{job.company}</p>
                    <p>{job.url}</p>
                </div>
            ))}
        </div>
    )
}


export default JobsPage