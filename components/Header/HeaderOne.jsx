import React, { useState, useEffect, useContext } from "react";
import cn from "classnames";
import $ from "jquery";
import Link from "next/link";
import { handleClickScroll } from "@/lib/helpers";
import { useRouter } from "next/router";
import LanguageContext from "../Context/LanguageProvider";

let flag = true;

const HeaderOne = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [isClicked, setIsClicked] = useState("EN");

  const handleLanguageChange = (language) => {
    setIsClicked(language);
    setSelectedLanguage(language);
  }
  // sticky nav bar
  const [stickyClass, setStickyClass] = useState({
    fixed: "",
    header: "",
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
        ? setStickyClass({ fixed: "", header: "" })
        : setStickyClass({ fixed: "active-height", header: "sticky-menu" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  // mobile menu
  useEffect(() => {
    if (flag === true) {
      //SubMenu Dropdown Toggle
      if ($(".menu-area li.menu-item-has-children ul").length) {
        $(".menu-area .navigation li.menu-item-has-children").append(
          '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
        );
      }

      //Mobile Nav Hide Show
      if ($(".mobile-menu").length) {
        let mobileMenuContent = $(".menu-area .main-menu").html();
        $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

        //Dropdown Button
        $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
          "click",
          function () {
            $(this).toggleClass("open");
            $(this).prev("ul").slideToggle(500);
          }
        );
        //Menu Toggle Btn
        $(".mobile-nav-toggler").on("click", function () {
          $("body").addClass("mobile-menu-visible");
        });

        //Menu Toggle Btn
        $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
          $("body").removeClass("mobile-menu-visible");
        });
      }
    }

    flag = false;
  }, []);

  // active link switching
  const [hash, setHash] = useState("");
  const { asPath, pathname } = useRouter();

  useEffect(() => {
    setHash(asPath.split("#")[1]);
  }, [asPath]);

  const isActiveLink = (id) => {
    return id == "#" + hash ? "active" : "";
  };

  return (
    <header id="header">
      <div id="header-fixed-height" className={cn(stickyClass.fixed)} />

      <div id="sticky-header" className={cn("menu-area", stickyClass.header)}>
        <div className={cn("container custom-container")}>
          <div className="row">
            <div className="col-12">
              <div className={"mobile-nav-toggler"}>
                <i className="fas fa-bars" />
              </div>

              <div className="menu-wrap">
                <nav className={"menu-nav"}>
                  <div className="logo">
                    <Link href={"/"}>
                      <img src={"/img/svg/Logo.png"} alt="BNBTiger Logo" style={{
                        borderRadius: '50%',
                        maxWidth: '40px'
                      }} />
                    </Link>
                  </div>

                  <div className={cn("navbar-wrap main-menu d-none d-lg-flex")}>
                    <ul className={"navigation"}>
                      <li className={cn(hash == "header" && "active")}>
                        <Link
                          href="#header"
                          className={"section-link"}
                          onClick={() => handleClickScroll("header")}
                        >
                          {
                            selectedLanguage === "EN" ? "Home" : "Lar"
                          }
                        </Link>
                      </li>

                      <li className={cn(hash == "about" && "active")}>
                        <Link
                          href="#about"
                          className={"section-link"}
                          onClick={() => handleClickScroll("about")}
                        >
                          {
                            selectedLanguage === "EN" ? "About us" : "Sobre nós"
                          }
                        </Link>
                      </li>
                      <li className={isActiveLink("#tokenomics")}>
                        <Link
                          href="#tokenomics"
                          className={"section-link"}
                          onClick={() => handleClickScroll("tokenomics")}
                        >
                          {
                            selectedLanguage === "EN" ? "Tokenomics" : "Tokenômica"
                          }
                        </Link>
                      </li>
                      <li className={isActiveLink("#roadmap")}>
                        <Link
                          href="#roadmap"
                          className={"section-link"}
                          onClick={() => handleClickScroll("roadmap")}
                        >
                          {
                            selectedLanguage === "EN" ? "Roadmap" : "Roteiro"
                          }
                        </Link>
                      </li>
                      <li className={isActiveLink("#contact")}>
                        <Link
                          href="#contact"
                          className={"section-link"}
                          onClick={() => handleClickScroll("contact")}
                        >
                          {
                            selectedLanguage === "EN" ? "Contact us" : "Contate-nos"
                          }
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={cn("header-action", "d-none d-md-block")}>
                    <ul>
                      <li className={"header-lang"}>
                        <span className={"selected-lang"}>LAN</span>
                        <ul className={"lang-list"}>
                          <li style={{
                            paddingLeft: '15px',
                            paddingBottom: '5px',
                            color: isClicked === "EN" ? "#00C4F4" : "gray",
                            cursor: 'pointer',
                          }}>
                            <span onClick={() => handleLanguageChange("EN")}>EN</span>
                          </li>
                          <li style={{
                            paddingLeft: '15px',
                            paddingBottom: '5px',
                            color: isClicked !== "EN" ? "#00C4F4" : "gray",
                            cursor: 'pointer',
                          }}>
                            <span onClick={() => handleLanguageChange("PT")}>PT</span>
                          </li>
                        </ul>
                      </li>
                      <li className={"header-btn"}>
                        <Link href="https://pancakeswap.finance/swap?outputCurrency=0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D" className="btn">
                          {
                            selectedLanguage === "EN" ? "Buy Now" : "Comprar agora"
                          }
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <div className={"mobile-menu"}>
                <nav className={"menu-box"}>
                  <div className={"close-btn"}>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={"nav-logo"}>
                    <Link href="/">
                      <img
                        src={"/img/svg/Logo.png"}
                        alt="BNBTiger Logo"
                        title=""
                        style={{
                          borderRadius: '50%',
                        }}
                      />
                    </Link>
                  </div>
                  <div>
                    <ul className={"navigation"}>
                      <li className={cn(hash == "header" && "active")}>
                        <Link
                          href="#header"
                          className={"section-link"}
                          onClick={() => handleClickScroll("header")}
                        >
                          {
                            selectedLanguage === "EN" ? "Home" : "Lar"
                          }
                        </Link>
                      </li>

                      <li className={cn(hash == "about" && "active")}>
                        <Link
                          href="#about"
                          className={"section-link"}
                          onClick={() => handleClickScroll("about")}
                        >
                          {
                            selectedLanguage === "EN" ? "About us" : "Sobre nós"
                          }
                        </Link>
                      </li>
                      <li className={isActiveLink("#tokenomics")}>
                        <Link
                          href="#tokenomics"
                          className={"section-link"}
                          onClick={() => handleClickScroll("tokenomics")}
                        >
                          {
                            selectedLanguage === "EN" ? "Tokenomics" : "Tokenômica"
                          }
                        </Link>
                      </li>
                      <li className={isActiveLink("#roadmap")}>
                        <Link
                          href="#roadmap"
                          className={"section-link"}
                          onClick={() => handleClickScroll("roadmap")}
                        >
                          {
                            selectedLanguage === "EN" ? "Roadmap" : "Roteiro"
                          }
                        </Link>
                      </li>
                      <li className={isActiveLink("#contact")}>
                        <Link
                          href="#contact"
                          className={"section-link"}
                          onClick={() => handleClickScroll("contact")}
                        >
                          {
                            selectedLanguage === "EN" ? "Contact us" : "Contate-nos"
                          }
                        </Link>
                      </li>
                    </ul>

                  </div>

                  <div style={{paddingLeft:'25px', paddingTop:'5px'}}>
                    <ul>
                      <li className={"header-lang"}>
                        <span className={"selected-lang"}>LAN</span>
                        <ul>
                          <li style={{
                            paddingLeft: '15px',
                            paddingBottom: '5px',
                            color: isClicked === "EN" ? "#00C4F4" : "gray",
                            cursor: 'pointer',
                          }}>
                            <span onClick={() => handleLanguageChange("EN")}>EN</span>
                          </li>
                          <li style={{
                            paddingLeft: '15px',
                            paddingBottom: '5px',
                            color: isClicked !== "EN" ? "#00C4F4" : "gray",
                            cursor: 'pointer',
                          }}>
                            <span onClick={() => handleLanguageChange("PT")}>PT</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* <div className={"menu-outer"}>
                    <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> 
                  </div> */}
                </nav>
              </div>

              <div className={"menu-backdrop"} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div >
    </header >
  );
};

export default HeaderOne;
