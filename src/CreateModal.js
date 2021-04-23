import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const CreateModal = (props) => {
    const {className, modal} = props;
   
    return (
        <>
            <Modal isOpen={modal}  className={className}>
                <ModalHeader >Card was successfully created</ModalHeader>
                <ModalBody> Do you want to create another one?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.closeCreateModal}>Yes</Button>{' '}
                    <Link to ="/">
                    <Button color="secondary" onClick={props.closeCreateModal}>Back to List</Button>
                    </Link>
                </ModalFooter>
            </Modal>
        </>
    );
}
const mapStateToProps = state =>({
    modal: state.modal
})
const mapDispatchToProps = dispatch => ({
closeCreateModal: () => dispatch({
    type: 'CLOSE_MODAL'
   })
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);