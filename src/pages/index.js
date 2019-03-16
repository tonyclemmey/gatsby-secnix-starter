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
    <p>Basic multi-page website template based on: <br /><br />Gatsby v2<br />React v16<br />Reactstrap v7<br />Bootstrap v4<br />Font Awesome v5</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
