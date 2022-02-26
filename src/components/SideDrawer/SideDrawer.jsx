import { useNavigate } from 'react-router-dom';
import './SideDrawer.css';
export default function SideDrawer() {
  const navigate = useNavigate();
  const drawerItemList = [
    { icon: 'menu_book', text: "Today's Post", path: '/' },
    { icon: 'menu_book', text: 'Your Diaries', path: '/your-diaries' },
    {
      icon: 'equalizer',
      text: 'Analysis',
      path: '/analysis',
    },
    {
      icon: 'search',
      text: 'Appointments',
      path: '/appointments',
    },
  ];

  const handleNavigation = (e, path) => {
    navigate(path);
  };
  return (
    <nav className="drawer">
      <ul className="drawer__list">
        {drawerItemList.map((item, index) => (
          <a
            key={index}
            className="drawer__item"
            onFocus={(e) => {
              console.log('focused');
            }}
            onClick={(e) => {
              handleNavigation(e, item.path);
            }}
          >
            <span className="material-icons drawer__item--icon">
              {item.icon}
            </span>
            <p className="drawer__item--text">{item.text}</p>
          </a>
        ))}
      </ul>
    </nav>
  );
}
