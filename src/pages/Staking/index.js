import { useState, useCallback, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import useWalletNfts from '../../hooks/use-wallet-nfts';
import useNftStake from '../../hooks/use-nft-stake';
import useFloorPrice from '../../hooks/use-floor-price';
import Modal from 'react-bootstrap/Modal';
import { Toaster } from 'react-hot-toast';
import axios from 'axios'

import * as anchor from "@project-serum/anchor";
import { PublicKey, Keypair, Transaction } from "@solana/web3.js";
import { STAKE_CONTRACT_IDL } from '../../consts/contract';
import { NEXT_PUBLIC_STAKE_CONTRACT_ID, NEXT_PUBLIC_SOLANA_RPC_HOST, NEXT_PUBLIC_STAKE_POOL_ID } from '../../consts/env';
// import { sendAllTransaction, getTokenWallet, createAssociatedTokenAccountInstruction } from '../../hooks/use-nft-stake'
import { useAnchorWallet } from "@solana/wallet-adapter-react";
// import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

import NftList from '../../components/NftList';
import RewardProgress from '../../components/RewardProgress';
import StakingStats from '../../components/StakingStats';

import './style.css'

const confirmOption = {
  commitment : 'finalized',
  preflightCommitment : 'finalized',
  skipPreflight : false
}

const Staking = () => {
  const wallet = useWallet()
  const [walletAddress, setWalletAddress] = useState("")
  const [extraReward, setExtraReward] = useState(0)
  const [extraRewardStatus, setExtraRewardStatus] = useState(false)
  // const anchorWallet = useAnchorWallet()

  useEffect(() => {
    (async () => {
    if (wallet.publicKey) {
      setWalletAddress(wallet.publicKey.toString());
      var res = await axios.get('https://gateway.pinata.cloud/ipfs/QmUUaaruYNEqFWXMVTeyfmKRx4KckDRxJuVgdeEEyYeikK')
      var amount = res.data
      amount = amount.substring(1, amount.length - 1)
      var amountsOwed = JSON.parse(amount)
      amountsOwed.map(async (val) => {
        if(val[0].toLowerCase() === wallet.publicKey.toString().toLowerCase()) {
          if(!await getRewardStatus(wallet)) {
            setExtraReward(val[1])
            // handleShow()
          }
        }
      })
    }
  })();
  }, [wallet])
  const [totalStaked, setTotalStaked] = useState(0)
  const { isLoadingWalletNfts, walletNfts } = useWalletNfts();
  const { isLoading, stakedNfts, stakeNft, unstakeNft, claimAmount, claimRewards, dailyRewardAmount } = useNftStake()
  const { floorPrice, solPrice } = useFloorPrice()

  const getRewardStatus = useCallback( async (wallett) => {
    const connection = new anchor.web3.Connection(NEXT_PUBLIC_SOLANA_RPC_HOST);
    const programId = new PublicKey(NEXT_PUBLIC_STAKE_CONTRACT_ID);
    let provider = new anchor.Provider(connection, confirmOption);
    const program = new anchor.Program(STAKE_CONTRACT_IDL, programId, provider);
    let resp = await connection.getProgramAccounts(programId, {
      dataSlice: {
        length: 0,
        offset: 0
      },
      filters: [
        {
          dataSize: 8 + 32 + 1
        },
        {
          memcmp: {
            offset: 9,
            bytes: wallett.publicKey.toString()
          }
        }
      ]
    })
    if(resp.length > 0) {
      // let fetchData = await program.account.rewardCheck.fetch(resp[0].pubkey);
      setExtraRewardStatus(true)
      return true
    }
    setExtraRewardStatus(false)
    return false
  }, []);

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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleStake = async (nft) => {
    console.log('stake');
    await stakeNft([nft])
  }

  const handleUnstake = async (nft) => {
    console.log('unstake');
    await unstakeNft([nft])
  }

  const handleStakeAll = async () => {
    console.log('stake all');
    await stakeNft(walletNfts)
  }

  const handleUnstakeAll = async () => {
    console.log('unstake all');
    await unstakeNft(stakedNfts)
  }

  const handleClaim = async () => {
    console.log('claim');
    await claimRewards(extraReward)
  }

  return (
    <div className='stakingpage'>
      <div className='stakingpageTitleSection'>
        <span className='stakingpageTitle'>Staking </span>
        <span className='stakingpageTitle2'>
          Platform Rewards 
        </span>
        <span className='comingsoon'>
          <span style={{color: "#DF31BB"}}>(</span>
          <span style={{color: "#3CFEF5"}}>Coming Soon</span>
          <span style={{color: "#DF31BB"}}>)</span>
        </span>
      </div>
      <div className='row stakingpageFirstSection'>
        <div className='col-xl-8'>
          <NftList stacked handleUnstake={handleUnstake} isLoadingWalletNfts={isLoadingWalletNfts} stakedNfts={stakedNfts} isLoading={isLoading} />
        </div>
        <div className='col-xl-4'>
          <RewardProgress />
        </div>
      </div>
      <div className='row stakingpageFirstSection'>
        <div className='col-xl-8'>
          <NftList isLoadingWalletNfts={isLoadingWalletNfts} handleStake={handleStake} walletNfts={walletNfts} isLoading={isLoading} />
        </div>
        <div className='col-xl-4'>
          <StakingStats stakedNfts={stakedNfts.length} totalStaked={totalStaked} claimAmount={((claimAmount ? parseFloat(claimAmount) : parseFloat('0.00')) + extraReward).toFixed(2)} dailyRewardAmount={dailyRewardAmount} floorPrice={floorPrice} solPrice={solPrice} />
        </div>
      </div>
      <div className='buttongroup'>
        <button className='stakeallbtn' onClick={handleStakeAll}>Stake All</button>
        {/*<button className='unstakeallbtn' onClick={handleUnstakeAll}>Unstake All</button>*/}
        {/* <button className='claimbtn' onClick={handleClaim}>Claim</button> */}
        <button className='claimbtn' onClick={handleShow}>Claim</button>
        {/* {
          !extraRewardStatus && <button className='claimbtn' onClick={claim}>Claim Own</button>
        } */}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Claim is disabled for now.
        </Modal.Body>
        <Modal.Footer className="centered">
          <button className='dashboardBtn' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
      <Toaster />
    </div>
  )
}

export default Staking;