import './MyPosts.css';
import { MessageForm } from '../../MessageForm/MessageForm';
import { PostsList } from './PostsList/PostsList';

export function MyPosts({ data, dispatch }) {
  return (
    <div className='my-posts'>
      <h3 className='my-posts__heading'>My posts</h3>
      <MessageForm textareaText={data.newPostText} dispatch={dispatch} buttonText='Добавить пост'/>
      <PostsList data={data.posts} avatarImgSrc={data.avatarImgSrc}/>
    </div>
  )
};