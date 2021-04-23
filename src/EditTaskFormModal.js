import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import {deleteCard, editCard, toggleEditModal} from './Redux/Actions';
import {useHistory} from 'react-router';

const EditTaskFormModal = (props) => {
    
    let history = useHistory();
    const card = useSelector(state => state.editCardValue );
    const modal = useSelector(state => state.editModal);
    const toggle = props.toggleEditModal();
    
    const {className, deleteCard, id, name, editCard} = props;
    let leftButton, rightButton, leftButtonHandler, modalHeader;
    if( name==='Update'){
        modalHeader =  'Card was updated';
        leftButton = 'Back to list';
        rightButton = 'Keep editing';
        leftButtonHandler = () =>{
            editCard(id, card)
            history.push('/')
        }
    }
    else {
        modalHeader = 'Are you sure you want to delete this card?';
        leftButton = 'YES';
        rightButton = 'NO';
        leftButtonHandler = () =>{
            deleteCard(id);
            toggle();
        }
    }
    
    return (
        <>
            <Button outline color="secondary" onClick={toggle}>{name}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{modalHeader}</ModalHeader>
                <ModalFooter>
                    <Link to ="/">
                        <Button color="secondary" onClick={leftButtonHandler}>{leftButton}</Button>
                    </Link>
                    <Button color="primary" onClick={toggle}>{rightButton}</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default connect(null, {deleteCard, editCard, toggleEditModal})(EditTaskFormModal);