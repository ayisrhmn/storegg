import Link from 'next/link';
import Image from 'next/image';
import AuthMenu from './auth-menu';
import Menu from './menu';
import ToggleMenu from './toggle-menu';

const Navbar = () => {
  const listMenu = [
    {
      title: 'Home',
      href: '/',
      active: true,
    },
    {
      title: 'Games',
      href: '/',
      active: false,
    },
    {
      title: 'Rewards',
      href: '/',
      active: false,
    },
    {
      title: 'Discover',
      href: '/',
      active: false,
    },
    {
      title: 'Global Rank',
      href: '/',
      active: false,
    },
  ];

  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link href={'/'}>
            <a className="navbar-brand">
              <Image src={'/icon/logo.svg'} width={60} height={60} />
            </a>
          </Link>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              {listMenu.map((item: any, i: number) => (
                <Menu key={i} title={item.title} active={item.active} />
              ))}
              <AuthMenu isLogin={false} />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
