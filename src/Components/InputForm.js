import React from 'react'
import './styles/inputForm.css'

export default function InputForm({ handleNameInput, handleNumberInput, handleSubmit }) {
  const style = { style: "color: #757575" }
  return (
    <div className="mb-5">
      <div className="card">
        <h5 className="card-header bg-dark text-white text-center py-3">
          <strong>Phone Book form </strong>
        </h5>
        {/* <!--Card content--> */}
        <div className="card-body px-lg-5">
          <form
            onSubmit={handleSubmit}
            className="text-center" style={style}
          >
            <div className="md-form mt-3">
              <input
                onChange={handleNameInput}
                type="text"
                id="materialSubscriptionFormPasswords"
                placeholder="Name"
                className="form-control text-center"
              />
            </div>
            <div className="md-form mt-3">
              <input
                onChange={handleNumberInput}
                type="number"
                id="materialSubscriptionFormPasswords"
                placeholder="phone number"
                className="form-control text-center"
              />
            </div>
            {/* <!-- Sign in button --> */}
            <input
              className="btn btn-dark btn-rounded  z-depth-0 my-4  waves-effect"
              type="submit"
              value="Add Contact"
            />

          </form>

        </div>

      </div>
    </div>
  )
}
