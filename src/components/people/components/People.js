import { Avatar, Card, Descriptions, List, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCharacter } from "../actions";
import { IMAGES } from "../constants";

const { Option } = Select;
const { Meta } = Card;
let randomImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];

const People = () => {
  const dispatch = useDispatch();

  const { characters } = useSelector((state) => state.people);

  const [charactersData, setCharactersData] = useState(((characters.length !== 0) ? characters : []));

  useEffect(() => {
    dispatch(requestCharacter());
  }, [dispatch]);

  useEffect(() => {
    setCharactersData(characters);
  }, [characters]);

  const handleChangeName = (name) => {
    if (name) {
      return setCharactersData(characters.filter(character => character.name === name));
    }
    return setCharactersData(characters);
  };

  const handleChangeGender = (gender) => {
    if (gender === 'female') {
      return setCharactersData(characters.filter(character => character.gender === "female"));
    }
    if (gender === 'robot') {
      return setCharactersData(characters.filter(character => character.gender === "n/a"));
    }
    if (gender === 'male') {
      return setCharactersData(characters.filter(character => character.gender === "male"));
    }
    return setCharactersData(characters);
  };

  return (
    <div>
      <Select
        showSearch
        className="name-select"
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={handleChangeName}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {characters.map(item => (
            <Option value={item.name}>{item.name}</Option>
        ))}
      </Select>
      <Select
        showSearch
        className="name-select"
        style={{ width: 200 }}
        placeholder="Select a gender"
        optionFilterProp="children"
        onChange={handleChangeGender}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="female" key="female">female</Option>
        <Option value="male" key="male">male</Option>
        <Option value="robot" key="robot">robot</Option>
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
        dataSource={charactersData}
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
