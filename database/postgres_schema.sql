DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS reservations;

CREATE TABLE rooms (
  roomId INTEGER NOT NULL PRIMARY KEY,
  roomName VARCHAR NOT NULL,
  price INTEGER NOT NULL,
  reviewSummary VARCHAR (20) NOT NULL,
  type VARCHAR (20) NOT NULL,
  location VARCHAR (20) NOT NULL,
  reviewNum INTEGER NOT NULL,
  monthMin BOOLEAN NOT NULL
);

CREATE TABLE reservations (
  roomId INTEGER NOT NULL,
  rezName VARCHAR NOT NULL,
  checkIn VARCHAR (10) NOT NULL,
  checkOut VARCHAR (10) NOT NULL,
  adults INTEGER NOT NULL,
  children INTEGER NOT NULL,
  infants INTEGER NOT NULL,
  PRIMARY KEY (roomId),
  CONSTRAINT reservations_roomId_fkey FOREIGN KEY (roomId)
    REFERENCES rooms (roomId) MATCH SIMPLE
    ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE INDEX roomId_index ON rooms (roomId);
CREATE INDEX roomName_index ON rooms (roomName);
CREATE INDEX roomId_rez_index ON reservations (roomId);
CREATE INDEX rezName_index ON reservations (rezName);

-- COPY rooms FROM '/Users/Meandeane/Documents/GitHub/SDC-service-availability/database/roomdata/data1.csv' DELIMITER ',' CSV HEADER;
-- COPY reservations FROM '/Users/Meandeane/Documents/GitHub/SDC-service-availability/database/reservationdata/data1.csv' DELIMITER ',' CSV HEADER;