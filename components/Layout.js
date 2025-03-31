import Footer from "./Footer";
import Navbar from "./Navbar";
import Featured from './Featured';
import { useRouter } from "next/router";

const Layout = ({ children}) => {
    const router = useRouter();
    return(
        <>
         
       <Navbar/>
       {router.pathname === "/" && <Featured />}
      {children}
       <Footer/>

        </>
    );
};

export default Layout;