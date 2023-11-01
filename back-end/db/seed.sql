\c booking_app

INSERT INTO meetingRooms ("id", "name", "capacity", "floor", "available") VALUES
(1,'Meeting Room 1', 3, 22, 'true'),
(2,'Meeting Room 2', 5, 10, 'true'),
(3,'Meeting Room 3', 10, 25, 'true'),
(4,'Meeting Room 4', 25, 22, 'true'),
(5,'Meeting Room 5', 12, 15, 'true'),
(6,'Meeting Room 6', 10, 10, 'true'),
(7,'Meeting Room 7', 20, 21, 'true'),
(8,'Meeting Room 8', 25, 22, 'true'),
(9,'Meeting Room 9', 3, 22, 'true'),
(10,'Meeting Room 10', 8, 11, 'true');

-- INSERT INTO bookings ("id", "meeting_name", "meeting_room_id", "start_date", "end_date", "attendees") VALUES
-- (1,'General Meeting', 2, '2024/01/05', '2024/01/05', 'samanthafigueroa@pursuit.org'),
-- (2,'Scrum Meeting', 1, '2024/01/15', '2024/01/15', 'samanthafigueroa@pursuit.org, admin@blackstone.org'),
-- (3,'International Meeting', 8, '2024/02/10', '2024/02/14', 'samanthafigueroa@pursuit.org');
