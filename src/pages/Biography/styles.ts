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
    max-width: 60%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
  }
 
  .btn {
    display: inline-block;
  font-size: 12px;
  margin-left: 10rem;
  margin-right: 4rem;
}

@media (max-width: 1024px) {
  
  h1 {
    margin-top: 1rem;
    margin-left: 10%;
  }
  p {
    margin-left: 10%;
    margin-right: 10%;
    grid-template-columns: 1fr 1fr;
  }
  img {
    
    width: 50%;
    height: auto;
    
    margin: 2rem auto 0;
  }
  .icons {
    display: inline-block;
    font-size: 1.55rem;
    margin-left: 3rem;
    margin-right: rem;
  }
  .btn {
    
    margin-top: 1rem;
    font-size: 12px;
    padding: 0.25rem 0.5rem;
    margin-right: -6rem;
    margin-left: 12rem;
      }
}

  @media (max-width: 768px) {
  
  h1 {
    margin-left: 5%;
  }
  p {
    margin-left: 5%;
    margin-right: 5%;
    grid-template-columns: 1fr;
  }
  img {
    
    width: 50%;
    height: auto;
    
    margin: 2rem auto 0;
  }
  .icons {
    margin-top: 1rem;
    margin-left: -5%;
    display: flex;
    justify-content: center;
  }
  .btn {
    
    display: inline-block;
  font-size: 12px;
  padding: 0.25rem 0.5rem;
  margin-left: 15rem;
  margin-right: -3rem;
      }
}

@media (max-width: 425px) {
  
  h1 {
    margin-left: 5%;
  }
  p {
    margin-left: 5%;
    margin-right: 5%;
    grid-template-columns: 1fr;
  }
  img {
    
    width: 50%;
    height: auto;
    
    margin: 2rem auto 0;
  }
  .icons {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
  .btn {
      font-size: 12px;
      padding: 0.25rem 0.5rem;
      margin-right: 0.4em;
      margin-left: 8em;
    }
}
@media (max-width: 375px) {
  
  h1 {
    margin-left: 7%;
  }
  p {
  
    margin-left: 7%;
    margin-right: 7%;
    grid-template-columns: 1fr;
  }
  img {
    
    width: 50%;
    height: auto;
    
    margin: 2rem auto 0;
  }
  .icons {
    margin-top: 1rem;
    margin-left: -5%;
    display: flex;
    justify-content: center;
  }
  .btn {
      font-size: 12px;
      padding: 0.25rem 0.5rem;
      margin-right: -2em;
      margin-left: 7.80em;
    }
}


@media (max-width: 390px) {
  
  h1 {
    margin-left: 6%;
  }
  p {
    margin-left: 6%;
    margin-right: 6%;
    grid-template-columns: 1fr;
  }
  img {
    
    width: 50%;
    height: auto;
    
    margin: 2rem auto 0;
  }
  .icons {
    margin-top: 1rem;
    margin-left: -5%;
    display: flex;
    justify-content: center;
  }
  .btn {
  font-size: 12px;
  padding: 0.25rem 0.5rem;
  
  margin-left: 5.4rem;
  
  
    }
    
  }
`;
