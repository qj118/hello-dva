import request from '../utils/request';

const proxy = "/apis/"

export function query() {
  return request('/api/users');
}

export function testCNode() {
  return request(proxy + '/api/v1/topics');
}

export function testMock() {
  return request("/api/mockdata");
}
