import { Status } from './status.enum';
import { User } from 'src/app/user/user-model/user';

export interface Todo {

    id: number;
    name: string;
    lastname: string;
    status: Status;
    owner: User;

}
