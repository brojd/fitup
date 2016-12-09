import { Observable } from 'rxjs/Observable';

export default function handleError(error) {
  console.error(error);
  return Observable.throw(error);
}
