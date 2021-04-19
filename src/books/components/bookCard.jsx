import PropTypes from "prop-types";
import Dotdotdot from "react-dotdotdot";
import { Button, Card } from "semantic-ui-react";

const BookCard = ({ book }) => (
  <Card key={book.id}>
    <Card.Content>
      <Card.Header>
        <Dotdotdot clamp={1}>{book.title}</Dotdotdot>
      </Card.Header>
      <Card.Meta>{book.isbn}</Card.Meta>
      <Card.Description>
        <Dotdotdot clamp={2}>{book.description}</Dotdotdot>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button basic color="grey">
          website
        </Button>
        <Button basic color="green">
          See more
        </Button>
      </div>
    </Card.Content>
  </Card>
);

BookCard.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.string.isRequired,
    description: PropTypes.string,
    cover: PropTypes.string,
    id: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    published: PropTypes.string,
    publisher: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
    pages: PropTypes.number,
    website: PropTypes.string,
  }).isRequired,
};

export default BookCard;
