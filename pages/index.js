import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className='contenedor-imagen'>
          <img className='imagen-centrada' 
              src='/images/profile.jpg'
              alt='Anny' 
              width={200} 
              height={200}/>
        </header>
          <h1 className={styles.title}>
            Anny Garay
          </h1>
        
        <p className={styles.description}>
          Hola, soy Anny . Esta es mi pagina de muestra :)
          <br></br> 
          Puedes ver mis trabajos aquí <a href="https://github.com/Anny-Garay">Github</a>
        </p>

        <div className={styles.grid}>
          <a href="/posts/first-post" className={styles.card}>
            <h3>Ayphu &rarr;</h3>
            <p>¡Sé más rápido, gestiona tus sitios web con el panel de Ayphu!</p>
          </a>

          <a href="/posts/second-post" className={styles.card}>
            <h3>Animal Crossing &rarr;</h3>
            <p>Escapa a una isla desierta y crea tu propio paraíso con Animal Crossing: New Horizon</p>
          </a>
          
        </div>
      </main>


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
