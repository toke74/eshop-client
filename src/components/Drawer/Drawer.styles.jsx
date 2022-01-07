import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.device.md}) {
    display: none;
  }
`;
export const IconBtn = styled(IconButton)`
  margin-left: 10px !important;
  cursor: pointer;
`;

export const DrawerWrapper = styled.div`
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  cursor: pointer;
  color: gray;
  &:hover {
    background: ${({ theme }) => theme.colors.lightgray};
  }
`;

export const DrawerText = styled.span`
  margin-left: 35px;
  color: ${({ theme }) => theme.colors.dark};

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.8rem !important;
  }
`;

export const Hr = styled.hr`
  margin: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

export const SearchBar = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.searchPadding};
  display: flex;
  align-items: center;
  margin: 0 10px 5px;

  input {
    background: transparent;
    width: 30vw;
    margin-left: 0.6rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.dark};

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
  @media (min-width: ${({ theme }) => theme.device.md}) {
    display: none;
  }
`;
