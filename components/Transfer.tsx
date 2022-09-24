import { TransferInfo } from './TransferInfo'
import styles from './Transfer.module.css'
import Image from 'next/image'
import { useState } from 'react'
type Props = {
  id: string
  index: number
  from: string
  to: string
  tokenId: number
  image: string
  personality: string
  characteristics: string
  catOrDogPerson: string
  relationshipStatus: string
  idealVacation: string
  artisticVocation: string
  workStyle: string
}

export const Transfer = ({
  id,
  index,
  from,
  to,
  tokenId,
  image,
  personality,
  characteristics,
  catOrDogPerson,
  relationshipStatus,
  idealVacation,
  artisticVocation,
  workStyle,
}: Props) => {
  const [data, setData] = useState('')
  const handleClick = (image: string) => {
    setData(getIpfsGateway(image))
  }
  const getIpfsGateway = (imagePath: string) => {
    //ipfs://bafybeihg27p472hzuam5pmwufs6b3u2hqhsbmhugrlqxbdeqbc53sfy2am/1027.png
    //https://gateway.ipfs.io/ipfs/bafybeihg27p472hzuam5pmwufs6b3u2hqhsbmhugrlqxbdeqbc53sfy2am/1027.png
    //https://gateway.pinata.cloud/ipfs/bafybeihg27p472hzuam5pmwufs6b3u2hqhsbmhugrlqxbdeqbc53sfy2am/1027.png
    //https://cloudflare-ipfs.com/ipfs/bafybeihg27p472hzuam5pmwufs6b3u2hqhsbmhugrlqxbdeqbc53sfy2am/1027.png
    // return 'https://gateway.ipfs.io/ipfs/' + imagePath.substring(7)
    return 'https://cloudflare-ipfs.com/ipfs/' + imagePath.substring(7)
  }

  return (
    <div className={styles.card}>
      <h2>No</h2>
      <TransferInfo label="" value={index + 1} />
      <h1>ID</h1>
      <TransferInfo label="" value={id} isScroll />
      <h1>Image</h1>
      <TransferInfo label="image" value={image} isScroll />
      <button onClick={handleClick.bind(this, image)}>display</button>
      {data && <Image src={data} alt="NFT image" width={500} height={500} />}
      {/* <Image src={image} alt="NFT image" width={500} height={500} /> */}
      <h1>Transaction Info</h1>
      <TransferInfo label="from" value={from} isScroll />
      <TransferInfo label="to" value={to} isScroll />
      <TransferInfo label="tokenId" value={tokenId} />
      <h1>Attributes</h1>
      <TransferInfo label="personality" value={personality} />
      <TransferInfo label="characteristics" value={characteristics} />
      <TransferInfo label="catOrDogPerson" value={catOrDogPerson} />
      <TransferInfo label="relationshipStatus" value={relationshipStatus} />
      <TransferInfo label="idealVacation" value={idealVacation} />
      <TransferInfo label="artisticVocation" value={artisticVocation} />
      <TransferInfo label="workStyle" value={workStyle} />
    </div>
  )
}
