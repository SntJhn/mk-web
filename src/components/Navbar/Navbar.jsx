import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';
import MKLogo from '../../../assets/nav/MKLOGO.png';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbarVisible, setNavbarVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Scrolling down (add buffer like 10px to avoid small changes in scroll)
            if (currentScrollPos > lastScrollTop + 10) {
                setNavbarVisible(false);
            }
            // Scrolling up (show navbar)
            else if (currentScrollPos < lastScrollTop - 10) {
                setNavbarVisible(true);
            }

            // Update lastScrollTop after logic is applied
            setLastScrollTop(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const backToTop = () => {
        window.scrollTo(0, 0);
    };

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <nav
            className={styles.navbar}
            style={{
                top: navbarVisible ? '0' : '-200px',
                transition: 'top 0.3s ease',
            }}
        >
            <RouterLink className={styles.title} to="/" onClick={backToTop}>
                <img
                    src={MKLogo}
                    width="20%"
                    height="auto"
                    alt="Logo"
                    className={styles.logo}
                />
            </RouterLink>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl('nav/closeIcon.png')
                            : getImageUrl('nav/menuIcon.png')
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${
                        menuOpen ? styles.menuOpen : ''
                    }`}
                >
                    <li className={styles.menuTxt}>
                        {isHomePage ? (
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                onClick={handleLinkClick}
                            >
                                ABOUT
                            </ScrollLink>
                        ) : (
                            <RouterLink
                                to="/"
                                onClick={() => {
                                    setMenuOpen(false);
                                    backToTop();
                                }}
                            >
                                ABOUT
                            </RouterLink>
                        )}
                    </li>
                    <li className={styles.menuTxt}>
                        <RouterLink
                            to="/projects"
                            onClick={() => {
                                setMenuOpen(false);
                                backToTop();
                            }}
                        >
                            PROJECTS
                        </RouterLink>
                    </li>
                    <li className={styles.menuTxt}>
                        <RouterLink
                            to="/contact"
                            onClick={() => {
                                setMenuOpen(false);
                                backToTop();
                            }}
                        >
                            CONTACT
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
