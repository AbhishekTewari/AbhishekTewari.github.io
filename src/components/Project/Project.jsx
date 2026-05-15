import { React} from "react";
import { useState } from "react";
import "../Project/Project.css";
import Popup from "../Popup/Popup";


const projects = [
  {
    name: "Travel Triangle",
    description: "Travel Triangle is a travel booking and blogging platform that helps users explore destinations, discover travel guides, and plan customized trips. The website features tour packages, destination blogs, travel itineraries, and a responsive user experience for seamless browsing across all devices.",
    url: "https://traveltriangle.com/blog/"
  },
  {
    name: "Edward Beiner",
    description: "Edward Beiner is an e-commerce website based on WordPress and WooCommerce, selling different types of sunglasses. At the backend, we use PHP, JavaScript, Ajax, and various APIs for integration. We have also built a product upload plugin for mass product uploads.",
    url: "https://www.edwardbeiner.com/"
  },
  {
    name: "Paktolus",
    description: "Paktolus is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It serves as a platform for users to share and discover various types of content, including articles, videos, and images. The application features user authentication, content creation and management, and a responsive design for seamless user experience across different devices.",
    url: "https://paktolus.com/"
  },
  {
    name: "Tris Coffin",
    description: "Tris Coffin is an e-commerce website based on WordPress and WooCommerce. At the backend, we use PHP, JavaScript, Ajax, and various APIs for integration. We have also built a product upload plugin for mass product uploads.",
    url: "https://www.triscoffin.com/"
  },
   {
    name: "Affiliate Program",
    description: "A WordPress and WooCommerce Affiliate Marketing Plugin that helps increase product visibility, drive traffic, and boost eCommerce sales through an affiliate network system. The plugin allows you to create and manage an affiliate program, track referrals, and reward affiliates for their efforts in promoting your products.",
    url: "https://codecanyon.net/item/wordpress-woocommerce-affiliate-program/23580333"
  },
  {
    name: "Social share & Login",
    description: "The Social Media Share Add-on for Affiliate Programs enables the addition of social media share icons on your store’s shop and product pages, allowing affiliates to easily share referral links on their social media accounts. It also provides social media login icons under the login form, allowing users to log in directly via their preferred social media platforms.",
    url: "https://redefiningtheweb.com/product/social-media-share-addon-for-affiliate-program/"
  },
  {
    name: "Eyes On",
    description: "Eyes On you will find versatile sunglasses, eyeglasses, and contact lenses and retail all kinds of the greatest eyewear ever created. They partner with the most eminent brands, renowned for their extraordinary designs of fashionable and exclusive glasses and other optical products Like:  Ray-Ban, Gucci, Ic! Berlin, Cartier, Oakley, Dolce & Gabbana etc.",
    url: "https://www.eyeons.com/"
  },
  {
    name: "Inblf",
    description: "The International Network of Independent and Boutique Law Firms (INBLF) is an evolving referral network provider for more than 300 highly credentialed single-description law firms. INBLF offers a platform for clients to connect with these law firms and access high-quality legal services across different jurisdictions.",
    url: "https://www.inblf.com/"
  }
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  return (
    <section className="project-section" id="project-section">
      <h2 className="project-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-buttons">
              <a href={project.url} className="view-website" target="_blank" rel="noopener noreferrer">Visit Website</a>
              <button className="project-link" onClick={()=> openModal(project)}>View Details</button>
            </div>
          </div>
        ))}
      {isModalOpen && (
        <Popup
          project={selectedProject}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      </div>
    </section>
  );
};
  
export default Project;