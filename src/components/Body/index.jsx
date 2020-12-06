import React from "react";
import { SubMenu, SubMenuList } from "./BodyElements";
import { Main, BodyContent, Button, Text, P } from "./BodyElements";

const Body = () => {
  return (
    <>
      <Main>
        <BodyContent
          style={{
            backgroundImage: "url('/shef.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Text style={{ color: "#fff" }}>Welcome</Text>
          <Text style={{ color: "#fff" }}>To</Text>
          <Text style={{ color: "#FEA742", fontWeight: "bold" }}>
            STRAWHAT{" "}
          </Text>
          <Text style={{ color: "#FEA742", fontWeight: "bold" }}>
            {" "}
            RESTUARANT
          </Text>
          <Button>RESERVE A TABLE</Button>
        </BodyContent>
        <BodyContent
          style={{
            backgroundImage: "url('/1.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Text style={{ color: "#FEA742", fontStyle: "italic" }}>
            Reinterpreted
          </Text>
          <Text style={{ fontFamily: "Arial", fontSize: "70px" }}>
            TRUE ITALIAN CUISINE
          </Text>
          <P>
            Our daily challenge: highest quality ingredients according to
            traditional recipes freshly interpreted <br /> and served with a lot
            of passion for the guest! <br /> Enjoy fine Mediterranean cuisine
            and exquisite service. <br /> We are very pleased to welcome you as
            guests in our restaurant.
          </P>
          <br />{" "}
          <a style={{ color: "#FEA742" }} href="">
            Discover Our Story
          </a>
        </BodyContent>

        <BodyContent
          style={{
            backgroundImage: "url('/2.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "190px"
          }}
        ></BodyContent>
      </Main>
    </>
  );
};

export default Body;
