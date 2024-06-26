import JobForm from "@/app/components/job-form/job-form";
import {JobFormData } from "@/app/interfaces/job-form-data";
import graphQLClient from "@/graphQL/client";
import { CREATE_JOB } from "@/graphQL/queries";
import rootStyles from "../@styles/job.module.css";
import { JobListing } from "@/app/interfaces/job-listing";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const CreateJob = () => {
    const newJob :JobFormData = {
        title : "",
        company : "",
        url : "",
        description :""

    }
    const handleCreate = async (jobData : JobFormData) : Promise<JobListing> => {
        "use server"
        const variables = {
            "input" : {
                "company" : jobData.company,
                "title" : jobData.title,
                "description" : jobData.description,
                "url" : jobData.url
            }
        }
        const job : JobListing =  await fetch(graphQLClient , {
            method :"POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                query : CREATE_JOB,
                variables : variables
            })
        }).then((res)=>{
            revalidateTag('job-list')
            return res.json()
        }).then((res)=>{
            return res.data.createJobListing
        })

        return job;
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