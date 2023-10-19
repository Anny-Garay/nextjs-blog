import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function SecondPost() {
  return (
    <Layout>
      <Head>
        <title>Animal Crossing</title>
      </Head>

      <img className='banner' 
              src='https://pbs.twimg.com/media/ERqrxJ5X0AAFa2n.jpg'
              alt='Animal Crossing' 
              />
      <h1 className='Titulo'>Animal Crossing</h1>
        <p>
          Animal Crossing es una serie de videojuegos de simulación de vida publicada por Nintendo 
          y creada por Katsuya Eguchi y Hisashi Nogami, ​​​​​ en la que el jugador vive en un pueblo habitado 
          por animales antropomórficos, llevando a cabo diversas actividades.    
        
          <br></br>
          <br></br>
          Para mas información ingresa aqui 
          <br></br>
          <a href='https://animalcrossing.nintendo.com/es/'>Animal Crossing</a>
        </p>
      <h2>
        <Link href="/">← Volver a Inicio</Link>
      </h2>
    </Layout>
  );
}