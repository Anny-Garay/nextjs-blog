import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Ayphu</title>
      </Head>
      <img className='banner' 
              src='https://media.licdn.com/dms/image/D4E16AQELUHTf8s6cFA/profile-displaybackgroundimage-shrink_200_800/0/1664387950681?e=2147483647&v=beta&t=ZASScfLaYy0nr8NuJJRY-NhStGjPe1vAegR2INTkHxM'
              alt='Ayphu' 
              />
      <h1 className='Titulo'>Ayphu</h1>
        <p>
          Ayphu es un panel que instala las aplicaciones con Docker a diferencia de otros paneles. 
          Pero eso no significa que sea un panel pensando exclusivamente para desarrolladores. 
          Ayphu está pensando en ser un panel de control para todos. Y la decisión de usar Docker 
          está sustentada en tener la base para escalar de forma sencilla.
          <br></br>
          <br></br>
          Para mas información ingresa aqui 
          <br></br>
          <a href='https://ayphu.com/'>Ayphu</a>
        </p>
      <h2>
        <Link href="/">← Volver a Inicio</Link>
      </h2>
    </Layout>
  );
}