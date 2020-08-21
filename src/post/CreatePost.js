import React, {useState} from 'react';

const CreatePost = ({ user, posts, dispatch }) => {
  const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')

  const handleTitle = (evt) => {
    setTitle(evt.target.value)
  }

  const handleMessage = (evt) => {
    setContent(evt.target.value)
  }

  const handleCreate = () => {
    dispatch({ type: 'CREATE_POST', title, content, author: user })
  }

  return(
    <form onSubmit={e => {e.preventDefault(); handleCreate()}}>
      <div>Author: <b>{user}</b></div>
      <div>
         <label htmlFor='create-title'>Title:</label>
         <input type='text' name='create-title' id='create-title' value={title} onChange={handleTitle} />
         <textarea value={content} onChange={handleMessage} />
         <input type='submit' value='Create' />
      </div>
    </form>
  )
}

export default CreatePost;