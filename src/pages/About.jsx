import React from 'react';
import { Container, Header, Image } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css";
import ProfilePic from "../images/DA342876-1.jpg";


function About() {

    return (
        <Container text >
        <Image src={ProfilePic} size="small" circular floated='left' style={{margin: "0 10px 5px 0"}} />

            <p>
                I am a web developer with experience primarily in front-end JavaScript and Node.js with a particular interest in learning back-end languages. I received my Bachelor's in Economics and Mathematics from Metro State University of Denver in 2012. There I learned technical thinking skills and the perseverance to solve complex problems. In my previous career, I worked as a Sales Operations Analyst working primarily in MS Excel and MySQL. In my role I had to process large Excel datasets using complicated nested If Statements. I was also responsible for crafting daily and weekly reports which often included managing the SQL queries involved. Working with complicated Excel formulas in particular got me interested in programming and in turn web development.
            </p>
            <p>
                To pursue my growing interests I enrolled in the University of Denver's Full Stack Web Development Boot Camp. There I learned HTML, CSS, JavaScript, jQuery for the browser side. I furthered my proficiency with my MySQL and learned MongoDB as a NoSQL database solution. For the server-side I learned Node.js, Express, and React giving me proficiency in the entire MERN stack. These skills combined with my educational background and previous will lead me to be an asset to your development team.
            </p>
        </Container>
    )}

export default About;
