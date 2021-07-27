  import React from 'react';
import './Cards.css';
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          <div className="cardg">
            
            <div className='ucard'>
              <img src={user.avatar} alt='' className='imgUser' />
              <div className='userCard-body'>
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>{user.email}</p>
                <button className='btn-grad'>Follow</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}