import React from 'react'
import { ReactTitle } from 'react-meta-tags'
import ContentHeader from '../../components/admin/layouts/ContentHeader';

export default function employees() {
  return (
    <div>
      <ReactTitle title="Admin | Employees" />
      <ContentHeader header={'Employees'} />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                employees
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
