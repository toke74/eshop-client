import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 10px 25px;
  cursor: pointer;
  color: gray;
  &:hover {
    background: ${({ theme }) => theme.colors.lightgray};
  }
`;

export const DrawerText = styled.span`
  margin-left: 25px;
  color: ${({ theme }) => theme.colors.dark};

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.8rem !important;
  }
`;
