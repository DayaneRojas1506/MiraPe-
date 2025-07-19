# Outfit Social Network

This project is a simple social network application that allows users to publish and view outfits in a feed format. Built using Flask, it provides a user-friendly interface for sharing fashion ideas and inspirations.

## Project Structure

- **app.py**: The main application file that sets up the Flask server and handles routing for user profiles, publishing outfits, and displaying the feed.
- **requirements.txt**: Lists the dependencies required for the project, including Flask and other necessary libraries.
- **static/**: Contains static files for the application.
  - **css/**: Custom styles for the application.
    - **styles.css**: Stylesheet for the user interface.
  - **js/**: JavaScript files for client-side functionality.
    - **main.js**: Handles form submissions and dynamic updates to the feed.
- **templates/**: Contains HTML templates for rendering pages.
  - **base.html**: Base template with common layout and structure.
  - **feed.html**: Displays the feed of outfits with sections for likes and comments.
  - **publish.html**: Form for users to publish new outfits, including image upload and description.
- **instance/**: Contains the SQLite database.
  - **outfits.db**: Database storing user profiles, outfits, likes, and comments.
- **data/**: Alternative data source.
  - **outfits.json**: JSON file for storing outfit data.

## Getting Started

1. Clone the repository.
2. Install the required dependencies using `pip install -r requirements.txt`.
3. Run the application with `python app.py`.
4. Open your browser and navigate to `http://localhost:5000` to start using the application.

## Features

- User authentication (to be implemented)
- Publish outfits with images and descriptions
- View a feed of outfits from all users
- Like and comment on outfits (to be implemented)

## Future Enhancements

- User profiles with customizable settings
- Enhanced commenting and liking system
- Search functionality for outfits
- Integration with social media platforms for sharing

## License

This project is licensed under the MIT License - see the LICENSE file for details.