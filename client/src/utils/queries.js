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
}`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            savedBooks
            savedMovies
        }
    }
`;