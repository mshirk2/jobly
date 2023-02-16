import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";
import { Spinner } from "reactstrap";

function JobList() {
    const [jobs, setJobs] = useState(null);

    useEffect(function getJobsOnMount(){
        getJobs();
    }, []);

    async function getJobs(title){
        let jobs = await JoblyApi.getJobs(title);
        console.log("jobs=", jobs)
        setJobs(jobs);
    }

    if (!jobs) return <Spinner />

    return (
        <div className="JobList">
            <h2 className="display-4">Explore Jobs</h2>
            <SearchForm searchFor={getJobs}/>
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
                                companyName={j.companyName}
                                companyHandle={j.companyHandle}
                                logoUrl={j.logoUrl}
                            />
                        ))}
                    </div>
                ) : (<p>Results Not Found</p>)
            }
        </div>
    )
}

export default JobList;