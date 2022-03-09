import React from "react"
import Features from "../components/Features/Features"
import Hero from "../components/Hero/Hero"
import Layout from "../components/Layout/Layout"
import Team from "../components/Team/Team"

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero/>
        <Features/>
        <Team/>
      </Layout>
    </div>
  )
}
