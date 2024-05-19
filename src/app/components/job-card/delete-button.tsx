'use client';
import graphQLClient from '@/graphQL/client';
import styles from '../job-card/job-card.module.css'
import { DELETE_JOB } from '@/graphQL/queries';
import { JobId } from '@/app/interfaces/job-listing';

interface ChildProps {
    id: string;
}

export const DeleteIcon: React.FC<ChildProps> = (ChildProps) =>{
    const variables : JobId = {
        id : ChildProps.id
    }
    const handleDelete = async () => {
        const res = await graphQLClient.request(DELETE_JOB,variables)
    }
    return (
        <div className={styles.iconContainer} onClick={handleDelete}>
            <img className={styles.icon}src="/delete.svg"/>
        </div>
    )
}