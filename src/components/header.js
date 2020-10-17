import { Fragment } from "react";
import Head from "next/head";

const Header = ({ title, description }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    </Fragment>
  );
};

export default Header;
