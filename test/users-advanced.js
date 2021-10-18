import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public-api/');
import { expect } from 'chai';
require('dotenv').config();

const TOKEN = process.env.USER_TOKEN;
console.log(TOKEN);


 describe('Users', () => {
  let userId;
  for(let i= 0; i <=5; i++){
  describe('POST', () => {
    it.only('/users', () => {
      const data = {
        email: `test-${Math.floor(Math.random() * 9999)}@mail.ca`,
        name: 'Test name',
        gender: 'male',
        status: 'inactive',
      };
    
    
      return request
      
        .post('users')
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(data)
        .then((res) => {
          expect(res.body.data).to.deep.include(data);
          userId = res.body.data.id;
          console.log(userId)
        
        });
      
    });
  
  })
  };
});
