import JobForm from "@/app/components/job-form/job-form";
import {JobFormData } from "@/app/interfaces/job-form-data";
import graphQLClient from "@/graphQL/client";
import {GET_JOB, UPDATE_JOB } from "@/graphQL/queries";
import rootStyles from "../../@styles/job.module.css";
import { Job, JobId, JobListing} from "@/app/interfaces/job-listing";
import { revalidateTag } from "next/cache";

interface params{
    params : JobId
}

export const GetCurrentJob = async (id : string) => {
    const variables : JobId = {
        "id" : id
    }
    return fetch(graphQLClient , {
        next : {
            tags : ['job']
        },
        method :"POST",
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            query : GET_JOB,
            variables : variables
        })
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        return res.data.job;
    })
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
        "use server"
        const variables = {
            "id" : jobID,
            "input" : {
                "company" : jobData.company,
                "title" : jobData.title,
                "description" : jobData.description,
                "url" : jobData.url
            }
        }
        return fetch(graphQLClient , {
            method :"POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                query : UPDATE_JOB,
                variables : variables
            })
        }).then((res)=>{
            revalidateTag('job-list')
            revalidateTag('job')
            return res.json()
        })
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