// 'use strict'

// /* eslint-disable */
// import supertest from 'supertest'

// import { DBConnections } from './Server'

// let app

// beforeAll(async () => {
//   await DBConnections()
//   return app = await import('./App')
// })

// let header = {
//   Authorization :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pY2hlYWwxMjNAZ21haWwuY29tIiwidXNlcklkIjoiYzRjYmJkMGQtZTUwOS00MjNmLWI3YWYtYzEwZThlN2I4OTNmIiwiaWF0IjoxNjk0NDk2NjQ0LCJleHAiOjE2OTQ1ODMwNDR9.dXlhwE32oONDJ5nMWZ7LYXu1PkVsjo9L-FKa0rVhqpg'
// }
// describe('checking bulk template creation Api endpoint', () => {
//   it('Post/templates/create', async () => {
//     const response = await supertest(app.default).post('/templates/create/106769052057950').set(header).send(createTemplateReq)
//     expect(response.body.statusCode).toEqual(200)
//     expect(response.body.message).toEqual('success')
//     expect(response.body.data).not.toBe(null)
//   })
// })
// describe('send template for approval Api endpoint', () => {
//   it('patch/:templateId/submit', async () => {
//     const response = await supertest(app.default).patch('/templates/645384a70b7e39e051e61c05/submit/106769052057950').set(header)
//     expect(response.body.statusCode).toEqual(200)
//     expect(response.body.message).toEqual('success')
//     expect(response.body.data).not.toBe(null)
//   })
// })
// describe('upload file Api endpoint', () => {
//   it('Post/templates/upload', async () => {
//     let response = await supertest(app.default).post('/templates/upload/106769052057950').set(header).attach('uploadFile', `${__dirname}/file_example_JPG_100kB.jpg`)
//     expect(response.body.statusCode).toEqual(200)
//     expect(response.body.message).toEqual('success')
//     expect(response.body.data).not.toBe(null)
//   })
// })
// describe('edit template Api endpoint', () => {
//   it('Post/templates/edit/:templateId', async () => {
//     const response = await supertest(app.default).post('/templates/edit/645384a70b7e39e051e61c05/106769052057950').set(header).send({
//       name: 'media_viva_tempalates_09',
//       language: {
//         code: 'en'
//       },
//       category: 'MARKETING',
//       components: [
//         {
//           type: 'HEADER',
//           format: 'VIDEO',
//           example: {
//             headerHandle: '4::aW1hZ2UvanBlZw==:ARaxp2xeg_KT50RE0N_coVR-H9w4-0L6pQOQYg9Gr1EuqJY_GJEsJgqsbBXlOy_JuJA8C4zCde53e3dF1PUeAQLLb54VAezpyCj0fn1qHpvP0A:e:1683024776:1175759883130788:100003271262436:ARamx1176O6HzO4-y8s'
//           }
//         },
//         {
//           type: 'BODY',
//           text: "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript."
//         },
//         {
//           type: 'FOOTER',
//           text: 'vivaconnect'
//         }
//       ]
//     })
//     expect(response.body.statusCode).toEqual(200)
//     expect(response.body.message).toEqual('success')
//     expect(response.body.data).not.toBe(null)
//   })
// })
// describe('get template count Api endpoint', () => {
//   it('get/templates/count/:wabaId', async () => {
//     const response = await supertest(app.default).get('/templates/count/106769052057950').set(header)
//     expect(response.body.statusCode).toEqual(200)
//     expect(response.body.message).toEqual('success')
//     expect(response.body.data).not.toBe(null)
//   })
// })



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
      expect(response.statusCode).toEqual(200)
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
