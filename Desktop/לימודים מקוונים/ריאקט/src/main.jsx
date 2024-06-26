import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import './index.css'

import {ManagerContext} from './context/manager.context.jsx'

import { Services } from './componenta/meeting/services.jsx'
import { Service } from './componenta/meeting/serivce.jsx';
import { SighnIn } from './componenta/login/usersighin.jsx';
import { SighnUp } from './componenta/login/usersignup.jsx';
import { UpdateUser } from './componenta/actionsonuser/UpdateUser'
import { Business } from './componenta/business/Business'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {MeetingForm} from "./componenta/meeting/meetingInfo.jsx"
// import {SighnIn} from './componenta/login/usersighin.jsx'
import {Nav} from "./componenta/nav.component"
import { Admin } from './admin/admin.jsx'
import {Connect} from './admin/connectAdmin.jsx'

const manager=[false]

const router = createBrowserRouter([
  
  {
    path: "",
    Component: Nav,
    children: [{
      path: "/",
    Component: App,

    },
      {
      path: 'serivces',
      Component: Services,
      children: [{
        // חלק שמשתנה. כל פעם יהיה מזהה אחר
        path: ':service',
        Component: Service,
      }]
    }, {
      path: 'services/:service',
      Component: Service,
    }, 
    {
      path: 'meetingInfo',
      Component: MeetingForm,
    },

      // path: 'usersighin',
      // Component: SighnIn,
     {
      path: 'sighnUp',
      Component: SighnUp
    }, {
      path: 'updateUser',
      Component: UpdateUser
    }, {
      path: 'create',
      Component: Business
    }
    ],
  
    errorElement: <p> oops :( not exists... </p>,
  },
  {
    path: 'connectAdmin',
    Component: Connect,
  },  
  {
    path: 'admin',
    Component: Admin,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ManagerContext.Provider value={manager}>
    <RouterProvider router={router} />
  </ManagerContext.Provider>
  </React.StrictMode>,
)
