# there are two type of export in ES6
## "type": "module"
1. default export: only one Component/Function file export and import in another JS file by any name doesn't matter
   ``` JavaScript
   export default bubbleSort;
   or 
   export default function (arr) {
       // something code
   } 
   ```
2. named export: can multiple Component/Function file export and import in another JS file with proper name by destructuring
   ``` JavaScript
   export binarySearch() {}
   export linearSearch() {}
   export ternarySearch() {}
   or
   export { binarySearch, linearSearch, ternarySeach };
   ```
   you can give alias or nickname during import 
   ```JavaScript
   import { binarySearch as bs, linearSearch } from 'path';
   ```
## "type": "commonjs"
1. export syntax
   ``` JavaScript
   module.exports = { linearSort, binarySearch, ternarySearch};
   module.exports = bubbleSort;
   ```
2. import syntax 
   ``` JavaScript
   const bs = require('path');
   ```