import { gql } from "graphql-request";

// Get all jobs
export const GET_ALL_JOBS = gql`
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
export const GET_JOB = gql`
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
export const CREATE_JOB = gql`
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
export const DELETE_JOB = gql`
mutation DeleteQuery($id: ID!) {
  deleteJobListing(id: $id) {
    deletedJobId
  }
}
`

// Update Job
export const UPDATE_JOB = gql`
mutation UpdateJob($id: ID!, $input: UpdateJobListingInput!) {
  updateJobListing(id: $id, input: $input) {
    title
    description
    company
    url
  }
}`