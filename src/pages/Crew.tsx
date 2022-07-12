import { FC, useState } from "react";
import "../styles/crew.css";
import ansari from "../assets/crew/image-anousheh-ansari.png";
import hurley from "../assets/crew/image-douglas-hurley.png";
import shuttleworth from "../assets/crew/image-mark-shuttleworth.png";
import glover from "../assets/crew/image-victor-glover.png";
import { Container, Group, Anchor, createStyles } from "@mantine/core";

const Crew: FC = () => {
  const crewMember: Array<Member> = [
    {
      id: 0,
      name: "DOUGLAS HURLEY",
      img: hurley,
      position: "COMMANDER",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      id: 1,
      name: "MARK SHUTTLEWORTH",
      img: shuttleworth,
      position: "MISSION SPECIALIST",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      id: 2,
      name: "VICTOR GLOVER",
      img: glover,
      position: "PILOT",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      id: 3,
      name: "ANOUSHEH ANSARI",
      img: ansari,
      position: "FLIGHT ENGINEER",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  interface Member {
    id: number;
    name: string;
    img: string;
    position: string;
    description: string;
  }

  const useStyles = createStyles((theme) => ({
    mainLink: {
      backgroundColor: "gray",
      width: "0.8rem",
      height: "0.8rem",
      borderRadius: "50%",
      transition: "color 500ms ease, color 500ms ease",
    },

    mainLinkActive: {
      backgroundColor: "white",
    },
  }));

  const [member, setMember] = useState<number>(0);
  const currentMember: Member | undefined = crewMember.find(
    (element: Member): boolean => element.id === member
  );

  const mainLinks: Array<number> = [0, 1, 2, 3];

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
        setMember(item);
      }}
    ></Anchor>
  ));

  return (
    <div className="crew">
      <div className="container">
        <div className="block">
          <div className="info">
            <span>02</span> MEET YOUR CREW
          </div>
          <div className="crew_card">
            <div className="crew_card_member">
              <div className="member">
                <h2>{currentMember?.position}</h2>
                <h1>{currentMember?.name}</h1>
                <p>{currentMember?.description}</p>
              </div>
              <Container className="nav_container">
                <div className="nav_links">
                  <Group spacing={35} position="right" className="nav_group">
                    {mainItems}
                  </Group>
                </div>
              </Container>
            </div>
            <div className="crew_card_photo">
              <img src={currentMember?.img} alt="" style={{ height: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
