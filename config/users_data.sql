-- insert users seed data for users
INSERT INTO `freshplatez`.`users`
(user_email,user_password,Fname,Lname,allergies,favorites,is_logged_On,is_admin,email)
VALUES
('dan@platez.com','','Dan', 'DeButts','allergies?','favorites?', false, false, 'FreshPlatezOrderz@gmail.com'),
('john@platez.com','','John', 'McCutchen','allergies?','favorites?', false, false, 'FreshPlatezOrderz@gmail.com'),
('brian@platez.com','','Brian', 'Ellis','allergies?','favorites?', false, false, 'FreshPlatezOrderz@gmail.com'),
('chris@platez.com','','Chris', 'Walters','allergies?','favorites?', false, false, 'FreshPlatezOrderz@gmail.com'),
('admin@platez.com','','admin', 'administrator','allergies?','favorites?', false, true, 'FreshPlatezOrderz@gmail.com');