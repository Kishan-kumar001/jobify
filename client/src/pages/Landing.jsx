/* eslint-disable no-unused-vars */
import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            similique tempore tempora, esse totam consequuntur pariatur eum
            expedita obcaecati autem dignissimos corrupti dolorum? Dignissimos,
            nihil tenetur eius eaque modi voluptatibus!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
