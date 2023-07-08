import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { logo } from "../assets";
import { defaultAvatar } from "../assets";

function LinkDiv({ title, path }) {
  return (
    <Link
      to={path}
      className="block text-xl mt-4 lg:inline-block lg:mt-0 italic font-serif hover:text-white mr-4"
    >
      {title}
    </Link>
  );
}

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const flipLogin = () => {
    setIsLogin(!isLogin);
  };
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex fixed w-full items-center justify-between flex-wrap p-6 bg-green-200">
      <Link to="/" className="flex items-center flex-shrink-0 mr-6 gap-2">
        <img src={logo} alt="hand sign logo" className="w-8 h-8"></img>
        <span className="font-semibold text-2xl tracking-tigh text-black font-serif italic font-medium hover:text-white">
          Learn ASL
        </span>
      </Link>
      <div className="lg:hidden  flex flex-row gap-5">
        <button
          className="flex items-center px-3 py-2 border rounded bg-stone-100"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        {isLogin ? (
          <img
            src={defaultAvatar}
            alt="default avatar"
            className="w-8 h-8 rounded-full"
          />
        ) : null}
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          {isLogin ? (
            <>
              <LinkDiv path="/challenges" title="Challenges"></LinkDiv>
              <LinkDiv path="/myprogress/1" title="My Progress"></LinkDiv>
            </>
          ) : null}
          <LinkDiv path="/review" title="Review"></LinkDiv>
          {isLogin ? (
            <>
              <LinkDiv path="/logout" title="Logout"></LinkDiv>
            </>
          ) : (
            <>
              <LinkDiv path="/signup" title="Signup"></LinkDiv>
            </>
          )}
        </div>
        <div className="hidden lg:block">
          {isLogin ? (
            <>
              <img
                src={defaultAvatar}
                alt="default avatar"
                className="w-8 h-8 rounded-full"
              />
            </>
          ) : null}
        </div>
      </div>
      <div className="absolute bottom-2 right-14">
        <button onClick={flipLogin} className="border-2">
          *Change View (Login/Logout)
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
