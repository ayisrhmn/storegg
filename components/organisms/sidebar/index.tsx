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
      icon: '/icon/ic-menu-overview.svg',
      href: '/member',
      title: 'Overview',
      active: 'overview',
    },
    {
      icon: '/icon/ic-menu-transactions.svg',
      href: '/member/transactions',
      title: 'Transactions',
      active: 'transactions',
    },
    {
      icon: '/icon/ic-menu-messages.svg',
      href: '/member/messages',
      title: 'Messages',
      active: 'messages',
    },
    {
      icon: '/icon/ic-menu-card.svg',
      href: '/member/card',
      title: 'Card',
      active: 'card',
    },
    {
      icon: '/icon/ic-menu-rewards.svg',
      href: '/member/rewards',
      title: 'Rewards',
      active: 'rewards',
    },
    {
      icon: '/icon/ic-menu-settings.svg',
      href: '/member/edit-profile',
      title: 'Settings',
      active: 'settings',
    },
    {
      icon: '/icon/ic-menu-logout.svg',
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
