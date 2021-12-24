import React from 'react';
import Image from 'next/image';
import Input from '../../components/atoms/input';
import Sidebar from '../../components/organisms/sidebar';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { updateProfile } from '../../services/member';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const EditProfile = () => {
  const [dataUser, setDataUser] = React.useState({}) as any;
  const [displayImage, setDisplayImage] = React.useState('') as any;

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

      setDataUser(user);
    }
  };

  const URL_IMG = process.env.NEXT_PUBLIC_IMG;

  const onSubmit = async () => {
    const data = new FormData();

    data.append('image', dataUser.avatar);
    data.append('name', dataUser.name);
    data.append('phoneNumber', dataUser.phoneNumber);

    await updateProfile(data).then((res) => {
      if (res.error) {
        toast.error(res.message);
      } else {
        toast.success('Update profile successfull, please Sign In again');
        Cookies.remove('token');
        router.push('/sign-in');
      }
    });
  }

  return (
    <section className="edit-profile overflow-auto">
      <Sidebar active={'settings'} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {displayImage ? (
                      <Image
                        src={displayImage}
                        width={90}
                        height={90}
                        className={'avatar-img'}
                      />
                    ) : (
                      <Image
                        src={
                          dataUser !== ''
                            ? `${URL_IMG}/${dataUser.avatar}`
                            : '/icon/upload.svg'
                        }
                        width={90}
                        height={90}
                        className={'avatar-img'}
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
                      setDataUser({
                        ...dataUser,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label={'Full Name'}
                  type={'text'}
                  name={'name'}
                  placeholder={'Enter your name'}
                  value={dataUser.name}
                  onChange={(val) =>
                    setDataUser({
                      ...dataUser,
                      name: val.target.value,
                    })
                  }
                />
              </div>
              <div className="pt-30">
                <Input
                  label={'Email Address'}
                  type={'email'}
                  name={'email'}
                  placeholder={'Enter your email address'}
                  readOnly={true}
                  value={dataUser.email}
                />
              </div>
              <div className="pt-30">
                <Input
                  label={'Phone'}
                  type={'tel'}
                  name={'phone'}
                  placeholder={'Enter your phone number'}
                  value={
                    dataUser.phoneNumber === 'nophonenumber'
                      ? ''
                      : dataUser.phoneNumber
                  }
                  onChange={(val) =>
                    setDataUser({
                      ...dataUser,
                      phoneNumber: val.target.value,
                    })
                  }
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}>
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default EditProfile;
