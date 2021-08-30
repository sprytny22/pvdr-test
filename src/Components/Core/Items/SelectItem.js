import {Box, FormControl, FormLabel, Select, Text, FormHelperText} from "@chakra-ui/react";

export const SelectItem = ({...props}) => {

    return (
        <>
            <Box className="item-info" w={{base: "100%", md: "50%", lg: "33%"}}>
                <FormControl>
                    <FormLabel>
                        <Text className="item-info__header">{props.header}</Text>
                    </FormLabel>
                    <Select defaultValue={props.selected} {...props.form}>
                        {props.data.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                    </Select>
                    <FormHelperText>{props.errors && <Text>{props.errors.message}</Text> }</FormHelperText>
                </FormControl>
            </Box>
        </>
    )
}

export default SelectItem;