import React from 'react';
import Article from '../components/Article'
const ArticleList = ({articles}) => {
    const renderedArticles = articles.map((article) => {
        return <Article key={article.pageid} article={article} />
    })
  return (
    <div>
      {renderedArticles}
    </div>
  );
}

export default ArticleList;
