import React from 'react'
import PropTypes from 'prop-types'

export const Login = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.counter}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
    <button className='btn btn-default' onClick={props.callApiAsync}>
      Call API
    </button>
    <div className="well">
      {props.jsonResult}
    </div>
  </div>
)

Login.propTypes = {
  counter     : PropTypes.number.isRequired,
  jsonResult     : PropTypes.string,
  callApiAsync     : PropTypes.func.isRequired,
  doubleAsync : PropTypes.func.isRequired,
  increment   : PropTypes.func.isRequired
}

export default Login
