import Rover from "./Rover";

/** List of commands which can be executed on a rover */

export interface RoverCommand {
  execute(): void;
}

export class RotateLeft implements RoverCommand {
  constructor(private rover: Rover) {}
  execute() {
    this.rover.rotateLeft();
  }
}

export class RotateRight implements RoverCommand {
  constructor(private rover: Rover) {}
  execute() {
    this.rover.rotateRight();
  }
}

export class MoveForWard implements RoverCommand {
  constructor(private rover: Rover) {}
  execute() {
    this.rover.moveForward();
  }
}

export class MoveBackwards implements RoverCommand {
  constructor(private rover: Rover) {}
  execute() {
    this.rover.moveBackwards();
  }
}
