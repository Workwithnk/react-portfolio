import React from "react";
import "./Skills.css";
import data from "./SkillsData";
import projects from "./ProjectData";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  style: {
    backgroundColor: "#f5f6fa",
    margin: "15px ",
  },
});

function Skills() {
  const classes = useStyles();
  return (
    <div className="Skills">
      <div className="skillSection">
        <h2 className="title">Skills</h2>
        <div className="skillsDataContainer">
          {data.map((skill) => {
            return (
              <div className="singleSkill" key={skill.id}>
                <span>{skill.title}</span>
                <progress value={skill.value} max="100">
                  {skill.value}
                </progress>
              </div>
            );
          })}
        </div>
      </div>
      <div className="projectSection">
        <h2 className="title">Projects</h2>
        <div className="projectDataContainer">
          {projects.map((project) => {
            return (
              <Card
                key={project.id}
                className={`${classes.root} ${classes.style}`}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={project.imageUrl}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {project.dis}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    href={project.url}
                  >
                    <Button size="small" variant="contained" color="primary">
                      Visit
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
