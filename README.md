# BlogAppAPI

Installation Instructions:

1.  Download or git clone the repository
2.  use npm -i to install the necessary packages
3.  Create a MongoDB Atlas account. Replace MONGODB_URI environmental variable with your own connection string.
4.  Must register a user first. Then, login and the authorization token will record in the response header. Also, include the authorization token in the request header when using the various ../blog/.. endpoints.

Environmental variables
Port
MONGODB_URI
JWT_SECRET
SALT

DOCUMENTATION:
/
-Get
Returns String "API UP"

/auth
/login
-username: string, required
-password: string, required
Returns:
Full user objects (no password)
Header: Authorization (jwt)

/register - BODY - username: - password: - firstname: - lastname: - email:  
Returns:
User Body

/auth
/:login
/:register

/blogs
/:username
/:id
