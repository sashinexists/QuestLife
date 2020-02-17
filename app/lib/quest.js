class Quest {

    constructor(name, objectives, notes, deadline) {
      this.name = name;
      this.objectives = objectives;
      this.notes = notes;
      this.deadline = deadline;
    }
  
    setName(name) {
        this.name = name;
    }

    addObjective(objective) {
        this.objectives.push(objective);
    }

    removeObjective(objective) {

    }

    updateNotes(notes) {
        this.notes = notes;
    }


    setDeadline(deadline) {
        this.deadline = deadline;
    }

}