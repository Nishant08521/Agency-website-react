import React from "react";
import "./Project.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="project">
      <div className="project-container">
        <h1 className="project-title">Scentia</h1>
        <div className="project-header-text">
          <div className="project-text-header">
            <span className="project-text-title">Art Direction</span>
            <img
              className="project-text-logo-1"
              src="https://agency-website72.netlify.app/static/media/logo.png.9ef55d7e1433d3cd3b35974538e2b7f6.svg"
              alt=""
            />
            <h3 className="project-text-branding">Branding</h3>
            <img
              className="project-text-logo-2"
              src="https://agency-website72.netlify.app/static/media/logo.png.9ef55d7e1433d3cd3b35974538e2b7f6.svg"
              alt="Mplogo"
            ></img>
            <h3 className="text3d">3D</h3>
          </div>
          <p className="project-text">
            Our task was to produce a mood video for the launch that wouldn't
            reveal the items from the collection but capture their
            essence—majestic light patterns reflected on glass, plastic and
            metal.
          </p>
        </div>
      </div>
      <div className="home-img">
        <img
          className="video"
          src="https://agency-website72.netlify.app/static/media/project.video.237f623aa2634ce61c7d.gif"
          alt=""
        />
      </div>
      <div className="project-2-container">
        <div class="project-sticky-container">
          <h1 class="project-sticky-title">Refractions &amp; reflections</h1>
          <p class="project-sticky-text-1">
            Our task was to produce a mood video for the launch that wouldn't
            reveal the items from the collection but capture their
            essence—majestic light patterns reflected on glass, plastic and
            metal.
          </p>
          <p class="project-sticky-text-2">
            In this project, we examined the visual and structural complexity of
            plastic, metal and glass and found new angles on these everyday
            materials.
          </p>
        </div>
        <div className="home-container-imgs">
          <img
            className="home-img1"
            src="	https://framerusercontent.com/images/eou192SrzSEOjwzZDH6YLxPD4.jpg"
            alt=""
          />
          <img
            className="home-img2"
            src="https://framerusercontent.com/images/tqrMJyMXe4xnosknQNE1uytX3Y.jpg?scale-down-to=1024"
            alt=""
          />
          <img
            className="home-img3"
            src="https://framerusercontent.com/images/2jFZE4qSnDnPBN5ChGXZUMCIEsM.jpg?scale-down-to=1024"
            alt=""
          />
        </div>
      </div>
      <div class="CEO-container ">
        <div class="CEO-title ">
          <p>
            “It felt like one team working toward the same goal and we couldn’t
            be happier with the result. They’re very experienced and know what
            they’re doing as creators. If you listen to them, they will help
            elevate your brand and achieve your goals.”
          </p>
          <div class="CEO-name ">
            <img
              class="photo"
              src="https://framerusercontent.com/images/MiWmEHmqi2EGIlkV9SaYqnYZf4.jpg?scale-down-to=512"
              alt="img"
            />
            <div class="profile">
              <h3 class="CEO-Name">Sam Bo</h3>
              <h3 class="Ceo-text"> CEO of Scentia</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="container-home1">
        <h3 class="container-1">
          Setting a mood through the flowing movement of colorful gradients
        </h3>
        <div class="container-home2">
          <h3 class="container-2">
            Looking through layers of glass, the renders follow rays of light
            and capture majestic refractions and reflections emerging on the
            intersection of the transparent objects.
          </h3>
          <h3 class="container-3">
            Setting a mood through the flowing movement of colorful gradients,
            the film reveals the atmosphere and the soul of the collection.
          </h3>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: "30%" }}
        animate={{ opacity: 1, translateY: "0%" }}
        exit={{ opacity: 0, translateY: "30%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        class="home-container-row"
      >
        <img
          class="home-img4"
          src="https://framerusercontent.com/images/4Z6pPhDqN1x8qgUZnrUVDVtU08.jpg?scale-down-to=1024"
          alt=""
        />
        <img
          class="home-img5"
          src="https://framerusercontent.com/images/0K7j9KR6Egn1Cfy6gYaWDgw12Vo.jpg?scale-down-to=1024"
          alt=""
        />
        <img
          class="home-img6"
          src="https://framerusercontent.com/images/KkluXnPryMCQdTfvL85TdePQRo.jpg?scale-down-to=1024"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Projects;
