import React from 'react';
import '../style/footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-social">
                    <a
                        href="https://www.instagram.com/nsscake/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                        title="Suivez-moi sur Instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        href="mailto:contact.nsscake@gmail.com"
                        className="social-link"
                        title="Contactez-moi par email"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>

                    <a
                        href="https://wa.me/33648112836"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                        title="Contactez-moi sur WhatsApp"
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>

                <div className="footer-copyright">
                    <p>&copy; 2024 Nesscake – Fait avec amour et beaucoup de sucre.</p>
                </div>
            </div>
        </footer>
    );
}
