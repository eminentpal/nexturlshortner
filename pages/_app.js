import "../styles/globals.css";
import "../styles/headerStyles.css";
import "../styles/homeStyles.css";
import "../styles/footerStyles.css";

import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
