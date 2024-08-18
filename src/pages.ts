import {
  Attributions,
  Contribution,
  Description,
  Engineering,
  Experiments,
  Home,
  HumanPractices,
  Notebook,
  Results,
  Safety,
  Team,
  Education,
  Entrepreneurship,
  Hardware,
  Inclusivity,
  Measurement,
  Model,
  Plant,
  Software,
  Sustainable,
} from "./contents";
import { Collab } from "./contents/colab";
import  {Integrated} from "./contents/intergrated";
import { Mentors } from "./contents/mentors";

interface Base {
  name: string | undefined;
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
}

class Page implements Base {
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  lead: string | undefined;
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    component: Home,
    lead: "Welcome to iGEM 2024! Your team has been approved and you are ready to start the iGEM season!",
  },
  {
    name: "Team",
    folder: [
      {
        name: "Mentors",
        title: "mentors",
        path: "/mentors",
        component: Mentors,
        lead: "THIS IS MENTORS"},
      {
        name: "Team",
        title: "Team",
        path: "/team",
        component: Team,
        lead: "Meet Our Team",
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: "/attributions",
        component: Attributions,
        lead: "In the iGEM Competition, we celebrate student effort and achievement. The Attributions form helps the judges differentiate between what students accomplished from how their external collaborators supported them. Therefore, teams must clearly explain on the standard Project Attributions form what work they have conducted by themselves and what has been done by others.",
      },
     
    ],
  },
  {
    name: "Project",
    folder: [
      {
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
        lead: "Make a useful contribution for future iGEM teams. Use this page to document that contribution.",
      },
      {
        name: "Description",
        title: "Project Description",
        path: "/description",
        component: Description,
        lead: "",
      },
      {
        name: "Engineering",
        title: "Engineering Success",
        path: "/engineering",
        component: Engineering,
        lead: "Demonstrate engineering success in a technical aspect of your project by going through at least one iteration of the engineering design cycle. This achievement should be distinct from your Contribution for Bronze.",
      },
      {
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
        lead: "Describe the research, experiments, and protocols you used in your iGEM project.",
      },
      {
        name: "Notebook",
        title: "Notebook",
        path: "/notebook",
        component: Notebook,
        lead: "Document the dates you worked on your project. This should be a detailed account of the work done each day for your project.",
      },
      {
        name: "Colaboration",
        title: "Colab",
        path: "/colab",
        component: Collab,
        lead: "Make a useful contribution for future iGEM teams. Use this page to document that contribution.",
      },
      {
        name: "Results",
        title: "Results",
        path: "/results",
        component: Results,
        lead: "You can describe the results of your project and your future plans here.",
      },
    ],
  },
  {
    name: "Safety",
    title: "Safety",
    path: "/safety",
    component: Safety,
    lead: "Describe all the safety issues of your project.",
  },
  {
    name: "Human Practices",
    folder: [
      {
        name: "Human practices",
        title: "Human practices",
        path: "/human-practices",
        component: HumanPractices,
        lead: "hi"},
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        component: Entrepreneurship,
        lead: "The entrepreneurship prize recognizes exceptional effort to build a business case and commercialize an iGEM project.",
      },
      {
        name: "Integrated Human practices",
        title: "Human practices",
        path: "/integrated",
        component: Integrated,
        lead: "hi"},
    ]
  },
  {
    name: "Awards",
    folder: [
      {
        name: "Education",
        title: "Education",
        path: "/education",
        component: Education,
        lead: "Innovative educational tools and outreach activities have the ability to establish a two-way dialogue with new communities by discussing public values and the science behind synthetic biology.",
      },
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        component: Entrepreneurship,
        lead: "The entrepreneurship prize recognizes exceptional effort to build a business case and commercialize an iGEM project.",
      },
      {
        name: "Hardware",
        title: "Hardware",
        path: "/hardware",
        component: Hardware,
        lead: "Hardware in iGEM should make synthetic biology based on standard parts easier, faster, better, or more accessible to our community.",
      },
      {
        name: "Inclusivity",
        title: "Diversity and Inclusion",
        path: "/inclusivity",
        component: Inclusivity,
        lead: "Every individual, regardless of background or experience, should have an equal opportunity to engage with scientific knowledge and technological development.",
      },
      {
        name: "Measurement",
        title: "Measurement",
        path: "/measurement",
        component: Measurement,
        lead: "Synthetic Biology needs great measurement approaches for characterizing parts, and efficient new methods for characterizing many parts at once. Describe your measurement approaches on this page.",
      },
      {
        name: "Model",
        title: "Model",
        path: "/model",
        component: Model,
        lead: "Explain your model's assumptions, data, parameters, and results in a way that anyone could understand.",
      },
      {
        name: "Plant",
        title: "Plant",
        path: "/plant",
        component: Plant,
        lead: "This award is designed to celebrate exemplary work done in plant synthetic biology.",
      },
      {
        name: "Software",
        title: "Software",
        path: "/software",
        component: Software,
        lead: "Software in iGEM should make synthetic biology based on standard parts easier, faster, better or more accessible to our community.",
      },
      {
        name: "Sustainable",
        title: "",
        path: "/sustainable",
        component: Sustainable,
        lead: "",
      },
    ],
  },
];

export default Pages;
