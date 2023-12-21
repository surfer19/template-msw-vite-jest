## Mock integration tests

```
npm create vite@latest my-vue-app -- --template react-ts
```

```
npm install msw --save-dev
```

```
// src/mocks/node.ts
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// create mock server
export const server = setupServer(...handlers);

```

npm install axios --save

```

```

https://www.thecocktaildb.com/api.php

```
npm install jest --save-dev
npm install @testing-library/react --save-dev
npm install ts-jest @types/jest --save-dev
npm i @testing-library/jest-dom --save-dev

```
