import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;
    padding: 22px;
    margin-bottom: 16px;
    > a {
        display: flex;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    /* > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};

    } */
    > h2 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
        > svg{
            color: ${({ theme }) => theme.COLORS.PINK};            
        }
        > .rated {
            fill:  ${({ theme }) => theme.COLORS.PINK};
        }
    }
    
    > p  {
        flex: none;
        order: 1;
        align-items: stretch;
        flex-grow: 0;
        text-align: justify;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        height: 40px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        @supports (-webkit-line-clamp: 2) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: initial;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        transition: all 800ms;
    }
    > p:hover{
        height: 80px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        @supports (-webkit-line-clamp: 4) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: initial;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }
    }
    > p:active{
        height: auto;
        white-space: initial;
        text-overflow: initial;
        overflow: hidden;
        @supports (-webkit-line-clamp: initial) {
            overflow: hidden;
            text-overflow: initial;
            white-space: initial;
            display: -webkit-box;
            -webkit-line-clamp: initial;
            -webkit-box-orient: initial;
        }
    }
    
    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;