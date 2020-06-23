const functions = {
    add: (num1, num2) => num1 + num2,
    // add: function(num1, num2) {
    //     return num1 + num2;
    // }
    isNull: () => null,
    checkValue: (value) => value,
    createUser: () =>{
        const user = {
            firstName: 'Amka'
        };
        user['lastName'] = 'Kimkura';

        return user;
    },

}

module.exports = functions;