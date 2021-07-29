import React, { useEffect, useState } from "react";
import axios from 'axios';
// import { Link, withRouter } from "react-router-dom";
// import FruitMapIcon from "../indexCustomAniIcon/avocado.png";
// import axios from "axios";

function FruitMapFarmerItem(props) {
  // const { farmName, description, feature } = props;
  // const [farm_Name, setFarm_Name] = useState([]);
  // const [content, setContent] = useState([]);

  // 認識小農按鈕連結
  const urlid = String();
  const urlknowfarmbtn = "/farmerlist/" + urlid;
  // 抓小農頭像圖片
  const PF = "http://localhost:5000/images";

  // 抓果園名稱與果園介紹

  const [data, setData]=useState([]);
  // const [FruitMapFarmerItem, setFruitMapFarmerItem] = useState([]);

  useEffect(() => {
    const fetchFruitMapFarmerItem = async () => {
      const res = await axios.get("/Map/Fruit");
      console.log(res);
      console.log(res.data);
      setData(res.data)
    };
    fetchFruitMapFarmerItem();
  }, []);

  // useEffect(() => {
  //   const fetchFruitMapFarmerItem = async () => {
  //     const res = await axios.get("/Map/Fruit");
  //     console.log(res);
  //     setFruitMapFarmerItem(res.data);
  //     console.log(res.data);
  //   };

  //   fetchFruitMapFarmerItem();
  // }, []);

  return (
    <>
      <div className="container-fluid d-flex farmer flex-row block mt-2">
        <div>
          <img
            className="avatar mt-3 m-3 object-fit"
            src={PF + data.avatar}
            alt="Img"
          />
          <h6 className="mt-3 m-3">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </h6>
        </div>
        <div className="vertical align-items-center">
          <h4 className="mt-4">果園名稱{FruitMapFarmerItem.fram_Name}</h4>
          <h6>果園介紹{FruitMapFarmerItem.content}</h6>
          <div className="mt-5 ">
            <h6>口碑第一</h6>
          </div>
        </div>
        <a href={urlknowfarmbtn}>
          <button className="knowfarmbtn align-self-end p-1">認識小農</button>
        </a>
      </div>
    </>
  );
}
export default FruitMapFarmerItem;
