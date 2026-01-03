# Event Management System (Frontend Only)

A production-ready, static Event Management System built using HTML, CSS, and JavaScript.  
This project demonstrates how large-scale event data can be managed and rendered dynamically without any backend, making it suitable for global CDN-based deployment using platforms like Netlify or GitHub Pages.

---

## Live Demo

Netlify Deployment:  
https://ky-event-management-system.netlify.app/

---

## Project Overview

Most basic event websites hard-code event details directly into HTML, which becomes difficult to maintain as the number of events increases.

This project solves that problem by using a data-driven frontend architecture where all event information is stored in a structured JavaScript file and rendered dynamically on the client side.

The main HTML file never needs to be modified when event data changes.

---

## Objectives

- Build a frontend-only Event Management System
- Separate event data from UI logic
- Support multiple events at scale
- Enable easy updates without editing HTML or CSS
- Ensure compatibility with static hosting platforms
- Follow industry-standard frontend practices

---

## Technologies Used

HTML5 – Page structure  
CSS3 – Styling and layout  
JavaScript (ES6) – Dynamic rendering, filtering, search  
Netlify – Static hosting and CDN deployment  

---

## System Architecture

User Browser  
↓  
Static HTML + CSS  
↓  
events.js (Event Data Source)  
↓  
Client-Side Render Engine  
↓  
Dynamic Event Cards  

This architecture requires no backend, no database, and no external APIs.

---

## Project Structure

event-management-system/
│
├── index.html        Main UI file (not edited for content updates)
├── style.css         Styling and layout
├── events.js         Event data and rendering logic
└── README.md         Project documentation

---

## How the System Works

1. All event details are stored as structured objects inside events.js.
2. JavaScript dynamically loops through the data and creates event cards.
3. Optional event sections are rendered only if data exists.
4. Search and filter logic works entirely on the client side.
5. The application runs fully as a static site and can be deployed globally.

---

## Adding or Updating Events

All event updates are done only inside events.js.

Example event structure:

{
  id: "event-id",
  title: "Event Name",
  date: "DD MMM YYYY",
  college: "College Name",
  location: "City, Country",
  category: ["technical", "workshop"],
  description: "Short description of the event",
  events: {
    technical: [],
    nonTechnical: [],
    workshops: []
  }
}

No changes are required in index.html or style.css.

---

## Features

- Frontend-only architecture
- Dynamic event rendering
- Category-based filtering
- Search by event or college name
- Safe handling of missing data
- SEO-friendly structure
- CDN-ready static deployment
- Zero external dependencies

---

## Deployment

The project is deployed as a static site.

Deployment steps:
1. Push the repository to GitHub
2. Connect the repository to Netlify
3. Select the main branch and deploy
4. Every GitHub push triggers an automatic redeploy

---

## Academic Use

This project is suitable for:
- CSE Mini Project
- Web Technology Lab
- Frontend Architecture Demonstration
- Static Web Application Assignment

---

## Future Enhancements

- Pagination for large event datasets
- Calendar-based event view
- Event detail pages using URL parameters
- Multi-language support
- Accessibility improvements
- SEO metadata expansion

---

## Viva Explanation (Short)

This project is a frontend-only Event Management System where event data is separated from the UI. The system dynamically renders events from a structured data source, allowing scalable and maintainable static deployment without a backend.

---

## Author

Krishnamohan Yagneswaran  
Computer Science Engineering Student  
Frontend and Game Developer

---

## License

This project is open-source and intended for educational and learning purposes.
