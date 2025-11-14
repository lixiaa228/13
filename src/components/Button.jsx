import styled from 'styled-components'


const ButtonQuiz = styled.button`
    background: #6cb7f5;
    border-radius: 24px;
    border: none;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 24px;
    padding: 0 16px;
    cursor: pointer;
`

export default function Button( {children, onClick } ) {

    return <ButtonQuiz onClick={onClick}>{children}</ButtonQuiz>
}