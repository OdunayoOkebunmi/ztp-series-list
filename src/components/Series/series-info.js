import React from 'react';
import { Card } from 'react-bootstrap';
import { Title, CardContainer, Name } from './series-card-styles';
import SeriesList from './series-episode-list';

const SeriesInfo = ({ series: { name, image, summary, premiered, runtime, genres }, episodes }) => {
  const description = summary.replace(/<[^>]*>/g, '');
  const premieredDate = new Date(premiered).toDateString();

  return (

    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Card>
            <CardContainer>
              <Name>{ name }</Name>
              <p>Number of Episodes: { episodes.length }</p>
              <p>Premiered: { premieredDate }</p>
              <p>Runtime: { runtime } mins</p>
              <p>Genre: { genres[0] } </p>
              <Card.Img variant="top" src={ image ? image.original : null } />
              <Card.Body>
                <Card.Text>
                  { description ? description : null }
                </Card.Text>
              </Card.Body>
            </CardContainer>
          </Card>
        </div>
        <div className="col-sm-8">
          <Title> Episodes</Title>
          <SeriesList episodes={ episodes } />
        </div>

      </div>
    </div>

  )
}
export default SeriesInfo;