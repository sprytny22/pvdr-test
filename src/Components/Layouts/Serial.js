import {useSelector} from "react-redux";
import Item from "../Core/Item";
import {useForm} from "react-hook-form";
import {Button, Flex} from "@chakra-ui/react";

const Serial = () => {

    const serialForms= useSelector(state => state.serial);
    const {handleSubmit, register, formState: {errors}} = useForm();

    const onSave = (values) => {
        console.log(values);
    }

    return (
      <form onSubmit={handleSubmit(onSave)}>
          {serialForms.map((form) => (
              <>
                  <Item
                        type={form.type}
                        form={register(form.name, {
                            minLength: { value: 4, message: "Minimum length should be 10" }
                        })}
                        errors={errors[form.name]}
                        {...form.props}
                  />
              </>
          ))}
          <Flex className="cb">
              <Button type="submit" mt={5}>
                  Save
              </Button>
          </Flex>
      </form>
    );
}

export default Serial;