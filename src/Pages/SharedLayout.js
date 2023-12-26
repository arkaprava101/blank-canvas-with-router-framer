import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
