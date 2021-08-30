import {routes} from "../router";
import {Route, Switch} from "react-router-dom";
import {HeaderItem} from "./HeaderItem";

export const RoutesSwitchWrapper = () => {
    return (
        <>
            <Switch>
                {routes.map((route, i) => (
                    <Route path={route.path} render={props => (
                        <>
                            <HeaderItem value={route.label} />
                            <div className="component-container">
                                <route.component {...props} routes={route.routes} />
                            </div>
                        </>
                    )} />
                ))}
            </Switch>
        </>
    );
}