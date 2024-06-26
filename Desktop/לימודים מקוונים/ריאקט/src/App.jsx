
import './App.css'

import { About } from './home/about';
import { UserPage } from './context/Userpage'
import { Outlet, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <header>
        <About />
        <UserPage />
      </header>


      <nav>
        <ul>
        <li>
            <Link to={'usersighin'}>Login to the site</Link>
          </li>
          <li>
            <Link to={'serivces'}>serivces</Link>
          </li>
          <li>
            <Link to={'/meetingInfo'}>Appointment</Link>
          </li>
          {/* <li>
            <Link to={''}>Admin interface</Link>
          </li> */}
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>

    </>
  )


}

export default App
