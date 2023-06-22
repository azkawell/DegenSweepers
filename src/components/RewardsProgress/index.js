import ProgressBar from 'react-bootstrap/ProgressBar';

import popup from '../../assets/img/popup.png'
import popupSmall from '../../assets/img/popupSmall.png'
import { useMediaQuery } from 'react-responsive'
import './style.css'

 const RewardsProgress = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  var date = new Date()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var now = ((month - 10) * 30 + day) / 150 * 100
  var nowForMobile = ((month - 10) * 30 + day) / 60 * 100
  return(
    <>
      <p className='rewardsText'>REWARDS PROGRESS</p>
      {
        isMobile ?
        <div className='row'>
          <div className='col-md-6 col-12'>
            <div className="stepper-wrapper-before row">
              <div className="stepper-item col-4">
                <img
                  src={isMobile ? popupSmall : popup}
                  alt="no popup"
                />
                <div className='stepper-item-img-area'>
                  <p className='stepper-item-text'>October 22</p>
                  <p className='stepper-item-value'>5 $DGN / NFT</p>
                </div>
                <div className={month > 9 ? 'first-item' : 'first-itemm'}>
                  <div className={month > 9 ? 'second-item' : 'second-itemm'}></div>
                </div>
              </div>
              <div className="stepper-item col-4">
                <img 
                  src={isMobile ? popupSmall : popup}
                  alt="no popup"
                />
                <div className='stepper-item-img-area'>
                  <p className='stepper-item-text'>November 22</p>
                  <p className='stepper-item-value'>6 $DGN / NFT</p>
                </div>
                <div className={month > 10 ? 'first-item' : 'first-itemm'}>
                  <div className={month > 10 ? 'second-item' : 'second-itemm'}></div>
                </div>
              </div>
              <div className="stepper-item col-4">
                <img 
                  src={isMobile ? popupSmall : popup}
                  alt="no popup"
                />
                <div className='stepper-item-img-area'>
                  <p className='stepper-item-text'>December 22</p>
                  <p className='stepper-item-value'>7 $DGN / NFT</p>
                </div>
                <div className={month > 11 ? 'first-item' : 'first-itemm'}>
                  <div className={month > 10 ? 'second-item' : 'second-itemm'}></div>
                </div>
              </div>
              <ProgressBar className='mobileProgress' now={nowForMobile} />
            </div>
          </div>

          <div className='col-md-6 col-12'>
            <div className="stepper-wrapper-before row">
              <div className="stepper-item col-sm-2 col-4">
                <img 
                  src={isMobile ? popupSmall : popup}
                  alt="no popup"
                />
                <div className='stepper-item-img-area'>
                  <p className='stepper-item-text'>January 23</p>
                  <p className='stepper-item-value'>8 $DGN / NFT</p>
                </div>
                <div className={month > 11 ? 'first-item' : 'first-itemm'}>
                  <div className={month > 11 ? 'second-item' : 'second-itemm'}></div>
                </div>
              </div>
              <div className="stepper-item col-sm-2 col-4">
                <img 
                  src={isMobile ? popupSmall : popup}
                  alt="no popup"
                />
                <div className='stepper-item-img-area'>
                  <p className='stepper-item-text'>Feburary 23</p>
                  <p className='stepper-item-value'>9 $DGN / NFT</p>
                </div>
                <div className='first-itemm'>
                  <div className='second-itemm'></div>
                </div>
              </div>
              <div className="stepper-item col-sm-2 col-4">
                <img 
                  src={isMobile ? popupSmall : popup}
                  alt="no popup"
                />
                <div className='stepper-item-img-area'>
                  <p className='stepper-item-text'>March 23</p>
                  <p className='stepper-item-value'>10 $DGN / NFT</p>
                </div>
                <div className='first-itemm'>
                  <div className='second-itemm'></div>
                </div>
              </div>
            <ProgressBar className='mobileProgress' now={0} />
            </div>
          </div>
        </div>
        :
        <>
          <div className="stepper-wrapper-before row">
            <div className="stepper-item col-sm-2 col-4">
              <img 
                src={isMobile ? popupSmall : popup}
                alt="no popup"
              />
              <div className='stepper-item-img-area'>
                <p className='stepper-item-text'>October 22</p>
                <p className='stepper-item-value'>5 $DGN / NFT</p>
              </div>
              <div className={month > 9 ? 'first-item' : 'first-itemm'}>
                  <div className={month > 9 ? 'second-item' : 'second-itemm'}></div>
              </div>
            </div>
            <div className="stepper-item col-sm-2 col-4">
              <img 
                src={isMobile ? popupSmall : popup}
                alt="no popup"
              />
              <div className='stepper-item-img-area'>
                <p className='stepper-item-text'>November 22</p>
                <p className='stepper-item-value'>6 $DGN / NFT</p>
              </div>
              <div className={month > 10 ? 'first-item' : 'first-itemm'}>
                  <div className={month > 10 ? 'second-item' : 'second-itemm'}></div>
              </div>
            </div>
            <div className="stepper-item col-sm-2 col-4">
              <img 
                src={isMobile ? popupSmall : popup}
                alt="no popup"
              />
              <div className='stepper-item-img-area'>
                <p className='stepper-item-text'>December 22</p>
                <p className='stepper-item-value'>7 $DGN / NFT</p>
              </div>
              <div className={month > 11 ? 'first-item' : 'first-itemm'}>
                  <div className={month > 11 ? 'second-item' : 'second-itemm'}></div>
              </div>
            </div>
            <div className="stepper-item col-sm-2 col-4">
              <img 
                src={isMobile ? popupSmall : popup}
                alt="no popup"
              />
              <div className='stepper-item-img-area'>
                <p className='stepper-item-text'>January 23</p>
                <p className='stepper-item-value'>8 $DGN / NFT</p>
              </div>
              <div className={month > 11 ? 'first-item' : 'first-itemm'}>
                  <div className={month > 11 ? 'second-item' : 'second-itemm'}></div>
              </div>
            </div>
            <div className="stepper-item col-sm-2 col-4">
              <img 
                src={isMobile ? popupSmall : popup}
                alt="no popup"
              />
              <div className='stepper-item-img-area'>
                <p className='stepper-item-text'>Feburary 23</p>
                <p className='stepper-item-value'>9 $DGN / NFT</p>
              </div>
              <div className='first-itemm'>
                <div className='second-itemm'></div>
              </div>
            </div>
            <div className="stepper-item col-sm-2 col-4">
              <img 
                src={isMobile ? popupSmall : popup}
                alt="no popup"
              />
              <div className='stepper-item-img-area'>
                <p className='stepper-item-text'>March 23</p>
                <p className='stepper-item-value'>10 $DGN / NFT</p>
              </div>
              <div className='first-itemm'>
                <div className='second-itemm'></div>
              </div>
            </div>
          <ProgressBar className='desktopProgress' now={now} />
          </div>
          {/* <div className="stepper-wrapper">
            <div className="stepper-item completed">
              <div className="step-counter-first">
                <div className='step-counter-circle-first'></div>
              </div>
              <div className="step-name"></div>
            </div>
            <div className="stepper-item completed">
              <div className="step-counter">
                <div className='step-counter-circle'></div>
              </div>
              <div className="step-name"></div>
            </div>
            <div className="stepper-item active">
              <div className="step-counter">
                <div className='step-counter-circle'></div>
              </div>
              <div className="step-name"></div>
            </div>
            <div className="stepper-item">
              <div className="step-counter">
                <div className='step-counter-circle'></div>
              </div>
              <div className="step-name"></div>
            </div>
            <div className="stepper-item">
              <div className="step-counter">
                <div className='step-counter-circle'></div>
              </div>
              <div className="step-name"></div>
            </div>
            <div className="stepper-item">
              <div className="step-counter">
                <div className='step-counter-circle'></div>
              </div>
              <div className="step-name">a</div>
            </div>
          </div>
          <ProgressBar now={60} /> */}
        </>
      }
    </>
  )
}

export default RewardsProgress