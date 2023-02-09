import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(function getJobsOnMount(){
        getJobs();
    }, []);

    async function getJobs(name){
        let jobs = await JoblyApi.getJobs(name);
        setJobs(jobs);
    }

    return (
        <div className="JobList">
            <SearchForm searchFor={getJobs}/>
            <h2>Job List</h2>
            {jobs.length ? 
                (
                    <div className="JobList-list">
                        {jobs.map(j => (
                            <JobCard
                                key={j.id}
                                id={j.id}
                                title={j.title}
                                salary={j.salary}
                                equity={j.equity}
                                companyHandle={j.company_handle}
                            />
                        ))}
                    </div>
                ) : (<p>Results Not Found</p>)
            }
        </div>
    )
}

export default JobList;