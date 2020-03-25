import React from "react";
import axios from "axios";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

function NewCard() {
  const [nasaData, setNasaData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const Wrapper = styled.section`
    padding: 4rem;
    background: red;
  `;

  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => (props.primary ? "palevioletred" : "white")};
    color: ${props => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 5rem;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        setNasaData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("ya done mest up =>", err);
      });
  }, []);

  console.log(loading);

  if (!nasaData) return <h3>Loading..</h3>;
  return (
    <Wrapper>
      <div>
        <Card>
          <CardImg top width="100%" src={nasaData.url} alt="Card image cap" />
          <CardBody>
            <CardTitle>{nasaData.title}</CardTitle>
            <CardText>{nasaData.date}</CardText>
            <paragraph>{nasaData.explanation}</paragraph>

            <Button primary>Button</Button>
          </CardBody>
        </Card>
      </div>
    </Wrapper>
  );
}

export default NewCard;
