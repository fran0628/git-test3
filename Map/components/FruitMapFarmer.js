import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FruitMapFarmerItem from "./FruitMapFarmerItem";

function FruitMapFarmer(props) {
  const { data } = props;
  console.log(data);
  const position = [24.96, 121.192];
  // const [FruitMapFarmerItem, setFruitMapFarmerItem] = useState();
  const farmNameList = {};
  const descriptionList = {};
  // const featureList = {};

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="container-fluid col-md-7">
            <MapContainer
              center={position}
              zoom={8}
              scrollWheelZoom={true}
              className="map"
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {data.map((item) => (
                <Marker position={[item.latitude, item.longitude]}>
                  <Popup>
                    <h4> {item.fram_name}</h4>
                    {item.address} <br /> {item.content}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <div class="col-md-5 px-1">
            <FruitMapFarmerItem
              farmNameList={farmNameList.farmNameOne}
              descriptionList={descriptionList.descriptionListOne}
            />
            <FruitMapFarmerItem />
            <FruitMapFarmerItem />
          </div>
        </div>
      </div>
    </>
  );
}
export default FruitMapFarmer;
