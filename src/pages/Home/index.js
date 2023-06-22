import { useEffect, useCallback, useState } from "react";
// import Modal from 'react-bootstrap/Modal';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import * as anchor from "@project-serum/anchor";
import { Keypair, PublicKey, Transaction } from "@solana/web3.js";
import { STAKE_CONTRACT_IDL } from '../../consts/contract';
import { NEXT_PUBLIC_STAKE_CONTRACT_ID, NEXT_PUBLIC_SOLANA_RPC_HOST, NEXT_PUBLIC_STAKE_POOL_ID } from '../../consts/env';

import useFloorPrice from "../../hooks/use-floor-price";

import check from '../../assets/img/check.png'
import percent from '../../assets/img/percent.png'
import dollar from '../../assets/img/dollar.png'

import StakedBox from '../../components/StakedBox';
import RewardsProgress from '../../components/RewardsProgress';
import TotalSweeperStaked from "../../components/TotalSweeperStaked";
import LockedValue from "../../components/LockedValue";
import './style.css'


const confirmOption = {
  commitment : 'finalized',
  preflightCommitment : 'finalized',
  skipPreflight : false
}

const Home = ({setLinkStatus}) => {

  const [totalStaked, setTotalStaked] = useState(0)

  const getPoolData = useCallback( async () => {
    const connection = new anchor.web3.Connection(NEXT_PUBLIC_SOLANA_RPC_HOST);
    const pool = new PublicKey(NEXT_PUBLIC_STAKE_POOL_ID);
    const programId = new PublicKey(NEXT_PUBLIC_STAKE_CONTRACT_ID);
    let provider = new anchor.Provider(connection, confirmOption);
    const program = new anchor.Program(STAKE_CONTRACT_IDL, programId, provider);
    let fetchData = await program.account.pool.fetch(pool);
    setTotalStaked(fetchData.total.words[0])
    return fetchData
  }, []);

  useEffect(() => {
      getPoolData();
  }, [getPoolData])

  const { floorPrice, solPrice } = useFloorPrice()

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const data = [
    {
      image: {check},
      imagePath: 'check',
      text: 'TOTAL SWEEPERS STAKED',
      number: <TotalSweeperStaked text={totalStaked} />
    },
    {
      image: {percent},
      imagePath: 'percent',
      text: '% OF SWEEPERS STAKED',
      number: <LockedValue text={(totalStaked / 1942 * 100).toFixed(2)} flag />
    },
    {
      image: {dollar},
      imagePath: 'dollar',
      text: isMobile ? "MIN VALUE LOCKED" : "MINIMUM VALUE LOCKED",
      number: <LockedValue text={(totalStaked * floorPrice * solPrice).toFixed(2)} flag2/>
    }
  ]
  return (
    <div className='homepage'>
      <div className='homepageTitleSection'>
        <span className='homepageTitle'>SWEEPERS STAKING</span>
      </div>
      <div className='row stakedboxarea'>
        {
          data.map((val, id) => 
            (<StakedBox property={val} key={id} />)
          )
        }
      </div>
      <div>
        <RewardsProgress />
      </div>
      <div>
        <Link to="/staking" onClick={() => setLinkStatus(false)}><button className='dashboardBtn'>Dashboard</button></Link>
      </div>
      <Toaster />
    </div>
  )
}

export default Home;