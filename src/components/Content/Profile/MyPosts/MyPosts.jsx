import './MyPosts.css';
import { PostsListContainer } from './PostsList/PostsList';
import { TextFormForPostsContainer } from '../../TextForm/TextForm';

export function MyPosts() {
  return (
    <div className='my-posts'>
      <h3 className='my-posts__heading'>My posts</h3>
      <TextFormForPostsContainer />
      <PostsListContainer />
    </div>
  )
};