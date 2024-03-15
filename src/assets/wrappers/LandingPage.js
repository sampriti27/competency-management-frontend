import styled from 'styled-components'

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--purple);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  .btn-hero{
    position: relative;
    color: white;
    background-color: var(--purple);
  }

  // .btn-hero:before{
  //   position: absolute;
  //   content:"";
  //   top:0;
  //   left:0;
  //   width:43%;
  //   height:100%;
  //   background-color:white;
  //   border-top-left-radius: var(--borderRadius);
  //   border-bottom-left-radius: var(--borderRadius);
  // }
  // .btn-hero:after{
  //   position: absolute;
  //   content:"";
  //   top:0;
  //   right:0;
  //   width:57%;
  //   height:100%;
  //   background-color:var(--purple);
  //   border-top-right-radius: var(--borderRadius);
  //   border-bottom-right-radius: var(--borderRadius);
  // }
  // .btn-hero:before::hover .btn-hero:before{
  //   background-color:white;
  // } 
  // .btn-hero:hover .btn-hero:after{
  //   background-color:var(--purple);
  // } 

  .btn-hero:hover{
    background-color:white;
    color: var(--purple);
    border: 1px solid var(--purple);
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`
export default Wrapper;
