/*  Example Query for the stripe namespace
 returns the the date the customer was created and pageInfo
 created uses the format argument to convert the timestamp to a date in YYYY-MM format
 pageInfo returns data that can be used in pagination */
import { gql } from 'graphql-request';

export const GET_CUSTOMERS = gql`
  query getCustomers($startingAfter: String) {
    stripe {
      customers(input: { pagination: { startingAfter: $startingAfter } }) {
        data {
          created(format: " YYYY-MM")
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
