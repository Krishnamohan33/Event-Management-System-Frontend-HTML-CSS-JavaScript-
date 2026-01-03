// ===== EVENT DATA (EDIT ONLY THIS FILE) =====

const events = [
    {
        title: "Tech Innovation Meetup 2026",
        date: "March 10, 2026",
        time: "10:00 AM – 4:00 PM",
        location: "Chennai, India",
        description: "A technology meetup focusing on AI, Web Development, and Game Design.",

        schedule: [
            "10:00 AM – Opening Ceremony",
            "11:00 AM – AI in Real World",
            "01:00 PM – Lunch Break",
            "02:00 PM – Game Development Talk",
            "03:30 PM – Networking"
        ],

        speakers: [
            "Dr. Arun – AI Researcher",
            "Meera – Full Stack Developer",
            "Rahul – Indie Game Developer"
        ]
    },

    {
        title: "College Cultural Fest",
        date: "April 5, 2026",
        time: "9:00 AM – 8:00 PM",
        location: "University Campus",
        description: "A full-day cultural event with music, dance, and competitions.",

        schedule: [
            "09:00 AM – Inauguration",
            "11:00 AM – Dance Events",
            "02:00 PM – Music Bands",
            "06:00 PM – Awards Ceremony"
        ],

        speakers: [
            "Chief Guest – Film Director",
            "Student Cultural Committee"
        ]
    }
];

// ===== RENDER LOGIC (DO NOT TOUCH) =====

const container = document.getElementById("eventContainer");

events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <h2>${event.title}</h2>
        <p class="meta">
            📅 ${event.date} <br>
            ⏰ ${event.time} <br>
            📍 ${event.location}
        </p>

        <p>${event.description}</p>

        <div class="section-title">Schedule</div>
        <ul>
            ${event.schedule.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <div class="section-title">Speakers</div>
        <ul>
            ${event.speakers.map(person => `<li>${person}</li>`).join("")}
        </ul>
    `;

    container.appendChild(card);
});
