import React from "react";
import notFoundImg from "../../assets/not-found.svg";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div>
      <main className="not-found-main">
        <img
          src={notFoundImg}
          alt="Not Found Image"
          className="not-found-img"
        />
        <div className="not-found-content">
          <h3>Ohh! Page Not Found</h3>
          <p className="not-found-content-p">
            We can't seem to find the page you're looking for
          </p>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </main>
    </div>
  );
};
export default NotFound;
