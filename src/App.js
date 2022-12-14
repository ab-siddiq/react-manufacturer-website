import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import AddReview from "./Pages/DashBoard/AddReview/AddReview";
import AllUsers from "./Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "./Pages/DashBoard/DashBoard";
import DashboardPanel from "./Pages/DashBoard/DashBoardPanel/DashboardPanel";
import MyOrders from "./Pages/DashBoard/MyOrders/MyOrders";
import MyProfile from "./Pages/DashBoard/MyProfile/MyProfile";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import NotFound from "./Pages/NotFound/NotFound";
import Products from "./Pages/Products/Products";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}>
          <Route index element={<DashboardPanel></DashboardPanel>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route path="allUsers" element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route
          path="/myPortfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/purchase/:purchaseId"
          element={<Purchase></Purchase>}
        ></Route>
        {/* <Route path="/myProfile" element={<MyProfile></MyProfile>}></Route>
        <Route path="/addReview" element={<AddReview></AddReview>}></Route>
        <Route path="/myOrders" element={<MyOrders></MyOrders>}></Route> */}
        {/* <Route path="/" element={}></Route> */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
