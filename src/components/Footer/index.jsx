import React, {useState} from "react";
import {
  UpperDiv,
  LowerDiv,
  SocialMedia,
  SocialMediaLink,
  FooterLinkLists,
  FooterLink,
} from "./FooterElements";
import { P } from "../Body/BodyElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Logo } from "../Navbar/NavbarElements";
const Footer = () => {

  return (
    <>
      <UpperDiv>
        <Logo>
          <h1 style={{ fontSize: "2em" }}>Strawhat</h1>
          <p style={{ fontSize: "1.5em", color: "#fff" }}>Restuarants</p>
        </Logo>
        <P style={{ width: "300px", padding: "40px", color: "#fff" }}>
          Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
          sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
          nec sagittis sem nibh id elit. Duis sed odio sit amet nibh.
        </P>
        <span style={{ color: "#fff", fontWeight: "bold" }}>
          WE TAKE BKASH, NAGAD AND MASTERCARD
        </span>
        <a href="">
          <img
            src="nagad.jpg"
            height="80px"
            style={{ padding: "20px" }}
            alt=""
          />
        </a>
        <a href="">
          <img
            src="bkash.png"
            height="80px"
            style={{ padding: "20px" }}
            alt=""
          />
        </a>
        <a href="">
          <img
            src="mastercard.jpg"
            height="80px"
            width="85px"
            style={{ padding: "20px" }}
            alt=""
          />
        </a>
      </UpperDiv>

      <LowerDiv>
        <p>
          2020 © Copyrights{" "}
          <span
            style={{
              color: "#FEA742",
              fontSize: "20px",
              fontFamily: "Sunshine",
            }}
          >
            SazzatHossain
          </span>{" "}
        </p>
        <FooterLinkLists>
          <FooterLink>Support 
          </FooterLink>
          <FooterLink>|</FooterLink>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>|</FooterLink>
          <FooterLink>Disclaimer</FooterLink>
          <FooterLink>|</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterLinkLists>
        <SocialMedia>
          <SocialMediaLink>
            <a>
              <FontAwesomeIcon icon={faFacebookF} id="facebook" />
            </a>
          </SocialMediaLink>
          <SocialMediaLink>
            <FontAwesomeIcon icon={faTwitter} id="twitter" />
          </SocialMediaLink>
          <SocialMediaLink>
            <FontAwesomeIcon icon={faInstagram} id="instagram" />
          </SocialMediaLink>
          <SocialMediaLink>
            <FontAwesomeIcon icon={faLinkedinIn} id="linkedin" />
          </SocialMediaLink>
          <SocialMediaLink>
            <FontAwesomeIcon icon={faYoutube} id="youtube" />
          </SocialMediaLink>
        </SocialMedia>
      </LowerDiv>
    </>
  );
};

export default Footer;
