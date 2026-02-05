/**
 * Centralized URL constants for the application
 * All external and internal URLs should be defined here for easy maintenance
 */

export const URLS = {
  // Social Media & Contact
  social: {
    linkedin: "https://www.linkedin.com/in/alessandrakrick/",
    linkedinShort: "https://linkedin.com/in/alessandrakrick",
    behance: "https://www.behance.net/alessandrakrick",
    email: "akrick.business@gmail.com",
    emailBusiness: "akrickbusiness@gmail.com",
  },

  // Internal Routes
  routes: {
    homepage: "/homepage",
    about: "/about",
    productManagement: "/product-management",
    graphicDesign: "/graphic-design",
    sushitime: "/sushitime",
  },

  // Community & Portfolio
  community: "https://drive.google.com/file/d/1C5lVcUF5hkwpRnfnHAN0YH4z2duQ0c4p/view",
  graphicDesignPortfolio: "https://www.alessandrakrick.com/graphic-design",
  sushitimePortfolio: "https://www.alessandrakrick.com/sushitime",

  // SushiTime Project URLs
  sushitime: {
    processDeck: "https://drive.google.com/file/d/1wB24f9fhkcqpviWdNsyiiSs7UfYuGySi/view?usp=sharing",
    processDeckAlt: "https://drive.google.com/file/d/1n5BOGluz3eefZ_VTs8tcFtMbqpe6LmzT/view?usp=sharing",
    competitiveAnalysis: "https://docs.google.com/spreadsheets/d/1VtVRUdrxZjK7czGwlnc7Nr0siXia-oQz/edit?usp=sharing&ouid=117693731879484145211&rtpof=true&sd=true",
    figmaPrototype: "https://www.figma.com/proto/Bd3abeEQ3YGj9mipaPy78z/Sushi-APP?node-id=314%3A1136&scaling=scale-down&page-id=3%3A706&starting-point-node-id=314%3A1136",
  },

  // Product Management Project URLs
  productManagement: {
    kidjo: "https://kidjo.tv",
    competitiveAnalysis1: "https://docs.google.com/spreadsheets/d/1Obi_cOczZAoxdOtFGsu8PmoCawwZDtfF816jK-3tkpA/edit?usp=sharing",
    competitiveAnalysis2: "https://docs.google.com/spreadsheets/d/1VwMu0K5-sAh6854EKRO0cIADZChZFhO62YVe9xzevpw/edit?usp=sharing",
  },

  // Certifications
  certifications: {
    cspo: "https://bcert.me/bc/html/show-badge.html?b=nnlrtfdl",
    scrumFoundation: "https://drive.google.com/file/d/1oP66WzGIj7BK-GeqqpnMJxLtnZO-4o_1/view?usp=sharing",
    googleUXDesign: "https://www.coursera.org/account/accomplishments/professional-cert/FDJ5CWJATB55",
    uxDesignProcess: "https://www.coursera.org/account/accomplishments/verify/HAJHW94EHNNT",
    wireframesPrototypes: "https://www.coursera.org/account/accomplishments/verify/S23L6DA6HTCP",
    highFidelityFigma: "https://www.coursera.org/account/accomplishments/verify/V6K67N9QGMNQ",
    mysql: "https://hermes.digitalinnovation.one/certificates/04C61931.pdf",
    firstStepsToCode: "https://hermes.digitalinnovation.one/certificates/EDAF1C7E.pdf",
    awsBadges: "https://www.credly.com/users/alessandra-krick/badges#credly",
    awsCloudPractitioner: "https://www.credly.com/badges/3acb1d6f-77e9-4ee2-8e60-3e1caa090e9f/public_url",
  },
} as const;

// Helper function to create mailto links
export const getEmailLink = (email: string): string => `mailto:${email}`;

