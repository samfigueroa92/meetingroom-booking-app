\c booking_app

INSERT INTO meetingRooms ("name", "capacity", "floor") VALUES
('Meeting Room 1', '3', '22'),
('Meeting Room 2', '5', '10'),
('Meeting Room 3', '10', '25'),
('Meeting Room 4', '25', '22'),
('Meeting Room 5', '12', '15'),
('Meeting Room 6', '10', '10'),
('Meeting Room 7', '20', '21'),
('Meeting Room 8', '25', '22'),
('Meeting Room 9', '3', '22'),
('Meeting Room 10', '8', '11');

INSERT INTO bookings ("meeting_name", "meeting_room_id", "start_date", "end_date", "attendees") VALUES
('General Meeting', 2, '2023-11-19 10:23:54', '2023-11-19 11:23:54', 'samanthafigueroa@pursuit.org'),
('Scrum Meeting', 1, '2024-01-05 10:23:54', '2024-01-05 12:23:54', 'samanthafigueroa@pursuit.org, admin@blackstone.org'),
('International Meeting', 8, '2024-02-05 10:23:54', '2024-02-05 10:23:54', 'samanthafigueroa@pursuit.org');

