# CSV File Upload and Viewer

This project is a web application that allows users to upload CSV files, display a list of uploaded files, view the contents of each file in a dynamic table, and perform operations such as searching.

## Features

- Upload CSV files (comma-delimited) into the system.
- Display a list of all uploaded CSV files.
- View data from selected CSV files in a dynamic table with column headers.
- Search functionality to filter table rows based on a search term.
- Dynamic table headers based on the uploaded CSV file.
- Validation to upload only CSV type files.
- Pagination of table data (max 100 records per page).

### Prerequisites

- Node.js (v12.x or later)
- MongoDB (running locally or on a cloud service)
- NPM (v6.x or later)

## Setup Instructions

Follow these steps to set up the project on your local system:


1. **Clone the repository:**

   ```sh
   git clone https://github.com/h-r-wells2/csv-upload.git
   cd csv-upload
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the config directory and add the following:

   ```plaintext
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/csv-upload
   ```

4. **Start the application:**

   ```sh
   npm start
   ```

5. **Access the application:**

   Open your browser and go to `http://localhost:3000`.

## Usage

Follow these steps to use the application:

1. **Navigate to the application:**

   - Open your web browser and go to `http://localhost:3000` (or the appropriate URL if you have configured a different port).

2. **Upload a CSV file:**

   - Click on the "Choose File" button and select a CSV file from your local system.
   - Click the "Upload" button to upload the selected CSV file.

3. **View uploaded files:**

   - Once uploaded, the application will display a list of all uploaded CSV files.
   - Each file in the list will show its name and an option to view its content.

4. **View CSV file contents:**

   - Click on the "View" button next to a CSV file to view its contents.
   - The contents will be displayed in a table format with dynamic column headers based on the CSV file.

5. **Search functionality:**

   - Use the search box above the table to filter rows based on a search term.
   - Type a search term in the search box to display rows that match the search term.
   - Clear the search box to display all rows.


## Video Walkthrough

[Watch the video walkthrough](https://drive.google.com/file/d/1L5A_DsX_uEgNaJ08FYK-bYUUITwQItq3/view?usp=sharing) explaining the folder structure and project setup.
