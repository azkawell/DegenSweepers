import { rankData } from '../../consts/rankData'

import './style.css'

 const SliderElement = ({data, stacked, handleStake, handleUnstake }) => {
  const rankVal = rankData.filter(val => val.link === data.id)
  return(
    <div className='sliderElement'>
      <img 
        src={data.image}
        alt="no nft"
        className='sliderimage'
      />
      <div className='sliderDescArea'>
        <div className='sliderinfoRightDiv'>
          <p className='tokenIdText'>TOKEN ID</p>
          <p className='number'>{data.id}</p>
        </div>
        <div className='sliderinfoLeftDiv'>
          <p className='tokenIdText'>RANK</p>
          <p className='number'>{rankVal[0].rank}</p>
        </div>
        <div>
          {
            stacked ?
              <span className='unstakeBtn' onClick={() => handleUnstake(data)}>Unstake</span>
              :
              <span className='unstakeBtn' onClick={() => handleStake(data)}>Stake</span>
          }
        </div>
      </div>
    </div>
  )
}

export default SliderElement