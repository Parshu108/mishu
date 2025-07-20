import { Outlet } from "react-router-dom";
import Topheader from "./component/Topheader";
import Footer from "./component/footer";

const Layout=()=>{
  return(
    <>
    <Topheader/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default Layout;