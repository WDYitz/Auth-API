## AUTHENTICATION TYPES

### Basic Auth

- Base64 Encode/Decode
- Encoding
  - Buffer.from(email:password, 'utf-8').toString('base-64');
- Decoding
  - Buffer.from(hash, 'base64').toString('utf-8');

- Middleware

```
  if (req.headers.authorization) {
    let hash: string = req.headers.authorization.substring(6);
    let decoded: string = Buffer.from(hash, 'base64').toString('utf-8');
    let data: string[] = decoded.split(':');
    if (data.length === 2) {
      let user = await db.user.findFirst({
        where: {
          email: data[0],
          password: data[1]
        }
      })

      if (user) {
        success = true;
      }
    }
  }
```

### Json Web Token - JWT

- First set a environment variable (JWT_SECRET) and create a random hash value

  - JWT_SECRET = "random_hash_value"

- Then create a variable to store your jwt token

  - let token = JWT.sign( param_1, param_2, param_3 );
    - the first parameter (param_1) receives an object with the data thats going to link the user with the token (ex: { id: user.id, email: user.email })
    - the second parameter (param_2) receives the JWT_SECRET environment variable that you created.
    - (OPTIONAL) the third parameter receives the expiration time of the token {expiredIn: '2h'}

- Register / Create User controller

```
let token = JWT.sign({ id: user_id_from_your_database, email: user_email_from_your_database}, process.env.JWT_SECRET as string, {expiresIn: '2h'});
```

- Middleware

```
 if (req.headers.authorization) {
      const [authType, token] = req.headers.authorization.split(' ');
      if (authType === 'Bearer') {
        try {
          const decodedToken = JWT.verify(token, process.env.JWT_SECRET as string);
          // Verify token
          if (decodedToken) {
            // If token is valid, set success to true
            success = true;
          }
        } catch (error) {
          console.log("JWT Error", 'Token inválido')
        }
      }
    }
```
