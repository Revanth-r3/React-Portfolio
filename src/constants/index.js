import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated data scientist with a strong foundation in data analysis and machine learning, complemented by 5 months of full-time professional experience and 1 year of internship experience. My expertise lies in transforming complex datasets into actionable insights, utilizing tools such as Python, Azure, PowerBi, and SQL. I am passionate about leveraging data-driven strategies to solve real-world problems and enhance decision-making processes. My goal is to contribute my analytical skills and innovative mindset to drive impactful solutions that foster business growth and improve user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile data scientist with a passion for extracting meaningful insights from complex datasets. With 4 months of full-time professional experience and 1 year of internship experience, I have honed my skills in data analysis, machine learning, and statistical modeling using tools such as Python, R, and SQL. My journey in data science began with a fascination for uncovering patterns in data, evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy tackling complex problems to deliver high-quality, data-driven solutions. Outside of data analysis, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - Present",
    role: "Data Scientist",
    company: "GeakMinds",
    description: ["Analyzed 40M+ telecom records using Azure Databricks, PySpark, and Azure Data Explorer, delivering insights to improve customer retention strategies by 15%.",
      "Developed a model to predict Net Promoter Score (NPS), leading to 10% improved customer satisfaction.",
      "Built and retrained a model for Customer Health Score specific to the product lifecycle phase (LBGUPR) by identifying key features through predictive analytics.",
      "Conducted time series forecasting and anomaly detection on telecom data, identifying key trends and action points for improving customer engagement."
    ],
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "Jan 2024 - May 2024",
    role: "Data Science Intern",
    company: "Bosch",
    description: ["Developed two highly automated tools (90% automation) to streamline and accelerate the calibration team’s workflow, significantly reducing manual effort and processing time.",
      "Enhanced traditional data processing methods, reducing overall processing time and manual work by 80%, thereby increasing productivity and accuracy within the calibration team.",
      "Collaborated with the calibration team to understand their data requirements and implemented solutions to automate repetitive tasks."
    ],
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "July 2022 - Nov 2022",
    role: "Project Trainee",
    company: "Bosch",
    description: ["Actively participated in EVM (Electronic Control Module) board bring-up activities for auto motive vehicles, ensuring seamless integration and functionality.",
    "Diligently monitored and analyzed board performance and collaborated with cross-functional teams to streamline processes, enhancing project success and customer satisfaction.",
    "Leveraged Robot Framework to automate the execution of test cases for acceptance testing, reducing manualeffort and enhancing testing accuracy."
    ],
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "NBA Player Position Prediction",
    image: project1,
    description:
      "Developed a Machine Learning model to predict NBA player position based on their statistics.This prediction helps in setting up the lineups like Which players can play multiple positions, or which players could see success trying their hand in a new role.",
    technologies: ["Python", "Machine Learning"],
  },
  {
    title: "Olympic Data Analytics",
    image: project2,
    description:
      "Developed an end-to-end data pipeline using Azure Data Factory to ingest historical Olympic data to analyze key trends in country participation, athlete performance, and event popularity. This comprehensive analysis provided valuable insights into medal counts, athlete statistics, and the evolving popularity of various Olympic events across multiple years.",
    technologies: ["Microsoft Azure", "Azure DataBricks", "Apache Spark", "Pyspark"],
  },
  {
    title: "AI Powered conversational chat Assistant",
    image: project3,
    description:
      "Createdachatbot integrated with Ollama and Langchain to provide basic conversational capabilities powered by large language models (LLMs).",
    technologies: ["Ollama", "Langchain", "Streamlit"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 7339003633 ",
  email: "revanth4011@gmail.com",
};
