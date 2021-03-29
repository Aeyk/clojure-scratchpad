CREATE TABLE auth_users (username TEXT PRIMARY KEY NOT NULL, 
					           email TEXT, 
					           password TEXT NOT NULL,
					           salt TEXT NOT NULL, activated BOOLEAN NOT NULL DEFAULT = 0);

CREATE TABLE auth_user_roles (user_id INT PRIMARY KEY,
						             role_name TEXT NOT NULL);
