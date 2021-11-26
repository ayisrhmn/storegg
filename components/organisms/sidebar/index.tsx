import Profile from './profile';
import SidebarMenu from './sidebar-menu';
import SidebarFooter from './sidebar-footer';

interface Props {
  active: 'overview' | 'transactions' | 'settings';
}

const Sidebar = (props: Props) => {
  const {active} = props;

  const listMenu = [
    {
      icon: 'ic-menu-overview',
      href: '/member',
      title: 'Overview',
      active: 'overview',
    },
    {
      icon: 'ic-menu-transactions',
      href: '/member/transactions',
      title: 'Transactions',
      active: 'transactions',
    },
    {
      icon: 'ic-menu-messages',
      href: '/member/messages',
      title: 'Messages',
      active: 'messages',
    },
    {
      icon: 'ic-menu-card',
      href: '/member/card',
      title: 'Card',
      active: 'card',
    },
    {
      icon: 'ic-menu-rewards',
      href: '/member/rewards',
      title: 'Rewards',
      active: 'rewards',
    },
    {
      icon: 'ic-menu-settings',
      href: '/member/edit-profile',
      title: 'Settings',
      active: 'settings',
    },
    {
      icon: 'ic-menu-logout',
      href: '/sign-in',
      title: 'Log Out',
      active: 'logout',
    },
  ];
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {listMenu.map((item: any, i: number) => (
            <SidebarMenu
              key={i}
              href={item.href}
              icon={item.icon}
              title={item.title}
              active={item.active === active}
            />
          ))}
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
};

export default Sidebar;
