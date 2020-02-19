class Objective {
    status: string;
    text: string;

    constructor (text: string) {
        this.text = text;
        this.status = "open";
    }

    completeTask(){
        this.status = "complete";
    }
}

export default Objective;