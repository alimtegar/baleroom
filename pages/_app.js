import App from 'next/app';
import NextNProgress from '../components/NextNProgress';

// Styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <div>
                <NextNProgress color="#3fc3ff" />
                <Component {...pageProps} />
            </div>
        );
    }
}

export default MyApp;