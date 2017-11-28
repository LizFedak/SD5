CREATE TABLE a (
id NUMBER,
animal VARCHAR2(15)
);
insert into a VALUES ( 2, 'cat');
insert into a VALUES ( 3, 'dog');
insert into a VALUES ( 4, 'frog');
insert into a VALUES ( 5, 'giraffe');

CREATE TABLE b (
id NUMBER,
sound VARCHAR2(10)
);
insert into b VALUES ( 1, 'tweet');
insert into b VALUES ( 2, 'meow');
insert into b VALUES ( 3, 'woof');
insert into b VALUES ( 4, 'ribbet');

-- Cartesian Join
SELECT a.id, animal, b.id, sound
  FROM a CROSS JOIN b;

SELECT a.id, animal, b.id, sound
  FROM a, b;

-- Inner Joins
SELECT a.id, animal, b.id, sound
  FROM a INNER JOIN b ON a.id = b.id;

SELECT id, animal, sound
  FROM a INNER JOIN b USING (id);

SELECT id, animal, sound
  FROM a NATURAL JOIN b;

SELECT a.id, animal, b.id, sound
  FROM a, b
 WHERE a.id = b.id;

-- Left Outer Join
SELECT a.id, animal, b.id, sound
  FROM a LEFT OUTER JOIN b ON a.id = b.id;

SELECT a.id, animal, b.id, sound
  FROM a, b
 WHERE a.id = b.id(+);

-- Right Outer Join
SELECT a.id,animal,  b.id, sound
  FROM a RIGHT OUTER JOIN b ON a.id = b.id;

SELECT a.id, animal, b.id, sound
  FROM a, b
 WHERE a.id(+) = b.id;

-- Full Outer Join
SELECT a.id, animal, b.id, sound
  FROM a FULL OUTER JOIN b ON a.id = b.id;

SELECT a.id, animal, b.id, sound
  FROM a, b WHERE a.id = b.id(+)
UNION
SELECT a.id, animal, b.id, sound
  FROM a, b WHERE a.id(+) = b.id;

-- Antijoin
SELECT a.id, animal, b.id, sound
  FROM a LEFT OUTER JOIN b ON a.id = b.id
  WHERE b.id IS NULL;

SELECT id, animal FROM a
 WHERE id NOT IN (SELECT id FROM b);

SELECT id, animal FROM a
 WHERE NOT EXISTS (SELECT * FROM b WHERE id = a.id);
