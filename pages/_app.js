import App from 'next/app';

// Styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (<Component {...pageProps} />);
  }
}

export default MyApp;