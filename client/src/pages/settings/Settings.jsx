import './settings.css'
import Sidebar from  '../../components/sidebars/Sidebar'
import profile from '../../assets/aboutmeProfile.jpg'
export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsUpadeteTitle">Update your Account</span>
        <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img className='settingsImg' src={profile} alt="no image found" />
            <label htmlFor="fileInput">
          <i className=" settingsPPIcon fa-regular fa-circle-user" ></i>
          </label>
          <input type="file" id='fileInput' style={{display:'none'}}/>
          </div>
         
          <label htmlFor="username">Username</label>
          <input type="text" name="" id="username" placeholder='aswathy' />
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="" placeholder='aswathy@gmail.com' />
          <label htmlFor="pswd">Password</label>
          <input type="password"  />
          <button className="settingsSubmit">Submit</button>
         </form>

      
      </div>
      
      <Sidebar/>
      </div>
  )
}

