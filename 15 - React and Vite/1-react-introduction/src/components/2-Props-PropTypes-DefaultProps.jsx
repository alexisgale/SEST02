import PropTypes from "prop-types";
function Book() {
  return (
    <>
      <BookCard
        title="Atomic Habits"
        author="James Clear"
        rating={4.8}
        isAvailable={true}
      ></BookCard>
      <BookCard
        title="Rich Dad Poor Dad"
        author="Robert Kiyosaki"
        rating={4.8}
        isAvailable={false}
      ></BookCard>
      <BookCard
        title="The Laws of Human Nature"
        author="Robert Greene"
        rating={4.6}
        isAvailable={true}
      ></BookCard>
      <BookCard></BookCard>
    </>
  );
}
function BookCard(props) {
  // ternary operator
  // condition ? true : false
  // if (condition) {} else {}
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Rating: {props.rating}</p>
      <p>Available: {props.isAvailable ? "Yes" : "No"}</p>
    </div>
  );
}

// defaultProps: set default values for props
BookCard.defaultProps = {
  title: "No Title",
  author: "No Author",
  rating: 0.0,
  isAvailable: false,
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isAvailable: PropTypes.bool.isRequired,
};

export default Book;
