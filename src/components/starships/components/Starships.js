import { Avatar, Card, Descriptions, List } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestStarships } from "../actions";
import { IMAGES } from "../constants";

const { Meta } = Card;
let randomImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];

const Starships = () => {
  const dispatch = useDispatch();

  const { starships } = useSelector((state) => state.starships);
  console.log(starships);

  useEffect(() => {
    dispatch(requestStarships());
  }, [dispatch]);

  return (
    <div className="card-list">
      <List
        size="large"
        grid={{ gutter: 12, column: 2, lg: 3, md: 3, sm: 2, xs: 1, xxl: 3 }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 2,
        }}
        dataSource={starships}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt="starships" src={randomImage} />}
            >
              <Meta avatar={<Avatar src={randomImage} />} title={item.name} />

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
