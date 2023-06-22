import StakingSweepers from '../StakingSweepers'
import StakingLockedValue from '../StakingLockedValue'
import './style.css'
import { useMediaQuery } from 'react-responsive'

 const StakingStats = ({stakedNfts, totalStaked, claimAmount, dailyRewardAmount, floorPrice, solPrice}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })


  return(
    <>
      <p className='rewardText'>STAKING STATS</p>
      <div className='stakingbar'>
        <div className='statkingstatsborderbox'>
          <p className='stakingstatsTitle'>GLOBAL STATS</p>
          <div className='stakingstatsNumArea'>
            <div>
              <p className='stakingstatsNum'><StakingSweepers text={totalStaked} /></p>
              <p className='stakingstasText'>SWEEPERS STAKED</p>
            </div>
            <div className='stakingstastextarea'>
              <p  className='stakingstatsNum'><StakingLockedValue text={(totalStaked * floorPrice * solPrice).toFixed(2)} /> $</p>
              <p className='stakingstasText'>{isMobile ? "MIN VALUE LOCKED" : "MINIMUM VALUE LOCKED"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='stakingbar'>
        <div className='statkingstatsborderbox'>
          <p className='stakingstatsTitle'>PERSONAL STATS</p>
          <div className='stakingstatsNumArea row'>
            <div className='col'>
              <p className='stakingstatsNum'><StakingSweepers text={stakedNfts} /></p>
              <p className='stakingstasText'>SWEEPERS STAKED</p>
            </div>
            <div className='col'>
              <p  className='stakingstatsNum'><StakingLockedValue text={claimAmount} /></p>
              <span className='symbol'>$ </span><span className='stakingstasText'>DGN GENERATED</span>
            </div>
            <div className='col'>
              <p  className='stakingstatsNum'><StakingSweepers text={5 * stakedNfts} /></p>
              <span className='symbol'>$ </span><span className='stakingstasText'>DGN i DAY</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StakingStats