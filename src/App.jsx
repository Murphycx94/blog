import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Routes from '@/router'
import Temp from './pages/temp'
import Detail from './pages/detail'
import User from './pages/user'
import NoMatch from './pages/noMatch'


export default class App extends React.Component {
  render () {
    return (
      <div>
        <Link to="/">主页</Link>
        <Link to="/user">用户</Link>
        <Link to="/detail">详情</Link>
        <Switch>
          <Route path="/" exact component={Temp}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/detail/:id?" component={Detail}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </div>
    )
  }
}