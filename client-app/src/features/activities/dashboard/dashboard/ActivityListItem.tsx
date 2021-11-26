import React from "react";
import { Link } from "react-router-dom";
import { Activity } from "../../../../app/layout/models/activity";

//SEMANTIC UI
import { Button, Icon, Item, Segment } from "semantic-ui-react";

import {format} from 'date-fns';

interface Props {
    activity: Activity
}

function ActivityListItem ({activity}: Props) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by BOB</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {format(activity.date!, 'MMM dd yyyy h:mm aa')}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button as={Link} to={`/activities/${activity.id}`} color='teal' floated='right' content='View' />
            </Segment>
        </Segment.Group>
    )
}

export default ActivityListItem;