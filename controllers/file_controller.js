const fs = require('fs');
const csvParser = require('csv-parser');
const CSV = require('../models/csv');
const path = require('path');

// Async function to handle file upload
module.exports.upload = async function (req, res) {
    try {
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).send('No files were uploaded.');
        }

        // Check if the file is CSV
        if (req.file.mimetype != "text/csv") {
            return res.status(400).send('Select CSV files only.');
        }

        // Create a new CSV document in the database
        let file = await CSV.create({
            fileName: req.file.originalname,
            filePath: req.file.path,
            file: req.file.filename
        });

        // Redirect to home page after successful upload
        return res.redirect('/');
    } catch (error) {
        console.log('Error in fileController/upload', error);
        res.status(500).send('Internal server error');
    }
}

// Async function to view a CSV file
module.exports.view = async function (req, res) {
    try {
        // Find the CSV file in the database by its ID
        let csvFile = await CSV.findOne({ file: req.params.id });

        // Arrays to hold CSV data and headers
        const results = [];
        const header = [];

        // Read the CSV file and parse it
        fs.createReadStream(csvFile.filePath)
            .pipe(csvParser())
            .on('headers', (headers) => {
                headers.forEach((head) => {
                    header.push(head);
                });
            })
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', () => {
                // Render the file_viewer view with data
                res.render("file_viewer", {
                    title: "File Viewer",
                    fileName: csvFile.fileName,
                    head: header,
                    data: results,
                    length: results.length
                });
            });
    } catch (error) {
        console.log('Error in fileController/view', error);
        res.status(500).send('Internal server error');
    }
}

// Async function to delete a CSV file
module.exports.delete = async function (req, res) {
    try {
        // Check if the file exists
        let isFile = await CSV.findOne({ file: req.params.id });

        if (isFile) {
            // Delete the file from the database
            await CSV.deleteOne({ file: req.params.id });
            return res.redirect("/");
        } else {
            // Log an error if the file is not found
            console.log("File not found");
            return res.redirect("/");
        }
    } catch (error) {
        console.log('Error in fileController/delete', error);
        res.status(500).send('Internal server error');
    }
}
