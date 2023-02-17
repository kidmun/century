import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Shops from "./pages/shops/Shops"
import Movies from "./pages/movies/Movies"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Register from "./components/Register/Register"
import LogIn from "./components/LogIn/LogIn"
import AdminHome from "./components/Admin/Home"
import AdminMovie from "./components/Admin/AdminMovie"
import AdminRooms from "./components/Admin/AdminRooms"
import AddFeature from "./components/Admin/AddFeature"
import AddMovie from "./components/Admin/AddMovie"
import AddRoom from "./components/Admin/AddRoom"
import EditFeature from "./components/Admin/EditFeature"
import DeleteComponent from "./components/Admin/Delete"
import EditMovie from "./components/Admin/EditMovie"
import EditRoom from "./components/Admin/EditRoom"
import DeleteMovie from "./components/Admin/DeleteMovie"
import DeleteRoom from "./components/Admin/DeleteRoom"
import CreateUser from "./components/Admin/CreateUser"
import Notification from "./components/Notification/Notification"
import { useSelector } from "react-redux"
function App() {
  
  const notification = useSelector ((state) => state.status.notification);
  console.log(notification)
  return (
    <BrowserRouter>
       {/* <Navbar /> */}
       {/* <LogIn/> */}
       {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Routes>
        <Route index element={<Home />}/>
        <Route path="shops" element= {<Shops />}/>
        <Route path="movies" element= {<Movies />}/>
        <Route path="about" element= {<About />}/>
        <Route path="/contact" element= {<Contact />}/>
        <Route path="/login" element= {<LogIn />}/>
        <Route path="/signup" element= {<Register />}/>
        <Route path="/admin" element= {<AdminHome />}/>
        <Route path="/admin/movies" element= {<AdminMovie />}/>
        <Route path="/admin/rooms" element= {<AdminRooms />}/>
        <Route path="/admin/add_feature" element= {<AddFeature />}/>
        <Route path="/admin/add_movie" element= {<AddMovie />}/>
        <Route path="/admin/add_room" element= {<AddRoom />}/>
        <Route path="/admin/edit_feature/:id" element= {<EditFeature />}/>
        <Route path="/delete/:id" element= {<DeleteComponent />}/>
        <Route path="/admin/edit_movie/:id" element= {<EditMovie />}/>
        <Route path="/admin/edit_room/:id" element= {<EditRoom />}/>
        <Route path="/movie/delete/:id" element= {<DeleteMovie />}/>
        <Route path="/room/delete/:id" element= {<DeleteRoom />}/>
        <Route path="/admin/create_user" element= {<CreateUser />}/>


     </Routes>
     {/* <Footer /> */}
   </BrowserRouter>
  );
}

export default App;
