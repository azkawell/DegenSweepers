import { useEffect, useState } from 'react';
import axios from 'axios';
// import fetch from 'node-fetch'
// https://api-mainnet.magiceden.dev/v2/collections/degensweepers/stats
// https://api-mainnet.magiceden.io/rpc/getCollectionEscrowStats/degensweepers
// https://api.howrare.is/v0.1/collections

const useFloorPrice = () => {
  const [floorPrice, setFloorPrice] = useState(13.6)
  const [solPrice, setSolPrice] = useState(34)
  useEffect(() => {
    (async () => {
      // const solPriceResponse = await axios.get('http://45.13.132.90:3500/getSolPrice')
      const response = await axios.get('https://stakingbackend.degensweepers.io:8000/getData')

      console.log(response);
      if(response.data.length > 0) {
        setSolPrice(parseFloat(response.data[0]))
        setFloorPrice(parseInt(response.data[1])/Math.pow(10, 9))
      }
    })();
  }, [floorPrice, solPrice])

  return { floorPrice, solPrice };
}

export default useFloorPrice;