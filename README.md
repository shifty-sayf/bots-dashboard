# Interactive Dashboard for Robot Operation Analytics

## Setup

Live deployment (Vercel): [Link](https://bots-dashboard-8fpj.vercel.app/)

To run this locally, clone the repository.
Then, `cd bots-dashboard` and run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

## Structure

This application is written in Typescript and runs the following tools and packages:

<!-- List the dependencies below -->

- Next.js (React)
- D3.js / resize-observer
- shadCN UI / Radix UI
- TailwindCSS
- Tanstack React Table
- Lucide-react (Icons)
- React Leaflet (Map)
- JSON-as-xlsx (Excel export)

## Assumptions

Given the following [API](https://frodo-bots-api.onrender.com/data), I assumed:

- There would not be any direct querying to the database
- The data would be fetched in one request

## Unveiling the Why Behind Streaming Big Data

As I worked on a plan for fetching data in this app, I carefully considered how to make your experience seamless, especially when handling colossal datasets. Here's the rundown on why I opted for streaming and chunking the data:

**Implemented:**

- **Pagination:** I present precisely what you need when you first load the page—no overwhelming data dumps here.
- **Lazy Loading:** Additional data arrives only when you request it, triggered by your interactions with the page. Your command is my delight!
- **Export to Excel:** If you want the entire dataset offline, you've got the green light to download it. Consider it done.
- **User-Friendly Error Handling:** Should anything go awry, I've got your back with clear error messages to guide you through the rough patches.

**On My To-Do List:**

- **Skeleton Loading:** Ensuring you see something on the screen while I load the heavy stuff.
- **Caching Initial Subset:** Storing a portion of the data to speed things up on your next visit.

**Hypothesis**: Streaming is the go-to solution for handling hefty datasets like a seasoned pro.

## Upcoming Features: Where Form Meets Function

As I continue refining this app, I'm contemplating some exciting additions to elevate your experience:

- **Cached User Interactions:** Accelerating performance based on your usage patterns, ensuring a snappy and responsive interface.
- **Periodic Background Updates:** Picture your robot's battery as a cookie that lasts 4 hours—I'll refresh the data jar every hour.
- **User Feedback Mechanisms:** Keeping you informed with friendly notifications, assuring you that I'm vigilant in maintaining your data's freshness.
- **Performance Monitoring Tools:** Behind the scenes, I'll be monitoring for anything that could potentially slow me down. My commitment is to keep things smooth and efficient for you.
