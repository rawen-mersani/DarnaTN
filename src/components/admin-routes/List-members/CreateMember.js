import React, { useState } from 'react'
import {  Link } from 'react-router-dom';


import { addMember } from '../../../actions/member.actions';
import {connect} from 'react-redux';

function CreateMember(member) {

    const [nom, setName] = useState("")
    const [pnom, setPname] = useState("")
    const [email, setMail] = useState("")
    const [dateNaissance, setDate] = useState("")
    const [mdp, setMdp] = useState("")


    const handleAddMember = (e) => {
        e.preventDefault();
        member.onAdd(
          {
            username: nom,
            nom: nom,
            pnom: pnom,
            email:  email ,
            date: dateNaissance,
            mdp : mdp,
            enabled: false,
            fonction : 1
        })
      
    }


    return (
        <div className="wrapper ">
    
        <div className="main-panel">
          
          <div className="content">
          <Link to= {`/members`}>
          <i className="material-icons create">keyboard_backspace</i>
        </Link>
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header card-header-primary">
            <h4 className="card-title">Ajouter un membre</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="bmd-label-floating">Nom</label>
                    <input type="text" className="form-control" value={nom} onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="bmd-label-floating">Prénom</label>
                    <input type="text" className="form-control" value={pnom} onChange={(e) => setPname(e.target.value)} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="bmd-label-floating">Date de naissance</label>
                    <input type="date" className="form-control" value={dateNaissance}  onChange={(e) => setDate(e.target.value)} />
                  </div>
                </div>
               
                
              </div>
              <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                    <label className="bmd-label-floating">Addresse Email </label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setMail(e.target.value)} />
                  </div>
                </div>
              
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="bmd-label-floating">Mot de passe</label>
                    <input type="password" className="form-control" value={mdp} onChange={(e) => setMdp(e.target.value)} />
                  </div>
                </div>
               
              </div>
              
              
               
              <button onClick={handleAddMember} className="btn btn-primary pull-right">Ajouter</button>
              <div className="clearfix" />
            </form>
          </div>
        </div>
      </div>
      
    </div>
    </div>
    </div>
    </div>


    )
}
const mapStateToProps = (state) => {
    return {
      members : state.members
      
    };
  };

  const  mapDispatchToProps = (dispatch) => {
    return {
      onAdd: (member) => dispatch(addMember(member))
      
    };
  };
    


export default connect(mapStateToProps, mapDispatchToProps)(CreateMember);