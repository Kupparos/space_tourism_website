import { FC } from "react";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlineLocationMarker, HiOutlineSun } from "react-icons/hi";
import { createStyles, Text, Group, SimpleGrid, Box } from '@mantine/core';

const useStyles = createStyles((theme) => ({
   wrapper: {
     display: 'flex',
     alignItems: 'center',
     color: theme.black,
   },
 
   icon: {
     marginRight: theme.spacing.md,
     backgroundColor: 'transparent',
   },
 }));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
   icon: React.FC<any>;
   title: React.ReactNode;
   description: React.ReactNode;
 }
 
 function ContactIcon({
   icon: Icon,
   title,
   description,
   className,
   ...others
 }: ContactIconProps) {
   const { classes, cx } = useStyles();
   return (
     <div className={cx(classes.wrapper, className)} {...others}>
         <Box mr="md">
           <Icon size={24} />
         </Box>
       <div>
         <Text size="xs">
           {title}
         </Text>
         <Text>{description}</Text>
       </div>
     </div>
   );
 }
 
 interface ContactIconsListProps {
   data?: ContactIconProps[];
 }
 
 const MOCKDATA = [
   { title: 'Email', description: 'hello@space.dev', icon: MdAlternateEmail },
   { title: 'Phone', description: '+49 (800) 305 55 00', icon: FiPhone },
   { title: 'Address', description: '3175 Rowes Lane, Scottsville', icon: HiOutlineLocationMarker },
   { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: HiOutlineSun },
 ];
 
 export function ContactIconsList({ data = MOCKDATA }: ContactIconsListProps) {
   const items = data.map((item, index) => <ContactIcon key={index} {...item} />);
   return <Group direction="column">{items}</Group>;
 }
 

const ContactList: FC = () => {
   return(
      <SimpleGrid cols={1} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box>
        <ContactIconsList/>
      </Box>
    </SimpleGrid>
   )
}

export default ContactList