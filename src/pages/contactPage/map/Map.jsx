import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
const Map = () => {
  // const [userLocation, setUserLocation] = useState(null);

  // const getUserLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude: lat, longitude: lng } = position.coords;
  //         setUserLocation({ lat, lng });
  //       },
  //       (error) => {
  //         console.error("Error getting user location:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // };

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[42.1154772, 44.769158]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[42.1154772, 44.769158]}></Marker>
      </MapContainer>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11838.50454576695!2d44.769158043136194!3d42.11547717381465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044f9db7cb960eb%3A0x90d6c625683837cf!2sKvemo%20Aranisi!5e0!3m2!1sen!2sge!4v1712483184564!5m2!1sen!2sge"
        width="600"
        height="450"
        style={{ width: "100%", height: "100%" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </div>
  );
};

export default Map;
