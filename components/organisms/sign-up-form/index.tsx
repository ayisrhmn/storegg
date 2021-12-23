import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {toast} from 'react-toastify';

const SignUpForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const router = useRouter();

  const onSubmit = () => {
    const userForm = {
      name,
      email,
      password,
    };

    const checkEmailFormat = new RegExp(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g,
    ).test(email);

    if (name.length === 0) {
      toast.error('Field Full Name must be filled!');
    } else if (email.length === 0) {
      toast.error('Field Email must be filled!');
    } else if (!checkEmailFormat) {
      toast.error('Bad email format!');
    } else if (password.length === 0) {
      toast.error('Field Password must be filled!');
    } else {
      localStorage.setItem('user-form', JSON.stringify(userForm));
      router.push('/sign-up-photo');
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <label
          htmlFor="name"
          className="form-label text-lg fw-medium color-palette-1 mb-10">
          Full Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
          value={name}
          onChange={(val) => setName(val.target.value)}
          required
        />
      </div>
      <div className="pt-30">
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
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}>
          Continue
        </button>
        {/* <button type="submit" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                        role="button">Continue</button> */}
        <Link href={'/sign-in'}>
          <a
            className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
            role="button">
            Sign In
          </a>
        </Link>
      </div>
    </>
  );
};

export default SignUpForm;
