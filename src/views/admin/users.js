import React from 'react'
import { ReactTitle } from 'react-meta-tags'
import ContentHeader from '../../components/admin/layouts/ContentHeader';

export default function users() {
  return (
    <div>
      <ReactTitle title="Admin | Users" />
      <ContentHeader header={'Users'}/>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">
                  Users
                </h5>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-widget="collapse">
                    <i className="fa fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-widget="remove">
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="card-body">
                users
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
