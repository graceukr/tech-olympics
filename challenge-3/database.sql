-- given the following table definitions, write a query to find the percentage of users who returned to log in within 7 days of their first login
create table logins (
    user_id INT NOT NULL,
    login_date DATE NOT NULL,
    PRIMARY KEY (user_id, login_date)
);
WITH logins_count AS (
    SELECT COUNT(*) as recent_logins
    FROM logins
    WHERE login_date >= CURRENT_DATE - INTERVAL '7 day'
),
total_count AS (
    SELECT COUNT(*) as total_logins
    FROM logins
)
SELECT (
        SELECT recent_logins
        FROM logins_count
    ) * 100.0 / (
        SELECT total_logins
        FROM total_count
    ) AS percentage_last_seven_days;