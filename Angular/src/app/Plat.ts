// Adaptation vers la classe/json pannier ionic en cours
// l'ordre n'est pas définitif
export class Plat {
    constructor(
        public id : number,
        public jour : string,
        public name: string, 
        public price: string,
        public decripstion: string,
        public image: string,

        
    )
    {
        this.id = id ;
        this.jour = jour;
        this.name = name;
        this.price = price;
        this.decripstion = decripstion ;
        this.image = image;
        
    };
}
