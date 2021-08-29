import PropTypes from 'prop-types';
import {
    Input,
    FormLabel,
    FormHelperText
} from "@chakra-ui/react"

export const InputForm = ({label, type, placeholder, errors, ...props}) => {
    return (
        <>
            <FormLabel mt={4}>{label}</FormLabel>
            <Input type={type} placeholder={placeholder} {...props}/>
            <FormHelperText color="red">{errors && <span>{errors.message}</span>}</FormHelperText>
        </>
    )
}

InputForm.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}