import Head from 'next/head';
import PropTypes from 'prop-types';

const MyHead = ({ title, subTitle, description, keywords }) => {
    return (
        <Head>
            <title>{title + (subTitle ? ' | ' + subTitle : '')}</title>

            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta content={title + (subTitle ? ' | ' + subTitle : '')} name="title" />
            <meta content={description} name="description" />
            <meta content={keywords} name="keywords" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap" rel="stylesheet" />
            
            <meta name="google-site-verification" content="tl-9G-lyIKKEj57v7htUQrmlOO2jSY_NsACKO5i3Q-s" />
        </Head>
    );
};

MyHead.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
};

MyHead.defaultProps = {
    title: 'Baleroom',
    subTitle: '',
    description: 'Beleroom Hotel Apartement',
    keywords: 'baleroom,hotel,apartemen',
};

export default MyHead;