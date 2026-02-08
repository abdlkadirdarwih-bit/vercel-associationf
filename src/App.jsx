



// incorporating   يتضمن    اينقاربرايتن

// website admin panels
import "./App.css";
import Navbar from "./Nav/Navb.jsx";
import "./Nav/Navb.css";
import AdminNavbar from "./adminnav/AdminNav.jsx";
// import "./AdminNavbar/AdminNav.css";
// import Footer from "./Footer/footer.jsx";

import LoginPage from "./LoginSchool/LoginPage.jsx";
import "./LoginSchool/LoginPage.css";

import ChangePasswordPage from "./LoginSchool/ChangePasswordPage.jsx";
import "./LoginSchool/ChangePasswordPage.css";
import RegisterPage from "./LoginSchool/RegisterPage.jsx";
import Home from "./association/home";
import "./association/home.css";
// import Homeb from "./rr/home";
// import "./rr/homer.css";

// import ServicesPage from "./association/services";
// import   "./association/services.css";
// import AboutPage from "./association/about";
// import   "./association/about.css";
// import ProjectsPage from "./association/project";
// import   "./association/project.css";
import {Event} from "./association/event";
import "./association/event.css";
import Eventmoreass from "./association/eventmore.jsx";
import "./association/eventmore.css";
import Servicesass from "./association/servicesass.jsx";
import "./association/servicesass.css";
import Contactass from "./association/contactass.jsx";
import "./association/contactass.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css'
// import Admin from './asscrudevent/admin.jsx'
// import "./asscrudevent/admin.css";

import Events from './asscrudevent/Event.jsx'
import "./asscrudevent/Event.css";

import CreateEvent from './asscrudevent/CreateEvent.jsx'
import "./asscrudevent/CreateEvent.css";

import UpdateEvent from './asscrudevent/UpdateEvent.jsx'
import "./asscrudevent/UpdateEvent.css";

import Services from './asscrudservices/Service.jsx'
import "./asscrudservices/Service.css";
import CreateServices from './asscrudservices/CreateService.jsx'
import "./asscrudservices/CreateService.css";

import UpdateServices from './asscrudservices/UpdateService.jsx'
import "./asscrudservices/UpdateService.css";

import Contactview from "./adminass/contactview.jsx";
import "./adminass/contactview.css";
import Eventview from "./adminass/Eventview.jsx";
import   "./adminass/eventview.css";
import Servicesview from "./adminass/Serviceview.jsx";
import   "./adminass/serviceview.css";

export default function App() {
  return (

    <div>

      <BrowserRouter >
        <div className="homeaboutmoto-menu-homesch">
        </div>

        {/* <Navbar /> */}

        <Routes>
          <Route element={<Navbar/>}>

          {/* <Route path="/homesch" element={<Navbar/>} />  */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* <Route path="/eventmoresch" element={<Eventmoresch />} />   
          <Route path='/admin' element={<Admin />}></Route> */}

          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<ServicesPage/>} />
                <Route path="/services" element={<AboutPage/>} /> */}
          <Route path="/eventass" element={<Event />} />
          <Route path="/eventmoreass" element={<Eventmoreass />} />
          <Route path="/servicesass" element={<Servicesass />} />
          {/* <Route path="/Homeb" element={<Homeb />} /> */}
          <Route path="/contactass" element={<Contactass />} />
          </Route>

//true
 {/* <Route element={<AdminLayout />}> */}
  <Route element={<AdminNavbar />}>

    {/* <Route path="/admin/services" element={<CreateServices />} /> */}
          {/* <Route path='/admin' element={<Admin />}></Route> */}
          <Route path="/eventview" element={<Eventview/>} />
          <Route path="/servicesview" element={<Servicesview />}/> 

                     <Route path="/contactview" element={<Contactview />} />
          <Route path='/event' element={<Events />} />
          <Route path='/create' element={<CreateEvent />} />
          <Route path='/update/:id' element={<UpdateEvent />} />

          <Route path='/services' element={<Services />} />
          <Route path='/createServices' element={<CreateServices />} />
          <Route path='/updateservices/:id' element={<UpdateServices />} />
  </Route>

        </Routes>

      </BrowserRouter>
    
{/* <AdminDashboard /> */}
    </div>

  );
}





















// https://talabatk-ebbb5.web.app/






// https://react.dev/learn/updating-arrays-in-state#challenges
// https://react.dev/learn/choosing-the-state-structure#challenges
// https://react.dev/learn/sharing-state-between-components#challenges
// https://react.dev/learn/updating-arrays-in-state#


// State as a Snapshot

// //  import   "./Adding Interactivity/SaS/app.css";
// // import Counter from "./Adding Interactivity/SaS/app.js";

// // import Gallery from "./Adding Interactivity/SCM/Appchallaeng.js";
// import   "./Adding Interactivity/SCM/Talabatak.css";
// import Talab from "./Adding Interactivity/SCM/Talabatak.js";

//  export default function App() { 

//   return (

// //   // <Gallery/> 
// //   // <Form/>
// // <Counter/> 
//   <Talab/>
// );
// }
