import styled from "@emotion/styled";

export const Dialogs = styled.div`
    padding: 2% 0 0 10%;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-areas: 
        'DialogsNavbar DialogsElements'
        'DialogsNavbar  MessageInputReduxForm';
    @media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
    }        
`;

export const DialogsNavEl = styled.div`
     margin: 2%;
     border-radius: 34px;
    a{
       color: ${p => p.theme.textColor1}; 
       font-size: larger;  
    text-decoration: none;
    }
    border: 2px solid black;
    img{
        width: 20%;
    }
    &:hover{
        background-color: ${p => p.theme.textColor2};
        transition: .1s ease-in all
    }
    background-color: ${p => p.selected === p.id ? `${p.theme.textColor2}` : ``};
   `;

export const DialogsNavbar = styled.div`
    grid-area: DialogsNavbar;
    display: grid;
    img{
        padding: 5% 0 0 30%;
    }
    @media screen and (max-width: 800px){
    display: flex;
    img {
      padding-left: 5%;
    }
    }
`;


export const DialogsElements = styled.div`
    grid-area: DialogsElements;
    padding: 0 4%;
`;


export const MessageInputReduxForm = styled.div`
      display: flex;
   padding:2% 0 0 20%;
   grid-area: MessageInputReduxForm;
   button{
   left: 20%;
   }
   @media screen and (max-width: 800px){
   padding:2% 0 0 0;
   }
   

`;

export const RightDialogs = styled.div `
   padding-right: 30%;
`;