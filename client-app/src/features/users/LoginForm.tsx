import React from "react";
import { observer } from "mobx-react-lite";

//SEMANTIC UI
import { Button, Header, Label } from "semantic-ui-react";

//COMPONENTS
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";

//FORMIK
import { ErrorMessage, Form, Formik } from "formik";

function LoginForm() {
    const { userStore } = useStore();

    return (
        <Formik 
            initialValues={{email: '', password: '', error: null}} 
            onSubmit={(values, {setErrors}) => userStore.login(values).catch(error => setErrors({error: 'Invalid Email or Password'}))} >
            {({handleSubmit, isSubmitting, errors}) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Login to Reactivies' color='teal' textAlign='center' />
                    <ErrorMessage name='error' render={() => 
                        <Label style={{marginBottom: 10}} basic color='red' content={errors.error} />} />
                    <MyTextInput name='email' placeholder='Email' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                    <Button loading={isSubmitting} positive content='Login' type='submit' fluid />
                </Form>
            )}
        </Formik>
    )
}

export default observer(LoginForm);