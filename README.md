# CodinGame API undocumented

### Current API knowledge and advancement
To follow how far this package is, you can check the Trello : https://trello.com/b/q5vxDgBO/codingame-endpoints

### Docs
You can see every current functions in the src/lib folder. You can see the types and the keys of the results by checking the interface result.

### Installation
This is a node, so you are supposed to use it with Nodejs.<br>
To import the module, you need to do this in a command prompt :<br>
`npm install codingame-api-node-ts`

### Example
This is the code to login to CodinGame

```js
const { loginCodinGamer } = require('codingame-api-node-ts')

try {
  const email = "api@test.example"
  const password = "apitest"

  const session = await loginCodinGamer(email, password)
  
  console.log(session)
} catch (e) {
  //axios error
  console.log(e)
}
```

You can see the result of this by going to https://github.com/Sigeth/codingame-api-node-ts/blob/main/src/lib/api/auth.ts and check the interface "ILoginCodinGamer", that contains every keys and results of the response.
