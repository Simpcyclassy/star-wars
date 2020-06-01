import { Avatar, Card, Descriptions, List } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCharacter } from "../actions";
import { IMAGES } from "../constants";

const { Meta } = Card;
let randomImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];

const People = () => {
  const dispatch = useDispatch();

  const { characters } = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(requestCharacter());
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
        dataSource={characters}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt="people" src={randomImage} />}
            >
              <Meta avatar={<Avatar src={randomImage} />} title={item.name} />

              <Descriptions bordered layout="vertical">
                <Descriptions.Item label="Birth year">
                  {item.birth_year}
                </Descriptions.Item>
                <Descriptions.Item label="Gender">
                  {item.gender}
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

export default People;
