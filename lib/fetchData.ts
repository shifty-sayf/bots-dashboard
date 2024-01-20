"use server";

import fs from "fs";

export async function fetchData() {
  const apiEndpoint = "https://frodo-bots-api.onrender.com/data";
  const outputFile = "public/data.json";

  fetch(apiEndpoint)
    .then((response) => {
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      // Read the response body as text
      return response.text();
    })
    .then((jsonString) => {
      // Parse the JSON data
      const jsonData = JSON.parse(jsonString);

      // Write the parsed JSON data to the output file in the 'public' folder
      fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2), "utf8");

      console.log("Parsed JSON data written to", outputFile);
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
}
