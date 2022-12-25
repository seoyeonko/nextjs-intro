import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

// Component: 렌더링하길 원하는 페이지
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
