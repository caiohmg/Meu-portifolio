import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 2.5rem;
  background-color: #1d0259;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: right;

 
 

  .nav-link {
    color: #f29f05;
    margin-right: 1rem;
    background-color: transparent;
    transition: all 0.3s ease;
    border-radius: 7px;
    
    padding: 0.5rem 1rem;
  }

  .nav-link:hover {
    background-color: #f29f05;
    color: black;
  }

  .btn-group-vertical > .btn,
  .btn-group > .btn {
    position: relative;
    flex: 1 1 auto;
    color: white;
    margin-right: 3rem;
    border-radius: 7px;
    border: 0.5px solid #f29f05;
    padding: 0.5rem 1rem;
  }
  
  .dropdown-item:hover {
    background-color: #f29f05;
    color: black;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: right;

    .btn {
      display: none;
    }
  }

  @media screen and (max-width: 320px) {
    .btn-group-vertical > .btn,
    .btn-group > .btn {
      font-size: 12px;
      padding: 0.25rem 0.5rem;
      margin-right: 5rem;
    }
  }
`;

