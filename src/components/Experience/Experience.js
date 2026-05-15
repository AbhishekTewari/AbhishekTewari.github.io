import "./Experience.css";

const tech = {
  plugin: {
    heading: "Plugin & Theme Development",
    description:
      "Developing custom WordPress plugins and themes with scalable architecture, optimized performance, and seamless functionality tailored to business requirements."
  },

  wordpress: {
    heading: "WordPress & WooCommerce",
    description:
      "Building dynamic WordPress and WooCommerce solutions including custom features, API integrations, eCommerce functionality, and user-focused website experiences."
  },
  react_aws: {
    heading: "React, PHP, SQL & JavaScript",
    description:
      "Developing dynamic web applications using React.js, PHP, and JavaScript with a focus on responsive UI, reusable components, performance optimization, and scalable application architecture."
  },
  servers: {
    heading: "AWS, GoDaddy, Hostinger & WP Engine",
    description:
      "Managing website hosting, server deployment, domain configuration, SSL setup, performance optimization, and production environments across platforms like AWS, GoDaddy, Hostinger, and WP Engine."
  }
};

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      
      <div className="experience-left">
        <span className="experience-tag">
          My Journey
        </span>

        <h2>
          Turning Ideas Into 
          <span> Real Digital Products</span>
        </h2>

        <p>
          I’m a Plugin, Backend, and React Developer with experience in 
          WordPress, WooCommerce, PHP, JavaScript, API integrations, and 
          modern web technologies. I specialize in building custom plugins, 
          scalable backend solutions, and dynamic React applications that 
          help businesses improve functionality and user experience.
        </p>

        <p>
          Along with backend development, I also work on frontend interfaces 
          focused on responsiveness, performance, and clean UI/UX to create 
          seamless digital experiences across all devices.
        </p>

        <div className="experience-stats">
          <div>
            <h3>6+</h3>
            <span>Years Experience</span>
          </div>

          <div>
            <h3>20+</h3>
            <span>Projects Completed</span>
          </div>

          <div>
            <h3>10+</h3>
            <span>Technologies</span>
          </div>
        </div>
      </div>

      <div className="experience-right">
        {Object.values(tech).map((item, index) => (
          <div className="experience-card" key={index}>
            <h3>{item.heading}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;