import React from 'react';
import Link from 'next/link';
import {toast} from 'react-toastify';
import {setSignIn} from '../../../services/auth';
import {useRouter} from 'next/router';
import Cookies from 'js-cookie';

const SignInForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };

    const checkEmailFormat = new RegExp(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g,
    ).test(email);

    if (email.length === 0) {
      toast.error('Field Email must be filled!');
    } else if (!checkEmailFormat) {
      toast.error('Bad email format!');
    } else if (password.length === 0) {
      toast.error('Field Password must be filled!');
    } else {
      await setSignIn(data).then((res) => {
        if (res.error) {
          toast.error(res.message);
        } else {
          toast.success('Sign In Successfull!');
          const {token} = res.data;
          const tokenBase64 = btoa(token);
          Cookies.set('token', tokenBase64, {
            expires: 1,
          });
          router.push('/');
        }
      });
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(val) => setEmail(val.target.value)}
          required
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10">
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(val) => setPassword(val.target.value)}
          required
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}>
          Continue to Sign In
        </button>
        <Link href={'/sign-up'}>
          <a
            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
            role="button">
            Sign Up
          </a>
        </Link>
      </div>
    </>
  );
};

export default SignInForm;
