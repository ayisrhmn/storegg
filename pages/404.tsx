import Link from 'next/link';
import Image from 'next/image';

const Custom404 = () => {
  return (
    <section className="not-found mx-auto pt-145 pb-md-212 pb-100">
      <div className="container-fluid">
        <div className="text-center">
          <Image src={'/icon/404.svg'} width={483} height={300} />
        </div>
        <div className="pt-70 pb-md-50 pb-150">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
            Oops! Not Found
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Halaman yang anda kunjungi sudah
            <br className="d-sm-block d-none" />
            tidak tersedia pada sistem kami dan menghubungi
          </p>
        </div>
        <div className="button-group d-flex flex-column mx-auto">
          <Link href={'/'}>
            <a
              className="btn btn-homepage fw-medium text-lg text-white rounded-pill"
              role="button">
              Homepage
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Custom404;
