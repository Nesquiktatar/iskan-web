import styled from '@emotion/styled';

export const Login = styled.div`
    span {
    color: ${p => p.themes.dark.green};
    font-size: x-large;
    margin-left: 20%;
    }
    color: ${p => p.themes.dark.turquoise};
    button{
    width: 100px;
    font-size: 700;
    margin-left: 44%;
    }
    margin: 0 auto;
    margin:16% 0 0 32%;
`;

export const FormSummaryError = styled.div`
    border: red 2px solid;
    padding: 5px;
    color: green;
    `;

export const Email = styled.div`
    
    margin: 2% 0 3% 0;
    display: flex;
    input{
    width: 300px;
    margin-left: 20%;
    }
    
    `;

export const Password = styled.div`
    margin: 0 0 3% 0;
    display: flex;
    input{
    width: 300px;
    margin-left: 10%;
    }
`;

export const RememberMe = styled.div`
    display: flex;
    gap: 2%;
`;