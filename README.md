# Jobly
A full-stack web application, simulating a job board. This app includes a functional database, queryable API, well-designed component hierarchy, routing, authentication, a user profile, in progress applications, and more.

## Getting Started
Create jobly database:

    createdb jobly
    psql jobly < jobly-schema.sql
    psql jobly < jobly-seed.sql

Start server:

    node server.js

To run the tests:

    jest -i
