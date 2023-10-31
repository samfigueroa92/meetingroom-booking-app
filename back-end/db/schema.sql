DROP DATABASE IF EXISTS booking_app;
CREATE DATABASE booking_app;

\c booking_app;

CREATE TABLE meetingRooms (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    capacity INTEGER NOT NULL,
    floor INTEGER NOT NULL,
    available BOOLEAN default true
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    meeting_name TEXT NOT NULL,
    meeting_room_id INTEGER references meetingRooms(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    attendees TEXT
);