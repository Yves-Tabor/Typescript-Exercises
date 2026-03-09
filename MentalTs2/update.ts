// Assume we have this type:
type Profile = { 
    id: number;
    name: string;
    email: string;
    age: number;
};

const obj: Profile = {
    id: 123,
    name: "Yves",
    email: "walvesth72@gmail.com",
    age: 22
}

function updateProfile(currentProfile: Profile, updates: Partial<Profile>) {
  return { ...currentProfile, ...updates };
} 

console.log(updateProfile(obj, {
   name: "Walves",
   email: "walvesoutis@gmail.com",
}));
