import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h3>Contact Us</h3>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <i class="fa-solid fa-envelope fa-xl"></i>
                    <a href="mailto:mkdisenyo@gmail.com" target="_blank">
                        mkdisenyo@email.com
                    </a>
                </li>
                <li className={styles.link}>
                    <i class="fa-brands fa-facebook fa-xl"></i>
                    <a
                        href="https://www.facebook.com/MKArchitecturalDesignStudio"
                        target="_blank"
                    >
                        MKArchitecturalDesignStudio
                    </a>
                </li>
                <li className={styles.link}>
                    <i class="fa-solid fa-phone fa-xl"></i>
                    <a href="/">+639567204117</a>
                </li>
            </ul>
        </footer>
    );
};
