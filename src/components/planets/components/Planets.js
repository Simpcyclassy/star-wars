import { EyeOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  Descriptions,
  List,
  Select,
  Tooltip,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPlanets } from "../actions";
import { IMAGES } from "../constants";
import PlanetsModal from "./PlanetsModal";

const { Option } = Select;
const { Meta } = Card;
let randomImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];

const Planets = () => {
  const dispatch = useDispatch();

  const { planets } = useSelector((state) => state.planets);
  const [planetsData, setPlanetsData] = useState(((planets.length !== 0) ? planets : []));
  const [selectedModal, setSelectedModal] = useState(null);

  useEffect(() => {
    dispatch(requestPlanets());
  }, [dispatch]);

  useEffect(() => {
    setPlanetsData(planets);
  }, [planets]);

  const handleChangePlanet = (name) => {
    if (name) {
      return setPlanetsData(planets.filter(planet => planet.name === name));
    }
    return setPlanetsData(planets);
  };

  return (
    <div className="card-list">
      <PlanetsModal
        selectedModal={selectedModal}
        onCancel={() => setSelectedModal(null)}
        data={planets}
        onOk={() => setSelectedModal(null)}
      />
      <Select
        showSearch
        className="name-select"
        style={{ width: 200 }}
        placeholder="Select a planet"
        optionFilterProp="children"
        onChange={handleChangePlanet}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {planets.map(item => (
            <Option value={item.name}>{item.name}</Option>
        ))}
      </Select>
      <List
        size="large"
        grid={{ gutter: 12, column: 2, lg: 3, md: 3, sm: 2, xs: 1, xxl: 3 }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 2,
        }}
        dataSource={planetsData}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt="planets" src={randomImage} />}
            >
              <Meta
                avatar={<Avatar src={randomImage} />}
                title={item.name}
                description={
                  <Tooltip title="view planet">
                    <Button
                      onClick={() => setSelectedModal(item.name)}
                      type="link"
                      icon={<EyeOutlined/>}
                    />
                  </Tooltip>
                }
              />

              <Descriptions bordered layout="vertical">
                <Descriptions.Item label="Population">
                  {item.population}
                </Descriptions.Item>
                <Descriptions.Item label="Climate">
                  {item.climate}
                </Descriptions.Item>
              </Descriptions>
            </Card>
            ,
          </List.Item>
        )}
      />
    </div>
  );
};

export default Planets;
