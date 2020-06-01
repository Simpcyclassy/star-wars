import { Card, Modal } from "antd";
import React from "react";

const PeopleModal = (props) => {
  const { onCancel, data, onOk, selectedModal } = props;

  return (
    <>
      {data.map(
        ({
          name,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          homeworld,
          created,
          edited,
          url,
        }) => (
          <Modal
            key={name}
            visible={selectedModal === name}
            closable
            onCancel={onCancel}
            title={name}
            onOk={onOk}
            footer={null}
          >
        <Card>
            <p>{`Height: ${height}`}</p>
            <p>{`Mass: ${mass}`}</p>
            <p>{`Hair color: ${hair_color}`}</p>
            <p>{`Skin Color: ${skin_color}`}</p>
            <p>{`Eye Color: ${eye_color}`}</p>
            <p>{`Birth Year: ${birth_year}`}</p>
            <p>{`Gender: ${gender}`}</p>
            <p>{`Homeworld: ${homeworld}`}</p>
            <p>{`Created: ${created}`}</p>
            <p>{`Edited: ${edited}`}</p>
            <p>{`Url: ${url}`}</p>
        </Card>
    </Modal>
        )
      )}
    </>
  );
};

export default PeopleModal;
