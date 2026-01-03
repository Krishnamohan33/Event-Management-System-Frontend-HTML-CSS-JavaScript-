const EVENTS = [
  {
    id: "electera-26",
    title: "ELECT-ERA ’26",
    date: "07 Jan 2026",
    college: "Coimbatore Institute of Technology",
    location: "Coimbatore, India",
    category: ["technical"],

    description:
      "A flagship technical symposium focusing on innovation and emerging technologies.",

    events: {
      technical: [
        "Flagship Event",
        "Surge Event",
        "Technical Event"
      ],
      nonTechnical: [],
      workshops: []
    }
  },

  {
    id: "mxcel-2k26",
    title: "MXCEL 2K26",
    date: "22 Jan 2026",
    college: "Kongu Engineering College",
    location: "Erode, India",
    category: ["technical", "nonTechnical", "workshop"],

    description:
      "An inter-college symposium encouraging creativity and technical excellence.",

    events: {
      technical: [
        "Paper Presentation",
        "CADCode Master",
        "Quiz Mania"
      ],
      nonTechnical: [
        "Adzap",
        "Meme Creation",
        "Let's Vibe"
      ],
      workshops: [
        "Emerging Trends in 3D Printing Technology"
      ]
    }
  },

  {
    id: "utsava-26",
    title: "UTSAVA ’26",
    date: "30 Jan 2026",
    college: "Sri Ramakrishna Engineering College",
    location: "Coimbatore, India",
    category: ["technical", "nonTechnical", "workshop"],

    description:
      "A mega symposium featuring competitions, workshops, and innovation challenges.",

    events: {
      technical: [
        "Drone Racing",
        "Robo Race",
        "AI Unlocked",
        "CADDATHON"
      ],
      nonTechnical: [
        "Treasure Hunt",
        "Squid Game",
        "IPL Auction"
      ],
      workshops: [
        "Industry 4.0",
        "3D Printing",
        "AI/ML in EV"
      ]
    }
  }
];

const container = document.getElementById("eventContainer");
let currentList = EVENTS;

function renderEvents(list) {
    container.innerHTML = "";

    if (!list.length) {
        container.innerHTML = "<p>No events found.</p>";
        return;
    }

    list.forEach(e => {
        const tech = e.events?.technical ?? [];
        const nonTech = e.events?.nonTechnical ?? [];
        const workshops = e.events?.workshops ?? [];

        const card = document.createElement("article");
        card.className = "event-card";

        card.innerHTML = `
            <h2>${e.title}</h2>

            <p class="meta">
                📅 ${e.date}<br>
                🏫 ${e.college}<br>
                📍 ${e.location}
            </p>

            <p>${e.description}</p>

            ${tech.length ? section("Technical Events", tech) : ""}
            ${nonTech.length ? section("Non-Technical Events", nonTech) : ""}
            ${workshops.length ? section("Workshops", workshops) : ""}
        `;

        container.appendChild(card);
    });
}

function section(title, items) {
    return `
        <h4>${title}</h4>
        <ul>
            ${items.map(i => `<li>${i}</li>`).join("")}
        </ul>
    `;
}

function filterEvents(type) {
    if (type === "all") {
        currentList = EVENTS;
    } else {
        currentList = EVENTS.filter(e => e.category.includes(type));
    }
    renderEvents(currentList);
}

function searchEvents(query) {
    const q = query.toLowerCase();

    renderEvents(
        currentList.filter(e =>
            e.title.toLowerCase().includes(q) ||
            e.college.toLowerCase().includes(q)
        )
    );
}

// Initial render
renderEvents(EVENTS);
