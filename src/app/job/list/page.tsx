import React from "react";
import graphQLClient from "@/graphQL/client";
import { GET_ALL_JOBS } from "@/graphQL/queries";
import { JobListing, Jobs } from "../../interfaces/job-listing";
import JobListingCard from "../../components/job-card/job-card";
import rootStyles from "../@styles/job.module.css";
import pageStyles from "./page.module.css"

export const GetAllJobs = async () => {
    return fetch(graphQLClient , {
        cache :'no-store',
        method :"POST",
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            query : GET_ALL_JOBS,
            variables : {}
        })
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        return res.data.jobs;
    })
}

const JobsPage = async  () => {
    const jobs : JobListing[] = await GetAllJobs()
    return (
        <div>
            <div className={rootStyles.header}>
                All Jobs
            </div>
            <div className={rootStyles.body}>

                {jobs.map((job : JobListing)=>
                (<div className={pageStyles.jobCardContainer}>
                    <JobListingCard  job={job} />
                </div>
                ))
                }
            </div>

        </div>
    )
}


export default JobsPage