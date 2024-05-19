"use client"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleCreate = () => {
    router.push("/job/create");
  };
  const handleFetchJobs = () => {
    router.push("/job/list")
  }
  return (
    <main>
      <div className={styles.buttonWrapper}>
        <button onClick={handleCreate} className={styles.button}>Create Job</button>
        <button onClick={handleFetchJobs} className={styles.button}>Get All Jobs</button>
      </div>
    </main>
  );
}
