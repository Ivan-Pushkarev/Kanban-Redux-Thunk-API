import { withRouter } from 'react-router';
import {useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect, useSelector} from 'react-redux';
import {deleteCard, editCard, editFormElements, getEditCard} from './Redux/Actions';
import EditTaskFormModal from './EditTaskFormModal';

function EditTask(props) {
    const cardId = props.match.params.cardId
    const card = useSelector(state => state.editCardValue )

    useEffect(() => {
        props.getEditCard(cardId)
          }, []);

    return (
        <div className="container">
            <h2 className="p-3 mb-2 bg-secondary text-white">Edit task form</h2>
            <form className="container-sm" class="p-3 mb-2 bg-light text-dark">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h5>Name</h5></label>
                    <div className="col-sm-10">
                        <input name="name" className="form-control" id="inputEmail3" value={card.name}
                               onChange={(e) => props.editFormElements(e.target.name, e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label"><h5>Description</h5></label>
                    <div className="col-sm-10">
                        <input name="description" className="form-control" id="inputPassword3" value={card.description}
                               onChange={(e) =>  props.editFormElements(e.target.name, e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"><h5>Priority</h5></label>
                    <div className="col-sm-10">
                        <select name="priority" value={card.priority} className="form-select" aria-label="Default select example"
                                onChange={(e) =>  props.editFormElements(e.target.name, e.target.value)}>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"><h5>Status</h5></label>
                    <div className="col-sm-10">
                        <select name="status" value={card.status} className="form-select" aria-label="Default select example"
                                onChange={(e) =>  props.editFormElements(e.target.name, e.target.value)}>
                            <option value="to do">Todo</option>
                            <option value="progress">Progress</option>
                            <option value="review">Review</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                </div>
                <EditTaskFormModal id={props.match.params.cardId} buttonName={'Update'}/>
                <Link to ="/" className="btn btn-outline-secondary" >Cancel</Link>
                <EditTaskFormModal id={props.match.params.cardId} buttonName={'Delete Task'}/>
            </form>
        </div>
    
    )
}

export default withRouter(connect(null, {getEditCard, editCard, deleteCard, editFormElements})(EditTask));