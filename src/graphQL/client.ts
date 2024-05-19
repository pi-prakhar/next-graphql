import { GraphQLClient } from "graphql-request";

const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/query` as string;

const graphQLClient = new GraphQLClient(
    endpoint
)


export default graphQLClient;