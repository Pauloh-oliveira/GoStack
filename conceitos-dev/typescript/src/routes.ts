import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request : Request, response: Response) {
    const user = createUser({
        name: 'Paulo Henrique',
        email: 'paulohenrique_789@hotmail.com',
        password: '1245',
        techs : [
                'NodeJS', 
                'MongoDB',
                {title: 'NodeJS', experience: 100},
                { title: 'typescript', experience: 56 }
                ],
    });

    console.log(user.email)
    return response.json({ message: 'Hello World'});
}