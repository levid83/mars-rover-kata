import Obstacles from "../rover/Obstacles";
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

  it("it should return the position of the rover in case an obstacle is met in x direction moving forward", () => {
    const obstacles = new Obstacles([[1, 0]]);

    const rover = new Rover(0, 0, Direction.EAST, obstacles);
    const controller = new RoverController(rover);

    expect(controller.execute("F")).toBe("(0, 0) EAST STOPPED");
  });

  it("it should return the position of the rover in case an obstacle is met in y direction moving forward", () => {
    const obstacles = new Obstacles([[0, 1]]);

    const rover = new Rover(0, 0, Direction.NORTH, obstacles);
    const controller = new RoverController(rover);

    expect(controller.execute("F")).toBe("(0, 0) NORTH STOPPED");
  });

  it("it should return the position of the rover in case an obstacle is met in y direction moving backwards", () => {
    const obstacles = new Obstacles([[0, 0]]);

    const rover = new Rover(0, 1, Direction.NORTH, obstacles);
    const controller = new RoverController(rover);

    expect(controller.execute("B")).toBe("(0, 1) NORTH STOPPED");
  });

  it("it should return the position of the rover in case an obstacle is met in x direction moving backwards", () => {
    const obstacles = new Obstacles([[0, 0]]);

    const rover = new Rover(1, 0, Direction.EAST, obstacles);
    const controller = new RoverController(rover);

    expect(controller.execute("B")).toBe("(1, 0) EAST STOPPED");
  });

  it("it should return the position of the rover in case an obstacle is met in x direction moving backwards", () => {
    const obstacles = new Obstacles([[1, 0]]);

    const rover = new Rover(2, 0, Direction.EAST, obstacles);
    const controller = new RoverController(rover);

    expect(controller.execute("BLB")).toBe("(2, 0) EAST STOPPED");
  });

  it("it should return the position of the rover in case an obstacle is met in x direction moving backwards", () => {
    const obstacles = new Obstacles([[1, 0]]);

    const rover = new Rover(3, 0, Direction.EAST, obstacles);
    const controller = new RoverController(rover);

    expect(controller.execute("BBLB")).toBe("(2, 0) EAST STOPPED");
  });
});
