import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import React from 'react';

const CardS = (props) => {

    return (
        <Card style={{ textAlign: 'justify', margin:'2%', background:'transparent', color:'white' }}>
            <CardImg src={props.Img} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">
                    {props.Title}
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {props.Subtitle}
                </CardSubtitle>
                <CardText>
                    {props.Texts}
                </CardText>
            </CardBody>
        </Card>
    );
};

export default CardS;