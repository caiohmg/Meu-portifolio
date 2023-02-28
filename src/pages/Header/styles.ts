import styled from "styled-components";

export const HeaderContainer= styled.header`
width: 100%;
height: 2.5rem;

background-color: #1D0259;

background-size: cover;
display: flex;
align-items: center;
justify-content: right;

.btn {
  color: white;
  margin-right: 3rem;

}
.btn-group-vertical>.btn, .btn-group>.btn {
    position: relative;
    flex: 1 1 auto;
    color: white;
  margin-right: 3rem;
    
}
@media screen and (max-width: 768px) {
  .btn {
    font-size: 0.8rem;
    justify-content: space-between;
    margin: 1rem 1rem ;
  }
}
 
`;