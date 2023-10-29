import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import axios from 'axios';

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://127.0.0.1:1337/api/productos');
    console.log(response)
    const producto = response.data.data;

    return {
      props: { 
        producto, 
      },
    };
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
    return {
      props: {
        producto: [],
      },
    };
  }
}

export default function Productos({ producto }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Productos</title>
      </Head>
      <main>
        <h1>
          Productos
        </h1>
        <ul>
        {
            producto.map(({id, attributes})=>(
              <li key={id}>{id} - {attributes.nombre}</li>
            ))
        }
        </ul>
        </main>
    </div>
  );
}