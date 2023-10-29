\c bookingApp

CREATE TABLE meetingRooms (
    id SERIAL PRIMARY KEY,
    name TEXT,
    capacity INTEGER,
    floor INTEGER,
    available BOOLEAN
);

INSERT INTO meetingRooms ('name', 'capacity', 'floor','available') VALUES ('Meeting Room 1', 3, 22, 'true'),
('Meeting Room 1', 3, 22, 'true'),
('Meeting Room 2', 3, 15, 'false'),
('Meeting Room 3', 10, 4, 'false'),
('Meeting Room 4', 6, 20, 'false'),
('Meeting Room 5', 10, 22, 'true'),
('Meeting Room 6', 50, 23, 'true'),
('Meeting Room 7', 100, 15, 'true'),
('Meeting Room 8', 4, 4, 'true'),
('Meeting Room 9', 10, 25, 'true'),
('Meeting Room 10', 35, 30, 'true');