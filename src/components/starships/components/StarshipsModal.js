import { Card, Modal } from "antd";
import React from "react";

const StarshipsModal = (props) => {
  const { onCancel, data, onOk, selectedModal } = props;

  return (
    <>
      {data.map(
        ({
          name,
          model,
          manufacturer,
          cost_in_credits,
          length,
          max_atmosphering_speed,
          crew,
          passengers,
          cargo_capacity,
          consumables,
          hyperdrive_rating,
          MGLT,
          starship_class,
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
            <p>{`Model: ${model}`}</p>
            <p>{`Manufacturer: ${manufacturer}`}</p>
            <p>{`Cost in Credits: ${cost_in_credits}`}</p>
            <p>{`Length: ${length}`}</p>
            <p>{`Max Atmosphering Speed: ${max_atmosphering_speed}`}</p>
            <p>{`Crew: ${crew}`}</p>
            <p>{`Passengers: ${passengers}`}</p>
            <p>{`Cargo Capacity: ${cargo_capacity}`}</p>
            <p>{`Consumables: ${consumables}`}</p>
            <p>{`Cargo-capacity: ${cargo_capacity}`}</p>
            <p>{`Hyperdrive Rating: ${hyperdrive_rating}`}</p>
            <p>{`MGLT: ${MGLT}`}</p>
            <p>{`Starship Class: ${starship_class}`}</p>
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

export default StarshipsModal;
