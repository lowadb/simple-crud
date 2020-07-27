import {Pipe, PipeTransform} from '@angular/core';
import {User} from "../services/user.service";

@Pipe({
  name: 'userAgregator'
})
export class UserAgregatorPipe implements PipeTransform {

  transform(user: User, type: 'short' | 'full' = 'full'): string {
    if (!user) {
      return '';
    }
    return (type === 'full')
      ? `${user.name?.first[0]}. ${user.name?.last[0]}.  - ${user.email}`
      : `${user.name?.first[0]}. ${user.name?.last[0]}.`;
  }

}
