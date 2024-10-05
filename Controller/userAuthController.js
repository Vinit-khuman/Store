const Users = require("../modals/users");

exports.renderSignUp = (req, res) => {
    res.render('sign-up');
};

exports.registerUser = (req, res) => {
    const { userName, password, confirmPassword } = req.body;

    // Server-side validation for matching passwords
    if (password !== confirmPassword) {
        return res.status(400).render('sign-up', {
            errorMessage: 'Passwords do not match',
        });
    }

    // Creating a new user instance
    const user = new Users(null, userName, password);

    // Insert user into the database
    user.insertUser()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.error('Error while inserting user:', err);

            // Handle database errors, such as duplicate users
            return res.status(500).render('sign-up', {
                errorMessage: 'Failed to register. Please try again.',
            });
        });
};

exports.renderLogin = (req,res)=>{
    res.render("login")
}

exports.validateLogin = (req, res) => {
    const { userName, password } = req.body;

    // Check if userName and password are provided
    if (!userName || !password) {
        return res.status(400).render('login', {
            errorMessage: 'Username and password are required',
        });
    }

    Users.fetchUserByUserName(userName)
    .then(([[userCredentials],tInfo ])=>{
        if(userCredentials){
            if(userCredentials.password===password){
                res.cookie("isLoggedIn","true")
                res.redirect('/')
            }else{
                res.cookie("isLoggedIn","invalidPaassword")
                res.redirect('/login');
            }
        }else{
            res.cookie("isLoggedIn","invalidUsername")
            res.redirect('/login')
        }
    })
}