// import React from 'react';
import './UserDescription.css';

export function UserDescription() {
  return (
    <div className="user-description ud">
      <h2 className="ud__name">Andrey Shchetnikov</h2>
      <div className="ud__date-of-birdth">Date of Birth: <span>2 January 2002</span></div>
      <div className="ud__city">City: <span>New York</span></div>
      <div className="ud__education">Education: <span>BSU '22</span></div>
      <div className="ud__web-site">Web site: <a className="ud__web-site_link" href="www.123jjdd.ht">www.123jjdd.ht</a></div>
    </div>
  )
};