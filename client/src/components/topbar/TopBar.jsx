import './topBar.css'
import { Link } from 'react-router-dom'

function TopBar() {
  const user = false;
  return (
    <>
         <div className='top'>
            <div className="topLeft">
                <i class="topIcon fa-brands fa-square-facebook"></i>
                <i class="topIcon fa-brands fa-square-pinterest"></i>
                <i class="topIcon fa-brands fa-square-x-twitter"></i>
                <i class="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList"> 
                    <li className="topListItem"><Link  className='link'  to="/" >HOME</Link></li>
                    <li className="topListItem"><Link  className='link'  to='/'>ABOUT</Link></li>
                    <li className="topListItem"><Link  className='link' to='/'>CONTACT</Link> </li>
                    <li className="topListItem"><Link  className='link' to='/write'>WRITE</Link> </li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul> 
            </div>
            <div className="topRight">
              {user ? (
                <img className='topImg' src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="smiling-girl" />

              ) :
              (
                <ul className='topList'>
                <li className="topListItem"><Link  className='link'  to="/login" >LOGIN</Link></li>
                <li className="topListItem"><Link  className='link'  to="/register" >REGISTER</Link></li>
                </ul>
              )}
                <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
         </div>
    </>
   
  )
}

export default TopBar