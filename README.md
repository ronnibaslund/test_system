# A NodeJs Express API with 4 Restful endpoints based on top of a mongoDb

1. GET "/" shows a welcome message
2. PUT "/register" Create a new user in the database
3. POST "/authenticate" authenticate a user base on email and password and sends back an Auth Token 
4. GET "/protected" A protected endpoint where you need to provide an Auth token to get access  