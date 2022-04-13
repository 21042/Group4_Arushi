import React from "react"
import Image from "../Images/Images"

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            className="d-block mx-lg-auto img-fluid"
            filename="image2.png"
            alt="1"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Shop Locally. Connect to premium brands and in-stock products at
            your favorite local shops.
          </h1>
          <p className="lead">
            we are introducing LocalDukaan.com - to bring Local Shops online and
            promote #VocalforLocal initiative taken by our honourable Prime
            Minister Shri Narendra Modi Ji.We create local online marketplace
            websites for communities to help small businesses sell online
            together and make it easy to shop and buy from local businesses
            online.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary shadow btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary shadow btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
