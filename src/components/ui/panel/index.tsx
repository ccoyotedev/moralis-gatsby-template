import { styled } from 'theme';

export const Panel = styled.div`
  background-color: ${({ theme }) => theme.colors.dark2};
  padding: 4rem;
  border-radius: 1.6rem;
  box-shadow: ${({ theme }) => theme.shadow};
  border: 1px solid ${({theme}) => theme.colors.secondaryAccent};
`