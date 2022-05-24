import Slider from "react-slick";
import { INewBookApi } from "../../services/types";
import { StyledLink } from "../Listitem/styles";
import { Title } from "../Title/Title";
import {
  CustomSlide,
  SlideContainer,
  SliderTitle,
  SliderPrice,
} from "./styles";

interface IBookSlider {
  books: INewBookApi[];
}

export const BookSlider = ({ books }: IBookSlider) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <>
      <Title>Limited-time offers</Title>
      <Slider {...settings}>
        {books.slice(7, 18).map((book) => {
          return (
            <SlideContainer>
              <StyledLink to={`/bookstore/books/${book.isbn13}`}>
              <CustomSlide>
                <img src={book.image} alt={book.title} />
                <div>
                  <SliderTitle>{book.title}</SliderTitle>
                  <SliderPrice>
                    {book.price === "$0.00" ? "Free for you" : book.price}
                  </SliderPrice>
                </div>
              </CustomSlide>
              </StyledLink>
            </SlideContainer>
          );
        })}
      </Slider>
    </>
  );
};
