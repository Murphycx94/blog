import React, { Component } from 'react'

export default class Index extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1>react-ssr detail</h1>
        <p>id {this.props.match.params.id }</p>
      </div>
    )
  }
}