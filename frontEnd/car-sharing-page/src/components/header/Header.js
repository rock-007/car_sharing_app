import "./Header.css";
import CredentialVerify from "../../containers/header/CredentialVerify";

const Header = () => {
    return (
        <>
            <section className="header">
                <CredentialVerify className="navbar-nav mr-auto" />
            </section>
        </>
    );
};

export default Header;
