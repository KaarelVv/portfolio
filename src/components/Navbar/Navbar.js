import '../../assets/styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Logo</h3>
      <div className="nav-buttons">
        <a href="#intro">Intro</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;