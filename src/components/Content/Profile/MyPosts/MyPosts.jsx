import './MyPosts.css';
import { TextFormContainer } from '../../TextForm/TextFormContainer';
import { PostsListContainer } from './PostsList/PostsList';

export function MyPosts({ data, store }) {
  let currentText = store.getState().profilePage.newPostText;
  return (
    <div className='my-posts'>
      <h3 className='my-posts__heading'>My posts</h3>
      <TextFormContainer buttonText='Add post' currentText={currentText} />
      <PostsListContainer />
    </div>
  )
};