import { NavLink, Outlet } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  height: '100%',
};

const sidebarStyle = {
  width: '200px',
  background: '#f8f9fa',
  padding: '1rem',
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
};

const linkStyle = {
  display: 'block',
  padding: '10px',
  color: '#333',
  textDecoration: 'none',
  marginBottom: '10px',
  borderRadius: '5px',
};

const activeLinkStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  fontWeight: 'bold',
};

const mainContentStyle = {
  flex: 1,
  padding: '1rem',
  backgroundColor: '#ffffff',
};

const Dashboard = () => {
  return (
    <div style={containerStyle}>
      <nav style={sidebarStyle}>
        <NavLink
          to="overview"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
        >
          Overview
        </NavLink>
        <NavLink
          to="profile"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
        >
          Profile
        </NavLink>
        <NavLink
          to="settings"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
        >
          Settings
        </NavLink>
      </nav>

      <main style={mainContentStyle}>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
