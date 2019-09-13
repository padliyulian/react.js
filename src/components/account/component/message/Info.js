import React from "react"

export default function Info(props) {
  const style = {
    position: 'fixed',
    zIndex: '100',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  return (
    <div style={style} className="card-panel red lighten-2">
      <span className="card-content white-text">
        The data success { props.info } ...
      </span>
    </div>
  )
}
