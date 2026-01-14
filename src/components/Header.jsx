import React, {useState} from 'react';

const SEARCH_DATA = [
    {label: "Home", path: "/"},
    {label: "About", path: "/about"},
    {label: "Programs", path: "/#programs"},
    {label: "Impact", path: "/#impact"},
    {label: "Gallery", path: "/gallery"},
    {label: "Get Involved", path: "/contact-us"},
];

function Header() {
    const [keyword, setKeyword] = useState("");

    const handleSearch = () => {
        if (!keyword.trim()) return;

        const result = SEARCH_DATA.find(item =>
            item.label.toLowerCase().includes(keyword.toLowerCase())
        );

        if (result) {
            window.location.href = result.path;
        } else {
            alert("No results found");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    return (
        <>
            <div className="container-fluid border-bottom  wow fadeIn" data-wow-delay="0.1s">
                <div
                    className="container topbar d-none d-lg-block py-2"
                    style={{borderRadius: "0 40px"}}
                >

                    <div className="d-flex justify-content-between">
                        <div className="top-info ps-2">
                            <small className="me-3"><i className="fas fa-map-marker-alt me-2 "></i> <a
                                href="#" className="text-white">Kigali, Rwanda</a></small>
                            <small className="me-3"><i className="fas fa-envelope me-2 text-orange-primary"></i><a
                                href="#"
                                className="text-white">info@withintech.com</a></small>
                        </div>
                        <div className="top-link pe-2">
                            <a href="" className="btn btn-light btn-sm-square rounded-circle"><i
                                className="fab fa-facebook-f text-orange-primary"></i></a>
                            <a href="" className="btn btn-light btn-sm-square rounded-circle"><i
                                className="fab fa-twitter text-orange-primary"></i></a>
                            <a href="" className="btn btn-light btn-sm-square rounded-circle"><i
                                className="fab fa-instagram text-orange-primary"></i></a>
                            <a href="" className="btn btn-light btn-sm-square rounded-circle me-0"><i
                                className="fab fa-linkedin-in text-orange-primary"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container px-0">
                    <nav className="navbar navbar-light navbar-expand-xl py-3">
                        <a href="/" className="navbar-brand">
                            <img src="/assets/img/logo.png" className={"logo"} alt={"WithInTech Logo"}/>
                        </a>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <a href="/" className="nav-item nav-link active">Home</a>
                                <a href="/about" className="nav-item nav-link">About</a>
                                <a href="/#programs" className="nav-item nav-link">Programs</a>
                                <a href="/#impact" className="nav-item nav-link">Impact</a>
                                <a href="/contact-us" className="nav-item nav-link">Get Involved</a>
                                <a href="/gallery" className="nav-item nav-link">Gallery</a>
                            </div>
                            <div className="d-flex me-4">
                                <div id="phone-tada" className="d-flex align-items-center justify-content-center">
                                    <a href="" className="position-relative wow tada" data-wow-delay=".9s">
                                        <i className="fa fa-phone-alt text-purple-primary fa-2x me-4"></i>
                                        <div className="position-absolute" style={{top: " -7px", left: "20px"}}>
                                            <span><i className="fa fa-comment-dots "></i></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="d-flex flex-column pe-3 border-end">
                                    <span className="">Have any questions?</span>
                                    <a href="#"><span className="">Free: + 0123 456 7890</span></a>
                                </div>
                            </div>
                            <button className="btn-search btn  btn-md-square rounded-circle"
                                    data-bs-toggle="modal" data-bs-target="#searchModal"><i
                                className="fas fa-search text-white"></i></button>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Modal Search */}
            <div
                className="modal fade"
                id="searchModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title text-brown-primary">
                                Search WithinTech
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>

                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto">
                                <input
                                    type="search"
                                    className="form-control p-3"
                                    placeholder="Search programs, impact, gallery..."
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                />
                                <button
                                    className="input-group-text p-3"
                                    onClick={handleSearch}
                                >
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;