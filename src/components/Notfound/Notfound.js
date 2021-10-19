import React from 'react';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    const notfoundStyle = {
        color:'gray',
        display: 'inline-block',
        padding:'30px',
        border: '7px solid gray',
        borderRadius:'50%'
    }
    return (
      <div className="text-center py-5 my-5">
        <h2 style={notfoundStyle}>404</h2>
        <h4 className="text-secondary">Opps!</h4>
        <p className="text-secondary">
          The page you're looking for could not be found.
        </p>
        <NavLink exact to="/home" className="text-decoration-none fw-bold">
          Go home?
        </NavLink>
      </div>
    );
};

export default Notfound;