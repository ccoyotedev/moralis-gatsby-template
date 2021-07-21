import { styled } from 'theme';

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  background-color: ${({theme}) => theme.colors.dark1};
  z-index: 100;
  box-shadow: ${({theme}) => theme.shadow};
  transition: box-shadow 300ms ease;
  height: 8rem;

  @media ${({theme}) => theme.mediaQueries.laptop} {
    padding: 0;
    position: sticky;
    top:0;
    transition: all 300ms ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  };
`