import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(function getJobsOnMount(){
        getJobs();
    }, []);

    async function getJobs(title){
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    return (
        <div className="JobList">
            <SearchForm searchFor={getJobs}/>
            <h2>Job List</h2>
            {jobs ? 
                (
                    <div className="JobList-list">
                        {jobs.map(j => (
                            <JobCard
                                key={j.id}
                                id={j.id}
                                title={j.title}
                                salary={j.salary}
                                equity={j.equity}
                                companyName={j.companyName}
                            />
                        ))}
                    </div>
                ) : (<p>Results Not Found</p>)
            }
        </div>
    )
}

export default JobList;