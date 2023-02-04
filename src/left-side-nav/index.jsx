import { Link } from "react-router-dom";
function LeftNavBar(props) {
    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3 sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 18.5H6.5V8.66667L3 11L12 5L21 11L17.5 8.66667V18.5H13.5M10.5 18.5V13.5H13.5V18.5M10.5 18.5H13.5" stroke="#000000" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
</svg>Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link">
                            <svg fill="#000000" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="dashboard-alt" className="icon glyph"><path d="M14,10V22H4a2,2,0,0,1-2-2V10Z"></path><path d="M22,10V20a2,2,0,0,1-2,2H16V10Z"></path><path d="M22,4V8H2V4A2,2,0,0,1,4,2H20A2,2,0,0,1,22,4Z"></path></svg>Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/joketime' className="nav-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" stroke="#33363F" strokeWidth="2" stroke-linecap="round"/>
<path d="M7.88124 15.7559C8.37391 16.1826 9.02309 16.4909 9.72265 16.6928C10.4301 16.897 11.2142 17 12 17C12.7858 17 13.5699 16.897 14.2774 16.6928C14.9769 16.4909 15.6261 16.1826 16.1188 15.7559" stroke="#33363F" strokeWidth="2" stroke-linecap="round"/>
<circle cx="9" cy="10" r="1.25" fill="#33363F" stroke="#33363F" strokeWidth="0.5" stroke-linecap="round"/>
<circle cx="15" cy="10" r="1.25" fill="#33363F" stroke="#33363F" strokeWidth="0.5" stroke-linecap="round"/>
</svg>Joke time
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact-us' className="nav-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <title>Phone</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" >
        <g id="Phone">
            <rect id="Rectangle" x="0" y="0" width="24" height="24">

</rect>
            <path d="M18.6651,14.3466 C17.8945,14.2485 17.1381,14.0605 16.4112,13.7866 C15.8203,13.5691 15.1569,13.709 14.7042,14.1466 L14.7042,14.1466 C14.1064,14.7522 13.1672,14.8918 12.4794,14.3909 C11.3931,13.5997 10.4369,12.6438 9.64561,11.5577 C9.1446,10.8701 9.28421,9.93092 9.8898,9.33332 L9.8898,9.33332 C10.3194,8.88183 10.4586,8.22718 10.2499,7.64 C9.95089,6.89845 9.7405,6.1242 9.62308,5.33334 C9.46986,4.55683 8.78769,3.99781 7.99605,4.00000353 L5.60885,4.00000353 C5.15395,3.99945 4.71925,4.18778 4.40859,4.52001 C4.10745,4.85378 3.96205,5.29958 4.0085,5.74667 C4.2665,8.2296 5.11223,10.6154 6.47571,12.7066 C7.71227,14.6494 9.3603,16.297 11.3034,17.5333 C13.3979,18.881 15.7761,19.7253 18.2517,20.0000352 L18.385,20.0000352 C18.7907,20.0027 19.182,19.85 19.4786,19.5733 C19.8116,19.2688 20.0004,18.8378 19.9987,18.3866 L19.9987,16.0000035 C20.0309,15.1928 19.4609,14.4862 18.6651,14.3466 Z" id="Path" stroke="#0C0310" strokeWidth="2" stroke-linecap="round">

</path>
        </g>
    </g>
</svg>Contact us
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/something' className="nav-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3" stroke="#000000" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
<circle cx="12" cy="4" r="2" stroke="#000000" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
<circle cx="20" cy="12" r="2" stroke="#000000" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
<circle cx="4" cy="12" r="2" stroke="#000000" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
<circle cx="12" cy="20" r="2" stroke="#000000" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M12 6V9" stroke="#000000" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M15 12H18" stroke="#000000" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M12 15V18" stroke="#000000" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M9 12H6" stroke="#000000" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
</svg>Integration
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default LeftNavBar;