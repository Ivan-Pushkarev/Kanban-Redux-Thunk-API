import { withRouter } from 'react-router';
import { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Card from "./Card";
import {connect} from "react-redux";
import {getCards} from "./Redux/Actions";


function List(props) {
   
   useEffect(() => {
       props.getCards()
   }, []);
    
    return <div>
        <div className="container">
        <h2><center className ="p-3 mb-2 bg-secondary text-white"> Kanban App( Redux-Thunk version)</center></h2>
            <div className="row justify-content-around">
                
                <div className="col">
                    <h3> Todo ⇒ </h3>
                    <hr/>
                    <div>
                        <Card  status={'to do'} />
                    </div>
                </div>
                <div className="col">
                    <h3> Progress ⇒ </h3>
                    <hr/>
                    <div>
                        <Card  status={'progress'} />
                    </div>
                </div>
                <div className="col">
                    <h3> Review ⇒ </h3>
                    <hr/>
                    <div>
                        <Card status={'review'} />
                    </div>
                </div>
                <div className="col">
                    <h3> Done </h3>
                    <hr/>
                    <div>
                         <Card status={'done'} />
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    
}

const mapDispatchToProps = (dispatch) => ({
       getCards: () => dispatch(getCards())
})
export default withRouter(connect(null, mapDispatchToProps)(List));