import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/19260549/pexels-photo-19260549/free-photo-of-autumn-leaves-on-the-tree-in-the-sun-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />

      <div className="postInfo">
        <div className="PostCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <div className="postDate">1 hr ago.</div>
        <p className="postDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod porro voluptatum inventore animi iure provident dolores eum debitis, nisi, fuga accusantium earum mollitia doloremque iste quas perspiciatis in deleniti enim!
          Aliquam, ex adipisci ad non quod consequuntur a tempora commodi eum. Eaque, et. Minima excepturi omnis repellat unde dignissimos corporis ad sint, tenetur blanditiis soluta quisquam iure, laborum sunt officiis?
          Quidem obcaecati iste eaque quisquam minima similique provident perferendis illo ab deserunt? Recusandae, atque excepturi dignissimos, non porro praesentium illo illum vel magnam molestiae neque! Deleniti temporibus quibusdam rerum odit.
          Minima, porro reiciendis reprehenderit laudantium illo officia ipsum, aut ex soluta nulla, incidunt nisi provident fugiat qui fugit sequi doloribus? Consectetur necessitatibus recusandae sed ducimus sint laudantium quod culpa exercitationem.
          Neque, exercitationem. Sit doloremque amet quia perferendis pariatur impedit optio enim, temporibus repudiandae! Unde, repellendus qui at quas inventore, deserunt iste nulla natus odit assumenda quo harum dolorem fugiat placeat.
        </p>
      </div>
    </div>
  );
}

export default Post;
