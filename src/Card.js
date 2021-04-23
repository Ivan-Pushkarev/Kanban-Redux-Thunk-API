import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";
import {connect, useSelector} from 'react-redux';
import {deleteCard, editCard} from "./Redux/Actions";
import DeleteModal from './EditTaskFormModal';


const currentStatus = ['to do','progress','review','done'];
function Card(props) {
   const list = useSelector(state => state.list);
   
    let index = currentStatus.indexOf(props.status);
    let leftButton = currentStatus[index - 1];
    let rightButton =currentStatus[index +1];
        const leftButtonHandler = (id) => {
        const updatedTask = {...list.filter(el => el._id === id)[0], status: leftButton}
        props.editCard(id, updatedTask)
    }
    
    const rightButtonHandler = (id) => {
        const updatedTask = {...list.filter(el => el._id === id)[0], status: rightButton}
        props.editCard(id, updatedTask)
    }
    
    return (
        <div>
            <center className="p-3 mb-2 bg-light text-dark">
                
                {
                    list
                        .filter(el=> el.status === props.status)
                        .map(el => <div key={el._id}>  <span> <h5 className="p-3 mb-2 bg-secondary text-white"> {el.name} </h5> </span>
                            <div><b>Description:</b> {el.description}</div>
                            <div>
                                {
                                    props.status !== 'to do' &&
                                    <button type="button" className="btn btn-outline-secondary"
                                    onClick={() => leftButtonHandler(el._id)}> ⇦{leftButton}</button>
                                }
                                <Link to= {`/edit/${el._id}`}>
                                    <button className="btn btn-outline-secondary" >Edit</button>
                                </Link>
                                {
                                    props.status !== 'done'? <button type="button" className="btn btn-outline-secondary"
                                                                     onClick={() => rightButtonHandler(el._id)}>{rightButton}⇨</button> :
                                        <DeleteModal type="button" className="btn btn-outline-secondary" id={el._id}/>
                                       
                                }
                                
                                <hr/>
                            </div>
                        </div>)
                }
            </center>
        </div>
    
    );
    
}

export default withRouter(connect(null, {deleteCard, editCard})(Card));