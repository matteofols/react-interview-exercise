import React, {useRef, useCallback} from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { googleMapsKey } from "@utils/maps";
import {
  NCESSchoolFeatureAttributes,
  NCESDistrictFeatureAttributes,
} from "@utils/nces";

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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsKey,
  });

  const firstSchool = schools.find(s => s.LAT && s.LON);
  const firstDistrict = districts.find(d => d.LAT1516 && d.LON1516);

  const center = firstSchool
    ? { lat: firstSchool.LAT!, lng: firstSchool.LON! }
    : firstDistrict
    ? { lat: firstDistrict.LAT1516, lng: firstDistrict.LON1516 }
    : fallbackCenter;

    const mapRef = useRef<google.maps.Map | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;

    const bounds = new window.google.maps.LatLngBounds();

    schools?.forEach((s) => {
        if (s.LAT && s.LON) bounds.extend({ lat: s.LAT, lng: s.LON });
    });

    districts?.forEach((d) => {
        if (d.LAT1516 && d.LON1516) bounds.extend({ lat: d.LAT1516, lng: d.LON1516 });
    });

    if (!bounds.isEmpty()) {
        map.fitBounds(bounds);
    }
    }, [schools, districts]);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
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
