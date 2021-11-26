import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import { Activity } from "../../../../app/layout/models/activity";
import { categoryOptions } from "../../../../app/common/options/categoryOption";
import {v4 as uuid} from 'uuid';

//SEMANTIC UI
import { Button, Header, Segment } from "semantic-ui-react";
import { useHistory, useParams } from "react-router";
import LoadingComponent from "../../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";

//FORMIK
import { Formik, Form } from "formik";
import * as Yup from 'yup';

//COMPONENTS
import MyTextInput from "../../../../app/common/form/MyTextInput";
import MyTextArea from "../../../../app/common/form/MyTextArea";
import MySelectInput from "../../../../app/common/form/MySelectInput";
import MyDateInput from "../../../../app/common/form/MyDateInput";

function ActivityForm() {
    const {activityStore} = useStore();
    const history = useHistory();
    const {createActivity, updateActivity, loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();
    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: null,
        city: '',
        venue: ''
    });

    const validationSchema = Yup.object({
        title: Yup.string().required('The Activity Title is required!'),
        description: Yup.string().required('The Activity Description is required!'),
        category: Yup.string().required(),
        date: Yup.string().required('Date is required!').nullable(),
        city: Yup.string().required(),
        venue: Yup.string().required()
    })

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);

    function handleFormSubmit(activity: Activity) {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            };

            createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`));
        } else {
            updateActivity(activity).then(() => history.push(`/activities/${activity.id}`))
        }
    }

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

    return(
        <Segment clearing>
            <Header sub color='teal' content='Activity Details' />
            <Formik 
            validationSchema={validationSchema}
            enableReinitialize 
            initialValues={activity} 
            onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off' >
                        <MyTextInput name='title' placeholder='Title' />
                        <MyTextArea rows={3} placeholder='Description' name='description' />
                        <MySelectInput options={categoryOptions} placeholder='Category' name='category' />
                        <MyDateInput 
                            placeholderText='Date' 
                            name='date' 
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy h:mm aa'
                        />
                        <Header sub color='teal' content='Location Details' />
                        <MyTextInput placeholder='City' name='city' />
                        <MyTextInput placeholder='Venue' name='venue' />
        
                        <Button 
                            positive 
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading} 
                            floated='right' 
                            type='submit' 
                            content='Submit' />
                        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment>
    )
}

export default observer(ActivityForm);