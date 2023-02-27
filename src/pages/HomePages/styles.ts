import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  align-items: center;
  margin-bottom: 5rem;
  h1 {
    margin-top: 10rem;
    margin-left: 10rem;
    color: #f29f05;
    justify-content: flex-start;
    
  }
  p {
    margin-top: 2rem;
    margin-left: 10rem;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  img {
    width: 20rem;
    height: 20rem;

    border-radius: 50%;
    object-fit: cover;
  }
  .icons {
  margin-top: -5rem;
}

.icons i {
  color: #000; 
  transition: color 0.2s ease-in-out; 
}

.icons :hover {
  color: #f29f05; 
}

  .btn {
  margin-top: -10rem;
  margin-left: 10rem;
  }
  svg {
    display: inline-block;
    font-size: 1.55rem;
    margin-left: 3rem;
    cursor: pointer;
    color: #6e038c;
  }
`;
