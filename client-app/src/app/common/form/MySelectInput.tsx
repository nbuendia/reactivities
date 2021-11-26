import React from "react";

//SEMANTIC UI
import { Form, Label, Select } from "semantic-ui-react";

//FORMIK
import { useField } from "formik";

interface Props {
    placeholder: string;
    name: string;
    options: any;
    label?: string;
}

function MySelectInput(props: Props) {
    const [field, meta, helpers] = useField(props.name);

    return(
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <Select 
                clearable 
                options={props.options} 
                value={field.value || null} 
                onChange={((event, data) => helpers.setValue(data.value))}
                onBlur={() => helpers.setTouched(true)}
                placeholder={props.placeholder}
             />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}

export default MySelectInput;