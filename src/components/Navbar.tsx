import React, { useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar: React.FC = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const renderMenu = (isDropDownMenu = false) => (
    <ul
      className={
        isDropDownMenu
          ? 'flex list-none flex-col items-start justify-end gap-4'
          : 'hidden list-none flex-row gap-10 sm:flex'
      }
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : 'text-secondary'
          } cursor-pointer ${
            isDropDownMenu
              ? 'font-poppins text-[16px]'
              : 'text-[18px] font-medium'
          }  hover:text-white`}
          onClick={() => {
            setToggle(!toggle);
            setActive(link.title);
          }}
        >
          <a href={`/${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="cursor-pointer text-[18px] font-bold text-white">
            Satyam Shubham | India
          </p>
        </Link>
        {renderMenu()}

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            {renderMenu(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
