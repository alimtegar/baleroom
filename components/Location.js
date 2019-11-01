import { Map, GoogleApiWrapper } from 'google-maps-react';

const Location = (props) => {
    const mapStyles = {
        width: '100%',
        height: '100%',
    };

    return (
        <section id="location" className="position-relative">
            <Map
                google={props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            />
        </section>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD1BvbSHkJMbSJ0iJ8sL6H0bzr8_ka3wTY'
})(Location);