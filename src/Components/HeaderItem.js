import PropTypes from 'prop-types';
import {Text, Divider } from '@chakra-ui/react';

export const HeaderItem = ({value}) => {
    return (
        <div className="header-item">
            <Text fontSize="3xl" align="left" m={8}>
                {value}
                <Divider width="75%"/>
            </Text>
        </div>
    )
}

HeaderItem.propTypes = {
    value: PropTypes.string.isRequired
}