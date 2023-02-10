import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from './api';

function JobDetail(){
    const [job, setJob] = useState(null);
    const {id} = useParams();

    useEffect(function getJobOnMount(){
        getJob();
    }, [id]);

    async function getJob(){
        let job = await JoblyApi.getJob(id);
        setJob(job);
    }

    return (
        <div className="JobDetail">
            {job ? (
                <>
                <h4>{job.title}</h4>
                <p>{job.company.name}</p>
                <p>Salary: ${job.salary}</p>
                <p>Equity: {job.equity}</p>
                </>
            ) : null}
        </div>
    );
}

export default JobDetail;