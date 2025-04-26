import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light text-center px-3">
            <div>
                <img
                    src="../images/PageNotFound.png"
                    alt="404 Page Not Found"
                    style={{ maxWidth: "800px", marginBottom: "2rem" }}
                />
                {/* <h1 className="display-4 fw-bold">404</h1> */}
                <p className="lead text-muted mb-4">Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
