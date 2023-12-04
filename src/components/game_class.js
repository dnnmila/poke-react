export default class game_obj {
    constructor() {
        this.CurrentTurn = 0;
        this.Trainers= [];
        this.Turn = 0;
        this.Round = 0;
          
    }

    addTrainer(trainer_obj) {
            this.Trainers.push(trainer_obj);
    
    }



}