import React from 'react';
import { speakers } from '../data';
import { Container, List, ListItem, ListItemImage, ListItemTitle, ListItemDescription, Stack } from './styles';

export class Speakers extends React.Component {
  render() {
    return (
      <Container>
        <Stack>
          <List>
            {speakers.map((speaker, index) => (
              <ListItem key={index} id={speaker.id}>
                <a href={speaker.source} target="_blank" title="Klik untuk melihat sumber!">
                  <ListItemImage alt="image" src={speaker.image} />
                  <ListItemTitle>{speaker.title}</ListItemTitle>
                  <ListItemDescription>
                    <span>{speaker.date}</span> | {speaker.organizer}
                  </ListItemDescription>
                </a>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Container>
    );
  }
}
