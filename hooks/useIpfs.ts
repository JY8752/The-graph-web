import * as IPFS from 'ipfs-core'

export const useIpfs = () => {
  const loadImage = async (hash: string) => {
    const node = await IPFS.create()
    const stream = node.get(hash)

    const decoder = new TextDecoder()
    let data = ''

    for await (const chunk of stream) {
      data += decoder.decode(chunk, { stream: true })
    }

    console.log(data)
    return data
  }

  return {
    loadImage,
  }
}
