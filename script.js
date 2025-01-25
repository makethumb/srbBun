const projectsData = [
      {
        name: "MakeThumb.com",
        technologies: ["Cloudflare CDN", "PDF-to-JSON parser", "Gemini Flash 1.5", "Sonnet 3.5", "AWS S3", "RENDER"],
        description: [
          "Built a scalable platform serving 1K+ monthly users via Cloudflare CDN",
          "Built a robust PDF-to-JSON parser optimized for Application Tracking System (ATS) compatibility.",
          "Integrated Gemini Flash 1.5 for precise data extraction from resumes and Sonnet 3.5 for advanced content transformation, offering users flexibility through a credits-based system.",
          "Achieved 99.9% uptime with a reliable cloud-based infrastructure combining AWS S3 for storage and RENDER for application hosting."
        ]
      },
      {
        name: "RTCConnect",
        technologies: ["Socket.IO", "Node.js", "Redis"],
        description: [
          "Designed and deployed a scalable messaging system using Socket.IO and Node.js.",
          "Implemented Redis pub/sub for message queuing, delivery receipts, and presence detection handling 50+ concurrent users"
        ]
      },
      {
        name: "GitHorizon",
        technologies: ["VSCode"],
        description: [
          "100% Integration with VSCode's native interface for seamless usability",
          "Visualized over 1,000+ commits across various repositories during testing"
        ]
      }
    ];

    const achievementsData = [
      {
        name: "HackerRank",
        details: "handle: Sourabhs701 (5⭐) Problemsolving Certificate and 420+ points in Python."
      },
      {
        name: "Certified in Excel Fundamentals – Formulas for Finance",
        details: "from (CFI, 2023), proficient in utilizing Excel functions tailored for financial calculations and modeling."
      },
      {
        name: "Analyzing and Visualizing using R Programming",
        details: "(DataScienceLab, 2023), 7 Days Workshop going through Data Cleaning, Data Transformation, ETL process and Visualizing it using R."
      }
    ];

    const technicalSkillsData = {
        languages: ["C++", "JavaScript", "Python"],
        databases: ["MongoDB", "MySQL", "PostgreSQL"],
        backend: ["Node.js", "Express"],
        frontend: ["React.js"],
        cloudDevOps: ["AWS", "Docker"],
        versionControl: ["GitHub", "Git"],
        webTechnologies: ["MERN Stack", "WebSocket"]
    };
  
    const projectList = document.querySelector('.project-list');
    projectsData.forEach(project => {
      const projectItem = document.createElement('li');
      projectItem.classList.add('project-item');
      projectItem.innerHTML = `
        <h3>${project.name}</h3>
        <p>Technologies: ${project.technologies.join(', ')}</p>
        <ul>
        ${project.description.map(desc => `<li>${desc}</li>`).join('')}
        </ul>
      `;
      projectList.appendChild(projectItem);
    });
  
    const achievementsList = document.querySelector('.achievements-list');
    achievementsData.forEach(achievement => {
      const achievementItem = document.createElement('li');
      achievementItem.classList.add('achievement-item');
      achievementItem.innerHTML = `
        <p><strong>${achievement.name}:</strong> ${achievement.details}</p>
      `;
      achievementsList.appendChild(achievementItem);
    });
  
    const skillLists = document.querySelectorAll('.skill-list');
    for (const category in technicalSkillsData) {
      const skillList = skillLists[Object.keys(technicalSkillsData).indexOf(category)];
      technicalSkillsData[category].forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.classList.add('skill-item');
        skillItem.textContent = skill;
        skillList.appendChild(skillItem);
      });
    }
  </script>