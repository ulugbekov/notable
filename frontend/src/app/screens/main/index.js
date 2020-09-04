import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, List, Header, Table, Button } from "semantic-ui-react";

import {
  fetchPhysicians,
  fetchAppointments,
  selectPhycision,
} from "app/actions";

export default function Home(props) {
  const dispatch = useDispatch();
  const { physicians, physician } = useSelector(({ physicians }) => physicians);
  const appointments = useSelector(({ appointments }) => appointments);

  useEffect(() => {
    dispatch(fetchPhysicians());
  }, []);

  useEffect(() => {
    if (!physician) return;

    dispatch(fetchAppointments(physician.id));
  }, [physician]);

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={4}>
          <h1>Notable</h1>
          <List animated verticalAlign="middle">
            {physicians.map((physician) => {
              return (
                <List.Item>
                  <List.Content>
                    <List.Header
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(selectPhycision(physician))}
                    >
                      {physician.last_name}, {physician.first_name}
                    </List.Header>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>

          <Button content="Logout" primary />
        </Grid.Column>
        <Grid.Column width={12}>
          {physician && (
            <div>
              <h1>
                Dr. {physician.first_name} {physician.last_name}
              </h1>
              <h3>{physician.email}</h3>
            </div>
          )}
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>#</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Kind</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {appointments.map((appointment) => {
                return (
                  <Table.Row>
                    <Table.Cell singleLine>{appointment.id}</Table.Cell>
                    <Table.Cell singleLine>{appointment.patient}</Table.Cell>
                    <Table.Cell singleLine>{appointment.time}</Table.Cell>
                    <Table.Cell singleLine>{appointment.kind}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
