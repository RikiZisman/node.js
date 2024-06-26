
// import { useState } from 'react';
// import {Link} from "react-router-dom";

// import {ManagerContext} from '../context/manager.context'
// export const Connect = () => {
//     const [error, setError] = useState('');
//     const[order,setOrder]=useState(false);
//     const manager=useContext(ManagerContext)

//     const toCheck = (event) => {
//         event.preventDefault();
//         const username = event.target.elements.username.value;
//         const password = event.target.elements.password.value;
// console.log(username);
// console.log(password);

//         if (username == 'TRL' && password == "1234") {
//             // console.log("Redirecting to another component");
//             // history.push('admin');

//             console.log("bfbx,h");
//             setOrder(true);
//             manager[0]=true;
//         } else {
//             setError('The username or password is incorrect');
//         }
//     };

//     return (
//         <div>
//             {error && <p>{error}</p>}
//             <form onSubmit={toCheck}>
//                 <label htmlFor="username">Administrator Name</label>
//                 <input type="text" id="username" name="username"/>
//                 <label htmlFor="password">Enter your password</label>
//                 <input type="password" id="password" name="password"/>
//                <button type='submit'>להכנס</button>
//             </form>
//            { order&&<Link to={'/admin'}>ממשק מנהל</Link>}
//         </div>
//     );
// };

import React, { useContext } from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import {ManagerContext} from '../context/manager.context'
export const Connect = () => {
    const[order,setOrder]=useState(false);
    const manager=useContext(ManagerContext)
     const passwordManager=(e)=>{
      if(e==="123456")
      { console.log(manager[0]);
        setOrder(true);
        manager[0]=true;
        console.log(manager[0]);}
    else
    {
        setOrder(false);
        manager[0]=false;
    }
     }
    return <div>
     <input type="password" placeholder="password" onBlur={e=>passwordManager(e.target.value)}></input>
     <br></br>
  <br></br>
  {   order&&<Link to={'/admin'}>orders</Link>}
  <br></br>
  <br></br>
    
    </div>
}