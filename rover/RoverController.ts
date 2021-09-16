import Rover, { Direction } from "./Rover";
import {
  RotateLeft,
  RotateRight,
  MoveForWard,
  MoveBackwards,
} from "./Commands";
import { Position } from "./Types";

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

  private formatResponse(
    pos: Position,
    dir: Direction,
    isBlocked: boolean
  ): string {
    return `(${pos.x}, ${pos.y}) ${dir}${isBlocked ? " STOPPED" : ""}`;
  }

  public execute(command: string): string {
    for (let i = 0; i < command.length; i++) {
      this.commandFactory(command[i]).execute();
      if (this.rover.getIsBlocked()) break;
    }
    return this.formatResponse(
      this.rover.getPosition(),
      this.rover.getDirection(),
      this.rover.getIsBlocked()
    );
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
