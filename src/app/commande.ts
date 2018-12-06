export class Commande {
    constructor(
        public name: string,
        public resume: string,
        public price: string,
        public image: string
    )
    {
        this.name = name;
        this.resume = resume;
        this.price = price;
        this.image = image;
    };
}


// Classe pour les commande local storage,