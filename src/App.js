import React, { useReducer } from "react";
import UserBar from './user/UseBar';
import CreatePost from './post/CreatePost';
import "./styles.css";
import PostList from "./post/PostList";

const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

const userReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN':
    case 'REGISTER':
        return action.username
    case 'LOGOUT':
       return ''
    default: 
      throw new Error()
  }
}

const postsReducer = (state, action) => {
  switch (action.type) {
      case 'CREATE_POST':
          const newPost = { title: action.title, content: action.content, author: action.author }
          return [ newPost, ...state ]
      
      default:
          throw new Error()
  }
}

export default function App() {
  const [user, dispatchUser] = useReducer(userReducer,'')
  const [ posts, dispatchPosts ] = useReducer(postsReducer, defaultPosts)


  return (
    <div className="App" style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatchUser} />
      <br/>
      {user && <CreatePost user={user} posts={posts} dispatch={dispatchPosts}  />}
      <br/>
      <hr />
      <PostList posts={posts} />
    </div>
  );
}
