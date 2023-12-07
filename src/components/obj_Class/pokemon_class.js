export default class pokemon_obj {
    constructor(id, name, level, type1,type2, pokedex) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.type1 = type1;
        this.type2 = type2;
        this.pokedex = pokedex;
        this.extra=0;
        this.total = level;
    }

    increaseLevel = () => {
        this.extra += 1;
        this.total = this.extra + this.level;

        if(this.extra > 6){
            this.extra =0;
            this.total = this.extra + this.level;
        }
    }


}