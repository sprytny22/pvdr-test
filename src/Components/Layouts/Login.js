import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {Box, Button, Flex, FormControl} from "@chakra-ui/react";
import {HeaderItem} from "../HeaderItem";
import {InputForm} from "../InputForm";

export const Login = () => {

    const dispatch = useDispatch();
    const {handleSubmit, register, formState: {errors}} = useForm();

    const onSubmit = (values) => {
        dispatch({type: "submitLogin", payload: values});
    }

    return (
        <>
            <Flex align="center" justify="center">
                <Box className="box" m={{base: 100, md: 200, xl: 300}} boxShadow="base">
                    <HeaderItem value="Login"/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl px={8}>
                            <InputForm
                                id="login"
                                label="Login"
                                type="text"
                                placeholder="login"
                                errors={errors.username}
                                {...register("username", {
                                    required: "Login is required",
                                })}
                            />
                            <InputForm
                                id="password"
                                label="Password"
                                type="password"
                                placeholder="password"
                                errors={errors.password}
                                {...register("password", {
                                    required: "Password is required",
                                })}
                            />
                            <Button colorScheme="blue" type="submit" my={8}>
                                Login
                            </Button>
                        </FormControl>
                    </form>
                </Box>
            </Flex>
        </>
    )
}