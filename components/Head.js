import Head from 'next/head';
import PropTypes from 'prop-types';

const MyHead = ({ title, description, keywords }) => {
    return (
        <Head>
            <title> {title} </title>

            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta content={title} name="title" />
            <meta content={description} name="description" />
            <meta content={keywords} name="keywords" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap" rel="stylesheet" />
        </Head>
    );
};

MyHead.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
};

MyHead.defaultProps = {
    title: '',
    description: '',
    keywords: '',
};

export default MyHead;