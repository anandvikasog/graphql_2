import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
mutation addProject($name: String!, $description: String!, $status: $String!, $clientId: $String!) {
    addProject (name: $name, description: $description, clientId: $clientId, status: $status) {
      status
      message
      data {
        name
        description
        status
        id
        client {
          name
        }
      }
    }
  }
`;
