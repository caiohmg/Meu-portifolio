import styled from "styled-components";

export const ProjectsContainer = styled.div`

  width: 90%;

  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 1rem;

  .card{
    border-top-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
    background-color: #1D0259;
    
  }
  .card:hover {
    box-shadow: 0px 0px 10px 0px rgba(242,159,5,0.5);
  }
  .btn {
    margin-bottom: 2rem;
    margin-left: 2.5rem;
    margin-right: 2.5rem;

  }
  img {
    border-top-left-radius: 3rem;
    
  }
 
  h1 {
    font-size: 20px;
    color: #F29F05;
  }
  .text {
    
    font-size: 2em;
    color: #F29F05;
}

 
  p{
    color: white;
    
  }
  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;


