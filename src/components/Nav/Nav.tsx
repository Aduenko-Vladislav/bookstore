import { routes } from "../../routes/routes";
import { useAppSelector } from "../../store/hooks/hooks";
import { getCartInfo } from "../../store/selectors/cartSelectors";
import { getUserInfo } from "../../store/selectors/userSelectors";
import {
  NavIconFavorites,
  NavIconOrder,
  NavIconUser,
  RedCircle,
  StyledCartCircle,
  StyledLink,
  StyledNav,
} from "./styles";
export const Nav = () => {
  const { cart } = useAppSelector(getCartInfo);
  const { favorites } = useAppSelector(getUserInfo);
  return (
    <StyledNav>
      <StyledLink to={routes.FAVORITES}>
        <NavIconFavorites />
        {favorites.length !== 0 ? (
          <StyledCartCircle>
            <RedCircle />
          </StyledCartCircle>
        ) : (
          <></>
        )}
      </StyledLink>
      <StyledLink to={routes.CART}>
        <NavIconOrder />
        {cart.length !== 0 ? (
          <StyledCartCircle>
            <RedCircle />
          </StyledCartCircle>
        ) : (
          <></>
        )}
      </StyledLink>
      <StyledLink to={routes.ACCOUNT}>
        <NavIconUser />
      </StyledLink>
    </StyledNav>
  );
};
