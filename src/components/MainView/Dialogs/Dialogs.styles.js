import styled from "@emotion/styled";

export const Dialogs = styled.div`
   border: 3px solid red;
      padding: 2% 0 0 10%;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-areas: 
        'DialogsNavbar DialogsElements'
        'DialogsNavbar  MessageInputReduxForm'
`;

export const DialogsNavEl = styled.div`
   background-color: ${p => p.themes.dark.grey};

     margin: 2%;
     border-radius: 34px;
    a{
       color: ${p => p.themes.dark.turquoise}; 
       font-size: larger;  
    text-decoration: none;
    }
    border: 2px solid black;
    img{
        width: 20%;
    }
    &:hover{
        background-color: ${p => p.themes.dark.green};
        transition: .1s ease-in all
    }
    background-color: ${p => p.selected === p.id ? `${p.themes.dark.green}` : ``};
   `;

export const DialogsNavbar = styled.div`
    grid-area: DialogsNavbar;
    display: grid;
    img{
        padding: 5% 0 0 30%;
    }
    
`;


export const DialogsElements = styled.div`
    grid-area: DialogsElements;
    padding: 0 4%;
`;


export const MessageInputReduxForm = styled.div`
   padding:2% 0 0 20%;
   grid-area: MessageInputReduxForm;
   button{
   left: 20%;
   }

`;

export const RightDialogs = styled.div `
   padding-right: 30%;
`;