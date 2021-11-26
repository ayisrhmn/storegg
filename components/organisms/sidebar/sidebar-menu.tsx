import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

interface Props {
  icon: string;
  href?: string;
  title: string;
  active?: boolean;
}

const SidebarMenu = (props: Partial<Props>) => {
  const {icon, href = '/member', title, active} = props;

  const classActive = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classActive}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
};

export default SidebarMenu;
