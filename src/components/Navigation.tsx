import React, { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
} from "@mantine/core";
import logo from "../assets/shared/logo.svg";
import { useBooleanToggle } from "@mantine/hooks";
import { Link } from "react-router-dom";

const HEADER_HEIGHT = 84;

const useStyles = createStyles((theme) => ({
  header: {
    position: "absolute",
    background: "transparent",
    borderBottom: "none",
    marginTop: "3rem",
  },

  inner: {
    height: HEADER_HEIGHT,
    margin: "0",
    padding: "0",
    maxWidth: 'none',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
  },

  logo: {
    cursor: "pointer",
    marginLeft: '5vw',
  },

  burger: {
    [theme.fn.largerThan(500)]: {
      display: "none",
    },
    marginRight: '1rem',
  },

  links: {
    height: "6rem",
    width: '58vw',
    paddingRight: '2rem',
    display: "flex",
    justifyContent: "space-evenly",
    background: "rgba(255,255,255,.05)",
    backdropFilter: "blur(80px)",
    [theme.fn.smallerThan(770)]: {
      width: "70vw",
    paddingRight: '0',

    },
    [theme.fn.smallerThan(500)]: {
      display: 'none',
    },

    "&::before": {
      content: '" "',
      height: "1px",
      background: "rgb(80, 79, 79)",
      width: "30vw",
      position: 'fixed',
      top: '3rem',
      right: '58vw',
      [theme.fn.smallerThan(770)]: {
        display: "none",
      },
    },
  },

  mainLink: {
    textTransform: "uppercase",
    fontSize: "1rem",
    fontFamily: "Barlow Condensed",
    letterSpacing: "3px",
    color: "white",
    paddingBottom: '2.2rem',
    paddingTop: '1.2rem',
    fontWeight: 400,
    borderBottom: "3px solid transparent",
    transition: "border-color 200ms ease, color 200ms ease",
    textDecoration: 'none',

    "&:hover": {
      textDecoration: "none",
    },
  },

  mainLinkActive: {
    color: "white",
    borderBottomColor: "white",
  },
}));

interface LinkProps {
  label: string;
  link: string;
}

interface DoubleHeaderProps {
  mainLinks: LinkProps[];
}

function Navigation({ mainLinks }: DoubleHeaderProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Link
      to={item.link}
      key={item.label}
      className={cx(classes.mainLink, {
        [classes.mainLinkActive]: index === active,
      })}
      onClick={() => {
        setActive(index);
      }}
    >
      {item.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.header}>
      <Container className={classes.inner}>
        <a href="/" className={classes.logo}>
          <img src={logo} alt="" />
        </a>
        <div className={classes.links}>
          <Group spacing={35} position="right" className={classes.mainLink}>
            {mainItems}
          </Group>
        </div>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="md"
          color="white"
        />
      </Container>
    </Header>
  );
}

export default Navigation;
