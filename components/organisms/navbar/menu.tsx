import cx from 'classnames';
import Link from 'next/link';

interface Props {
  title: string;
  active?: boolean;
  href: string;
}

const Menu = (props: Partial<Props>) => {
  const {title, active, href = '/'} = props;

  const classTitle = cx({
    'nav-link': true,
    active,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
};

export default Menu;
