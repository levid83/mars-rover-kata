import {
  RotateLeft,
  RotateRight,
  MoveForWard,
  MoveBackwards,
} from "../rover/Commands";
import Rover, { Direction } from "../rover/Rover";

jest.mock("../rover/Rover");
const MockRover = Rover as jest.Mocked<typeof Rover>;

describe("test Rover Commands", () => {
  it("executes the RotateLeft command", () => {
    const rover = new MockRover(0, 0, Direction.NORTH);
    const command = new RotateLeft(rover);
    command.execute();
    expect(rover.rotateLeft).toHaveBeenCalled();
  });

  it("executes the RotateRight command", () => {
    const rover = new MockRover(0, 0, Direction.NORTH);
    const command = new RotateRight(rover);
    command.execute();
    expect(rover.rotateRight).toHaveBeenCalled();
  });

  it("executes the MoveForWard command", () => {
    const rover = new MockRover(0, 0, Direction.NORTH);
    const command = new MoveForWard(rover);
    command.execute();
    expect(rover.moveForward).toHaveBeenCalled();
  });

  it("executes the MoveBackwards command", () => {
    const rover = new MockRover(0, 0, Direction.NORTH);
    const command = new MoveBackwards(rover);
    command.execute();
    expect(rover.moveBackwards).toHaveBeenCalled();
  });
});
