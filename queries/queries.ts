import { gql } from '@apollo/client'

export const GET_TRANSFERS = gql`
  query GetTransfers($first: Int!) {
    transfers(first: $first) {
      id
      from
      to
      tokenId
      image
      personality
      characteristics
      catOrDogPerson
      relationshipStatus
      idealVacation
      artisticVocation
      workStyle
    }
  }
`
