


import React from "react";
import { RestfulProvider } from "restful-react";

import App from "./App";

const MyRestfulApp = () => (
  <RestfulProvider base="https://localhost:44311/api/services/app/">
    <App />
  </RestfulProvider>
);

export default MyRestfulApp;











// import Link from 'next/link'
// import Layout from '../components/Layout'

// const IndexPage = () => (
//   <Layout title="Home | Next.js + TypeScript Example">
//     <h1>Hello Next.js 👋</h1>
//     <p>
//       <Link href="/about">About</Link>
//     </p>
//   </Layout>
// )

// export default IndexPage
