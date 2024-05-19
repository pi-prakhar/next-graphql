"use client"
import JobForm from "@/app/components/job-form/job-form";
import {JobFormData } from "@/app/interfaces/job-form-data";
import graphQLClient from "@/graphQL/client";
import { CREATE_JOB } from "@/graphQL/queries";
import rootStyles from "../@styles/job.module.css";
import { JobListing } from "@/app/interfaces/job-listing";

const CreateJob = () => {
    const newJob :JobFormData = {
        title : "",
        company : "",
        url : "",
        description :""

    }
    const handleCreate = async (jobData : JobFormData) : Promise<JobListing> => {
        const variables = {
            "input" : {
                "company" : jobData.company,
                "title" : jobData.title,
                "description" : jobData.description,
                "url" : jobData.url
            }
        }

        return  await graphQLClient.request(CREATE_JOB, variables)      
    }
    return (
        <div>
            <div className={rootStyles.header}>Create Job</div>
            <div className={rootStyles.body}>
                <JobForm form={newJob} buttonName="Create Job" handleSubmit={handleCreate}/>
            </div>
        </div>
    );

}

export default CreateJob;