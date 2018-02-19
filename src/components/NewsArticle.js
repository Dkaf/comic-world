import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const NewsArticle = (props) => (
  <Container className="news-article">
    <Header as="h3">{props.title}</Header>
    <span>{props.date}</span>
    <p>{props.content}</p>
  </Container>
);

export default NewsArticle;