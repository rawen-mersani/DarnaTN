import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';




  export default function Login(){

    // const [mail, setMail] = useState("")
    // const [mdp, setMdp ]= useState("")

    // const handleLogin = () => {
    //     verifyLogin(mail, mdp)
    //     setMail("")
    //     setMdp("")
        
    // }

    // const verifyLogin = (mail, mdp)=>{
        
        
    //      //console.log('mail: ', mail);
        
    //      const adherant=fetchAdherantByPassword(mail, mdp);
    //      //console.log("ad",adherant)

    //      if(adherant)
    //        if(adherant.etat==="oui")
    //        {
    //        alert("Vous n'avez pas le droit pour se connecter !")
             
    //        }
    //        else
    //         withRefresh.push({
    //             pathname: `/Listelivres`,
    //             state: { adherant: adherant }
    //           });
              
    //       //  return( <Redirect to={{
    //       //     pathname: '/Listelivres',
    //       //     state: { adherant: adherant}
    //       // }}
    //       // />)
    //      else if (mail==="admin@mail.com" && mdp==="admin")
    //      withRefresh.push({
    //         pathname: `/Adhérents`,
    //         state: { name: "admin",
    //                  pname: "admin" 
    //                 }
    //       });
    //      else
    //      alert('Mail ou Mot de passe incorrect ')
    //   }

    return (
        <>
         <div className="content login">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <div className="card card-profile">
          <div className="card-avatar">
            <a href="javascript:;">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIuMDAwMTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiA1MTEuOTk2MDk0Yy0xNDEuNDg0Mzc1IDAtMjU2LTExNC42NTYyNS0yNTYtMjU1Ljk5NjA5NCAwLTE0MS40ODgyODEgMTE0LjQ5NjA5NC0yNTYgMjU2LTI1NiAxNDEuNDg4MjgxIDAgMjU1Ljk5NjA5NCAxMTQuNDk2MDk0IDI1NS45OTYwOTQgMjU2IDAgMTQxLjQ3NjU2Mi0xMTQuNjY3OTY5IDI1NS45OTYwOTQtMjU1Ljk5NjA5NCAyNTUuOTk2MDk0em0wIDAiIGZpbGw9IiNiYjQwZDAiIGRhdGEtb3JpZ2luYWw9IiM2NmE5ZGYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYgMHY1MTEuOTk2MDk0YzE0MS4zMjgxMjUgMCAyNTUuOTk2MDk0LTExNC41MTk1MzIgMjU1Ljk5NjA5NC0yNTUuOTk2MDk0IDAtMTQxLjUtMTE0LjUwNzgxMy0yNTYtMjU1Ljk5NjA5NC0yNTZ6bTAgMCIgZmlsbD0iIzljMjdiMCIgZGF0YS1vcmlnaW5hbD0iIzRmODRjZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAzMTZjLTc0LjQ4ODI4MSAwLTE0NS41MTE3MTkgMzIuNTYyNS0xOTcuNDE3OTY5IDEwMi45Njg3NSAxMDMuMzYzMjgxIDEyNC45NDE0MDYgMjk0LjY4NzUgMTIzLjg3NSAzOTYuNjU2MjUtMi4yMzA0NjktMjUuMTc5Njg3LTI1LjA0Njg3NS04MS44OTQ1MzEtMTAwLjczODI4MS0xOTkuMjM4MjgxLTEwMC43MzgyODF6bTAgMCIgZmlsbD0iI2U3YjhlZiIgZGF0YS1vcmlnaW5hbD0iI2Q2ZjNmZSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ1NS4yMzgyODEgNDE2LjczODI4MWMtNDguMTQwNjI1IDU5LjUyNzM0NC0xMjAuMzcxMDkzIDk1LjI1NzgxMy0xOTkuMjM4MjgxIDk1LjI1NzgxM3YtMTk1Ljk5NjA5NGMxMTcuMzQ3NjU2IDAgMTc0LjA1ODU5NCA3NS42OTkyMTkgMTk5LjIzODI4MSAxMDAuNzM4Mjgxem0wIDAiIGZpbGw9IiNlNWIxZWQiIGRhdGEtb3JpZ2luYWw9IiNiZGVjZmMiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYgMjcxYy00OS42Mjg5MDYgMC05MC00MC4zNzUtOTAtOTB2LTMwYzAtNDkuNjI1IDQwLjM3MTA5NC05MCA5MC05MCA0OS42MjUgMCA5MCA0MC4zNzUgOTAgOTB2MzBjMCA0OS42MjUtNDAuMzc1IDkwLTkwIDkwem0wIDAiIGZpbGw9IiNlN2I4ZWYiIGRhdGEtb3JpZ2luYWw9IiNkNmYzZmUiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYgNjF2MjEwYzQ5LjYyODkwNiAwIDkwLTQwLjM3MTA5NCA5MC05MHYtMzBjMC00OS42Mjg5MDYtNDAuMzcxMDk0LTkwLTkwLTkwem0wIDAiIGZpbGw9IiNlNWIxZWQiIGRhdGEtb3JpZ2luYWw9IiNiZGVjZmMiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />            </a>
          </div>
          <div className="card-body">
            <h3 className="card-title">Se connecter</h3>
                <div className="row">
                    
                    <div className="col-md-12">
                        <div className="form-group">
                        <input type="mail" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                        <input type="password" className="form-control" placeholder="Mot de passe" />
                        </div>
                    </div>
                    </div>

            <a href="javascript:;" className="btn btn-primary btn-round">Se connecter</a>
            <p>Vous n'avez pas de compte ? <Link to= {`/signup`}>Créer un</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </>

       
    );
}
