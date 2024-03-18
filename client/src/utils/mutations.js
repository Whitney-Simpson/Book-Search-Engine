import { gql } from '@apollo/client';



export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`


export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
     
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