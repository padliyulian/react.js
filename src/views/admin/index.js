import React from 'react'
import { ReactTitle } from 'react-meta-tags'
import ContentHeader from '../../components/admin/layouts/ContentHeader';
import Dashboard from '../../components/admin/pages/Dashboard';

export default function index() {
  return (
    <div>
      <ReactTitle title="Admin | Dashboard" />
      <ContentHeader />
      <Dashboard />
    </div>  
  )
}
