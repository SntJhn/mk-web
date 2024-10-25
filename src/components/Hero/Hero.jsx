import { useEffect, useRef } from 'react';
import { animateTitles } from './animate'; // Import the animation function
import styles from './Hero.module.css';
import HeroLogo from '../../../assets/nav/HeroLogo.png';

const Hero = () => {
    const textWrapperRef = useRef(null);

    useEffect(() => {
        if (textWrapperRef.current) {
            animateTitles(textWrapperRef.current); // Call the animation function
        }
    }, []);

    useEffect(() => {
        // Select all h2 and h5 elements
        const elements = document.querySelectorAll(`h2, h5, h1, p, a`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.appear);
                    }
                });
            },
            { threshold: 0.3 } // Trigger when x% of the element is in view
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className={styles.snap}>
            <div className={styles.container}>
                <img
                    src={HeroLogo}
                    width="30%"
                    height="auto"
                    alt=""
                    className={styles.Logo}
                />
            </div>
            <div className={styles.containerMotto}>
                <div className={styles.leftColumn}>
                    <h1>
                        Building your <br /> <span>dreams</span> to{' '}
                        <span>reality</span>
                    </h1>
                </div>
                <div className={styles.rightColumn}>
                    <p>
                        We specialize in bringing creative concepts to life by
                        transforming them into captivating, immersive
                        experiences that leave a lasting impact.
                    </p>
                </div>
            </div>
            <div className={styles.containerAbout} id="about">
                <div className={styles.briefAbout}>
                    <div className={styles.columnsContainer}>
                        <div className={styles.column}>
                            <h2>About Us</h2>
                            <h5>
                                MK Architectural Design Studio was founded by
                                two (2) architects in 2022, with a commitment to
                                create good relationships with our clients
                                through professionalism and dedication to our
                                work. We pride ourselves with a team of hands-on
                                architects and engineers that delivers
                                high-quality projects tailored to each client’s
                                needs. We strive to create spaces that focuses
                                on our clients’ welfare without sacrificing the
                                quality of its immediate environment. Our work
                                encompasses various project developments like
                                residential, commercial, mixed-use, and leisure.
                            </h5>
                            <h2 className={styles.vision}>Vision</h2>
                            <h5>
                                MK Architectural Design Studio aims to become a
                                well-respected architectural firm in the
                                industry of design and construction, providing
                                high-quality services that cater to the needs
                                and wants of our clients.
                            </h5>
                        </div>
                        <div className={styles.column}>
                            <h2 className={styles.mission}>Mission</h2>
                            <h5>
                                <span>To Homeowners:</span> Provide innovative
                                and sustainable solutions in designing and
                                constructing their dreams into reality –
                                creating comfortable spaces that they can truly
                                call home.
                            </h5>
                            <h5>
                                <span>To Business Owners:</span> Provide
                                high-quality service in design and construction
                                through reflecting their business’ goals and
                                character as well as providing spaces that
                                effectively advertise their products/ services.
                            </h5>
                            <h5>
                                <span> To Communities: </span>
                                Provide jobs and opportunities to people, from
                                designing up to the construction phase of the
                                project.
                            </h5>
                            <h5>
                                <span> To the Nation: </span>
                                To help uplift the quality of
                                buildings/structure in the Philippines,
                                providing comfort, safety, and security; making
                                cities better places to live.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
