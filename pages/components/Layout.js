import Navbar from "./Navbar";
import Footer from "./Footer";

import Head from 'next/head';

export default function Layout({children}) {
  return (
    <>
    <Head>
      <link rel="shotcut icon" href="/images/favicon.ico" />
      <title>PokeNext - Aplicação para estudo de Nextjs.</title>
    </Head>
      <Navbar />
      <main className="content-main">
        <div className="container-general">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}