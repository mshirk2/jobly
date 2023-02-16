import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it('renders without crashing', () =>{
    render(
        <MemoryRouter>
            <CompanyCard />
        </MemoryRouter>
    )
});

it ("matches snapshot", () =>{
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyCard 
                handle="test-handle"
                name="Test Company"
                description="This is a test"
            />
        </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
});