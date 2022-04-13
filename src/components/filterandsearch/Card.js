import React from "react"
import Image from "../Images/Images"

const Card = ({ item }) => {
  return (
    <div className="row justify-content-center">
      {item.map(Val => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card text-center shadow mb-4 border-primary">
              <div className="card-img">
                <Image
                  className="shadow"
                  filename={`${Val.image}.jpg`}
                  style={{
                    margin: "0 auto",
                  }}
                  alt={Val.name}
                />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4>{Val.name}</h4>

                  <h4 className="text-danger fw-bold">{Val.price}</h4>
                </div>
                <small className="card-text">{Val.description}</small>
              </div>
              <div className="card-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add to Cart
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        {" "}
                        <div className="card-img">
                          <Image
                            className="shadow"
                            filename={`${Val.image}.jpg`}
                            style={{
                              margin: "0 auto",
                            }}
                            alt={Val.name}
                          />
                        </div>
                        <div className="card-body">
                          <div className="card-title">
                            <h2>{Val.name}</h2>

                            <h2 className="text-danger fw-bold">{Val.price}</h2>
                          </div>
                          <div className="card-text">{Val.description}</div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button type="button" class="btn btn-primary">
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Card
