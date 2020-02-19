import Objective from "./Objective";

class Quest {
  name: string;
  objectives: Objective[];
  notes: string;
  startDate: Date;
  deadline: Date;
  status: string;

  constructor({
    name,
    objectives,
    notes
  }: //deadline
  {
    name: string;
    objectives: Objective[];
    notes: string;
    //deadline: Date;
  }) {
    this.name = name;
    this.objectives = objectives;
    this.notes = notes;
    this.startDate = new Date();
    this.deadline = this.startDate;
    this.status = "open";
  }
  setName(name: string) {
    this.name = name;
  }
  addObjective(objective: Objective) {
    this.objectives.push(objective);
  }
  removeObjective(objective: Objective) {
    this.objectives.filter(item => item !== objective);
  }
  updateNotes(notes: string) {
    this.notes = notes;
  }
  setDeadline(deadline: Date) {
    this.deadline = deadline;
  }
}

export default Quest;
