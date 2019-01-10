# CRUD API

Guidelines for CRUD operations with BareBnB+ availability component

## Related Projects

  - https://github.com/HROneForAll/fec-photo-gallery-service
  - https://github.com/HROneForAll/fec-photo-gallery-proxy-server
  - https://github.com/HROneForAll/fec-service-info
  - https://github.com/HROneForAll/fec-proxy-info
  - https://github.com/HROneForAll/fec-service-reviews
  - https://github.com/HROneForAll/fec-proxy-reviews
  - https://github.com/HROneForAll/fec-proxy-suggestions
  - https://github.com/HROneForAll/fec-service-suggestions
  - https://github.com/HROneForAll/fec-proxy-availability
  - https://github.com/HROneForAll/fec-service-availability

## Table of Contents

1. [CREATE](#Create)
1. [READ](#Read)
1. [UPDATE](#Update)
1. [DELETE](#Delete)

## Create
- Route: app.post('/availabilities/:id')
- Room information will come through the body of the request and new roomId created
- roomId captured from the url and new db record created
- db.saveVacancy called to persist record to db

## Read
- Route: app.get('/availabilities/:id')
- Availability and price will be displayed for a give roomId
- roomId captured from the url and availability populated
- db.getVacancy called to retrieve

## Update
- Route: app.put('/availabilities/:id')
- RoomId or date selection is confirmed and booking created, setting selected date availability to 'false'
- roomId captured as well as dates and saved to reservation
- db.updateVacany called to modify availability object

## Delete
- Route: app.delete('/availabilities/:id')
- RoomId is removed from database including all availability and price info
- roomId captured from the url record deleted