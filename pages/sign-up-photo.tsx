import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {getCategory} from '../services/player';
import {setSignUp} from '../services/auth';
import {toast} from 'react-toastify';
import {useRouter} from 'next/router';

const SignUpPhoto = () => {
  const [localData, setLocalData] = React.useState({}) as any;
  const [dataCategory, setDataCategory] = React.useState([]) as any;
  const [favorite, setFavorite] = React.useState('');
  const [image, setImage] = React.useState('') as any;
  const [displayImage, setDisplayImage] = React.useState('');

  const router = useRouter();

  React.useEffect(() => {
    getData();

    return () => {};
  }, []);

  const getData = async () => {
    await getCategory().then((res) => {
      if (res.error) {
        toast.error(res.message);
      } else {
        setDataCategory(res.data);
        setFavorite(res.data[0]._id);
      }
    });

    const userForm: any = await localStorage.getItem('user-form');
    setLocalData(JSON.parse(userForm));
  };

  const onSubmit = async () => {
    const data = new FormData();

    data.append('image', image);
    data.append('email', localData.email);
    data.append('name', localData.name);
    data.append('username', localData.name);
    data.append('password', localData.password);
    data.append('phoneNumber', 'nophonenumber');
    data.append('favorite', favorite);

    await setSignUp(data).then((res) => {
      if (res.error) {
        toast.error(res.message);
      } else {
        toast.success('Sign Up Successfull!');
        router.push('/sign-up-success');
        localStorage.removeItem('user-form');
      }
    });
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    {displayImage !== '' ? (
                      <img src={displayImage} className={'img-upload'} />
                    ) : (
                      <Image
                        src={'/icon/upload.svg'}
                        width={120}
                        height={120}
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(val: any) => {
                      const img = val.target.files[0];

                      setDisplayImage(URL.createObjectURL(img));
                      setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localData.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localData.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(val) => setFavorite(val.target.value)}
                  required>
                  {dataCategory?.map((item: any, i: number) => (
                    <option key={i} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                type="button"
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                onClick={onSubmit}>
                Create My Account
              </button>
              {/* <button type="submit" className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                            role="button">Create My Account</button> */}
              <Link href={'/terms-conditions'}>
                <a
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  role="button">
                  Terms {'&'} Conditions
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpPhoto;
