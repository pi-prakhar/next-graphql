export interface JobListing {
    _id : string,
    description : string,
    company : string,
    url : string,
    title : string 
}

export interface JobId {
    id : string
}

export interface Jobs {
    jobs : JobListing[]
}

export interface Job {
    job : JobListing
}