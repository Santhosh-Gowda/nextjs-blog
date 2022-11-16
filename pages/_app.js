import "../styles/globals.css";
import Layout from "../components/layout";
import Home from ".";

function MyApp({ Component, pageProps }) {
  console.log("Component", Component);
  return Component === Home ? (
    <Layout home>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
