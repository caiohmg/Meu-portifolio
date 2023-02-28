import styled from "styled-components";

export const BiographyContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    margin-top: 5rem;
    margin-left: 15rem;
    color: #f29f05;
  }
  p {
    
    margin: 1rem 1rem 1rem 10rem;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  img {
    margin: -1rem 1rem 1rem 10rem;
    width: 20rem;
    height: 20rem;

    border-radius: 50%;
    object-fit: cover;
  }
`;
