DROP DATABASE IF EXISTS booking_app;
CREATE DATABASE booking_app;

\c booking_app;

CREATE TABLE meetingRooms (
    id SERIAL PRIMARY KEY,
    name TEXT,
    capacity TEXT,
    floor TEXT
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    meeting_name TEXT,
    meeting_room_id INT references meetingRooms(id),
    start_date TEXT,
    end_date TEXT,
    attendees TEXT
);