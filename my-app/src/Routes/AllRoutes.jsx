import { Route, Routes } from "react-router-dom";
import ChickenPage from "../page/ChickenPage";
import Home from "./Home";
import Login from "./Login";

function AllRoutes(){
    return(
        <>
        
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/chicken' element={<ChickenPage/>}></Route>
        </Routes>
        </>
    )
};
export default AllRoutes;