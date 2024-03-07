const request = require('supertest');
const app = require('./server');
let token, productId

describe('User Authentication Endpoints', () => {
  // Test case for signing up a new user
  describe('POST /user/signUp', () => {
    it('should create a new user account', async () => {
      const newUser = {
        "username": "support",
        "password": "Support@12"
      };

      const response = await request(app)
        .post('/user/signUp')
        .send(newUser);
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message', 'Success');
      token = 'Bearer ' + response.body.token
    });
  });

  describe('User Authentication Endpoints', () => {
    // Test case for signing in a new user
    it('Post /user/signIn', async () => {
      const newUser = {
        "username": "support",
        "password": "Support@12"
      };
      const response = await  request(app)
      .post('/user/signIn')
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message', 'Success');
    })
  })

  describe('Product Endpoints', () => {
    // Test case for create product
    it('Post /product/create', async () => {
      const newUser = {
        "name": "Buy Apple Watch Series 9",
        "description": "Silver Aluminium Case with Sport Band",
        "price":10000,
        "stockQuantity":5
      };
      const response = await  request(app)
      .post('/product/create').set(token)
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message', 'Success');
      productId = response.body.productId
    })
  })

  describe('Product Endpoints', () => {
    // Test case for update product
    it('Put /product/update/:ProductId', async () => {
      const newUser = {
        "name": "Buy Apple Watch Series 10",
        "description": "Silver Aluminium Case with Sport Band",
        "price":10000,
        "stockQuantity":5
      };
      const response = await  request(app)
      .put(`/product/update/${productId}`).set(token)
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message', 'Product Insert successfully');
    })
  })

  describe('Product Endpoints', () => {
    // Test case for delete product
    it('Get /product/delete/:ProductId', async () => {
      const response = await  request(app)
      .get(`/product/delete/${productId}`).set(token)
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message', 'Product updated successfully');
    })
  })

  describe('Product Endpoints', () => {
    // Test case for info product
    it('Get /product/info/:ProductId', async () => {
      const response = await  request(app)
      .get(`/product/info/${productId}`).set(token)
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message', 'Product delete successfully');
    })
  })

  describe('Product Endpoints', () => {
    // Test case for list product
    it('Get /product/list', async () => {
      const response = await  request(app)
      .get(`/product/list`).set(token)
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message', 'Success');
    })
  })

});
