import '../../assets/styles/components/navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Logo</h3>
      <div className="nav-buttons">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;