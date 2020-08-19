import { gql } from 'graphql-request';

export const GET_CUSTOMERS = gql`
  query getCustomers($startingAfter: String) {
    stripe {
      customers(input: { pagination: { startingAfter: $startingAfter } }) {
        data {
          created(format: "YYYY-MM")
        }
        pageInfo {
          totalRecords
          hasMore
          endCursor
          startCursor
        }
      }
    }
  }
`;
