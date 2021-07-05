import "./CredentialVerify.css";
import { button } from "react-bootstrap";

const CredentialVerify = () => {
    return (
        <>
            <section className="credentialVerify">
                {" "}
                <button
                    type="button"
                    class="btn btn-login btn-default navbar-btn"
                >
                    Sign in/ Register
                </button>
            </section>
        </>
    );
};

export default CredentialVerify;
