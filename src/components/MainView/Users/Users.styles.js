import styled from "@emotion/styled";

export const UsersPage = styled.div`
   padding: 5%;
  /* display: grid;
   grid-template-columns: 50% 50%;
   grid-template-areas: 
   'navbar navbar'
   'user user';*/
`;

export const UsersList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr);
`;

export const User = styled.div`
    border: 2px solid green;
   img{
        height: 100px;
        width: 100px;
   }
`;

export const Navbar = styled.div`
    grid-area: navbar;
    border: 2px solid red;
    `;