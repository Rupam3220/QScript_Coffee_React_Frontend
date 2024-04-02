import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{ my: 15, textAlign: "center", p: 2, "& h4": {fontWeight: "bold", my: 2, fontSize: "2rem",},"& p": {textAlign: "justify",},"@media (max-width:600px)": {mt: 0, "& h4 ": {fontSize: "1.5rem",},},}}>
        <Typography variant="h4" color="#6d4c41">About QScript Coffee</Typography>
        <p color="#6d4c41">
          QScript Coffee,is India’s favourite hangout for coffee and
          conversations. we strive to provide the best experience to our guests.
          Our coffees are sourced from thousands of small coffee planters, who
          made us who we are today and we're glad to be a part of their lives.
          We opened our first cafe in 2024 at Brigade Road in Karnataka the
          youth and the young at heart immediately took to the cafe, and it
          continues to be one of the most happening places in the city. QScript Coffee to
          the youth is a “hangout” spot where they meet people, make
          conversations, and have a whole lot of fun over steaming cups of great
          coffee.It's been an exciting journey since then to becoming the
          largest organised retail cafe chain in the country.
        </p>
        <br />
        <p color="#6d4c41">
          Our mission is to help people fall in love with great coffee. To connect with great people who share our passion and values so that together, we create great neighbourhood coffee houses that enrich the lives of everyone we meet.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
