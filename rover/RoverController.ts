import Rover from "./Rover";
import {
  RotateLeft,
  RotateRight,
  MoveForWard,
  MoveBackwards,
} from "./Commands";

enum Rotation {
  LEFT = "L",
  RIGHT = "R",
}

enum Move {
  FORWARD = "F",
  BACKWARDS = "B",
}

/** Based on the command string executes standalone commands on the Rover */

export class RoverController {
  constructor(private rover: Rover) {}

  public execute(command: string): string {
    for (let i = 0; i < command.length; i++) {
      this.commandFactory(command[i]).execute();
    }
    return `(${this.rover.getPosition().x}, ${
      this.rover.getPosition().y
    }) ${this.rover.getDirection()}`;
  }
  private commandFactory(code: string) {
    switch (code) {
      case Rotation.LEFT:
        return new RotateLeft(this.rover);
      case Rotation.RIGHT:
        return new RotateRight(this.rover);
      case Move.FORWARD:
        return new MoveForWard(this.rover);
      case Move.BACKWARDS:
        return new MoveBackwards(this.rover);
      default:
        throw { message: "unknown command" };
    }
  }
}
