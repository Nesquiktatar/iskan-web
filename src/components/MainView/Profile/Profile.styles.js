import styled from '@emotion/styled';

export const Profile = styled.div`
    background-color: ${p => p.themes.dark};
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
   color: ${p => p.themes.dark.turquoise};
   font-size: x-large;
  
`;

export const Description = styled.div`
    color: ${p => p.themes.dark.green};
`;

