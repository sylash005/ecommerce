import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Joey Tribianni',
        email:'joey@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Rachel Green',
        email:'rachel@example.com',
        password:bcrypt.hashSync('123456',10),
    },
]

export default users