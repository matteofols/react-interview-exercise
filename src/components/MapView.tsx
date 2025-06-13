import React, {useRef, useCallback} from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { googleMapsKey } from "@utils/maps";
import {
  NCESSchoolFeatureAttributes,
  NCESDistrictFeatureAttributes,
} from "@utils/nces";

/**
 * @component MapView
 * @description Displays a Google Map centered on the first available school or district, showing markers for all schools and 
 *              districts provided. Automatically adjusts map bounds to fit all results using Google Maps JavaScript API.
 *              Uses `react-google-maps/api` for integration and `useJsApiLoader` for script loading.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} The Google Map component with school and district markers
 */


interface MapViewProps {
  schools?: NCESSchoolFeatureAttributes[];
  districts?: NCESDistrictFeatureAttributes[];
}

const containerStyle = {
  width: "100%",
  height: "70vh",
};

const fallbackCenter = {
  lat: 39.8283, // geographic center of the US
  lng: -98.5795,
};


const MapView = ({ schools = [], districts = [] }: MapViewProps) => {
  // Load the Google Maps JavaScript API asynchronously using the provided API key
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsKey,
  });

  // Attempt to find the first school or district with valid lat/lon to center the map
  const firstSchool = schools.find(s => s.LAT && s.LON);
  const firstDistrict = districts.find(d => d.LAT1516 && d.LON1516);

  // Determine initial map center based on the first available location
  const center = firstSchool
    ? { lat: firstSchool.LAT!, lng: firstSchool.LON! }
    : firstDistrict
    ? { lat: firstDistrict.LAT1516, lng: firstDistrict.LON1516 }
    : fallbackCenter; // fallback to center of the U.S.

  const mapRef = useRef<google.maps.Map | null>(null);

  // Callback to run once the map loads
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;

    // Create bounds object to dynamically fit all visible markers
    const bounds = new window.google.maps.LatLngBounds();

    // Expand bounds to include all school locations
    schools?.forEach((s) => {
      if (s.LAT && s.LON) bounds.extend({ lat: s.LAT, lng: s.LON });
    });

    // Expand bounds to include all district locations
    districts?.forEach((d) => {
      if (d.LAT1516 && d.LON1516) bounds.extend({ lat: d.LAT1516, lng: d.LON1516 });
    });

    // Fit map to include all markers if bounds is not empty
    if (!bounds.isEmpty()) {
      map.fitBounds(bounds);
    }
  }, [schools, districts]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad} // important: binds onLoad logic to the map instance
    >
      {/* Render school markers */}
      {schools.map((s, i) =>
        s.LAT && s.LON ? (
          <Marker
            key={`school-${i}`}
            position={{ lat: s.LAT, lng: s.LON }}
            title={s.NAME}
            label="S"
          />
        ) : null
      )}

      {/* Render district markers */}
      {districts.map((d, i) =>
        d.LAT1516 && d.LON1516 ? (
          <Marker
            key={`district-${i}`}
            position={{ lat: d.LAT1516, lng: d.LON1516 }}
            title={d.NAME}
            label="D"
          />
        ) : null
      )}
    </GoogleMap>
  ) : (
    <p>Loading map...</p>
  );
};

export default React.memo(MapView);
