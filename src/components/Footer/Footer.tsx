import './Footer.css'
import react from '../../assets/icons/react.svg'

const Footer = () => {
    return (
        <nav className={"footer shadow flexRow"}>
            <small><a href="https://github.com/ImranR98" target="_blank" rel="noreferrer">Made with &nbsp;<img alt="React" src={react} className="icon"></img></a></small>
        </nav >
    );
};

export default Footer;