import { BsGlobeAmericas } from 'react-icons/bs';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container flex">
        <div className="nav-icon">
          <BsGlobeAmericas className="icons" />
        </div>
        <h2 className="nav-header">my travel journal</h2>
      </div>
    </nav>
  );
};
export default Nav;
