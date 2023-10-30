# Movie App React

This is a movie and TV show application built using React. It utilizes the [themoviedb.org](https://www.themoviedb.org/) API to fetch trending movies, TV shows, and people data, as well as perform searches and display details for individual items.

## Functionality

- The application fetches data from the [Trending API](https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9) to display the daily trending lists of movies, TV shows, and people.
- The data is filtered locally based on the `media_type` property of the response object, allowing the user to view movies, TV shows, or people.
- The application provides a search functionality using the [Search API](https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query={query}). The search is performed on the server-side to retrieve relevant results.
- Clicking on an item in the list takes the user to a details page where additional information about the item is displayed. The details are fetched from the [Details API](https://api.themoviedb.org/3/{media_type}/{item_id}?api_key=14bdd69ce887376edfafb09f23f78fe9) based on the media type and item ID.
- The application uses the base URLs `https://image.tmdb.org/t/p/w500/` for poster images and `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/` for backdrop images.

## Development Instructions

To set up the development environment and run the project locally, follow these instructions:

1. Clone the repository: `git clone https://github.com/your-username/movie-app-react.git`
2. Navigate to the project directory: `cd movie-app-react`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application running.

## Project Structure

The project follows a well-organized file structure to maintain code cleanliness and readability. Here's an overview of the main directories and files:

- `src`: Contains the source code for the application.
  - `components`: Holds reusable React components used throughout the application.
  - `pages`: Contains the main pages of the application, such as the home page and details page.
  - `services`: Includes API service files responsible for making API requests and handling data.
  - `utils`: Contains utility functions and helper files.
  - `App.js`: The entry point of the application where the main routing and layout are defined.
  - `index.js`: The main file that renders the React app and attaches it to the DOM.

## Technologies Used

The following technologies and libraries were used in the development of this project:

- React: A popular JavaScript library for building user interfaces.
- Create React App: A tool for creating React applications with a pre-configured setup.
- React Router: A library for handling client-side routing in a React application.
- Material-UI (MUI): A comprehensive UI toolkit that offers pre-designed components and styling options.
- Axios: A library for making HTTP requests to fetch data from APIs.
- Jest and React Testing Library: Used for unit testing React components.

## Conclusion

The Movie App React is a fully functional application that allows users to explore trending movies, TV shows, and people. It provides an intuitive interface, search functionality, and detailed information for individual items. The project is built using modern technologies and follows best practices to ensure a clean and maintainable codebase.

To see the live version of the application, visit [https://movie-app-react-o6cv.vercel.app/](https://movie-app-react-o6cv.vercel.app/).
