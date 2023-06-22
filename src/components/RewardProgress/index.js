// import ProgressBar from 'react-bootstrap/ProgressBar';
import { useMediaQuery } from 'react-responsive'

import lit_circle from '../../assets/img/lit_circle.png'
import gray_circle from '../../assets/img/gray_circle.png'
import './style.css'

 const RewardProgress = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 498px)' })

  var date = new Date()
  var month = date.getMonth() + 1
  return(
    <>
      <p className='rewardText'>REWARD PROGRESS</p>
      <div className='rewardProgressBar'>
        <div className='rewardProgressBarBorderBox'>
              {/* <div className='row'>
                <div className="stepper-wrapper">
                  <div className="stepper-itemm completed">
                    <div className='col montharea'>
                      <img 
                        src={lit_circle}
                        alt="no circle"
                        className='lit_circle'
                      />
                      <div className='monthtextarea'>
                        <p className='rewardprogresstext'>September</p>
                        <p className='rewardprogressnumber'>5 $DGN</p>
                      </div>
                    </div>
                  </div>
                  <div className="stepper-itemm">
                    <div className='col montharea'>
                      <img 
                        src={lit_circle}
                        alt="no circle"
                        className='lit_circle'
                      />
                      <div className='monthtextarea'>
                        <p className='rewardprogresstext'>September</p>
                        <p className='rewardprogressnumber'>5 $DGN</p>
                      </div>
                    </div>
                  </div>
                  <div className="stepper-itemm">
                    <div className='col montharea'>
                      <img 
                        src={lit_circle}
                        alt="no circle"
                        className='lit_circle'
                      />
                      <div className='monthtextarea'>
                        <p className='rewardprogresstext'>September</p>
                        <p className='rewardprogressnumber'>5 $DGN</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
          <div className='row stepper-wrapper-before'>
            <div className='col-4 montharea row'>
              <img
                src={ month > 9 ? lit_circle : gray_circle}
                alt="no circle"
                className={month > 9 ? 'lit_circle' : 'gray_circle'}
              />
              <div className='monthtextarea row'>
                <div className='col-3 hiddenleftLine'></div>
                <div className='col-6'>
                  <p className='rewardprogresstext'>{isMobile ? "Oct 22" : "October 22" }</p>
                  <p className='rewardprogressnumber'>5 $DGN / NFT</p>
                </div>
                <div className='col-3 rightLine'>
                  <div className='progressLine'></div>
                </div>
              </div>
            </div>
            <div className='col-4 montharea row'>
              <img 
                src={month > 10 ? lit_circle : gray_circle}
                alt="no circle"
                className={month > 10 ? 'lit_circle' : 'gray_circle'}
              />
              <div className='monthtextarea row'>
                <div className='col-3 leftLine'></div>
                <div className='col-6'>
                  <p className='rewardprogresstext'>{isMobile ? "Nov 22" : "November 22" }</p>
                  <p className='rewardprogressnumber'>6 $DGN / NFT</p>
                </div>
                <div className='col-3 rightLine'></div>
              </div>
            </div>
            <div className='col-4 montharea row'>
              <img 
                src={month > 11 ? lit_circle : gray_circle}
                alt="no circle"
                className={month > 11 ? 'lit_circle' : 'gray_circle'}
              />
              <div className='monthtextarea row'>
                <div className='col-3 leftLine'></div>
                <div className='col-6'>
                  <p className='rewardprogresstext'>{isMobile ? "Dec 22" : "December 22" }</p>
                  <p className='rewardprogressnumber'>7 $DGN / NFT</p>
                </div>
                <div className='col-3 hiddenrightLine'></div>
              </div>
              <div className='downLine'></div>
            </div>
            {/* <ProgressBar className='desktopProgresss' now={30} /> */}
          </div>

          <div className='row'>
            <div className='col montharea row'>
              <img 
                src={month > 12 ? lit_circle : gray_circle}
                alt="no circle"
                className={month > 12 ? 'lit_circle' : 'gray_circle'}
              />
              <div className='monthtextarea row'>
                <div className='col-3 firstleftLine'></div>
                <div className='col-6'>
                  <p className='rewardprogresstext'>{isMobile ? "Mar 23" : "March 23" }</p>
                  <p className='rewardprogressnumber'>10 $DGN / NFT</p>
                </div>
                <div className='col-3 rightLine'></div>
              </div>
            </div>
            <div className='col montharea row'>
              <img 
                src={month > 12 ? lit_circle : gray_circle}
                alt="no circle"
                className='gray_circle'
              />
              <div className='monthtextarea row'>
                <div className='col-3 leftLine'></div>
                <div className='col-6'>
                  <p className='rewardprogresstext'>{isMobile ? "Feb 23" : "Feburary 23" }</p>
                  <p className='rewardprogressnumber'>9 $DGN / NFT</p>
                </div>
                <div className='col-3 rightLine'></div>
              </div>
            </div>
            <div className='col montharea row'>
              <img 
                src={gray_circle}
                alt="no circle"
                className='gray_circle'
              />
              <div className='monthtextarea row'>
                <div className='col-3 leftLine'></div>
                <div className='col-6'>
                  <p className='rewardprogresstext'>{isMobile ? "Jan 23" : "January 23" }</p>
                  <p className='rewardprogressnumber'>8 $DGN / NFT</p>
                </div>
                <div className='col-3 hiddenrightLine'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RewardProgress