import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

    // let posts = [
    //     { id: 1, message: 'Hi, how are you?', likesCount: 4 },
    //     { id: 2, message: "It's my first post", likesCount: 23 },
    // ];

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();
    let addPost = () => {

        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
                {/* <Post message={posts[0].message} likesCount={posts[0].likesCount} />
                <Post message={posts[1].message} likesCount={posts[1].likesCount} /> */}

            </div>
        </div>
    );
}
export default MyPosts;