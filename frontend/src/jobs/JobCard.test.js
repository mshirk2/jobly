import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import { MemoryRouter } from "react-router";

it('renders without crashing', () =>{
    render(
        <MemoryRouter>
            <JobCard />
        </MemoryRouter>
    )
});

it ("matches snapshot", () =>{
    const { asFragment } = render(
        <MemoryRouter>
            <JobCard 
                title="App Tester"
                salary="50000"
                equity="0.05"
            />
        </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
});