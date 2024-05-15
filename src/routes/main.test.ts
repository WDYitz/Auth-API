/* import request from "supertest";
import app from "../app";

describe('testing api routes', () => {

  const email = 'testing@gmail.com';
  const password = 'testing123';

  // ping pong route
  it('should return an object with a single key and the value true', (done) => {
    request(app).get('/ping').expect(200).then(response => {
      expect(response.body.pong).toBeTruthy();
      return done();
    })
  })

  // login route
  it('should be able to login', (done) => {
    request(app).get('/login').expect(200).then(response => {
      expect(response.body).toBe({ email, password });
      return done();
    })
  })

}) */