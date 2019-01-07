import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Field from './Field'

const Last = styled.div`clear: both;`

const Row = (props) => {
  return (
    <div>
    {props.row.map(field => <Field {...field} reveal={props.reveal}/>)}
    <Last/>
    </div>
  )
}

Row.propTypes = {
  row: propTypes.arrayOf(Object).isRequired,
  reveal: propTypes.func.isRequired
}
export default Row
