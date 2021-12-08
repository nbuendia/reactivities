import React from "react";
import { observer } from "mobx-react-lite";

//SEMANTIC UI
import { Modal } from "semantic-ui-react";

//COMPONENTS
import { useStore } from "../../stores/store";

function ModalContainer() {
    const { modalStore } = useStore();

    return(
        <Modal open={modalStore.modal.open} onClose={modalStore.closeModal} size='mini'>
            {modalStore.modal.body}
        </Modal>
    )
}

export default observer(ModalContainer);