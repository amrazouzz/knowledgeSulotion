import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';



export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const {t, i18n } = useTranslation()
  const [clicked, setClicked] = useState(false)


    const handleLanguageChange = (e) => {
        // handle language change here
        setClicked(!clicked)
        const currentLanguage = i18n.language;
        const targetLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(targetLanguage);
      };
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (

<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black ">
  <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-normal"
  >
    <Link to="/services" className="flex items-center font-semibold">
      {t('services')}
    </Link>
  </Typography>
  <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-normal"
  >
    <Link to="/book" className="flex items-center font-semibold">
      {t('book')}
    </Link>
  </Typography>
  <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-normal"
  >
    <Link to="/team" className="flex items-center font-semibold">
      {t('team')}
    </Link>
  </Typography>
  <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-normal"
  >
    <Link to="/contact" className="flex items-center font-semibold">
      {t('contact')}
    </Link>
  </Typography>
</ul>

  );

 
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-1 px-4 lg:px-8 lg:py-2 text-black">
  <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
    <div className="">
      <Link to="/">
        <img
          src={i18n.language === 'ar' ? './logoAr.png' : './logoEn.png'}
          alt="Logo"
          style={{ width: 150, height:140 }}
        />
      </Link>
    </div>
    <div className="hidden lg:block">{navList}</div>
    <div variant="gradient" size="sm" className="hidden lg:inline-block">
            {/* Language Switch */}
      {clicked? <div className="relative inline-block w-10 mr-2 align-middle select-none">
      <text className='text-lg text-black'>
        En
        </text>
  <input
    type="checkbox"
    name="toggle"
    id="toggle"
    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer right-0 text-black"
    onChange={handleLanguageChange}
  />
  <label
    htmlFor="toggle"
    style={{
        backgroundColor:'#28EDA5'
      }}
    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer "
  >
  </label>
</div> :  <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <text className='text-lg text-black'>
            ع
        </text>
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          onChange={handleLanguageChange}
        />
        <label
        style={{
            backgroundColor:'#009FFD'
          }}
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        >
            
        </label>
      </div> }



        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto ">
          {navList}
          {clicked? <div className="relative inline-block w-10 mr-2 align-middle select-none">
      <text className='text-lg text-black'>
        En
        </text>
  <input
    type="checkbox"
    name="toggle"
    id="toggle"
    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer right-0 text-black"
    onChange={handleLanguageChange}
  />
  <label
    htmlFor="toggle"
    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer bg-gray-900"
  >
  </label>
</div> :  <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <text className='text-lg text-black'>
            ع
        </text>
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          onChange={handleLanguageChange}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        >
            
        </label>
      </div> }
        </div>
      </MobileNav>
    </Navbar>
  );
}