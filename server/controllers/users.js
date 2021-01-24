const bcrypt = require('bcryptjs')
require('dotenv').config()
const {PASSWORD} = process.env

const nodemailer = require('nodemailer')

module.exports = ({
    register: async (req, res) => {
        const db = req.app.get('db')
        const {first_name, last_name, email, password} = req.body
        const [existingUser] = await db.users.get_user([email])

        if (existingUser) {
            return res.status(409).send('There is already an account registered to this email. Please use a different email.')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.users.register_user([first_name, last_name, email, hash])

        req.session.user = newUser
                //step 1
                let transporter = await nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'rich.recipes.lobster@gmail.com',
                        pass: PASSWORD
                    }
                })
        
                //step 2
                let mailOPtions = {
                    from: 'rich.recipes.lobster@gmail.com',
                    to: `${email}`,
                    subject: 'Welcome from Rich Recipes',
                    text: `Welcome to Rich Recipes, ${first_name}.\n\nThank you for your support. If you have any suggestions for improvements, please email rich.recipes.lobster@gmail.com.\n\nBest,\nRichie the Lobster`
                }
        
                //step 3
                await transporter.sendMail(mailOPtions, function(err, data) {
                    if (err) {
                        console.log('Error occurred', err)
                    } else {
                        console.log('sent successfully')
                    }
                })

        res.status(200).send(newUser)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [existingUser] = await db.users.get_user([email])

        if (!existingUser) {
            return res.status(404).send('No account associated with email.')
        }

        const isAuthenticated = bcrypt.compareSync(password, existingUser.hash)

        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password')
        }

        delete existingUser.hash

        req.session.user = {
            email: existingUser.email,
            password: existingUser.hash,
            id: existingUser.id
        } 
        res.status(200).send(existingUser)
    },
    logout: (req, res) => {
        const db = req.app.get('db')
        req.session.destroy()
        res.status(200).send('ok')
    },
    getUser: (req, res) => {
        const db = req.app.get('db')
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('No session found.')
        }
    }

})