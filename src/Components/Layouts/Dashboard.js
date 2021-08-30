import {useSelector} from "react-redux";
import Item from "../Core/Item";

const Dashboard = () => {

    const dashboardData = useSelector(state => state.dashboard);

    return (
        <>
            {dashboardData.map((item) => (
                <>
                    <Item type={item.type} {...item.props} />
                </>
            ))}
        </>
    );
}

export default Dashboard;