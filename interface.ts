interface User{
    id: number,
    username: string,
    email: string,
    bio?: string,
    isAdmin: boolean
}

function displayUser(user: User): string{
    if(!Object.keys(user).includes("bio")){
        return "No Bio available";
    }
    return "User " + user.username + " has bio\n"+ user.bio;
}

let obj: User = {
    id: 123,
    username: "Walves123",
    email: "walves@gmail.com",
    bio: "Networker and Software Developer",
    isAdmin: true
}
console.log(displayUser(obj));