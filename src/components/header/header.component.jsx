import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// a special syntax in React for importing SVG.
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
// 輸入要用的組件
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP 
            </Link> 
            <Link className='option' to='/contact'>
                CONTACT 
            </Link> 
                {
                    currentUser ?
                    (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) 
                    :
                    (<Link className='option' to='/signin'>SIGN IN</Link>)
                }

            <CartIcon />
    
        </div>

        <CartDropdown />

    </div>
)

// function to access to stat: root reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
    // user comes from root-reducer; currentUser comes from user.reducer
})

export default connect(mapStateToProps)(Header);