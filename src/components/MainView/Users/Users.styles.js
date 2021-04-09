import styled from "@emotion/styled";

export const UsersWrapper = styled.div`
    background-color: ${p => p.appPage.themes.dark.black};
`;

export const UsersList = styled.div`
    padding-left: 2%;
    display: grid;
    grid-template-columns: 50% 50%;
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
    padding-left: 15%;
    display: flex;
    gap: 5%;
`;

export const Search = styled.div`
    display: flex;
    gap: 5%;
`;

export const Paginator = styled.div`
`;


export const Navbar = styled.div`
    padding:2% 0 1% 0 ;
    background-color: ${p => p.appPage.themes.dark.grey};
    display: grid;
    grid-template-columns: 20% 40% 40%;
    `;