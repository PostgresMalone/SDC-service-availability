import http from 'k6/http';
import { check, sleep } from 'k6';

// export const options = {
//   stages: [
//     { duration: '1m', target: 100 },
//     { duration: '1m', target: 200 },
//     { duration: '1m', target: 200 },
//   ],
// };

export default function () {
  let id = Math.floor(Math.random() * (14000000 - 2000000)) + 2000000;
  let res = http.get(`http://127.0.0.1:1001/availabilities/${id}`);
  check(res, {
    'status was 200': r => r.status === 200
  });
  sleep(0.1);
}
