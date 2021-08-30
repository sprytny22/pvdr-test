import {Navbar} from "./Navbar";
import {RoutingBar} from "./RoutingBar";
import {BrowserRouter} from "react-router-dom";
import {Container} from "@chakra-ui/react";
import {RoutesSwitchWrapper} from "./RoutesSwitchWrapper";
import {ScaleFade } from "@chakra-ui/react";

export const ApplicationContent = () => {
    return (
        <>
            <BrowserRouter >
                <Navbar />
                <RoutingBar />
                <Container maxW="container.xl">
                    <ScaleFade in={true}>
                        <RoutesSwitchWrapper />
                    </ScaleFade>
                </Container>
            </BrowserRouter >
        </>
    )
}