import React from "react";
import Footer from "./footer";
import Head from "next/head";
import Header from "./header";

export default function Layout({
  children,
  title = "CNN STORE",
  isHome = false,
}) {
  return (
    <div className="body">
      <Head>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://cdnp1.stackassets.com/ef43419236a17371a6390ad095e5873152905948/store/47dab8410f5e0701b1e9e9a010efb9a70ff0c9c8f8e3eeb40d13a9b11650/286_favicon.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          href="https://cdnp1.stackassets.com/ef43419236a17371a6390ad095e5873152905948/store/47dab8410f5e0701b1e9e9a010efb9a70ff0c9c8f8e3eeb40d13a9b11650/286_favicon.png"
        />
      </Head>
      {/* Header section */}
      <Header isHome={isHome} />
      {children}
      {/* The footer */}
      <Footer />
    </div>
  );
}
