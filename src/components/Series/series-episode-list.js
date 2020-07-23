import React from 'react';
import { Card } from 'react-bootstrap';

const SeriesList = ({ episodes }) => {
  return (
    <div>
      { episodes.map((episode, index) => (
        <Card key={ index } className="py-5">
          <div className="row">
            <div className="col-sm-3">
              <Card.Img variant="top" src={ episode.image ? episode.image.original : null } style={ { margin: '20px', width: '150px' } } />
            </div>
            <div className="col-sm-9">
              <h4>
                { episode.name }
              </h4>
              <Card.Text className="px-3">{ episode.summary ? episode.summary.replace(/<[^>]*>/g, '') : null }</Card.Text>
            </div>
          </div>
        </Card>

      )) }
    </div>
  )
}
export default SeriesList;