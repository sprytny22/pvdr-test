import './style.scss'
import {useSelector} from "react-redux";
import {Login} from "./Components/Login";
import {ApplicationContent} from "./Components/ApplicationContent";

function App() {

    const isLoggedIn = useSelector(state => state.isLoggedIn);

    return (
        <div>
            {isLoggedIn
                ?   <ApplicationContent />
                :   <ApplicationContent />
            }
        </div>
    );
}

export default App;
