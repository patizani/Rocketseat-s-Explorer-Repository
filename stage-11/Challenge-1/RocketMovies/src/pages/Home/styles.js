import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows:  105px 128px auto 64px;
  grid-template-areas: 
  "header"
  "section"
  "content"
  "content";
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};    
`;

export const Content = styled.div`
    width: 80%;
    margin: 0 auto;
    grid-area: content;
    padding-right: 5px;
    overflow-y: auto ;
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
`;
