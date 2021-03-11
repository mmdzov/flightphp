import NavList from "../Navbar/NavList";
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='title'>Flight</div>
      <div className='content text-muted'>
        یک چهارچوب کوچک قابل توسعه برای PHP
      </div>
      <NavList />
    </header>
  );
};

export default Header;
