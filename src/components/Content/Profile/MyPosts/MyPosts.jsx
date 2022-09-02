import './MyPosts.css';
import { PostForm } from './PostForm/PostForm';
import { PostsList } from './PostsList/PostsList';

export function MyPosts({ data, addPost, updatePostText }) {
  return (
    <div className='my-posts'>
      <h3 className='my-posts__heading'>My posts</h3>
      <PostForm newPostText={data.newPostText} addPost={addPost} updatePostText={updatePostText} />
      <PostsList data={data.posts} />
    </div>
  )
};