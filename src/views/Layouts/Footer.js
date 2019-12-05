import React from 'react'

export default function Footer() {
  return (
    <div>
      {/* Main Footer */}
      <footer className="main-footer">
        {/* To the right */}
        <div className="float-right d-none d-sm-inline">
          <a href="https://padliyulian.github.io" target="_blank" rel="noopener noreferrer">
            padliyulian.github.io
          </a>
        </div>
        {/* Default to the left */}
        <strong>Copyright © 2014-2018 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
      </footer>
    </div>
  )
}
