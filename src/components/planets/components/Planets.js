import { List } from "antd";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestPlanets } from '../actions';

const Planets = () => {
  const dispatch = useDispatch();

  const { planets } = useSelector(
    (state) => state.planets
  );
  console.log(planets);

  useEffect(() => {
      dispatch(requestPlanets());
  }, [dispatch, planets]);

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 2,
      }}
      dataSource={planets}
      footer={
        <div>
          <p>Star Wars Planets</p>
        </div>
      }
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            description={item.name}
          />
        </List.Item>
      )}
    />
  );
};

export default Planets;
