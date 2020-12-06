import React from "react";
import {
  UpperDiv,
  LowerDiv,
  SocialMedia,
  SocialMediaLink,
  FooterLinkLists,
  FooterLink,
  Logo
} from "./FooterElements";
import {P} from "../Body/BodyElements"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <UpperDiv>
         <Logo><h1 style= {{color: "#FFA742", fontSize: "70px"}}>SH</h1> <p style= {{fontSize: "1.5em", color: "#fff"}}>Restuarants</p></Logo>
         <P style={{width: "300px", padding: "40px", color: "#fff"}}>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh.</P>
         <span style={{color: "#fff", fontWeight: "bold"}}>WE TAKE BKASH, NAGAD
         AND MASTERCARD</span>
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
          <FooterLink>Support</FooterLink>
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
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </SocialMediaLink>
          <SocialMediaLink>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialMediaLink>
          <SocialMediaLink>
            <FontAwesomeIcon icon={faInstagram} />
          </SocialMediaLink>
          <SocialMediaLink>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </SocialMediaLink>
          <SocialMediaLink>
            <FontAwesomeIcon icon={faYoutube} />
          </SocialMediaLink>
        </SocialMedia>
      </LowerDiv>
    </>
  );
};

export default Footer;
