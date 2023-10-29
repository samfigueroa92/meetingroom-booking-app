DROP DATABASE IF EXISTS booking_app;
CREATE DATABASE booking_app;

\c booking_app;

CREATE TABLE meetingRooms (
    id SERIAL PRIMARY KEY,
    name TEXT,
    capacity INTEGER,
    floor INTEGER,
    available BOOLEAN
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    meetingName TEXT,
    meetingRoomId INTEGER references meetingRooms(id),
    startDate DATE,
    endDate DATE,
    attendees TEXT
);