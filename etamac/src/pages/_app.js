import * as React from 'react'
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import "../styles.css"
import Navbar from "../components/Navbar"



const defaultLayout = function getLayout(page) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      {page}
    </>
  );
};
export default function App({ Component, Props }) {
  const getLayout = (Component.getLayout ?? defaultLayout)

  return (
    <>
      < Head >
        <title>EtaMac</title>
      </Head >
      {getLayout(<Component {...Props} />)}

    </>
  )
};



