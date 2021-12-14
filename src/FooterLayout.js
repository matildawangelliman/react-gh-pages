import './FooterContainer.css';
// import SignUpForm from './SignUpForm'
import SignUp from './SignUp.js';

function FooterLayout() {
    return (
        <div>
            <div className="sign-up">Sign up for our Newsletter</div>
            <SignUp/>
            <div className="footer-link-display">
                <span className="link-ref">
                    <span className="dash">
                    <a id="social" href="https://www.instagram.com/">INSTAGRAM</a>
                    </span>
                    <span className="dash"> <a id="social" href="https://www.facebook.com/">FACEBOOK</a></span>
                    <span className="dash"><a id="social" href="https://twitter.com/home">TWITTER</a></span>
                </span>
            </div>
        </div>
    )
}
export default FooterLayout;
