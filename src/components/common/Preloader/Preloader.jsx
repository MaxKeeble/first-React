import preloaderImg from '../../../assets/images/preloader.gif';
import './Preloader.css';

export let Preloader = function (props) {
  return (
    <img className='preloader' src={preloaderImg} alt="preloader" />
  )
};