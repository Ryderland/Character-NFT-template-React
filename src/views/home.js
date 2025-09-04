import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Character NFT template</title>
        <meta property="og:title" content="Character NFT template" />
      </Helmet>
      <header className="home-header1"></header>
      <section className="home-hero">
        <div className="home-heading">
          <h1 className="home-header2">Throw Your Money Away</h1>
          <p className="home-caption">By Giving it to me =)</p>
        </div>
      </section>
      <div className="home-image1"></div>
      <section className="home-cards1">
        <img
          id="myImage"
          alt="image"
          src="/Icons/mone-1500w.png"
          loading="lazy"
          className="home-image2"
        />
        <img
          alt="image"
          src="/Icons/123-300h.png"
          loading="eager"
          className="home-image3"
        />
        <img
          alt="image"
          src="/Icons/sigggn-300h.png"
          loading="eager"
          className="home-image4"
        />
      </section>
      <section className="home-cards2"></section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<div style="position:relative; width:100%; height:100vh; overflow:hidden;">
  <!-- The draggable image -->
  <img id="myImage" src="https://via.placeholder.com/100" style="position:absolute; width:100px;">

  <!-- Matter.js physics -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
  <script>
    const { Engine, Render, Runner, Bodies, World, Mouse, MouseConstraint, Events } = Matter;
    const engine = Engine.create();
    const world = engine.world;

    // Renderer (uses a hidden canvas just for physics calculations)
    const render = Render.create({
      element: document.body,
      engine: engine,
      options: { width: window.innerWidth, height: window.innerHeight, wireframes: false, background: "transparent" }
    });

    Render.run(render);
    Runner.run(Runner.create(), engine);

    // Create physics body for the image
    const img = document.getElementById('myImage');
    const body = Bodies.rectangle(200, 200, 100, 100, { restitution: 0.8 });
    World.add(world, body);

    // Sync image position with physics body
    Events.on(engine, 'afterUpdate', () => {
      img.style.left = body.position.x - 50 + 'px';
      img.style.top = body.position.y - 50 + 'px';
      img.style.transform = \`rotate(\${body.angle}rad)\`;
    });

    // Ground
    World.add(world, Bodies.rectangle(window.innerWidth/2, window.innerHeight, window.innerWidth, 50, { isStatic: true }));

    // Mouse drag support
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, { mouse });
    World.add(world, mouseConstraint);
    render.mouse = mouse;
  </script>
</div>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container5">
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
