import {
    ADD_RUBRIQUE_ERROR, 
    ADD_RUBRIQUE_LOADING,
    ADD_RUBRIQUE_SUCCESS,
    UPDATE_RUBRIQUE_ERROR,
    UPDATE_RUBRIQUE_LOADING,
    UPDATE_RUBRIQUE_SUCCESS,
    DELETE_RUBRIQUE_ERROR,
    DELETE_RUBRIQUE_LOADING,
    DELETE_RUBRIQUE_SUCCESS,
    FETCH_RUBRIQUE_ERROR,
    FETCH_RUBRIQUE_LOADING,
    FETCH_RUBRIQUE_SUCCESS,
    
} from './types'

import axios from 'axios';
import { Redirect } from 'react-router-dom';




// ****************** Create ***********************

export const createRubriqueSuccess = (data) => {
    return {
        type: ADD_RUBRIQUE_SUCCESS,
        payload : data,
    }
}

export const createRubriqueError = (data) => {
    return {
        type: ADD_RUBRIQUE_ERROR,
        payload : data,
    }
}


export const addRubrique = (RUBRIQUE)=>  {
    
    const data = {
        username: RUBRIQUE.nom,
        nom: RUBRIQUE.nom,
        prenom: RUBRIQUE.pnom,
        email:  RUBRIQUE.email ,
        dateNaissance: RUBRIQUE.date,
        mdp : RUBRIQUE.mdp,
        enabled: RUBRIQUE.enabled,
        fonction : RUBRIQUE.fonction
    };
    // console.log ("RUBRIQUE",RUBRIQUE);
    console.log ("data",data);

    return (dispatch) => {
        
        return axios.post('http://localhost:9094/api/auth/AddMembre', data )
            .then(response => {
                const id = response.data;
                    dispatch(createRubriqueSuccess(data));
                    Redirect('/RUBRIQUEs');
               
            }).catch (error =>{

                const errorPayload = {};
                errorPayload['message'] = error.response.data.message;
                errorPayload['status'] = error.response.status;
                dispatch(createRubriqueError(errorPayload));

            })
    }
}



// ****************** Fetch ***********************
export const fetechRubriquesSuccess =  RUBRIQUEs => {
    return {
        type : FETCH_RUBRIQUE_SUCCESS,
        payload : RUBRIQUEs
        
    }
}
export const fetechRubriquesLoading = () => {
    return {
        type : FETCH_RUBRIQUE_LOADING,
    }
}
export const fetechRubriquesError = error => {
    return {
        type : FETCH_RUBRIQUE_ERROR,
        payload : error,
    }
}




export const fetchRubriques = () => {
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechRubriquesLoading)
        axios.get('http://localhost:9094/Contact/listContact')
        .then(response => { 
          const RUBRIQUEs = response.data;
          dispatch(fetechRubriquesSuccess(RUBRIQUEs))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechRubriquesError(errorMsg))

        })
 
    }
}


// ****************** Edit ***********************
export const editRubriquesSuccess = (data) => {
    return {
        type : UPDATE_RUBRIQUE_SUCCESS,
        payload : data,
    }
}

export const editRubriquesError = (data) => {
    return {
        type : UPDATE_RUBRIQUE_ERROR,
        payload : data,
    }
}

export const editRubrique = (RUBRIQUE) => {
    const data = {
        id : RUBRIQUE.id,
        nom : RUBRIQUE.nom,
        prenom : RUBRIQUE.pnom,
        email : RUBRIQUE.email,
        dateNaissance : RUBRIQUE.date,
        enabled : RUBRIQUE.enabled
    };
    
    return (dispatch) => {
        return axios.put(`http://localhost:9094/api/auth/updateUser/${data.id}`, data)
            .then(() => {
                // return axios.get(`${url}/{data.id}`)
                dispatch(editRubriquesSuccess(data));
                Redirect('/RUBRIQUEs');
                   
            }).catch ((error) => {
                const errorPayload = {};
                            errorPayload['message'] = error.response.data.message;
                            errorPayload['status'] = error.response.status;
                            dispatch(editRubriquesError(errorPayload));

                    })
    }

}
// ****************** Delete ***********************
export const deleteRubriqueSuccess = (id) => {
    return {
        type : DELETE_RUBRIQUE_SUCCESS,
        payload : {
            id : id
        },
    }
}

export const deleteRubriqueError = (data) => {
    return {
        type : DELETE_RUBRIQUE_ERROR,
        payload : data,
    }
}
export const deleteRubrique = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:9094/api/auth/User/delete/${id}`)
        .then (() => {
            dispatch(deleteRubriqueSuccess(id))
        }).catch ((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            
            dispatch(deleteRubriqueError(errorPayload))
        })
    }
}