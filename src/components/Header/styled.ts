import styled from "styled-components";
import theme from "../../theme";
interface SHOWNAV {
  showNavBar?: boolean;
}
export const Container = styled.div<SHOWNAV>`
  width: 100%;
  min-height: 90px;
  align-self: center;
  align-items: center;
  ${({ showNavBar }) => showNavBar !== true && "display: flex"};
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.primaryColor.color};
  @media screen and (max-width: 768) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;
export const Logo = styled.div`
  align-self: center;
  padding-left: 32px;
  margin-top: 16px;
`;
export const Manue = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  padding-left: 32px;
  justify-content: center;
  @media screen and (max-width: 768) {
    height: auto;
    flex-direction: column;
  }
`;
export const HamburgerManue = styled.a`
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  right: 24px;
  top: 28px;
  width: 30px;
  height: 22px;
  @media screen and (max-width: 768px) {
    display: flex;
    top: 32px;
  }
`;
export const SpanBar = styled.span`
  height: 3px;
  width: 100%;
  background-color: ${theme.LinksColor.color};
  border-radious: 10px;
`;
export const HideManue = styled.div``;