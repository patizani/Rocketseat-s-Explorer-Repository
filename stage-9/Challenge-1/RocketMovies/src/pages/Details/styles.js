import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
        "header"
        "content";
    > main {
        grid-area: content;
        /* overflow-y: scroll; */
        padding: 64px 0;
        margin-bottom: 156px;
    }
`;


export const Content = styled.div`
    max-width: 1026px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 20px;
    }
    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-thumb {
        border: 5px solid transparent;
        background-clip: padding-box;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 10px;
    }
    > button:first-child{
        align-self: end;
    }
    > header {
        a {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > p  {
        margin: 40px 0 156px 0;
        text-align: justify;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        height: 40px;
    }
`;

export const Title = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: rows;
    align-items: baseline;
    justify-content: space;
    gap: 19px;

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
        line-height: 47px;
        text-align: left;
         color: ${({ theme }) => theme.COLORS.WHITE};       
         }
    
     > h2 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        display: flex;
        gap: 10px;
    
        color: ${({ theme }) => theme.COLORS.PINK};
        > svg{
            color: ${({ theme }) => theme.COLORS.PINK};
            height: 20px;
            width: 20px; 
        }
        > .rated {
            fill:  ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Author = styled.div`
    margin-top: 24px;
    display: flex;
    gap: 10px;
    padding: 10px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    > img {
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100} ;
        /* margin-right: 10px; */
    }
    > svg {
        /* margin: 2px 5px 0 20px; */
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;