import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Layout from './Layout';

export default function Navigations(){

return(
    <>
<Layout/>
<Outlet/>
<Footer/>
</>
)
}