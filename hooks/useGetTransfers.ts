import { useLazyQuery } from '@apollo/client'
import { useCallback, useState } from 'react'
import { GET_TRANSFERS } from '../queries/queries'
import {
  GetTransfersQuery,
  GetTransfersQueryVariables,
} from '../types/generated/graphql'

export const useGetTransfers = () => {
  const GET_COUNT = 10
  const [first, setFirst] = useState(GET_COUNT)

  const [loadTransfer, { loading, data, error, called }] = useLazyQuery<
    GetTransfersQuery,
    GetTransfersQueryVariables
  >(GET_TRANSFERS, {
    variables: { first: GET_COUNT },
    fetchPolicy: 'cache-and-network',
  })

  const handleNextPage = useCallback(async () => {
    const next = first + GET_COUNT
    setFirst(next)
    await loadTransfer({
      variables: { first },
      fetchPolicy: 'cache-and-network',
    })
  }, [first, loadTransfer])

  return {
    data,
    loading,
    error,
    called,
    handleNextPage,
  }
}
