import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PhoneBar = () => {
  const [phone, setPhone] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        const phonesData = loadedData.map((phone) => {
          const phonePrice = phone.slug.split("-");
          const price = phonePrice[1];
          const priceParts = parseInt(price);
          const phoneInfo = {
            name: phone.phone_name,
            price: priceParts,
          };
          return phoneInfo;
        });
        setPhone(phonesData);
      });
  }, []);
  return (
    <div>
      <h1>HEllo axios mama!{phone.length}</h1>
      <BarChart height={500} width={1000} data={phone}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey="name" fill="#8884d8"></Bar>
        <Bar dataKey="price" fill="#82ca9d"></Bar>
      </BarChart>
    </div>
  );
};

export default PhoneBar;
