import App from 'next/app';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (<Component {...pageProps} />);
  }
}

export default MyApp;