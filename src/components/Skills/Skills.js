import "./Skills.css";

const skills = [
  { name: "HTML",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "jQuery",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
  { name: "React",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PHP",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "WordPress",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "WooCommerce",  icon: "https://cdn.simpleicons.org/woocommerce/96588A" },
  { name: "MySQL",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Ajax",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "AWS",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "SEO",          icon: "https://cdn.simpleicons.org/googlesearchconsole/458CF5" },
  { name: "Performance",  icon: "https://cdn.simpleicons.org/pagespeedinsights/4285F4" },
  { name: "Git",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Plugin Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Theme Development",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Customization",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-original.svg" },
  { name: "Leadership",      icon: "https://cdn.simpleicons.org/notion/ffffff" },
  { name: "Team Management", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { name: "Problem Solving", icon: "https://cdn.simpleicons.org/codewars/B1361E" },
  { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Claude AI", icon: "https://cdn.simpleicons.org/anthropic/FF6B4A" },
  { name: "Cursor AI", icon: "https://cdn.simpleicons.org/cursor" }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills-section">
      <div className="skills-container">

        {/* Heading */}
        <div className="skills-heading">
          <span className="skills-badge">🛠️ What I Work With</span>
          <h2 className="skills-title">My Tech Stack</h2>
          <p className="skills-sub">
            Tools and technologies I use to build fast, scalable web experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
              />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;