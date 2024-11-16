import './header.css'
import myimage from '../../assets/Roads.jpg'
function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className='headerImg' src={myimage} alt="no file found" />
    </div>
  )
}

export default Header