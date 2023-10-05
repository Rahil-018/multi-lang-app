import React from "react"
import { Link } from "react-router-dom"
import Languageoption from "../components/Navi";
import i18next from "i18next"
import { useTranslation } from 'react-i18next';
const Home = () => {
    const { t } = useTranslation();
    const handleClick = (e) => {
        i18next.changeLanguage(e.target.value)
    }
    return (
        <>
            <div className="container-fluid">
                <Languageoption onChange={(e) => handleClick(e)} />
                <h1 align='center' className="m-5">{t('Iam')} Web <br />
                    <span style={{ color: "#FF0066" }}>D</span>
                    <span style={{ color: "#00FFFF" }}>E</span>
                    <span style={{ color: "#0000FF" }}>V</span>
                    <span style={{ color: "#008000" }}>E</span>
                    <span style={{ color: "#7CFC00" }}>L</span>
                    <span style={{ color: "#8B4513" }}>O</span>
                    <span style={{ color: "#FF9966" }}>P</span>
                    <span style={{ color: "#008000" }}>E</span>
                    <span style={{ color: "#FF0066" }}>R</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg> </h1>
            </div>

            <div className="main">
                <h1 align="center">{t('MY KEY SKILLS')}</h1>
                <hr />
                <div className="column">
                    <div className="content">
                        <img src="https://www.shutterstock.com/shutterstock/photos/1853300929/display_1500/stock-photo-react-js-inscription-against-laptop-and-code-background-learn-react-programming-language-1853300929.jpg" alt="React" style={{ width: "100%" }} />
                        <h3>React{t('.JS')}</h3>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <img src="https://www.shutterstock.com/shutterstock/photos/484622554/display_1500/stock-photo-javascript-concept-with-hand-on-blue-background-484622554.jpg" alt="Javascript" style={{ width: "100%" }} />
                        <h3>{t('JavaScript')}</h3>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <img src="https://www.shutterstock.com/shutterstock/photos/1905056317/display_1500/stock-photo-bootstrap-inscription-against-laptop-and-code-background-1905056317.jpg" alt="Bootstrap" style={{ width: "100%" }} />
                        <h3>{t('BOOTSTRAP')}</h3>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <img src="https://www.shutterstock.com/shutterstock/photos/1418515976/display_1500/stock-photo-jquery-laptop-on-word-jquery-1418515976.jpg" alt="JQuery" style={{ width: "100%" }} />
                        <h3>{t('j')}QUERY</h3>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <img src="https://www.shutterstock.com/shutterstock/photos/1893752428/display_1500/stock-photo-css-code-on-dark-background-in-code-editor-and-word-css-1893752428.jpg" alt="Css" style={{ width: "100%" }} />
                        <h3>{t('CSS3')}</h3>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <img src="https://www.shutterstock.com/shutterstock/photos/1851522412/display_1500/stock-photo-html-inscription-against-laptop-and-code-background-learn-html-programming-language-computer-1851522412.jpg" alt="Html" style={{ width: "100%" }} />
                        <h5>{t('HTML5')}</h5>
                    </div>
                </div>
                <section className="contact-area" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="contact-content text-center">
                                    <p>web Developer</p>
                                    <div className="hr"></div>
                                    <h6>Indore Madhya Pardesh.</h6>
                                    <h6>+91 7350335169<span>|</span>+91 7350335169</h6>
                                    <div className="contact-social">
                                        <ul>
                                            <li><Link className="hover-target" to=""><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link className="hover-target" to=""><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link className="hover-target" to=""><i className="fab fa-github"></i></Link></li>
                                            <li><Link className="hover-target" to=""><i className="fab fa-behance"></i></Link></li>
                                            <li><Link className="hover-target" to=""><i className="fab fa-pinterest-p"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <p>Copyright &copy; 2023  All Rights Reserved.</p>
                </footer>
            </div>
        </>
    )
}
export default Home;
