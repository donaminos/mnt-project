import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>MNT Project</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://bootswatch.com/simplex/bootstrap.min.css" />
    </Head>

    <Navbar />

    <div className="container">
      {props.children}
    </div>
  </div>
)

export default Layout;
