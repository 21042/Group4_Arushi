import React from "react"
import App from "../components/filterandsearch/App"
import Layout from "../components/Layout/Layout"

const About = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">Products</h2>
      </div>
      <App />
    </Layout>
  )
}

export default About
