import {Box, Flex, Text} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {routes} from "../router";

export const RoutingBar = () => {

    const location = useLocation();
    const [routeLabel, setRouteLabel] = useState("Default");

    useEffect(() => {
        let path = location.pathname;
        let route = routes.find((route) => {
            return route.path.toLowerCase() === path.toLowerCase();
        });
        setRouteLabel(route.label);
    }, [location.pathname])

    return (
        <>
            <Flex className="routing-bar">
                <Box className="routing-bar__icon-item">
                    <ArrowBackIcon w={6} h={6}/>
                </Box>
                <Box className="routing-bar__label">
                    <Text>{routeLabel}</Text>
                </Box>
            </Flex>
        </>
    )
}