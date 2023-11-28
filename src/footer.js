import instagram from './instagram.png';
import whatsapp from './whatsapp.png';
import mail from './mail.png';


export function Footer() {
    return (
        <footer className="footer">
        {/* Instagram */}
        <div className="instagram">
        <a href="https://www.instagram.com/nsscake/" target="_blank">
            <img src={instagram} alt="logo" />
            <h4 className='description'>nsscake</h4>
        </a>
        </div>

        {/* Mail */}
        <div className="mail">
        <a href="mailto:contact.nsscake@gmail.com" target="_blank">
            <img src={mail} alt="logo" />
            <h4 className='description'>contact.nsscake@gmail.com</h4>
            </a>
        </div>

        {/* WhatsApp */}
        <div className="whatsapp">
        <a href="https://wa.me/0648112836" target="_blank">
            <img src={whatsapp} alt="logo" />
            <h4 className='description'>06 48 11 28 36</h4>
        </a>
        </div>
        </footer>
  );
}