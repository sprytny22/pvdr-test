import {
    Flex,
    Stack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    Box,
    Spacer,
    Icon
} from "@chakra-ui/react";
import {ChevronDownIcon, SettingsIcon} from "@chakra-ui/icons";
import { BiLogIn } from "react-icons/bi";
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <Flex className="navbar">
                <Stack>
                    <Menu closeOnSelect={false}>
                        <MenuButton className="navbar__button-item" as={Button} size="lg" rightIcon={<ChevronDownIcon />}>
                            Configuration
                        </MenuButton>
                        <MenuList minWidth="240px">
                            <MenuItemOption value="asc"><Link to="/serial">Serial Interface Configuration</Link></MenuItemOption>
                            <MenuItemOption value="desc"><Link to="/network">Network Configuration</Link></MenuItemOption>
                        </MenuList>
                    </Menu>
                </Stack>
                <Spacer />
                <Box className="navbar__icon-item" >
                    <SettingsIcon w={6} h={6}/>
                </Box>
                <Box className="navbar__icon-item">
                    <Icon as={BiLogIn} w={8} h={8}/>
                </Box>
            </Flex>
        </>
    )
}