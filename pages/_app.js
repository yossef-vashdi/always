// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} className="main" />
      </main>
    </Layout>
  );
}

export default MyApp;
