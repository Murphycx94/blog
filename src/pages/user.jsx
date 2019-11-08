import React, { Component } from 'react'

export default class App extends Component {
  static asyncData () {
    return { data: 1 }
  }

  componentWillMount () {
    console.log('User:', this.props.staticContext)
  }

  render() {
    return (
      <div>
        <h1>react-ssr user</h1>
      </div>
    )
  }
}