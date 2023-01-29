import React, { useState, useEffect } from "react";
import { Grid,Container,TextField,Button,Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import './style.css';
function AddProduct() {
  const [data, setData] = useState({
    fee: "",
    course: "",
    url: "",
    star: 2,
    title:"",
  });
  const history = useHistory();
  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    const response = await axios.post(
      "http://localhost:4000/students/",
      data
    );

    history.push("/");
  };


  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/students/"
      );
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          <div className="title" >
          ADD COURSE
          </div>
          
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="title"
              required
              fullWidth
              label="Product Title "
              placeholder="Rings"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Product Description course"
              name="course"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="star"
              label="Product Rating"
              
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="fee"
              label="Product Price"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Image URL"
              name="url"

              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button style = {{backgroundColor: "black", color: "white"}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ p: 1, mt: 2 }}
              onClick={handleSubmit}
            >
              UPLOAD
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={5}>
          {posts &&
            posts.map((item) => {
              return (
                <Grid key={item.id} item md={3} sx={{ height: "650px" }}>
                  <Card item={item} />
                </Grid>
              );
            })}
        </Grid>
      </Container>

    </>


  );
}

export default AddProduct;
