import { Card, Modal } from "antd";
import React from "react";

const PlanetsModal = (props) => {
  const { onCancel, data, onOk, selectedModal } = props;

  return (
    <>
      {data.map(
        ({
          name,
          rotation_period,
          orbital_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population,
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
            <p>{`Rotation Period: ${rotation_period}`}</p>
            <p>{`Orbital Priod: ${orbital_period}`}</p>
            <p>{`Diameter: ${diameter}`}</p>
            <p>{`Climate: ${climate}`}</p>
            <p>{`Gravity: ${gravity}`}</p>
            <p>{`Terrain: ${terrain}`}</p>
            <p>{`Surface Water: ${surface_water}`}</p>
            <p>{`Population: ${population}`}</p>
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

export default PlanetsModal;
