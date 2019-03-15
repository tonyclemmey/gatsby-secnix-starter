import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" description="Hello this is about page" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About page</h1>
    <p>Welcome to about page</p>
  </Layout>
)

export default AboutPage
