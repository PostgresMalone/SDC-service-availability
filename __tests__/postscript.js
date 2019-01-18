import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const url = 'http://127.0.0.1:1001/api/availabilities/1/reservations';
  const payload = JSON.stringify({
    options: {
      rezName: 'test',
      checkIn: 'now',
      checkOut: 'later',
      adults: 1,
      children: 0,
      infants: 0,
    },
  });
  const params =  { headers: { 'Content-Type': 'application/json' } }
  const res = http.post(url, payload, params);
  check(res, {
    'status was 201': r => r.status === 200
  });
  sleep(1);
}
