import React, { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import {  Link } from 'react-router-dom';
import {connect } from 'react-redux'
import {fetchMemberById}  from '../../../actions/member.actions'



function MemberDetails({members, fetchMember}) {



 
  const { memberId } = useParams()
  useEffect(() => {
    fetchMember(memberId)
    // const fetchData = async () => {
    //   const result = await fetchMemberById(memberId)
    //   setMember(result)
    //   console.log("result: ",result);
    //   debugger;
    // }
    // fetchData()
  }, [memberId])


  
  


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
        <div class="card-header card-header-primary">
              <h4 class="card-title">{members.nom} {members.prenom}</h4>
              <p class="card-category">Les détails du membre</p>
            </div>
            
          <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                <div className="tim-typo">
                    <h4>Nom </h4>
                  </div>
                </div>
                <div className="col-md-4">
                <div className="tim-typo">
                    <h4>{members.nom} </h4>
                  </div>
                </div>
                
              </div>
              <div className="row">
                <div className="col-md-4">
                <div className="tim-typo">
                    <h4>Prénom </h4>
                  </div>
                </div>
                <div className="col-md-4">
                <div className="tim-typo">
                    <h4>{members.prenom} </h4>
                  </div>
                </div>
                
              </div>
              <div className="row">
                <div className="col-md-4">
                <div className="tim-typo">
                    <h4>Adresse Email </h4>
                  </div>
                </div>
                <div className="col-md-4">
                <div className="tim-typo">
                    <h4>{members.email} </h4>
                  </div>
                </div>
                
              </div>

              
              <div className="row">
                <div className="col-md-4">
                <div className="tim-typo">
                    <h4>Date de naissance </h4>
                  </div>
                </div>
                <div className="col-md-4">
                <div className="tim-typo">
                    <h4>{members.dateNaissance} </h4>
                  </div>
                </div>
                
              </div>
              <div className="row">
                <div className="col-md-4">
                <div className="tim-typo">
                    <h4>Etat de compte </h4>
                  </div>
                </div>
                <div className="col-md-4">
                <div className="tim-typo">
                    { members.enabled ? (
                        <h4>Activé</h4>
                        ) : (  
                        <h4>Désactivé</h4>)
                    }
                  </div>
                </div>
                
              </div>
              
              
               
              <div className="clearfix" />
          </div>
        </div>
      </div>
      
    </div>
    </div>
    </div>
    </div>









  )
}
const mapStateToProps = state => {
    return {
      members : state.members
      
    }
    // console.log("state", state);
  
  };

  
  const mapDispatchToProps = dispatch => {
    return {
        fetchMember : (memberId) => dispatch(fetchMemberById(memberId)), 
    }
  };
  export default connect(mapStateToProps,mapDispatchToProps)(MemberDetails);