/**
Delete unwanted keys from an object.
 
@param object - Object to delete keys.
@param keys - An array containing the values you want to delete from the object.
@returns the object without the unwanted keys.
 
@example
```
import deleteKeys from 'delete-keys';
 
const obj = {
  name: 'abraham',
  last: 'hernandez',
  _id: '03773',
  phone: '800-000-0000',
};
 
deleteKeys(obj, ['_id', 'phone']);
// {
//   name: 'abraham',
//   last: 'hernandez',
// }
```
*/

declare function deleteKeys(object: Object, keys?: readonly string[]): Object;

export = deleteKeys;