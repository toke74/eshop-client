import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.8rem 1.3rem;
  position: fixed;
  top: 0;
  z-index: 999;
`;

export const LogoLeft = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
  @media (max-width: ${({ theme }) => theme.device.md}) {
    display: none;
  }
`;

export const LogoMiddle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.device.md}) {
    display: none;
  }
`;

export const Shopping = styled(ShoppingBasketIcon)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem !important;
  margin-right: 0.5rem;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.6rem !important;
  }
`;

export const SearchBar = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.searchPadding};
  display: flex;
  align-items: center;

  input {
    background: transparent;
    width: 30vw;
    margin-left: 1rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.dark};
    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
  @media (max-width: ${({ theme }) => theme.device.md}) {
    display: none;
  }
`;

export const SearchI = styled(SearchIcon)`
  color: ${({ theme }) => theme.colors.gray};
`;

export const RightNavbar = styled.div`
  display: flex;
  align-items: center;
`;

export const TopLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.device.md}) {
    display: none;
  }
`;

export const BadgeCartIcon = styled(Badge)`
  margin-right: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

export const TopButtons = styled.div`
  @media (max-width: ${({ theme }) => theme.device.md}) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 7px 10px;
  margin-right: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

export const SignupButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 7px 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.87;
    transform: scale(1.1);
  }
`;

export const ProfilePhoto = styled.img`
  width: 2rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.87;
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 1.8rem;
  }
`;
