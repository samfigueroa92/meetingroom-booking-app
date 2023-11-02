DROP DATABASE IF EXISTS booking_app;
CREATE DATABASE booking_app;

\c booking_app;

CREATE TABLE meetingRooms (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    capacity TEXT NOT NULL,
    floor TEXT
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    meeting_name TEXT NOT NULL,
    meeting_room_id INT references meetingRooms(id),
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    attendees TEXT
);