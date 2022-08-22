import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav-sm.module.scss";
import { Typography } from "@mui/material";

const NavSm = () => {
  let [isOpen, setOpen] = useState(false);
  let navLinksRef = React.useRef(null);
  let navLogoRef = React.useRef(null);

  function hamburgerClick() {
    let drawer = navLinksRef.current.classList.toggle(styles.open);
    if (drawer) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    Array.from(navLinksRef.current.children).forEach(link => {
      link.classList.toggle(styles.fade);
    });
    navLogoRef.current.children[0].className = styles.click_logo_animate;
    setTimeout(() => {
      navLogoRef.current.children[0].className = "";
    }, 500);
  }

  return (
    <>
      <nav className={styles.nav_sm_container}>
        <div className={styles.mobile_navbar}>
          <div className={styles.special_logo}>
            <Link href="/">
              <div>
                <Image
                  src="/Assets/images/navbar_logo.svg"
                  width={155}
                  height={57}
                  layout="intrinsic"
                  priority={true}
                  alt="logo"
                />
              </div>
            </Link>
          </div>
          <div className={styles.widgets_container}>
            <div
              className={styles.icons}
              onClick={hamburgerClick}
              ref={navLogoRef}
            >
              {isOpen ? (
                <Image
                  src="/Assets/images/mobile_navbar_close1.svg"
                  width={"100%"}
                  height={"80%"}
                  layout="intrinsic"
                  quality={"100"}
                  priority={true}
                  loading={"eager"}
                  alt="hamburger-icon"
                  className={isOpen ? styles.click_logo_animate : null}
                />
              ) : (
                <Image
                  src="/Assets/images/mobile_navbar_icon1.svg"
                  width={"70%"}
                  height={"40%"}
                  layout="intrinsic"
                  quality={"100"}
                  priority={true}
                  loading={"eager"}
                  alt="cross-icon"
                  className={styles.click_logo_animate}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.nav_links} ref={navLinksRef}>
          {/* Add mobile navbar content HERE !!!!! */}
          {/* Add mobile navbar content HERE !!!!! */}
          {/* Add mobile navbar content HERE !!!!! */}
        </div>
      </nav>
    </>
  );
};

export default NavSm;
