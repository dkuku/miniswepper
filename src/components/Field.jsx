import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledField = styled.div`
background: ${props => props.background};
border: 1px solid black;
float: left;
font-size:30px;
text-align: center;
height: 40px;
width: 40px;
`
StyledField.defaultProps = {
  background: 'lightgrey'
}
const Field = (props) => {
  let element
  if (!props.open) {
    element = <StyledField background='grey' onClick={() => props.reveal(props.position)} />
  } else if (props.bomb) {
    element = <StyledField><span role='img' aria-label='bomb'>💣</span></StyledField>
  } else if (props.open === '0') {
    element = <StyledField />
  } else {
    element = <StyledField>{props.open}</StyledField>
  }
  return element
}

Field.propTypes = {
  bomb: PropTypes.bool.isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  reveal: PropTypes.func.isRequired
}

export default Field
