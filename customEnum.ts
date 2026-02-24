// Checking Http Status Codes
enum Response{
    ok = "200",
    NotFound = 404,
    ServerError = 500
}
    function checkState(status: Response): void{
        if(status === Response.ok){
            console.log("The request is successful !!");
        }
        if(status === Response.ServerError){
            console.log("Internal Server Error !!");
        }
        if(status === Response.NotFound){
            console.log("Not Found !!");
        }
    }
    
checkState(Response.ok);

// enum UserRole {
//   ADMIN = "admin",
//   EDITOR = "editor",
//   VIEWER = "viewer"
// }

// function checkAccess(role: UserRole): string {
//   if (role === UserRole.ADMIN) return "Full access";
//   if (role === UserRole.EDITOR) return "Edit access";
//   return "Read only";
// }

// console.log(checkAccess(UserRole.EDITOR));