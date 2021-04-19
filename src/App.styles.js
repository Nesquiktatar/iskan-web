import styled from '@emotion/styled';

export const App = styled.div`

   background: linear-gradient(
    315deg,
     ${p => p.theme.backgroundColor1} 0%,
        ${p => p.theme.backgroundColor2} 74%);
    display: flex;
    height:auto;
    min-height: 100vh;
`;

