import { FC, useState } from "react";
import "../styles/technology.css";
import launch_portrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import launch_landscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsule_portrait from "../assets/technology/image-space-capsule-portrait.jpg";
import capsule_landscape from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceport_portrait from "../assets/technology/image-spaceport-portrait.jpg";
import spaceport_landscape from "../assets/technology/image-spaceport-landscape.jpg";
import { Container, Group, Anchor, createStyles } from "@mantine/core";

const Technology: FC = () => {
  const techTerminology: Array<Terminology> = [
    {
      id: 0,
      name: "LAUNCH VEHICLE",
      img: window.screen.width > 770 ? launch_portrait : launch_landscape,
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      id: 1,
      name: "SPACEPORT",
      img: window.screen.width > 770 ? spaceport_portrait : spaceport_landscape,
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      id: 2,
      name: "SPACE CAPSULE",
      img: window.screen.width > 770 ? capsule_portrait : capsule_landscape,
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  interface Terminology {
    id: number;
    name: string;
    img: string;
    description: string;
  }

  const useStyles = createStyles(() => ({
    mainLink: {
      fontSize: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "5rem",
      height: "5rem",
      fontFamily: "Bellefair",
      color: "white",
      fontWeight: 300,
      border: "1px solid white",
      borderRadius: "50%",
      transition: "background-color 400ms ease",
      textDecoration: "none",

      "&:hover": {
        textDecoration: "none",
      },
    },

    mainLinkActive: {
      color: "black",
      backgroundColor: "white",
    },
  }));

  const [term, setTerm] = useState<number>(0);
  const currentTerm: Terminology | undefined = techTerminology.find(
    (element: Terminology): boolean => element.id === term
  );

  const mainLinks: Array<number> = [1, 2, 3];

  const { classes, cx } = useStyles();
  const [active, setActive] = useState<number>(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      key={item}
      className={cx(classes.mainLink, {
        [classes.mainLinkActive]: index === active,
      })}
      onClick={() => {
        setActive(index);
        setTerm(item - 1);
      }}
    >
      {item}
    </Anchor>
  ));

  return (
    <div className="technology">
      <div className="container">
        <div className="block">
          <div className="info">
            <span>03</span> SPACE LAUNCH 101
          </div>
        </div>
      </div>
      <div className="technology_card">
        <div className="technology_card_nav">
          <Container className="nav_tech_container">
            <div className="nav_tech_links">
              <Group spacing={50} position="center" className="nav_tech_group">
                {mainItems}
              </Group>
            </div>
          </Container>
        </div>
        <div className="technology_card_terminology">
          <h2>THE TERMINOLOGY...</h2>
          <h1>{currentTerm?.name}</h1>
          <p>{currentTerm?.description}</p>
        </div>
        <div className="technology_card_img">
          <img src={currentTerm?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
