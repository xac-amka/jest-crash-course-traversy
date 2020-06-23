const functions = require('./functions');
// toBe
test('Adds 4 + 4 to equal 8', () => {
    expect(functions.add(4, 4)).toBe(8);
});
// not
test('Adds 4 + 4 to NOT equal 9', () => {
    expect(functions.add(4, 4)).not.toBe(9);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});
// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});
// toBeTruthy
test('Should be truthy', () => {
    expect(functions.checkValue(1)).toBeTruthy();
});
// toEqual
test('User should be Amka Kimkura object', () => {
    expect(functions.createUser()).toEqual({ 
        firstName: 'Amka', 
        lastName: 'Kimkura' 
    });
});
// Less than and greater than
test('Should be under 1600', ()=> {
    const load1 = 800;
    const load2 = 800;
    expect(load1+load2).toBeLessThanOrEqual(1600);
});
// Regex toMatch
test('There is no I in team', ()=>{
    expect('team').not.toMatch(/I/);
})
// Arrays toContain
test('Admin should be in usernames', ()=>{
    usernames = ['karen', 'kimkura', 'admin'];
    expect(usernames).toContain('admin');
});