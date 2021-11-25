import Link from 'next/link';

interface Props {
  href?: string;
  menu: string;
}

const MenuFooter = (props: Props) => {
  const {href = '/', menu} = props;

  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">
          {menu}
        </a>
      </Link>
    </li>
  );
};

export default MenuFooter;
