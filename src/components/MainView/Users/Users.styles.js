import styled from "@emotion/styled";

export const UsersWrapper = styled.div`
`;

export const UsersList = styled.div`
    padding-left: 2%;
    display: grid;
    grid-template-columns: 50% 50%;
    @media screen and (max-width: 1200px){
    display: flex;
    flex-direction: column;
    }
`;

export const User = styled.div`
    padding: 4% 0 0 0;
    display: grid;
    grid-template-columns: 30% 70%;
    border-radius: 20px;
    &:hover{
    background-color: rgba(64, 224, 208, 0.1)
    }
    img{
       border-radius: 20px;
       margin: 0 auto;
        height: 100px;
        width: 100px;
   }
`;

export const Subscribe = styled.div`
    padding-left: 13%;
`;

export const Filter = styled.div`
    grid-area: filter;
    margin: 7% 0 0 5%;
    display: flex;
    gap: 5%;
`;

export const Search = styled.div`
    grid-area: search;
    display: flex;
    gap: 5%;
    margin-top: 3%;
`;

export const Paginator = styled.div`
    grid-area: paginator;
    margin-left: 5%;
`;


export const Navbar = styled.div`
    padding:2% 0 1% 0 ;
    display: grid;
    grid-template-columns: 20% 40% 40%;
    grid-template-areas: 
                'filter paginator search';
    @media screen and (max-width: 1200px) {
    grid-template-columns: 30% 70%;
    grid-template-areas: 
                    'paginator paginator'
                    'filter search';
   
    }            
   
    `;