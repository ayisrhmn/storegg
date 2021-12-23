import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import {useRouter} from 'next/router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthMenu = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [user, setUser] = React.useState({}) as any;

  const router = useRouter();

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

      setIsLogin(true);
      setUser(user);
    }
  };

  const URL_IMAGE = process.env.NEXT_PUBLIC_IMG;

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/');
    setIsLogin(false);
  };

  return (
    <>
      {!isLogin ? (
        <li className="nav-item my-auto">
          <Link href={'/sign-in'}>
            <a
              className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
              role="button">
              Sign In
            </a>
          </Link>
        </li>
      ) : (
        <li className="nav-item my-auto dropdown d-flex">
          <div className="vertical-line d-lg-block d-none"></div>
          <div>
            <a
              className="dropdown-toggle ms-lg-40"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <Image
                src={`${URL_IMAGE}/${user.avatar}`}
                width={40}
                height={40}
                className={'avatar-img'}
              />
            </a>

            <ul
              className="dropdown-menu border-0"
              aria-labelledby="dropdownMenuLink">
              <li>
                <Link href={'/member'}>
                  <a className="dropdown-item text-lg color-palette-2">
                    My Profile
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a className="dropdown-item text-lg color-palette-2">
                    Wallet
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/member/edit-profile'}>
                  <a className="dropdown-item text-lg color-palette-2">
                    Account Settings
                  </a>
                </Link>
              </li>
              <li>
                <a
                  onClick={() => {
                    onLogout();
                    toast.success(`You're Logged out!`);
                  }}
                  className="dropdown-item text-lg color-palette-2 logout">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </li>
      )}
    </>
  );
};

export default AuthMenu;
