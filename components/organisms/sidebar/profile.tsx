import React from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

const Profile = () => {
  const [user, setUser] = React.useState({}) as any;

  React.useEffect(() => {
    getData();

    return () => {};
  }, []);

  const getData = () => {
    const token = Cookies.get('token');

    if (token) {
      const jwtToken = atob(token);
      const payload: any = jwt_decode(jwtToken);
      const user = payload.player;

      setUser(user);
    }
  };

  const URL_IMAGE = process.env.NEXT_PUBLIC_IMG;

  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={`${URL_IMAGE}/${user.avatar}`}
        width={90}
        height={90}
        className="img-fluid mb-20 avatar-img"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
};

export default Profile;
