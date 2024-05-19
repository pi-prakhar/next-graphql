"use client"
import { JobFormData } from "@/app/interfaces/job-form-data";
import { useState } from "react";
import styles from "./job-form.module.css";
import { JobListing } from "@/app/interfaces/job-listing";
import { useRouter } from "next/navigation";

interface props {
    form : JobFormData
    buttonName :string
    handleSubmit : (jobData : JobFormData) => Promise<JobListing>;
}
const JobForm = (props : props) => {
    const router = useRouter();
    const jobData : JobFormData = props.form;
    const [company,setCompany] = useState<string>(jobData.company);
    const [description,setDescription] = useState<string>(jobData.description);
    const [title,setTitle] = useState<string>(jobData.title);
    const [url,setUrl] = useState<string>(jobData.url);

    const handleCompany = (event : any) => {
        const { name, value } = event.target;
        setCompany(value);
    };

    const handleTitle = (event : any) => {
        const { name, value } = event.target;
        setTitle(value);
    };

    const handleDescription = (event : any) =>{
        const {name, value} = event.target;
        setDescription(value);
    }
    const handleUrl = (event : any) =>{
        const {name, value} = event.target;
        setUrl(value);
    }
    const handleSubmit = async() => {
        const jobForm : JobFormData = {
            company : company,
            title : title,
            description : description,
            url : url
        }
        await props.handleSubmit(jobForm).then((res)=>{
            console.log(res)
            window.alert("Success")

        }).catch((err) =>{
            window.alert(`${err}`)
        })
    }
    return (
        <div className={styles.formWrapper}>
            <form  onSubmit={handleSubmit}>
                <input
                    className={styles.formInput}
                    type="text"
                    name="Company"
                    placeholder="Company Name"
                    value={company}
                    onChange={handleCompany}
                />
                <input
                    className={styles.formInput}
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    value={title}
                    onChange={handleTitle}
                />
                <textarea
                   className={styles.formInput}                    
                    name="description"
                    rows={4}
                    placeholder="Job Description"
                    value={description}
                    onChange={handleDescription}
                />
                <input
                    className={styles.formInput}
                    type="url"
                    name="url"
                    placeholder="Apply URL"
                    value={url}
                    onChange={handleUrl}
                />
                <button type="submit" className={styles.formSubmitButton}>{props.buttonName}</button>
            </form>
        </div>
    )
}

export default JobForm;