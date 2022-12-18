import { Route, Routes } from "react-router-dom";
import CartPage from "../page/CartPage";
import ChickenPage from "../page/ChickenPage";
import Home from "./Home";
import Login from "./Login";

function AllRoutes(){
    return(
        <>
        
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/chickenpage' element={<ChickenPage/>}></Route>
            <Route path='/cartpage' element={<CartPage/>}></Route>
        </Routes>
        </>
    )
};
export default AllRoutes;