List of API's in this project -> 

User API Endpoints:- 
- POST -> api/user/register :- Register a new user 
- POST -> api/user/login :- Login Existing User
- GET -> api/user/profile :- Get user profile (Authentication Required.)
- GET -> api/user/all :- Get ALL users 

Product API Endpoints:- 
- POST -> api/product/add :- Create a new product
- GET -> api/product/all :- retrive all products
- GET -> api/product/:id :- Get a specific product
- PUT -> api/product/:id :- Update a product by id
- Delete -> api/product/:id :- Delete a product by id

Cart API Endpoints:- 
- POST -> api/cart/add :- ADD a product to the cart (Authentication Req.)
- GET -> api/cart/user :- Retrive the user specific cart (Authentication required)
- POST -> api/cart/--qty :- Decrease the quantity of a product in the cart (Authentication req.)
- DELETE -> api/cart/remove/:productid :- Remove a product from the cart (Authentication req.)
- DELETE -> api/cart/clear :- Delete all product from the cart

Shipping Address API Endpoints :- 
- POST -> api/address/add :- add user shipping address. (Authentication req.)
- GET -> api/address/get :- Get user shipping address (Authentication req.)

Payment API Endpoints :- 

- POST -> api/payment/checkout :- Initiates the payment process.
- POST -> api/apyment/verify-payment :- Confirms the payment & save to DB.

Order confirmation API Endpoints :- 

- GET -> api/order/confirm :- User specific orders (Authentication req.)
- GET -> api/oredr/confirm/all :- All user Orders. 
