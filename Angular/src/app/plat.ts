// Adaptation vers la classe/json pannier ionic en cours
// l'ordre n'est pas définitif
export class plat {
    constructor(
        public name: string, 
        public price: string,
        public resume: string,
        public image: string,
        
    )
    {
        this.name = name;
        this.price = price;
        this.resume = resume ;
        this.image = image;
    };
}
