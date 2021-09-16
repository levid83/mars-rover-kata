import Obstacles from "./Obstacles";
import { Position } from "./Types";

/** possible directions of the rover */
export enum Direction {
  NORTH = "NORTH",
  EAST = "EAST",
  SOUTH = "SOUTH",
  WEST = "WEST",
}

/** Represents the rover with it's state and actions */
export default class Rover {
  private position: Position;
  private isBlocked: boolean = false;
  constructor(
    x: number,
    y: number,
    private direction: Direction,
    private obstacles?: Obstacles
  ) {
    this.position = { x, y };
  }

  rotateLeft(): void {
    let direction = this.direction;
    switch (direction) {
      case Direction.NORTH:
        direction = Direction.WEST;
        break;
      case Direction.EAST:
        direction = Direction.NORTH;
        break;
      case Direction.SOUTH:
        direction = Direction.EAST;
        break;
      case Direction.WEST:
        direction = Direction.SOUTH;
        break;
    }
    this.direction = direction;
  }

  rotateRight(): void {
    let direction = this.direction;
    switch (direction) {
      case Direction.NORTH:
        direction = Direction.EAST;
        break;
      case Direction.EAST:
        direction = Direction.SOUTH;
        break;
      case Direction.SOUTH:
        direction = Direction.WEST;
        break;
      case Direction.WEST:
        direction = Direction.NORTH;
        break;
    }
    this.direction = direction;
  }

  moveForward(): void {
    let { x, y } = this.position;

    switch (this.direction) {
      case Direction.NORTH:
        y++;
        break;
      case Direction.EAST:
        x++;
        break;
      case Direction.SOUTH:
        y--;
        break;
      case Direction.WEST:
        x--;
        break;
    }
    if (this.obstacles?.checkObstacle({ x, y })) {
      this.isBlocked = true;
      return;
    }

    this.position = { x, y };
  }

  moveBackwards(): void {
    let { x, y } = this.position;
    switch (this.direction) {
      case Direction.NORTH:
        y--;
        break;
      case Direction.EAST:
        x--;
        break;
      case Direction.SOUTH:
        y++;
        break;
      case Direction.WEST:
        x++;
        break;
    }
    if (this.obstacles?.checkObstacle({ x, y })) {
      this.isBlocked = true;
      return;
    }
    this.position = { x, y };
  }

  getPosition(): Position {
    return this.position;
  }
  getDirection(): Direction {
    return this.direction;
  }
  getIsBlocked(): boolean {
    return this.isBlocked;
  }
}
