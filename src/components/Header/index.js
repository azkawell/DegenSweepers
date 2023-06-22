import { Link } from 'react-router-dom'
import { 
  WalletModalButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui"
import '@solana/wallet-adapter-react-ui/styles.css'

import logo from '../../assets/img/logo.png'

import './style.css'

 const Header = ({linkStatus, setLinkStatus}) => {
  return(
    <div className='header'>
      <div className='headerContainer row'>
        <div className='col-sm-4 firstHeaderTab'>
          {/* <Link to="/" onClick={() => setLinkStatus(true)}> */}
          <a href="https://www.degensweepers.io/">
            <img 
              alt="no brand"
              src={logo}
              className="d-inline-block align-top brandImg"
            /> {' '}
            <span className="brandText">DEGEN SWEEPERS</span>
          </a> 
          {/* </Link> */}
        </div>
        <div className='col-sm-4 secondHeaderTab'>
          {/* <Link to="/" onClick={() => setLinkStatus(true)}><span className={linkStatus ? 'secondHeaderText linkBorder' : 'secondHeaderText'}>Home </span></Link> */}
          <a href='https://www.degensweepers.io/'><span className={linkStatus ? 'secondHeaderText' : 'secondHeaderText'}>Home </span></a>
          <Link to="/" onClick={() => setLinkStatus(true)}><span className={linkStatus ? 'secondHeaderTextt linkBorder' : 'secondHeaderTextt'}> Staking</span></Link>
          <Link to="/staking" onClick={() => setLinkStatus(false)}><span className={linkStatus ? 'secondHeaderTextt' : 'secondHeaderTextt linkBorder'}>Dashboard</span></Link>
        </div>
        <div className='col-sm-4 thirdHeaderTab'>
          {/* <button className='walletBtn'>Connect Wallet</button> */}
          <WalletMultiButton className='walletBtn'></WalletMultiButton>
        </div>
      </div>
    </div>
  )
}

export default Header