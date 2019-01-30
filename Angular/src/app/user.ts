export class User {
    constructor(
        public email: string, 
        public firstname: string,
        public lastname: string,
        public mdp: string,
        
    )
    {
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname ;
        this.mdp = mdp;
    };
}
