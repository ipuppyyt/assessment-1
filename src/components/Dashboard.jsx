import './Dashboard.css';
import {Avatar,Button,Card,CardActions,CardContent,Grid,Stack,Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  
  var [value, setValue] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      setValue((value = response.data));
    });
  }, []);


  function  randomInteger(min, max)  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function avatarimg(){
  var avatarurl = "https://randomuser.me/api/portraits/men/"+randomInteger(1,85)+".jpg";
  return avatarurl;
  }


  return (
    <div className="maindiv">
      <Grid container spacing={2} className="maingrid">
        {value.map((val) => (
          <Grid item xs="auto" className="grid card">
            <Card className="card" variant="outlined">
              <CardContent className="textalign">
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src={avatarimg()} className="avatar" sx={{ width: 56, height: 56 }} />
                </Stack><br></br>
                <Typography>
                  <b className="typo">{val.id}</b> 
                </Typography>
                <Typography>
                  {val.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" className="button" variant='contained'>More Info {">>"}</Button>
              </CardActions><br></br>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;