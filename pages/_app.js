import { Provider } from 'react-redux'
import { useStore } from '../redux/store/index'
import '../styles/globals.css'
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done()); 

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
