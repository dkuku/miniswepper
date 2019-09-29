import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Field from './Field'

const Last = styled.div`clear: both;`

const Row = (props) => {
  return (
    <div>
      {props.row.map((field, i) => <Field {...field} reveal={props.reveal} key={i} />)}
      <Last />
    </div>
  )
}

Row.propTypes = {
  row: PropTypes.arrayOf(Object),
  reveal: PropTypes.func.isRequired
}

export default Row
