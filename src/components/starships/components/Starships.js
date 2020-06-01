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
import { requestStarships } from "../actions";
import { IMAGES } from "../constants";
import StarshipsModal from "./StarshipsModal";

const { Option } = Select;
const { Meta } = Card;
let randomImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];

const Starships = () => {
  const dispatch = useDispatch();

  const { starships } = useSelector((state) => state.starships);
  const [starshipsData, setStarshipsData] = useState(((starships.length !== 0) ? starships : []));
  const [selectedModal, setSelectedModal] = useState(null);

  useEffect(() => {
    dispatch(requestStarships());
  }, [dispatch]);

  useEffect(() => {
    setStarshipsData(starships);
  }, [starships]);

  const handleChangeStarship = (name) => {
    if (name) {
      return setStarshipsData(starships.filter(starship => starship.name === name));
    }
    return setStarshipsData(starships);
  };

  return (
    <div>
      <StarshipsModal
        selectedModal={selectedModal}
        onCancel={() => setSelectedModal(null)}
        data={starships}
        onOk={() => setSelectedModal(null)}
      />

      <Select
        showSearch
        className="name-select"
        style={{ width: 200 }}
        placeholder="Select a starship"
        optionFilterProp="children"
        onChange={handleChangeStarship}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {starships.map(item => (
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
        dataSource={starshipsData}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt="starships" src={randomImage} />}
            >
              <Meta
                avatar={<Avatar src={randomImage} />}
                title={item.name}
                description={
                  <Tooltip title="view starship">
                    <Button
                      onClick={() => setSelectedModal(item.name)}
                      type="link"
                      icon={<EyeOutlined/>}
                    />
                  </Tooltip>
                }
              />
              <Descriptions bordered layout="vertical">
                <Descriptions.Item label="Model">
                  {item.model}
                </Descriptions.Item>
                <Descriptions.Item label="Cargo Capacity">
                  {item.cargo_capacity}
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

export default Starships;
