import { UserStatus } from "../UserStatus/UserStatus";
import "./ProfileDescription.css";

export const ProfileDescription = ({ profileData, updateStatus, contacts, isMyOwn }) => {
  return <div className="profile-description pd">
    <h2 className="pd__name">{profileData.fullName}</h2>

    <div className="pd__status">Status: {isMyOwn ? <UserStatus status={profileData.status} updateStatus={updateStatus} /> : (profileData.status || '-')}</div>

    <div className="pd__about">About me: {profileData.aboutMe || '-'}</div>

    {
      profileData.lookingForAJob
        ? <div className="pd__job">
          <span className="job__is-looking is-looking">Looking for a job: </span>
          <span className="job__descrition">{profileData.lookingForAJobDescription}</span>
        </div>
        : <div className="pd__job">
          <span className="job__is-looking">Not looking for a job</span>
        </div>
    }

    {contacts.length > 0 && <ul> {contacts} </ul>}
  </div>;
};