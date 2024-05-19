"use client"
import React from "react";
import styles from "./job-card.module.css";
import {JobListing } from "@/app/interfaces/job-listing";
import Link from "next/link";
import { DeleteIcon } from "./delete-button";

interface ChildProps {
    job : JobListing
}

const JobListingCard: React.FC<ChildProps> = (ChildProps) => {
    const job : JobListing = ChildProps.job;
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.logoWrapper}>
                    <img className={styles.logo} src="https://img.freepik.com/premium-vector/company-icon-simple-element-illustration-company-concept-symbol-design-can-be-used-web-mobile_159242-7784.jpg?w=740"/>
                </div>

                <div className={styles.iconsWrapper}>
                    <DeleteIcon id={job._id}/>
                    <div
                     className={styles.iconContainer}>
                        <Link href = {`/job/update/${job._id}`}>
                            <img className={styles.icon}src="/edit.svg"/>
                        </Link>

                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <h2>{job.company}</h2>
                <h1>{job.title}</h1>
                <div className={styles.descWrapper}>
                    <div className={styles.descHeader}>Description</div>
                    <div className={styles.descBody}>
                        <div>{job.description}</div>
                    </div>
                </div>
            </div>
            <div className={styles.submitButtonWrapper}>
                <button className={styles.submitButton}>Apply now
                </button>
            </div>
        </div>
    )
}


export default JobListingCard

