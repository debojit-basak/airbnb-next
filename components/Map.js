import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import {useState} from "react";
import getCenter from "geolib/es/getCenter";

function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState({});
    console.log(setSelectedLocation)

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    //console.log(coordinates)
    const center = getCenter(coordinates);
    //console.log(center)
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGL
        mapStyle='mapbox://styles/dbasak/cks1kjohr9b7817pljoji47cy'
        mapboxApiAccessToken= {process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}

        >
            {
                searchResults.map(result => (
                    <div key={result.long}>
                        <Marker 
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                        >
                            <p onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce">📍</p>
                        </Marker>
                    </div>
                ))
            }

        </ReactMapGL>
    )
}

export default Map
