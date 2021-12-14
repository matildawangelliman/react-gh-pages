import './FooterContainer.css'
// import SignUpForm from './SignUpForm'
import SignUp from './SignUp.js'

function FooterLayout() {
    return (
        <div>
            <div className="sign-up">Sign up for our Newsletter</div>
            <SignUp/>
            <div className="footer-link-display">
                <span className="link-ref">
                    <span className="dash">
                    <a id="social" href="/">INSTAGRAM</a>
                    </span>
                    <span className="dash"> <a id="social" href="/">FACEBOOK</a></span>
                    <span className="dash"><a id="social" href="/">TWITTER</a></span>
                </span>
            </div>
        </div>
    )
}
export default FooterLayout
