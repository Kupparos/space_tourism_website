import { useState } from "react";
import { FC } from "react";
import "../styles/destination.css";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import { Container, Group, Anchor, createStyles } from "@mantine/core";

const Destination: FC = () => {
  const destinationArray: Array<DestinationsProps> = [
    {
      id: "moon",
      name: "MOON",
      img: moon,
      description:
        "See our planet as you`ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      time: "3 DAYS",
    },
    {
      id: "mars",
      name: "MARS",
      img: mars,
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      time: "9 MONTHS",
    },
    {
      id: "europa",
      name: "EUROPA",
      img: europa,
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      time: "3 YEARS",
    },
    {
      id: "titan",
      name: "TITAN",
      img: titan,
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      time: "7 YEARS",
    },
  ];

  interface DestinationsProps {
    id: string;
    name: string;
    img: string;
    description: string;
    distance: string;
    time: string;
  }

  const useStyles = createStyles((theme) => ({
    mainLink: {
      fontSize: "1rem",
      fontFamily: "Barlow Condensed",
      letterSpacing: "3px",
      color: "white",
      paddingBottom: "1rem",
      fontWeight: 400,
      borderBottom: "3px solid transparent",
      transition: "border-color 200ms ease, color 200ms ease",
      textDecoration: "none",

      "&:hover": {
        textDecoration: "none",
      },
    },

    mainLinkActive: {
      color: "white",
      borderBottomColor: "white",
    },
  }));

  const [planet, setPlanet] = useState<string>("moon");
  const currentPlanet: DestinationsProps | undefined = destinationArray.find(
    (element: DestinationsProps): boolean => element.id === planet
  );

  const mainLinks: Array<string> = ["MOON", "MARS", "EUROPA", "TITAN"];

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
        setPlanet(item.toLowerCase());
      }}
    >
      {item}
    </Anchor>
  ));

  return (
    <div className="destination">
      <div className="container">
        <div className="block">
          <div className="info">
            <span>01</span> PICK YOUR DESTINATION
          </div>
          <div className="destination_card">
            <div className="destination_card_img">
              <img src={currentPlanet?.img} alt=""></img>
            </div>
            <div className="destination_card_planet">
              <Container className="nav_container">
                <div className="nav_links">
                  <Group spacing={35} position="right" className="nav_group">
                    {mainItems}
                  </Group>
                </div>
              </Container>
              <h1>{currentPlanet?.name}</h1>
              <p>{currentPlanet?.description}</p>
              <hr />
              <div className="destination_statistic">
                <div className="destination_statistic_distance">
                  <p>AVG. DISTANCE</p>
                  {currentPlanet?.distance}
                </div>
                <div className="destination_statistic_time">
                  <p>EST. TRAVEL TIME</p>
                  {currentPlanet?.time}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
