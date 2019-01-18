# CRUD API

Guidelines for CRUD operations with BareBnB+ availability component

## Related Projects

## Table of Contents

1. [READ](#Read)
1. [UPDATE](#Update)

## Read
- Route: app.get('/availabilities/:id')
- Availability and price will be displayed for a given roomId
- roomId captured from the url and availability populated
- db.getVacancy called to retrieve a given roomId and it's reservations

## Update
- Route: app.put('/availabilities/:id')
- RoomId and date selection entered with start/end, as well as occupant qty
- roomId captured as well as dates/occupants and saved to reservation table
- db.updateVacany called to modify reservation array that is linked to certain roomId