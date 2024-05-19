"use client"
import React from "react";
import graphQLClient from "@/graphQL/client";
import { GET_ALL_JOBS } from "@/graphQL/queries";
import { JobListing, Jobs } from "../../interfaces/job-listing";
import JobListingCard from "../../components/job-card/job-card";
import rootStyles from "../@styles/job.module.css";
import pageStyles from "./page.module.css"

export const GetAllJobs = async () => {
    const res : Jobs = await graphQLClient.request(GET_ALL_JOBS,{},{cache: "no-cache" } )
    const jobs : JobListing[]  = res.jobs
    return jobs;
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