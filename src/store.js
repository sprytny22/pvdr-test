import {createStore} from "redux";

const initialState = {
    isLoggedIn: false,
    login: "",
    password: "",
    dashboard: [
        {
            type: "info",
            props: {
                header: "Ship name",
                content: "IMO Number / Owner / VDR firmware V.5.2x"
            }
        },
        {
            type: "info",
            props: {
                header: "Condition",
                content: "VDR has been free of conditions."
            }
        },
        {
            type: "info",
            props: {
                header: "Manuals",
                content: "Authority manual"
            }
        },
        {
            type: "info",
            props: {
                header: "Replay system",
                content: "Replay.pdf"
            }
        }
    ],
    serial: [
        {
            type: "select",
            name: "system",
            props: {
                header: "Choose System",
                data: [
                    "first",
                    "second",
                    "third"
                ],
                selected: "first"
            }
        },
        {
            type: "select",
            name: "dhcp",
            props: {
                header: "DHCP Choose",
                data: [
                    "Auto",
                    "Manual"
                ],
                selected: "Manual"
            }
        }
    ]
}

const reducer = (state = initialState, action) => {
    if (action.type === "submitLogin") {
        return {...state, isLoggedIn: true};
    }
    return state;
}

export const store = createStore(reducer);