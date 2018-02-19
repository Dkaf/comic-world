import React from 'react';
import NewsArticle from './NewsArticle';
import NavBar from './NavBar';

const ArticlesPage = () => (
  <div>
    <NewsArticle 
      title="test article"
      date="01/01/99"
      content="testing testing 123 123 testing testing 123"
    />
  </div>
);

export default ArticlesPage;