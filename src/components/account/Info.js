import React from "react"

export default function Info(props) {
  return (
    <div className="card-panel red lighten-2">
      <span className="card-content white-text">
        The data success { props.info } ...
      </span>
    </div>
  )
}
