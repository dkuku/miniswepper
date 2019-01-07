import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

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
        element = < StyledField><span role='img' aria-label="bomb">💣</span></ StyledField>
    } else if (props.open === "0") {
        element = <StyledField />
    } else {
        element = <StyledField>{props.open}</StyledField>
    }
    return element
}


Field.propTypes = {
    bomb: propTypes.bool.isRequired,
    open: propTypes.oneOfType([propTypes.oneOf([null]), propTypes.integer]).isRequired,
    position: propTypes.arrayOf(propTypes.integer).isRequired,
    reveal: propTypes.func.isRequired
};

export default Field
