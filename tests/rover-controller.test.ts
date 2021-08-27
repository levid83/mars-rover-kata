import Rover, { Direction } from "../rover/Rover";
import { RoverController } from "../rover/RoverController";

describe("test Rover Controller", () => {
  it("does nothing on empty command", () => {
    const rover = new Rover(0, 0, Direction.NORTH);
    const controller = new RoverController(rover);

    controller.execute("");

    expect(rover.getDirection()).toEqual(Direction.NORTH);
    expect(rover.getPosition()).toStrictEqual({ x: 0, y: 0 });
  });

  it("throws an error on invalid command", () => {
    const rover = new Rover(0, 0, Direction.NORTH);
    const controller = new RoverController(rover);

    expect(() => controller.execute("X")).toThrow("unknown command");
  });

  it("can execute all command types", () => {
    const rover = new Rover(0, 0, Direction.NORTH);
    const controller = new RoverController(rover);

    controller.execute("F");
    expect(rover.getDirection()).toEqual(Direction.NORTH);
    expect(rover.getPosition()).toStrictEqual({ x: 0, y: 1 });

    controller.execute("L");
    expect(rover.getDirection()).toEqual(Direction.WEST);
    expect(rover.getPosition()).toStrictEqual({ x: 0, y: 1 });

    controller.execute("R");
    expect(rover.getDirection()).toEqual(Direction.NORTH);
    expect(rover.getPosition()).toStrictEqual({ x: 0, y: 1 });

    controller.execute("B");
    expect(rover.getDirection()).toEqual(Direction.NORTH);
    expect(rover.getPosition()).toStrictEqual({ x: 0, y: 0 });
  });

  it("it can execute a set of commands", () => {
    const rover = new Rover(0, 0, Direction.NORTH);
    const controller = new RoverController(rover);

    controller.execute("BLLLFLFR");

    expect(rover.getDirection()).toEqual(Direction.EAST);
    expect(rover.getPosition()).toStrictEqual({ x: 1, y: 0 });
  });

  it("it can return the position and direction of the rover", () => {
    const rover = new Rover(0, 0, Direction.NORTH);
    const controller = new RoverController(rover);

    expect(controller.execute("BLLLFLFR")).toBe("(1, 0) EAST");
  });
});
