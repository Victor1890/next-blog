import { Fragment } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
