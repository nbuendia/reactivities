import React from "react";

//SEMANTIC UI
import { Dimmer, Loader } from "semantic-ui-react";

interface Props {
    inverted?: boolean;
    content?: string;
}

export default function LoadingComponent({inverted = true, content = 'Loading...'}: Props) {
    return(
        <Dimmer active={true} inverted={inverted} >
            <Loader contect={content}/>
        </Dimmer>
    )
}