import React from "react"
/**
* Components
*
*/
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
/**
* IndexPage
*
*/
const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Hello this is home page" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello world</h1>
    <p>Welcome to a Secnix Gatsby site.</p>
    <p>Basic multi-page template based on: <br />GatsbyJS, <br />ReactJS, <br />Gatsby Default Starter, <br />Reactstrap, <br />Bootstrap, <br />Font Awesome.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
