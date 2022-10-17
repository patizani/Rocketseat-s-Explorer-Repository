import styled from 'styled-components'
import backgroundImg from '../../assets/Group15.png'

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 146px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }
    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    > a {
        margin: 42px auto;
        color: ${({ theme }) => theme.COLORS.PINK};
        display: flex;    

        align-items: center;
        gap: 9px;
        justify-content: center;
        svg {
            height: 26px;
            width: auto;            
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: opacity(0.4);
`;