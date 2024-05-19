"use client"
import JobForm from "@/app/components/job-form/job-form";
import {JobFormData } from "@/app/interfaces/job-form-data";
import graphQLClient from "@/graphQL/client";
import {GET_JOB, UPDATE_JOB } from "@/graphQL/queries";
import rootStyles from "../../@styles/job.module.css";
import { Job, JobId, JobListing} from "@/app/interfaces/job-listing";

interface params{
    params : JobId
}

export const GetCurrentJob = async (id : string) => {
    const variables : JobId = {
        "id" : id
    }
    const res : Job = await graphQLClient.request(GET_JOB,variables,{Cache: "no-store"})
    return res.job;
}
const UpdateJob = async (params : params) => {
    const jobID : string = params.params.id;
    const currentJob : JobListing = await GetCurrentJob(jobID);

    const currentJobData :JobFormData = {
        title : currentJob.title,
        company : currentJob.company,
        url : currentJob.url,
        description : currentJob.description
    }

    const handleUpdate = async (jobData : JobFormData) : Promise<JobListing>=> {
        const variables = {
            "id" : jobID,
            "input" : {
                "company" : jobData.company,
                "title" : jobData.title,
                "description" : jobData.description,
                "url" : jobData.url
            }
        }
        return await graphQLClient.request(UPDATE_JOB, variables)  
    }
    return (
        <div>
            <div className={rootStyles.header}>Edit Job</div>
            <div className={rootStyles.body}>
                <JobForm form={currentJobData} buttonName="Update Job" handleSubmit={handleUpdate}/>
            </div>
        </div>
    );

}

export default UpdateJob;