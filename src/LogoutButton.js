import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image } from 'react-bootstrap';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
    user
  } = useAuth0();

  return isAuthenticated && (
    <>
      <Button onClick={() => {
        logout({ returnTo: window.location.origin });
      }}>Log out</Button>
      <Image className="loggedInPic" src={user.picture} roundedCircle />
    </>
  );
}

export default LogoutButton;
