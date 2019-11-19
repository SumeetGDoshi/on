import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/images/On Business.png';
import ResponsiveMenu from 'react-responsive-navbar';
import './Header.styles.css';

class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="nav">
                    <div className='hidden'>
                    <img src={Logo} className="hidden-image" width={"auto"} height={'297px'}/>
                    </div>
                <nav className="nav-bar">
                <ul>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="whoarewe" 
                            spy={true} 
                            smooth={true} 
                            offset={100} 
                            duration={500}>
                        <span>who</span> <span>are we?</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="whatwedo" 
                            spy={true} 
                            smooth={true} 
                            offset={76} 
                            duration={500}>
                        <span>what</span><span> we do?</span>
                        </Link>
                       
                    </li>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="howdowedoit" 
                            spy={true} 
                            smooth={true} 
                            offset={-20} 
                            duration={500}>
                        <span>how do we</span> <span>do it?</span>
                        </Link>
                     
                    </li>
                    <li style={{ marginTop: -12 }}><a href="#">
                        <img src={Logo} width={'auto'} height={'150px'}/>
                       
                    </a></li>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="whatisatsocial" 
                            spy={true} 
                            smooth={true} 
                            offset={10} 
                            duration={500}>
                        <span>what is</span><span> at social?</span>
                        </Link>
                        
                    </li>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="otherservices" 
                            spy={true} 
                            smooth={true} 
                            offset={30} 
                            duration={500}>
                        <span>our</span> <span>services</span>
                        </Link>
                        
                    </li>
                    <li>
                        <Link 
                            activeClass="active" 
                            to="contactus" 
                            spy={true} 
                            smooth={true} 
                            offset={30} 
                            duration={500}>
                        <span>contact</span> <span>us</span>
                        </Link>
                        
                    </li>
                </ul>

{/* <ResponsiveMenu
        menuOpenButton={<div>
            <img src="Logo" alt="Logo" width/>
        </div>}
        menuCloseButton={<div />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        }
      /> */}
            </nav>
                </div>
            </div>
        )
    }
}

export default Header;