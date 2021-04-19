import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

import BookCard from "./components/bookCard";

const BooksContainer = () => {
  const [isLoading, setIsloading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setIsloading(true);
    axios
      .get(
        "https://raw.githubusercontent.com/sing2gather/impala-exercise/main/data.json"
      )
      .then((data) => {
        setBooks(data.data.books);
      })
      .finally(() => setIsloading(false));
  }, []);

  if (isLoading) {
    return "is isLoading";
  }

  if (!books.length) {
    return "no books actually";
  }

  return (
    <Card.Group>
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </Card.Group>
  );
};

export default BooksContainer;
