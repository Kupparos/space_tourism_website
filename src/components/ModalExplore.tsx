import { FC } from "react";
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from "@mantine/core";
import { FiTwitter, FiYoutube, FiInstagram } from "react-icons/fi";
import ContactList from "./ContactList";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    padding: theme.spacing.sm * 2,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.sm * 0.5,
    },
  },

  title: {
    fontFamily: `Barlow Condensed`,
    letterSpacing: "1px",
    color: theme.black,
    lineHeight: 1,
  },

  description: {
    color: theme.colors.dark,
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    padding: theme.spacing.xl,
    border: "1px solid gray",
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.black,

    "&:hover": {
      color: theme.colors.gray[5],
    },
  },

  input: {
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors.gray,
    "&:hover": {
      backgroundColor: theme.colors.gray[6],
    },
  },
}));

const social = [FiTwitter, FiYoutube, FiInstagram];

interface OpenedProps {
   open: boolean,
   updateVisibility: (arg: boolean) => void
}

const ModalExplore: FC<OpenedProps> = ({open, updateVisibility}) => {
  const { classes } = useStyles();

  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size={22} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>
          <ContactList />
          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
            }}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
            }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to know more about space"
            minRows={4}
            mt="md"
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
            }}
          />
          <Group position="right" mt="md">
            <Button className={classes.control} onClick={() => updateVisibility(false)}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
};

export default ModalExplore;
