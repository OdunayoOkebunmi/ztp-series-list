import React from 'react';
import { Card } from 'react-bootstrap';
import { Title, CardContainer } from './series-card-styles';
import SeriesList from './series-list';

const SeriesInfo = ({ series: { name, image, summary, premiered, runtime, genres }, episodes, series }) => {
  const description = summary.replace(/<[^>]*>/g, '');
  const premieredDate = new Date(premiered).toDateString();
  // const seasonsArray = [];
  // let season = episodes.map((items) => {
  //   seasonsArray.push(items.season)
  // })
  // season = new Set(seasonsArray)
  // console.log(season)
  return (

    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Card>
            <CardContainer>
              <Title>{ name }</Title>
              <p>Number of Episodes: { episodes.length }</p>
              <p>Premiered: { premieredDate }</p>
              <p>Runtime: { runtime } mins</p>
              <p>Genre: { genres[0] } </p>
              <Card.Img variant="top" src={ image.original } />
              <Card.Body>
                <Card.Text>
                  { description }
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