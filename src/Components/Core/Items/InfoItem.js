import {Box, Text} from "@chakra-ui/react";

export const InfoItem = ({value, ...props}) => {
    return (
        <>
            <Box className="item-info" w={{base: "100%", md: "50%", lg: "33%"}}>
                <Text className="item-info__header">{props.header}</Text>
                <Text className="item-info__content">{props.content}</Text>
            </Box>
        </>
    )
}

export default InfoItem;