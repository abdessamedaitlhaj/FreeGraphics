import { useEffect, useState } from "react";
import Edit_Infos from "./components/Edit_Infos";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Results from "./components/Results";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import My_Downloads from "./components/My_Downloads";
import My_Favorites from "./components/My_Favorites";
import Product_Page from "./components/Product_Page";
import axios from "axios";

function App() {
  const mobile = useState(false);
  const [graphicList, setGraphicList] = useState([]);
  const [loading, setLoading] = useState(false);
  const enable = useState(false);



   
  useEffect(() => {
    axios.get('http://localhost:8000/api/apirest/categories/')
      .then(res => {
        setGraphicList(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      
  }, []);

  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/apirest/graphics/')
  //     .then(res => {
  //       setGraphicList(res.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
      
  // }, []);

    

  return (
    <div className="container mx-auto">
      <Router>
          <Navbar mobileMenu={mobile}></Navbar>
          <Routes>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/edit_info/{id}" element={<Edit_Infos></Edit_Infos>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/downloads/{id}" element={<My_Downloads></My_Downloads>}></Route>
            <Route path="/favorites/{id}" element={<My_Favorites></My_Favorites>}></Route>
            <Route path="/" element={ <Home mobileMenu={mobile} enableAssests={enable}></Home>}></Route>
            <Route path="/:vectors" element={<Results graphicList={graphicList} enableAssests={enable}></Results>}></Route>
            <Route path="/:icons" element={<Results graphicList={graphicList} enableAssests={enable}></Results>}></Route>
            <Route path="/:photos" element={<Results graphicList={graphicList} enableAssests={enable}></Results>}></Route>
            <Route path="/graphic/:id" element={<Product_Page graphicList={graphicList} loading={loading}></Product_Page>}></Route>
            
          </Routes>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
