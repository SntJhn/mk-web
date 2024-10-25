import styles from './App.module.css';
import { Contact } from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Project/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className={styles.App}>
            <Router>
                <Navbar />
                <Routes>
                    {/* Home route rendering Hero and Contact */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                            </>
                        }
                    />

                    {/* Projects route */}
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </Router>
            <Contact />
        </div>
    );
}

export default App;
