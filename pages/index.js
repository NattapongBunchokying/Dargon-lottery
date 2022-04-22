import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dargon Lottery</title>
        <meta name="description" content="Ethereum Dargon Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <nav classname="navbar">
         <div classname="container">
            <div classname="navbar-barand">
                <h1>Dargon Lottery 🐉</h1>
            </div>
            <div classname="navar-end" >
            <button class="button is-primary is-light">Connect Wallet</button>
            </div>
         </div>
        </nav>
        <div classname="container">
          <section classname="mt-5">
            <div classname="column is-two-thirds">

            </div>
            <div classname="column is-one-thirds">
              
            </div>
            </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; BY NATTAPONG B.</p>
      </footer>
    </div>
  )
}
