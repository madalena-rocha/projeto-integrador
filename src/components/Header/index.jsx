import './style.css';
import * as React from 'react'
import {BiSearch} from 'react-icons/bi'
import arrow from '../../assets/images/arrow-dropdown.svg'
import logo from '../../assets/images/logo-trail.svg'
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState('');
  const [visible,setVisible] = React.useState(false)

  const handleClick = () => {
    navigate('/sign-in');
  }

  const hundleChange = (e) => {
    setFilter(e.target.value);
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('users')
    navigate('/')
  }

  const HeaderAccess = () => {
    const token = localStorage.getItem('token')
    return token ? (<div  className="header__acess___profile">
      <div className="header__profile" ></div>
      <img onClick={() => setVisible(!visible)} className="header__setting" src={arrow} alt="Seta dropdown menu"/>
      {visible ? (<div className="header__menu">
        <p>Editar Perfil</p>
        <p onClick={handleLogout}>Sair</p>
      </div>) : ''}
    </div>) : <button className="header__access___btn" onClick={() => handleClick()}>Cadastro / Login</button>
  }

  return (
    <header className="header">
      
      <img className='header__logo___img' src={logo} alt="Logo do site" />

      <form action="" className="header__search">
        <input type="text" name="filter" value={filter} onChange={hundleChange}
        id="search" placeholder="Pesquisar"/>
        <button type="submit" className="search__btn">
          <BiSearch/>
        </button> 
      </form>
      <HeaderAccess />
    </header>
  );
}

export default Header;