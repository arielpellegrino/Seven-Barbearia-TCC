import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header class="container-fluid d-flex justify-content-end">
      <div class="d-flex align-items-center">
        <div class="text-right mr-3">
          <span class="d-block m-0 p-0 text-white">admin</span>
          <small class="m-0 p-0">usuário admin</small>
        </div>
        <img src="https://icon-library.com/images/default-user-icon/default-user-icon-9.jpg" />
        <span class="mdi mdi-chevron-down"></span>
      </div>
    </header>
  );
};

export default Header;
