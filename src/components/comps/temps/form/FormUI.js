import React from "react"
import "./FormUI.css"

const FormUI = (props) => {
  const { handleSubmit, handleChange, data } = props
  return (
    <div className="form-ui">
      <form onSubmit={handleSubmit}>
        <ul>
          <li className="input-field">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}  
            />
            <label>Name</label>
          </li>
          <li className="input-field">
            <fieldset>
            <legend>SEX</legend>  
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="sex"
                    value="male"
                    type="radio"
                    checked={data.sex === "male"}
                    onChange={handleChange}
                  />
                  <span>Male</span>
                </label>
              </p>
              <p>
              <label>
                <input
                  className="with-gap"
                  name="sex"
                  value="female"
                  type="radio"
                  checked={data.sex === "female"}
                  onChange={handleChange}
                />
                <span>Female</span>
              </label>
            </p>
            </fieldset>
          </li>
          <li>
            <label>Division</label>
            <div className="input-field">
              <select
                className="browser-default"
                name="div"
                value={data.div}
                onChange={handleChange}
              >
                <option value="" disabled>--Select One--</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Back End">Back End</option>
                <option value="Front End">Front End</option>
                <option value="SQA">SQA</option>
                <option value="Project Manager">Project Manager</option>
                <option value="DevOps">DevOps</option>
              </select>
            </div>  
          </li>
          <li className="input-field">
            <fieldset>
            <legend>Skills</legend>  
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="react"
                    checked={data.react}
                    onChange={handleChange}
                  />
                  <span>React.js</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="vue"
                    checked={data.vue}
                    onChange={handleChange}
                  />
                  <span>Vue.js</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="angular"
                    checked={data.angular}
                    onChange={handleChange}
                  />
                  <span>Angular.js</span>
                </label>
              </p>
            </fieldset>  
          </li>
          <li className="input-field">
            <textarea
              name="note"
              value={data.note}
              onChange={handleChange}
              className="materialize-textarea"
            />
            <label>Note ...</label>
          </li>
          <li>
            <button className="btn waves-effect red lighten-2">
              Add
            </button>
          </li>
        </ul>
      </form>
      <div className="card-panel">
        <h5 className="center-align">Your Input</h5>
        <p>Name : {data.name}</p>
        <p>Sex : {data.sex}</p>
        <p>Div : {data.div}</p>
        <p>
          Skills :
          {data.react ? "React" : ""}
          {data.vue ? ", Vue" : ""}
          {data.angular ? ", Angular" : ""}
        </p>
        <p>Note : {data.note}</p>
      </div>
    </div>  
  )
}

export default FormUI