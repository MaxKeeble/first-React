import { validators } from "../../../utils/validators/validators";
import { Input } from "../FormControls/FormControls";
import styles from "./Captcha.module.css";

export const Captcha = ({captchaUrl}) => {
  return <div className={styles.captcha}>
    <img className={styles.captcha__img} src={captchaUrl} alt="captcha" />
    <Input className={styles.captcha__input} name='captcha' type='text' validate={validators.required} />
  </div>
};