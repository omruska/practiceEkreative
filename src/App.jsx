import React from "react";
import "./App.css";

function App() {
    return (
        <div className="container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-content">
                    <div className="vec">
                        <div className="vec1"></div>
                        <div className="vec2"></div>
                        <div className="vec3"></div>
                    </div>
                    <h2>John Doe</h2>
                    <div className="social-links">
                        <a href="#">LINKEDIN</a>
                        <a href="#">TWITTER</a>
                        <a href="#">INSTAGRAM</a>
                        <a href="#">FACEBOOK</a>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="main-content">
                <div className="text-content">
                    <h1>Hello<br />I'm John Doe</h1>
                    <p>
                        A full stack all-around designer that tristique est placerat in massa <i><b>consectetur quisque</b></i> lobortis vitae faucibus diam consequat maecenas turpis.
                    </p>
                    <a href="#" className="btn">Download CV</a>
                </div>
                <div className="image-content">
                    <img src="img/hero.png" alt="John Doe" />
                </div>
            </div>

            {/* About Section */}
            <div className="about">
                <div className="text-about">
                    <h1>About</h1>
                    <div className="vl"></div>
                    <div className="p1">
                        <b>Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur quisque</b>
                    </div>
                    <div className="p2">
                        Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="services">
                <div className="service">
                    <img src="img/icon-1.png" alt="service" />
                    <p>Service name</p>
                </div>
                <div className="service">
                    <img src="img/icon-2.png" alt="service" />
                    <p>Service name</p>
                </div>
                <div className="service">
                    <img src="img/icon-3.png" alt="service" />
                    <p>Service name</p>
                </div>
                <div className="service">
                    <img src="img/icon-4.png" alt="service" />
                    <p>Service name</p>
                </div>
            </div>
        </div>
    );
}

export default App;
