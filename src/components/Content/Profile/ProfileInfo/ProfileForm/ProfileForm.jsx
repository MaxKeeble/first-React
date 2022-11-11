import { Field, Form } from "react-final-form";
import { UserStatus } from "../UserStatus/UserStatus";
import styles from "./ProfileForm.module.css";
import { validators } from "../../../../../utils/validators/validators";
import classNames from "classnames";

export const ProfileForm = ({ profileData, updateStatus, onSubmit, goBack }) => {
  const initialValues = profileData;
  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {
        ({ handleSubmit, ...rest }) => {
          console.log('rest: ', rest);
          return <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={classNames(styles.name, styles.line)}>Full name: <Field name='fullName' component='input' /></h2>

            <div className={styles.line}>Status: <UserStatus status={profileData.status} updateStatus={updateStatus} /></div>

            <div className={styles.line}>About me: <Field name='aboutMe'  >
              {
                ({ input, meta, ...restProps }) => {
                  console.log('meta, ...restProps: ', meta, restProps);
                  return <>
                    <input className={meta.invalid ? styles.invalid : ''} type="text" {...input} {...restProps} />
                    {meta.invalid && <div>{meta.submitError}</div>}
                  </>
                }
              }
            </Field></div>


            <div className={styles['pd__job']}>
              <div className={styles.line}>
                <span className="job__is-looking is-looking">Looking for a job: </span><Field name='lookingForAJob' component='input' type='checkbox' />
              </div>
              <div className={styles.line}>
                <span>About job: </span>
                <Field name='lookingForAJobDescription' validate={validators.required} placeholder='What kind of job...' >
                  {
                    ({ input, meta, ...restProps }) => {
                      return <input className={meta.invalid ? styles.invalid : ''} type="text" {...input} {...restProps} />
                    }
                  }
                </Field>
              </div>
            </div>

            <div>Contacts: </div>
            <ul className={styles.contacts}>
              {
                Object.keys(profileData.contacts).map(key => {
                  return <li className={styles.contacts__item} key={key}>
                    <span className="contacts-item__name">{key}: </span>
                    <Field type="text" name={`contacts.${key}`}>
                      {({ input, meta, ...rest }) => (
                        <>
                          <input type="text" {...input} {...rest} />
                          {meta.invalid && <div>Submit{meta.submitError}</div>}
                          {/* {meta.invalid && <div>Validation{meta.error}</div>} */}
                        </>
                      )}
                    </Field>
                  </li>
                })
              }
            </ul>

            <div className={styles["bottom-buttons"]}>
              <button onClick={event => { event.preventDefault(); goBack() }}>Back</button>
              <button>Save</button>
            </div>

          </form>
        }
      }
    </Form>
  );
};
