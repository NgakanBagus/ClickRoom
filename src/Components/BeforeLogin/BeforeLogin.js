import './BeforeLogin.css';
import logo from '../Assets/Click Room 1.png'

const BeforeLogin = () => {
  return (
    <div className="banner">
      <img src={logo} width="300" alt="Logo" />
      <div className="content">
        <h1>SELAMAT DATANG</h1>
        <p>Di Aplikasi Peminjaman Ruangan Terbaik Dan Tercepat</p>
        <div>
          <button type="button">
            <span></span>Click Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeforeLogin;
