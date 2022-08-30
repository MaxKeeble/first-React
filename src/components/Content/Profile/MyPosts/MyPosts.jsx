import './MyPosts.css';
import { PostForm } from './PostForm/PostForm';
import { PostsList } from './PostsList/PostsList';

export function MyPosts({ data, addPost }) {
  return (
    <div className='my-posts'>
      <h3 className='my-posts__heading'>My posts</h3>
      <PostForm addPost={addPost} />
      <PostsList data={data} />
    </div>
  )
};