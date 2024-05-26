const File = require("../models/csv");

// Async function to handle rendering home page
module.exports.home = async function (req, res) {
    try {
        // Fetch all files from the database
        let files = await File.find({});

        // Render the 'home' view with retrieved files and title
        return res.render('home', {
            files: files,
            title: "Home"
        });
    } catch (error) {
        // Log any errors that occur and send a 500 status response
        console.log('Error in homeController/home', error);
        return res.status(500).send('Internal server error');
    }
}
