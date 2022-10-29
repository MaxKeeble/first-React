import { Field } from "react-final-form";
import styles from './FormControls.module.css';


export const Input = (props) => {
  return (
    <Field {...props}>
      {({ input, meta, ...restProps }) => {
        let errorCondition = meta.invalid && meta.submitFailed;
        return (
          <div className={styles.container}>
            <input {...restProps} className={styles.input + (restProps.className ? ' ' + restProps.className : '')} {...input} />
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
            <textarea {...restProps} className={styles.textarea + (restProps.className ? ' ' + restProps.className : '')} {...input} />
            {errorCondition && <div className={styles.error}>{meta.error}</div>}
          </div>
        )
      }}
    </Field>
  );
};

