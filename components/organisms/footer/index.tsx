import Image from 'next/image';
import Link from 'next/link';
import MenuFooter from './menu-footer';

const Footer = () => {
  const companyMenu = [
    {
      href: '/',
      menu: 'About Us',
    },
    {
      href: '/',
      menu: 'Press Release',
    },
    {
      href: '/',
      menu: 'Terms of Use',
    },
    {
      href: '/',
      menu: 'Privacy & Policy',
    },
  ];

  const supportMenu = [
    {
      href: '/',
      menu: 'Refund Policy',
    },
    {
      href: '/',
      menu: 'Unlock Rewards',
    },
    {
      href: '/',
      menu: 'Live Chatting',
    },
  ];

  const contactMenu = [
    {
      href: 'mailto:hi@store.gg',
      menu: 'hi@store.gg',
    },
    {
      href: 'mailto:team@store.gg',
      menu: 'team@store.gg',
    },
    {
      href: 'http://maps.google.com/?q=Pasific%2012,%20Jakarta%20Selatan',
      menu: 'Pasific 12, Jakarta Selatan',
    },
    {
      href: 'tel:02111229090',
      menu: '021 - 1122 - 9090',
    },
  ];

  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href={'/'}>
                <a className="mb-30">
                  <Image
                    src={'/icon/logo.svg'}
                    width={60}
                    height={60}
                    alt={'logo'}
                  />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    {companyMenu.map((item: any, i: number) => (
                      <MenuFooter key={i} menu={item.menu} />
                    ))}
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    {supportMenu.map((item: any, i: number) => (
                      <MenuFooter key={i} menu={item.menu} />
                    ))}
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    {contactMenu.map((item: any, i: number) => (
                      <MenuFooter key={i} href={item.href} menu={item.menu} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
