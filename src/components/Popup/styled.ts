import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    width: 200px;
    padding: 10px;
    border-radius: 18px 18px 18px 0;
    background: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.darkGray};
    top: calc(50vh - 75px);
    left: calc(50vw + 125px);
    box-shadow: 0 5px 10px 0px ${({ theme }) => theme.colors.darkGray};
    text-align: center;
`;
