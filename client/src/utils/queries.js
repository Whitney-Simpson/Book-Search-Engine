import { gql } from "@apollo/client";
export const QUERY_ME = gql`
{
    me{
        _id
        username
        savedBooks {
          title
          authors
          bookId
          image
          description
          link
        }
    }
}`