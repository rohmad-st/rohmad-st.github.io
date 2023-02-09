import React from 'react';
import { articles } from '../data';
import { Container, List, ListItem, ListItemImage, ListItemTitle, ListItemDescription, Stack } from './styles';

export class Articles extends React.Component {
  render() {
    return (
      <Container>
        <Stack>
          <List>
            {articles.map((article, index) => (
              <ListItem key={index} id={article.id}>
                <a href={article.source} target="_blank" title="Klik untuk membaca tulisan!">
                  <ListItemImage alt="image" src={article.image} />
                  <ListItemTitle>{article.title}</ListItemTitle>
                  <ListItemDescription>
                    <span>{article.date}</span>
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
