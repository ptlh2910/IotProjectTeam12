import { Col, Row } from "antd";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Home.css";

import { Card as CardAntd } from "antd";

const imgHome = `${process.env.PUBLIC_URL}image/home.jpg`;
const imgModelHome = `${process.env.PUBLIC_URL}image/home2.jpg`;

const { Meta } = CardAntd;

const useStyles = makeStyles({
  root: {
    maxWidth: 540,
    marginBottom: 15,
  },
});

function Home(props) {
  const classes = useStyles();
  return (
    <div className="home">
      <Row>
        <Col span={12}>
          <Row style={{marginBottom: "15px"}}>
            <CardAntd
              hoverable
            //   style={{ width: "540px", height: "312px", marginBottom: "15px" }}
            >
              <h1>Smart Home 1:</h1>
              <p>The house consists of two roofs stretching down to a narrow area, the whole house is painted white, combined with many layers of glass and large cedar wood panels.</p>
              <p>In the middle of the house is a smartly designed high space that runs the entire length of the house, linking all other spaces of the house. Create harmony between the front and back of the house.</p>
              <p>The basement of the house is designed differently to help light penetrate deeply, ensuring a living space filled with natural light throughout the day.</p>
            </CardAntd>
          </Row>

          <Row>
            <CardAntd
              hoverable
              style={{ height: "380px"}}
            >
              <h1>Smart Home 2:</h1>
              <p>The house is built on a hill at an altitude of 1000m in a town in the state of New South Wales. This is the expression of the originality of rural life.</p>
              <p>In winter the entire valley is surrounded by fog, but the house is kept warm thanks to the smart design that helps to store solar energy, and the heating system.</p>
              <p>Smart devices in the home control the lighting and sound systems in the house, making the home smarter.</p>
            </CardAntd>
          </Row>
        </Col>

        <Col span={12}>
          <Row>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Image smart home"
                  height="288"
                  image={imgHome}
                  title="Smart home 1"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Smart Home 1
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Row>

          <Row>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Image smart home"
                  height="288"
                  image={imgModelHome}
                  title="Smart home 2"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Smart home 2
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
