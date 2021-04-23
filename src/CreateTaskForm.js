import 'bootstrap/dist/css/bootstrap.css';
import {withRouter} from 'react-router';
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {createCard, openModalFunction} from './Redux/Actions';
import CreateModal from './CreateModal';

function CreateTaskForm(props) {
    console.log('state Create Task Form', props);
 
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskPriority, setTaskPriority] = useState('');
    const [taskStatus, setTaskStatus] = useState('to do');
    
    let history = useHistory()
    
    const createButtonHandler = () => {
        const newTask = {
            name: taskName,
            description: taskDescription,
            priority: taskPriority,
            status: taskStatus
        };
        props.createCard(newTask);
        history.push('/');
        
    };
    
    return (
        <div className="container">
            <h2 className="p-3 mb-2 bg-secondary text-white">Create task form</h2>
            
            <form className="container-sm" class="p-3 mb-2 bg-light text-dark">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h5>Name</h5></label>
                    <div className="col-sm-10">
                        <input name="name" className="form-control" id="inputEmail3"
                               onChange={(e) => setTaskName(e.target.value)} placeholder="Add name"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label"><h5>Description</h5></label>
                    <div className="col-sm-10">
                        <input name="description" className="form-control" id="inputPassword3"
                               placeholder="Add description"
                               onChange={(e) => setTaskDescription(e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"><h5>Priority</h5></label>
                    <div className="col-sm-10">
                        <select value={taskPriority} className="form-select" aria-label="Default select example"
                                name="priority"
                                onChange={(e) => setTaskPriority(e.target.value)}>
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
                        <select value={taskStatus} name="status" className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => setTaskStatus(e.target.value)}>
                            <option value="to do">Todo</option>
                            <option value="progress">Progress</option>
                            <option value="review">Review</option>
                            <option value="done">Done</option>
                        
                        </select>
                    </div>
                </div>
                
                    <button type="submit" className="btn btn-outline-secondary" onClick={createButtonHandler}>Create
                    </button>
                
                <Link to="/" className="btn btn-outline-secondary">Cancel</Link>
                <CreateModal/>
              
            </form>
        </div>
    );
    
}

const mapStateToProps = state => ({
    //openCreateModal: state.openCreateModal
  modal: state.modal
});

export default withRouter(connect(mapStateToProps, {createCard})(CreateTaskForm));
