"use server"

import { Job, JobId } from "@/app/interfaces/job-listing"
import graphQLClient from "@/graphQL/client"
import { DELETE_JOB } from "@/graphQL/queries"
import { revalidateTag } from "next/cache"

const HandleDelete = async (variables : JobId) => {
    return await fetch(graphQLClient , {
        method :"POST",
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            query : DELETE_JOB,
            variables : variables
        })
    }).then ((res)=>{
        revalidateTag('job-list')
    })

}

export default HandleDelete;