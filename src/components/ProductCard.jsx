
import React from 'react';
import {
  Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from 'reactstrap';
import './ProductCard.css';

const Product = () => {
  const cards = [
    {
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      text: 'Some quick example text for card 1.',
      img: 'https://picsum.photos/300/200',
    },
    {
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      text: 'Some quick example text for card 2.',
      img: 'https://picsum.photos/300/200?random=1',
    },
    {
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      text: 'Some quick example text for card 3.',
      img: 'https://picsum.photos/300/200?random=2',
    },
    {
      title: 'Card 4',
      subtitle: 'Subtitle 3',
      text: 'Some quick example text for card 3.',
      img: 'https://picsum.photos/300/200?random=2',
    },
    {
      title: 'Card 5',
      subtitle: 'Subtitle 3',
      text: 'Some quick example text for card 3.',
      img: 'https://picsum.photos/300/200?random=2',
    },
    {
      title: 'Card 6',
      subtitle: 'Subtitle 3',
      text: 'Some quick example text for card 3.',
      img: 'https://picsum.photos/300/200?random=2',
    },
  ];

  return (
    <div className="product-row">
      {cards.map((card, index) => (
        <Card key={index} style={{ width: '18rem', margin: '10px' }}>
          <img alt="Sample" src={card.img} />
          <CardBody>
            <CardTitle tag="h5">{card.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {card.subtitle}
            </CardSubtitle>
            <CardText>{card.text}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Product;
