import './sidebar.css'
// import profilepic from '../assets/aboutmeProfile.jpg'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className='sidebarImg' src="https://images.pexels.com/photos/28923639/pexels-photo-28923639/free-photo-of-outdoor-portrait-of-a-redhead-woman-with-floral-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus at, nesciunt saepe perspiciatis quo reiciendis porro atque? </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Work</li>
          <li className='sidebarListItem'>Books</li>
          <li className='sidebarListItem'>Cinema</li>
          <li className='sidebarListItem'>Tech</li>
          <li className='sidebarListItem'>Style</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i class="sidebarIcon fa-brands fa-square-facebook"></i>
                <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i class="sidebarIcon fa-brands fa-square-x-twitter"></i>
                <i class="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>    
      </div>
    </div>
  )
}

export default Sidebar