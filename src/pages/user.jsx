import React, { Component } from 'react'

export default class App extends Component {
  static asyncData () {
    return { data: 1 }
  }

  render() {
    console.log(this)
    return (
      <div>
        <h1>react-ssr user</h1>
      </div>
    )
  }
}