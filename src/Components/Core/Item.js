import InputItem from "./Items/InputItem";
import SelectItem from "./Items/SelectItem";
import InfoItem from "./Items/InfoItem";

const Item = ({type, ...props}) => {

    const components = {
        input: InputItem,
        select: SelectItem,
        info: InfoItem
    }

    const SpecificComponent = components[type];

    return (
        <>
            <SpecificComponent {...props} />
        </>
    );
}

export default Item;