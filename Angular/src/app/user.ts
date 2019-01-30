// Adaptation vers la classe/json user ionic en cours
export class User {
    constructor(
        public lastname: string,
        public firstname: string,
        public email: string, 
        public phone: string,        
        public pswd: string,        // Transition en cours
        public money: number,       // Transition en cours
        public histo: Object,   // Façon de le géré non déterminé
    )
    {
        this.lastname = lastname ;
        this.firstname = firstname; 
        this.email = email;
        this.phone = phone;
        this.pswd = pswd;
        this.money = money;
    };
}
