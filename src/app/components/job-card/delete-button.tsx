'use client';
import graphQLClient from '@/graphQL/client';
import styles from '../job-card/job-card.module.css'
import { DELETE_JOB } from '@/graphQL/queries';
import { JobId } from '@/app/interfaces/job-listing';
import { revalidateTag } from 'next/cache';
import { useRouter } from 'next/navigation';
import HandleDelete from './delete-action';

interface ChildProps {
    id: string;
}

export const DeleteIcon: React.FC<ChildProps> = (ChildProps) =>{
    const variables : JobId = {
        id : ChildProps.id
    }
    const router = useRouter();
    const handleDelete = async () =>{
        try {
            await HandleDelete(variables)
            router.refresh();
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div className={styles.iconContainer} onClick={handleDelete}>
            <img className={styles.icon}src="/delete.svg"/>
        </div>
    )
}