import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import axios from 'axios';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <h1>Lista de Artículos</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;