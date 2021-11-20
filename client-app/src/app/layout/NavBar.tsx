import React from "react";
import { useStore } from "../stores/store";

//SEMANTIC UI
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
    const { activityStore } = useStore();

    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button positive content='Create Activity' onClick={() => activityStore.openForm()}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}