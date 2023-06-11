import { openDbConnection, endDbConnection } from '../connection/connectionManager.js';
import { hashPassword } from '../../domain/util/encryptionUtil.js';
import User from '../../domain/model/userModel.js';
import { log } from 'console';

log('User schema seeding started');

await openDbConnection()
    .then(async () => {
        const email = 'mavu072@gmail.com';
        const password = await hashPassword('password');
        const user = new User({ email : email, password : password });
        await user.save().then((res) => { log(res); });
    })
    .catch((err) => {
        throw err;
    })
    .finally(async () => {
        await endDbConnection();
    });

log('User schema seeding done');