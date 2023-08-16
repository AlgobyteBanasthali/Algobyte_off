import Reac, {useState} from 'react'
import './nav.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/algobyte.png'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#whatAlgoByte">What is AlgoByte?</a></p>
  <p><a href="#features">TakeAways</a></p>
  <p><a href="#blog">Library</a></p>
  {/* <p><a href="#team">Our Team</a></p> */}
  <p><a href="#contact">Contact Us</a></p>
  </>
)

const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='algobyte__nav'>
      <div className='algobyte__nav-links'>
        <div className="algobyte__nav-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="algobyte__nav-links_name">AlgoByte</div>
        <div className="algobyte__nav-links_container">
          <Menu />
        </div>
      </div>
      <div className="algobyte__nav-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="algobyte__nav-menu_container scale-up-center">
            <div className="algobyte__nav-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav