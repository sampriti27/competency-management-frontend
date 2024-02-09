import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    text-align:center;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--purple);
  }


  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
    background-color: var(--purple);
  }
  .btn:hover{
    background-color:white;
    color: var(--purple);
    border: 1px solid var(--purple);
  }
  .manager-btn {
    background: transparent;
    border: transparent;
    color: var(--purple);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  .logopos{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export default Wrapper
