import { Avatar, Card, Descriptions, List } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPlanets } from "../actions";
import { IMAGES } from "../constants";

const { Meta } = Card;
let randomImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];

const Planets = () => {
  const dispatch = useDispatch();

  const { planets } = useSelector((state) => state.planets);

  useEffect(() => {
    dispatch(requestPlanets());
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
        dataSource={planets}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              // style={{
              //   width: 500
              // }}
              cover={<img alt="planets" src={randomImage} />}
            >
              <Meta avatar={<Avatar src={randomImage} />} title={item.name} />

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
