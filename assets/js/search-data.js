// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-education",
          title: "Education",
          description: "Throughout my education, I have gained extensive knowledge and hands-on experience in security, IoT, and applied machine learning. Below is a summary of my academic background and key achievements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/education/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Throughout my academic and professional career, I have been fortunate to contribute to teaching and mentoring students in various computing and engineering courses. Below is a summary of my teaching roles and responsibilities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "My research studies how machine learning systems fail when deployed in adversarial or real-world conditions, and how to evaluate them so those failures are predicted before deployment.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-will-spend-three-months-with-prof-thomas-ristenpart-s-group-as-a-research-summer-placement-the-placement-will-take-place-at-cornell-tech-in-nyc-i-m-excited-for-this-opportunity",
          title: 'I will spend three months with Prof. Thomas Ristenpart’s group as a research...',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-share-that-our-paper-evaluating-iot-device-identification-machine-learning-models-for-network-deployment-was-accepted-at-ndss-2025",
          title: 'I am excited to share that our paper ‘Evaluating IoT Device Identification Machine...',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-share-that-i-passed-my-phd-viva-with-minor-corrections-i-was-examined-by-prof-chris-hankin-imperial-college-london-and-prof-ivan-martinovic-university-of-oxford",
          title: 'I am excited to share that I passed my PhD viva with minor...',
          description: "",
          section: "News",},{id: "news-i-have-officially-been-awarded-my-phd-in-computing-from-imperial-college-london",
          title: 'I have officially been awarded my PhD in Computing from Imperial College London!...',
          description: "",
          section: "News",},{id: "news-i-joined-the-computational-privacy-group-at-imperial-college-london-as-a-research-fellow-working-with-yves-alexandre-de-montjoye-and-matthew-wicker",
          title: 'I joined the Computational Privacy Group at Imperial College London as a Research...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-associate-fellowship-of-the-higher-education-academy-afhea-by-advance-he-recognising-my-teaching-and-learning-support-practice",
          title: 'I have been awarded Associate Fellowship of the Higher Education Academy (AFHEA) by...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
