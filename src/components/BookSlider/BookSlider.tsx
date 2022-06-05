import Slider from "react-slick";
import { INewBookApi } from "../../services/types";
import { StyledLink } from "../BookItem/styles";
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
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Title>Limited-time offers</Title>
      <Slider {...settings}>
        {books.slice(7, 18).map((book) => {
          return (
              <SlideContainer key={book.isbn13}>
                <StyledLink to={`/books/${book.isbn13}`}>
                  <CustomSlide>
                    <img src={book.image} alt={book.title} />
                    <div>
                      <SliderTitle>{book.title}</SliderTitle>
                      <SliderPrice>
                        {book.price === "$0.00" ? "Not Available" : book.price}
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
