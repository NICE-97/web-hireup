import React from 'react'
import PostBlog from '../section/post/PostBlog'
import Main from '../section/post/Main'
import { useParams } from 'react-router-dom'

function Post() {
  const { id } = useParams();
  return (
    <>
        <PostBlog id={id}/>
        <Main/>
    </>
  )
}

export default Post
