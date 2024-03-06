
const request = require('supertest');
const app = require('./server');
let token
describe('User Authentication Endpoints', () => {
  // Test case for signing up a new user
  describe('POST /user/signUp', () => {
    it('should create a new user account', async () => {
      const newUser = {
        username: 'Test_1234',
        password: 'Test@1234'
      };

      // const response = await request(app)
      //   .post('/user/signUp')
      //   .send(newUser);

      let response = await request(app).post('/user/signUp').send(newUser)
      expect(response.code).toEqual(200)
      expect(response.body).toEqual('success')
      // expect(response.body.data).not.toBe(null)
      // expect(response.statusCode).toBe(201);
      // expect(response.body).toHaveProperty('message', 'Success');
      // token = response.body.data.token
    });
  });

  // // Test case for signing in an existing user
  // describe('POST /user/signIn', () => {
  //   it('should authenticate an existing user', async () => {
  //     const existingUser = {
  //       username: 'existinguser',
  //       password: 'existingpassword'
  //     };

  //     const response = await request(app)
  //       .post('/user/signIn')
  //       .send(existingUser);

  //     expect(response.statusCode).toBe(200);
  //     expect(response.body).toHaveProperty('message', 'Success');
  //   });
  // });


  // // Test case for signing in an existing user
  // describe('POST /user/signIn', () => {
  //   it('should authenticate an existing user', async () => {
  //     const existingUser = {
  //       username: 'existinguser',
  //       password: 'existingpassword'
  //     };

  //     const response = await request(app)
  //       .post('/user/signIn')
  //       .send(existingUser);

  //     expect(response.statusCode).toBe(200);
  //     expect(response.body).toHaveProperty('message', 'Success');
  //   });
  // });

  // describe('Product Insert Endpoint', () => {
  //   it('should insert a new product with valid JWT token', async () => {

  //     const newProduct = {
  //       name: 'Test Product',
  //       description: 'This is a test product',
  //       price: 10,
  //       stockQuantity: 100
  //     };

  //     const response = await request(app)
  //       .post('/product/create')
  //       .set('Authorization', `Bearer ${token}`)
  //       .send(newProduct);

  //     expect(response.statusCode).toBe(201); // Assuming 201 is the status code for successful creation
  //     expect(response.body).toHaveProperty('message', 'Product created successfully');
  //     // Additional assertions can be made based on the response body or any side effects (like database changes)
  //   });

  //   it('should return 401 Unauthorized without JWT token', async () => {
  //     const newProduct = {
  //       name: 'Test Product',
  //       description: 'This is a test product',
  //       price: 10.99,
  //       stockQuantity: 100
  //     };

  //     const response = await request(app)
  //       .post('/product/create')
  //       .send(newProduct);

  //     expect(response.statusCode).toBe(401); // Assuming 401 is the status code for unauthorized access
  //     expect(response.body).toHaveProperty('error', 'Unauthorized');
  //     // Additional assertions can be made based on the response body or any side effects
  //   });
  // });
});