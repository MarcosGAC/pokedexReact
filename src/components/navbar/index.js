import "./navbar.css";

const Navbar = () => {
  const logo_img =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <button>
      <a href="https://pokeapi.co/">
        <img className="navbar-img" src={logo_img} alt="logo" />
        </a>
      </button>
    </nav>
  );
};
export default Navbar;
