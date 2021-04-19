import styled from '@emotion/styled';

export const Profile = styled.div`
    background-size: 100%;
    display: grid;
    grid-template-columns:10% 80% 10%;
`;

export const MyPosts = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
`;

export const ProfileInfo = styled.div`
    grid-column-start: 2;
    grid-row-start: 1;
`;

/*настройка внутри тега*/
export const ProfileStatus = styled.div`
   color: ${p => p.theme.textColor1};
   font-size: x-large;
`;

export const Description = styled.div`
    color: ${p => p.theme.textColor1};
    span, textarea, input{
    color: ${p => p.theme.textColor2};
    }
    img:hover{
    background-color: ${p => p.theme.textColor2};
    }
`;

