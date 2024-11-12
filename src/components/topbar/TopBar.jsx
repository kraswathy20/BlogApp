import './topBar.css'

function TopBar() {
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
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className='topImg' src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="smiling-girl" />
                <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
         </div>
    </>
   
  )
}

export default TopBar