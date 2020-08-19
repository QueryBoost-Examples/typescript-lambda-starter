import { ScheduledHandler } from 'aws-lambda';
import { GraphQLClient } from 'graphql-request';
import { GET_CUSTOMERS } from './graphql/query';
import { GetCustomersQuery, GetCustomersQueryVariables } from './types/types';

export const eventHandler: ScheduledHandler = async (event) => {
  //Handler for triggering the Lambda from an AWS Cloudwatch event
  //event contains the time that Cloudwatch triggered the lambda. Can be used as an argument in queries.

  //Endpoint for QueryBoost. Replace with https://api.queryboost.com for your live data
  const endpoint = 'https://api.queryboost.com/mocks';

  //initialize the graphql client for making requests
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.MOCK_API_KEY!, //Replace with your API Key
    },
  });

  //send request and paginate through response
  let hasMore = true;
  let variables: GetCustomersQueryVariables = { startingAfter: '' };
  while (hasMore) {
    try {
      const data: GetCustomersQuery = await graphQLClient.request(GET_CUSTOMERS, variables);
      // do something with the data
      console.log(data.stripe.customers?.data);

      //handle pagination
      const pageInfo = data.stripe.customers?.pageInfo;

      variables = { startingAfter: pageInfo?.endCursor };
      hasMore = pageInfo?.hasMore ? pageInfo?.hasMore : false;
    } catch (error) {
      console.error(error);
    }
  }
};

//Generic Handler for  Lambda function
/* export const lambdaHandler: Handler = async (event, context) => {

} */
