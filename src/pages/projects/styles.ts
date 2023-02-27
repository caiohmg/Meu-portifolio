import styled from "styled-components";

export const ProjectsContainer = styled.div`

  width: 60rem;

  margin-top: 5rem;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 1rem;

  .card{
    background-color: #050340;
    
  }
  .card:hover {
  box-shadow: 0px 0px 10px 0px rgba(242,159,5,0.5);
}
 
  h1 {
   
    font-size: 20px;
    color: #F29F05;
  }
 
  p{
    color: white;
    
  }
  a {
    text-decoration: none;
  }
 
  

`;

