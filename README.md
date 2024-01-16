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

## Rationale for Tanstack Query

Key considerations included:

- Ensure a seamless user experience with constraints of fetching large dataset.
- Pagination for the initial load server-side, displaying only necessary data for users to get started.
- Lazy loading for additional data, if and when users interact with page.
- Skeleton loading to give users visual feedback while waiting for data to load. This reduces the perception of lengthy loading times.
- Export to excel option gives user download option, and caters to their potential need to work with the entire dataset offline.
- Cache initial subset
- Implement user-friendly error messages and error handling, ensuring to communicate to users when there are issues fetching, updating or when to guide them on possible next steps.

**Hypothesis**: Tanstack Query is an ideal lightweight tool for handling state and caching when building in rapid iterations.

## Future feature editions

- Cache based on user interactions, implement optimistic updates to prioritize expected behaviour via immediate UI updates while asynchronously updating backend.
- Periodic background updates - assuming robots battery may deplete every 4 hours, assume a need to update every hour.
- User feedback such as toast notifications, to reassure users that the application is keeping the data current.
- Performance Monitoring tools to identify bottlenecks or areas for improvement in data fetching and rendering. This ensures continuous optimisation for a smooth UX.
