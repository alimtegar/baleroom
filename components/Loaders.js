import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

// Button Loader
export const ButtonLoader = ({ height, width }) => {
    return (
        <ContentLoader
            height={height}
            width={width}
            speed={2}
            primarycolor="#8b463d"
            secondarycolor="#8e4b42"
            style={{
                marginTop: -1,
                height: height
            }}
        >
            <rect x="0" y="0" rx={height / 2} ry={height / 2} width={width} height={height} />
        </ContentLoader>
    );
};

ButtonLoader.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

// Text Loader
export const TextLoader = ({ height, width }) => {
    return (
        <ContentLoader
            height={height}
            width={width}
            speed={2}
            primarycolor="#8b463d"
            secondarycolor="#8e4b42"
            style={{
                marginTop: -1,
                height: height,
                maxWidth: '100%',
            }}
        >
            <rect x="0" y="0" rx="4" ry="4" width={width} height={height} />
        </ContentLoader>
    );
};

TextLoader.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

// Multi-Line Text Loader
export const MultiLineTextLoader = ({ lineTotal, lineHeight, height, width }) => {
    const lineTotalArr = [...Array(lineTotal).keys()];
    const lastLineWidth = isNaN(width) ? '80%' : (width * 0.8);
    const lastLineX = isNaN(width) ? '10%' : (width * 0.1);

    return (
        <ContentLoader height={height}
            width={width}
            speed={2}
            primarycolor="#8b463d"
            secondarycolor="#8e4b42"
            style={{
                marginTop: -1,
                height: (height + lineHeight) * lineTotal,
            }}
        >
            {lineTotalArr.map((i) => (
                <rect
                    x={(i + 1) < lineTotalArr.length ? 0 : lastLineX}
                    y={i * (height + lineHeight)}
                    rx="4"
                    ry="4"
                    width={(i + 1) < lineTotalArr.length ? width : lastLineWidth}
                    height={height}
                    key={Math.random()}
                />
            ))}
        </ContentLoader>
    );
};

MultiLineTextLoader.propTypes = {
    lineTotal: PropTypes.number.isRequired,
    lineHeight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.any.isRequired,
};

// Square Loader
export const SquareLoader = ({ side }) => {
    return (
        <ContentLoader
            height={side}
            width={side}
            speed={2}
            primarycolor="#8b463d"
            secondarycolor="#8e4b42"
            style={{
                marginTop: -1,
                height: side
            }}
        >
            <rect x="0" y="0" rx="4" ry="4" width={side} height={side} />
        </ContentLoader>
    );
};

SquareLoader.propTypes = {
    side: PropTypes.number.isRequired,
};

// Rectangle Loader
export const RectangleLoader = ({ width, height }) => {
    return (
        <ContentLoader
            height={height}
            width={width}
            speed={2}
            primarycolor="#8b463d"
            secondarycolor="#8e4b42"
            style={{
                marginTop: -1,
                height: height
            }}
        >
            <rect x="0" y="0" rx="4" ry="4" width={width} height={height} />
        </ContentLoader>
    );
};

RectangleLoader.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

// Background Loader
export const BackgroundLoader = () => {
    const width = '100%';
    const height = '100%';

    return (
        <ContentLoader
            height={height}
            width={width}
            speed={2}
            primarycolor="#8b463d"
            secondarycolor="#8e4b42"
            style={{
                marginTop: -1,
                height: height,
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        >
            <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
        </ContentLoader>
    );
};

// Circle Loader
export const CircleLoader = ({ diameter }) => {
    return (
        <ContentLoader
            height={diameter}
            width={diameter}
            speed={2}
            primarycolor="#8b463d"
            secondarycolor="#8e4b42"
            style={{
                marginTop: -1,
                height: diameter
            }}
        >
            <rect x="0" y="0" rx={diameter / 2} ry={diameter / 2} width={diameter} height={diameter} />
        </ContentLoader>
    );
};

CircleLoader.propTypes = {
    diameter: PropTypes.number.isRequired,
};