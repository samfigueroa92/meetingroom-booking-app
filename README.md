# Meeting Room Booking Application

This is a simple meeting room booking application that allows users to book, cancel, and create new meeting rooms. It's built using a combination of front-end and back-end technologies to provide a smooth and user-friendly experience.

[Netlify Deployed Link](https://blackstonebookings.netlify.app/)

[Render Deployed Link](https://booking-app-91on.onrender.com)

## Contact

If you have any questions or suggestions, please feel free to contact me at <samanthafigueroa@pursuit.org>.

## Technologies Used

- Front-end:
  - React.js
  - Javascript
  - HTML/CSS
  - Node.js
  - Material UI

- Back-end:
  - Express.js
  - PostgreSQL

## Features

- **Book Meeting Rooms**: Users can book a meeting room by adding a name, selecting the date, time, and adding attendess.

- **Cancel Reservations**: If your plans change, you can cancel your meeting room booking.

- **Create New Meeting Rooms**: Users have the capability to create new meeting rooms, complete with details such as room name, capacity, and floor.

## Installation

1. Clone this repository to your local machine.

   ```
   git clone https://github.com/samfigueroa92/meetingroom-booking-app.git
   ```

2. Navigate to the project directory.

   ```
   cd front-end
   cd back-end
   ```

3. Install the required dependencies for the front-end and back-end.

   ```
   npm install

   (front-end) npm install axios 
   (front-end) npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
   (front-end) npm install @mui/material @emotion/react @emotion/styled
   (front-end) npm install react-router-dom

   (back-end) npm install express 
   (back-end) npm install cors
   (back-end) npm install pg-promise

   ```

4. Configure the database connection in the `dbConfig.js` file.

5. Start the server and client separately.

   - Start the back-end server:

     ```
     cd back-end
     npm start
     ```

   - Start the front-end:

     ```
     cd front-end
     npm start
     ```

6. Access the application in your web browser at `http://localhost:3000`.
