import React, { useState } from  'react'
import {Link, BrowserRouter} from 'react-router-dom'
import './Member.css'
import {connect } from 'react-redux'
import { editMember, deleteMember } from '../../../actions/member.actions'




function Member(props){

    const [updateMode, setUpdateMode] = useState(false)
    const [idToUpdate, setidToUpdate] = useState(props.member.id)
    const [nomToUpdate, setNomToUpdate] = useState(props.member.nom)
    const [pnomToUpdate, setPnomToUpdate] = useState(props.member.prenom)
    const [emailToUpdate, setEmailToUpdate] = useState(props.member.email)
    const [dateToUpdate, setDateToUpdate] = useState(props.member.dateNaissance)


    
    const handleActivate = () => {
      
       props.onUpdate(
        {
            id: props.member.id,
            nom: nomToUpdate,
            pnom: pnomToUpdate,
            email:  emailToUpdate ,
            date: dateToUpdate,
            enabled: true
        }
       )
        
    }
    const handleBlock = () => {
        props.onUpdate(
            {
                id: props.member.id,
                nom: nomToUpdate,
                pnom: pnomToUpdate,
                email:  emailToUpdate ,
                date: dateToUpdate,
                enabled: false
            })
        
    }
    const handleDelete = (id) => {
        props.onDelete(id)     
    }
    const handleUpdate = () => {
        props.onUpdate(
            {
                id: props.member.id,
                nom: nomToUpdate,
                pnom: pnomToUpdate,
                email:  emailToUpdate ,
                date: dateToUpdate,
                enabled: props.member.enabled
            })
        setUpdateMode(false)
        
    }
    

    return(
        <>
        {!updateMode ? (
            <>
        
            
                <tr>
                        <td>
                            {props.member.id}
                        </td>
                        <td>
                            {props.member.nom}
                        </td>
                        <td>
                            {props.member.prenom}
                        </td>
                        
                        <td>
                            {props.member.email}
                        </td>
                        <td>
                            {props.member.dateNaissance}
                        </td>
                        
                        <td>
                            { props.member.enabled ? (
                                <i className="material-icons button" onClick={handleBlock} >block</i>
                                ) : (
                                <i className="material-icons button" onClick={handleActivate} >checked</i>
                                )}
                           
                        </td>
                        <td>
                            <Link to= {`/members/${props.member.id}`}>
                                <i className="material-icons button">read_more</i>
                            </Link>
                        </td>
                        <td>
                           <i className="material-icons  button" onClick={()=>setUpdateMode(true)} >edit</i>
                        </td>
                        <td>
                           <i className="material-icons button" onClick={()=>handleDelete(props.member.id)} >delete</i>
                        </td>
                        
                </tr>
            </>
            ) : (
                <>
                    <tr>
                    <td>
                        <div className="form-group">
                            <div className="col-sm-10">
                                <input type="text" className="form-control"  name="id" value={props.member.id}
                                        disabled />
                            </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="name" value={nomToUpdate}
                                        onChange={(e) => setNomToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="name" value={pnomToUpdate}
                                        onChange={(e) => setPnomToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="mail" className="form-control"  name="name" value={emailToUpdate}
                                        onChange={(e) => setEmailToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                       
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="date" className="form-control"  name="name" value={dateToUpdate}
                                        onChange={(e) => setDateToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        <td>
                            <button className="btn btn-success" onClick={handleUpdate}>Mettre à jour</button>
                        </td>
                        <td>
                        <button  className="btn btn-default" onClick={()=>setUpdateMode(false)}>Cancel</button>
                        </td>
                 </tr>
                </>
        
        
        
               )}
                </>

                     
    )


}

const mapStateToProps = state => {
    return {
      members : state.members
      
    }
    console.log("state", state);
  
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onUpdate : (member) => dispatch(editMember(member)), 
        onDelete : (id) => dispatch(deleteMember(id))
    }
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Member);