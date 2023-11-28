import instagram from './instagram.png';
import whatsapp from './whatsapp.png';
import mail from './mail.png';


function Footer() {
    return (
        <footer className="footer">
        {/* Instagram */}
        <div className="instagram">
        <a href="https://www.instagram.com/nsscake/" target="_blank">
            <h4 className="name">@nsscake</h4>
            <img src={instagram} alt="logo" />
        </a>
        </div>
        {/* Mail */}
        <div className="mail">
        <a href="mailto:ine.benss@gmail.com" target="_blank">
            <h4 className="email">ine.benss@gmail.com</h4>
            <img src={mail} alt="logo" />
        </a>
        </div>
        {/* WhatsApp */}
        <div className="whatsapp">
        <a href="https://wa.me/0648112836" target="_blank">
            <h4 className="number">06 48 11 28 36</h4>
            <img src={whatsapp} alt="logo" />
        </a>
        </div>
        </footer>
  );
}

export default Footer;