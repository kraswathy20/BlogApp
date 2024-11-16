import './write.css'

function Write() {
  return (
    <div className="write">
      <img src="https://images.pexels.com/photos/289563/pexels-photo-289563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      alt="" srcset=""  className='writeImg'/>
        <form action="" className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput"><i className='writeIcon fas fa-plus' ></i></label>
                <input type="file"   id="fileInput" style={{display: "none"}} />
                <input type="text" className='writeInput' placeholder='Title...' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...'
                className='writeInput writeText'
                type='text'></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write