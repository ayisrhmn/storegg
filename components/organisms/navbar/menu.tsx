import Link from 'next/link';
import cx from 'classnames';

interface Props {
  title: string;
  active?: boolean;
  href: string;
}

const Menu = (props: Partial<Props>) => {
  const {title, active, href = '/'} = props;

  const classActive = cx({
    'nav-link': true,
    active,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classActive} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
};

export default Menu;
