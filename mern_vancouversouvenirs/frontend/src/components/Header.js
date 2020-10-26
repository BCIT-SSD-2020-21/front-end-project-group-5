import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Nav} from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const cart_val = cartItems.reduce((acc, item) => acc + item.qty, 0)

  return (
    <header id="header">
      <div className="site-header-top-wrapper topbar-style--default sh--light">
        <div className="row no-gutters bg-white">
          <div className="col d-flex justify-content-md-center align-items-md-center w-100" style={{paddingBottom: '3px', paddingTop: '3px'}}>
            <ul className="d-flex justify-content-end topnav nav-acct">
              {userInfo ? (
                <Nav>
                  <li className="topnav-li dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><a className="kl-login-box topnav-item" href="/login" style={{fontSize: '13px', display: 'initial'}}><i className="fa fa-user glyphicon glyphicon-log-in visible-xs xs-icon" style={{fontSize: '17px', color: 'rgb(0,0,0)', paddingRight: '5px', paddingLeft: '5px'}} />
                  <span style={{color: 'rgb(0,0,0)'}}>{userInfo.name}</span></a></li>
                  <div className="dropdown-menu">
                    <a onClick={logoutHandler} className="dropdown-item" href="#">Logout</a><a
                    className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a>
                  </div>
                </Nav>
              ) : (
                  <li className="topnav-li"><a className="kl-login-box topnav-item" href="/login" style={{fontSize: '13px'}}><i className="fa fa-user glyphicon glyphicon-log-in visible-xs xs-icon" style={{fontSize: '17px', color: 'rgb(0,0,0)', paddingRight: '5px', paddingLeft: '5px'}} /><span style={{color: 'rgb(0,0,0)'}}>Login</span></a></li>
              )}

              <li className="topnav-li"><a className="kl-login-box topnav-item" href="/" style={{color: 'rgb(0,0,0)'}}><span style={{fontSize: '13px'}}>My Wishlist</span></a></li>
            </ul>

          </div>
        </div>
      </div>
      <div className="site-header-wrapper">
        <div className="kl-top-header site-header-main-wrapper clearfix header-no-bottom sh--light">
          <div className="fxb-col fxb-basis-auto">
            <div className="row no-gutters fxb-row site-header-row site-header-main">
              <div className="col" id="navbar">
                <div className="mx-auto header-mid fxb site-header-col-left header-mid-wrapper">
                  <div>
                    <div className="site-header-wrapper"><a className="site-logo-anch" href="/"><img src="/images/gift-logo.png" alt="DreamLand logo" /></a></div>
                  </div>
                  <div className="fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-right site-header-main-right">
                    <Route render={({history}) => <SearchBox history={history} />}/>

                    <ul className="sh-component topnav navLeft topnav--cart topnav-no-sc topnav-no-hdnav">
                      <li className="drop midnav-drop midnav-li"><a id="mycartbtn" className="midnav kl-cart-button topnav-item kl-cart--" href="/cart" title="View your shopping cart">
                        <i className="fa fa-shopping-cart glyphicon glyphicon-shopping-cart kl-cart-icon flipX-icon xs-icon" data-count={cart_val} style={{fontSize: '44px'}} /><span style={{fontSize: '24px'}} />
                      </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-light navbar-expand-md" style={{background: 'rgb(2,4,64)'}}>
        <div className="container-fluid"><button data-toggle="collapse" className="navbar-toggler ml-auto" data-target="#navcol-1" id="menuToggle"><span className="sr-only" /><span className="navbar-toggler-icon" /><span /></button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <div className="d-flex justify-content-center align-items-xl-center" role="navigation" style={{width: '100%', height: '100%'}}>
              <ul className="nav navbar-nav list-unstyled d-block align-items-center nav-bottom">
                <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/products">Products</a></li>
                <li className="nav-item"><a className="nav-link" href="#0">(<em>placeholder</em>)</a></li>
                <li className="nav-item"><a className="nav-link" href="#0">(<em>placeholder</em>)</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

)
}

export default Header
