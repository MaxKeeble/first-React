import classNames from "classnames";
import { Field } from "react-final-form";
import styles from './FormControls.module.css';

export const Input = (props) => {
  return (
    <Field {...props}>
      {({ input, meta, ...restProps }) => {
        let errorCondition = meta.invalid && meta.submitFailed;
        return (
          <div className={styles.container}>
            <input {...restProps} className={classNames(styles.input, restProps.className)} {...input} />
            {errorCondition && <div className={styles.error}>{meta.error}</div>}
          </div>
        )
      }}
    </Field>
  );
};

export const Textarea = (props) => {
  return (
    <Field {...props}>
      {({ input, meta, ...restProps }) => {
        let errorCondition = meta.invalid && meta.submitFailed;
        return (
          <div className={styles.container}>
            <textarea {...restProps} className={classNames(styles.textarea, restProps.className)} {...input} />
            {errorCondition && <div className={styles.error}>{meta.error}</div>}
          </div>
        )
      }}
    </Field>
  );
};

