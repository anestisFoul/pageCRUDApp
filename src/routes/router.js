import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import AddPage from '../components/AddPage'
import EditPage from '../components/EditPage'
import ErrorPage from '../components/ErrorPage'

const Router = () => (
  <BrowserRouter>
    <div className="box-layout">
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={AddPage} />
        <Route path="/edit/:id" component={EditPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router
