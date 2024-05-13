## AUTHENTICATION TYPES

### Basic Auth

````
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


### 
