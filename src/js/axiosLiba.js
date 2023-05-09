import axios from 'axios';

// GET / employees;

axios.defaults.baseURL = 'http://localhost:4000';
// function getEmployees() {
//   return fetch(`${BASE_URL}/employees`).then(res => res.json());
// }
// getEmployees().then(console.log);

function getEmployees() {
  return axios.get(`/employees`).then(res => res.data);
}
getEmployees().then(console.log);

// GET / employees / { id };
function getEmployeesById(id) {
  return axios.get(`/employees/${id}`).then(res => res.data);
}
getEmployeesById(3);
// POST / employees;
function createEmpoyees(employee) {
  // const empoyeeJson = JSON.stringify(employee);
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8',
  //   },
  //   body: empoyeeJson,
  // };
  // return fetch(`${BASE_URL}/employees`, options).then(r => r.json());
  // axios.post('./employees', employee);
}
const newObj = {
  first_name: 'Lyuba',
  last_name: 'Pushkina',
  email: 'lyuba.pelmen@gmail.com',
};
createEmpoyees(newObj);
// PUT / employees / { id };
function resetEmployee({ id, ...newObj }) {
  // return fetch(`${BASE_URL}/employees/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8',
  //   },
  //   body: JSON.stringify(newObj),
  // }).then(r => r.json());
  // return axios.put('/employees/${id}', newObj);
}
resetEmployee({
  first_name: 'Lyuba',

  id: 16,
});
// PATCH / employees / { id };
// DELETE / employees / { id };
