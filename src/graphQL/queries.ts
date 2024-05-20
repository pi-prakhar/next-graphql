import { gql } from "graphql-request";

// Get all jobs
export const GET_ALL_JOBS = `
query GetAllJobs{ 
    jobs{ 
        _id 
        title 
        description 
        company 
        url 
    } 
}
`

// Get job by id
export const GET_JOB =`
query GetJob($id: ID!) {
  job(id: $id) {
    _id
    title
    description
    url
    company
  }
}`

// Create Job
export const CREATE_JOB = `
mutation CreateJobListing($input: CreateJobListingInput!) {
  createJobListing(input: $input) {
    _id
    title
    description
    company
    url
  }
}`

// Delete Job
export const DELETE_JOB = `
mutation DeleteQuery($id: ID!) {
  deleteJobListing(id: $id) {
    deletedJobId
  }
}
`

// Update Job
export const UPDATE_JOB = `
mutation UpdateJob($id: ID!, $input: UpdateJobListingInput!) {
  updateJobListing(id: $id, input: $input) {
    title
    description
    company
    url
  }
}`