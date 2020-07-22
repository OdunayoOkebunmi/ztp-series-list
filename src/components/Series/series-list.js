import React from 'react';
import { Card } from 'react-bootstrap';
import { Description } from './series-card-styles';

const SeriesList = ({ episodes }) => {
  return (
    <div>
      { episodes.map((episode, index) => (
        <Card key={ index }>
          <div className="row">
            <div className="col-sm-3">
              <Card.Img variant="top" src={ episode.image.medium } style={ { margin: '20px', width: '150px' } } />
            </div>
            <div className="col-sm-9">
              <Description>
                { episode.name }
              </Description>
              <p>{ episode.summary.replace(/<[^>]*>/g, '') }</p>
            </div>
          </div>
        </Card>

      )) }
      < p > Hello</p >
    </div>
  )
}
export default SeriesList;