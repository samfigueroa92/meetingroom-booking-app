DROP DATABASE IF EXISTS bookingApp;
DROP TABLE IF EXISTS meetingRooms;

CREATE DATABASE bookingApp;

\c bookingApp;

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
    startDate DATETIME,
    endDate DATETIME,
    attendees TEXT,
);