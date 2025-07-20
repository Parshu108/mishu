import { Outlet } from "react-router-dom";
import Topheader from "./component/Topheader";
import Footer from "./component/footer";

const Layout=()=>{
  return(
    <>
    <Topheader/>
    <hr />
    <Outlet/>
    <hr />
    <Footer/>
    </>
  )
}
export default Layout;