import Sidebar from '../sidebars/Sidebar'
import './singlePost.css'

function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <div >
            <img src="https://images.pexels.com/photos/289563/pexels-photo-289563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="" 
             className="singlePostImg"/>
            </div>
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i class="singlePostIcon fa-duotone fa-solid fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-duotone fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author : <b>achu</b>
                </span>
                <span className="singlePostdate">
                    1hr ago
                </span>
            </div>
                <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure fugiat culpa quos amet delectus quis cumque eaque autem! Facilis suscipit consequuntur odit inventore explicabo eos accusamus incidunt labore quisquam.
                Tempore ipsam, similique vitae delectus nisi voluptas facere alias quaerat cupiditate minima nobis id tempora itaque odit ea iure impedit dolorem deserunt maxime quidem harum et magnam tenetur dicta? Placeat!
                Consectetur, esse, perspiciatis et nam porro beatae voluptates error nobis accusantium iste illo perferendis temporibus tempora id consequuntur rerum magni doloribus minus assumenda dolores delectus, odio iusto pariatur hic? Placeat?
                Veniam dolor ea nulla. Sapiente commodi alias veniam nostrum, voluptates placeat facilis voluptas quasi quaerat debitis iusto? Commodi aperiam quo est. Fuga perferendis voluptate aperiam nesciunt, corrupti molestias voluptatibus obcaecati!
                Dolore vero necessitatibus explicabo. Aperiam officia minima ullam quaerat, pariatur atque impedit doloribus eos delectus sapiente ipsum nisi voluptates, ea, vitae maxime. Laudantium, neque cupiditate nostrum aliquam a ipsam ratione.</p>
            
        </div>
    </div>
  )
}

export default SinglePost