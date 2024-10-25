import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_k0e30p8', 'template_cjkkjng', form.current, {
                publicKey: 'wjR7WjK3FkGirkwZx',
            })
            .then(
                () => {
                    // const userName = e.target.from_name.value; // Access user_name from the event target
                    // const userEmail = e.target.from_email.value;
                    // const message = e.target.message.value;

                    // console.log('User Name:', userName); // Log the user name
                    // console.log('User Email:', userEmail); // Log the user email
                    // console.log('Message:', message); // Log the message
                    console.log('SUCCESS!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className={styles.contactFormContainer}>
            <h3 className={styles.contactUs}>
                The road to your dreams starts here.
            </h3>
            <h3 className={styles.contactUsDesc}>
                Contact us today to find out how we can help you make your dream
                into a reality.
            </h3>
            <div className={styles.column}>
                <div className={styles.left}>
                    <h3 className={styles.title}>We are ready to help.</h3>
                    <h3 className={styles.description}>
                        We make it easy to speak to someone and answer all of
                        your questions helping you get started with the right
                        information.
                    </h3>
                    <ol className={styles.steps}>
                        <li>
                            <strong>Contact us.</strong>
                            <h3>
                                Once you fill out our form, we will contact you
                                back within 24 hours. You can also use our
                                mobile and email options.
                            </h3>
                        </li>
                        <li>
                            <strong>Talk to our team.</strong>
                            <h3>
                                Our dedicated team members are always on standby
                                to guide you through every step and advise you
                                based on your personal situation.
                            </h3>
                        </li>
                        {/* <li>
                            <strong>Free clinical assessment.</strong>
                            <h3>
                                Once you’ve connected with a member of our
                                admissions team, we will arrange a time for a
                                free assessment for you with one of our clinical
                                team members. The goal of this assessment is to
                                gather information in order for us to ensure we
                                are the right fit for you, and so that we can
                                design an individualized programme tailored to
                                your needs.
                            </h3>
                        </li> */}
                    </ol>
                    <div className={styles.contactDetails}>
                        <h3>
                            <strong>Call us on mobile.</strong>
                            <br />
                            +63 95 672 4117
                        </h3>
                        <h3>
                            <strong>Send us an email.</strong>
                            <br />
                            mkdisenyo@email.com
                        </h3>
                    </div>
                </div>
                <div className={styles.right}>
                    <h3 className={styles.title}>Reach us out</h3>
                    <form
                        className={styles.form}
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <label className={styles.label}>Name</label>
                        <input
                            type="text"
                            name="from_name"
                            className={styles.inputField}
                        />
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            name="from_email"
                            className={styles.inputField}
                        />
                        <label className={styles.label}>Message</label>
                        <textarea
                            name="message"
                            className={styles.textareaField}
                        />
                        <input
                            type="submit"
                            value="Send"
                            className={styles.submitButton}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
