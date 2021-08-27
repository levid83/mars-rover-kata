import Rover, { Direction } from "../rover/Rover";

describe("test Rover", () => {
  it("should store the initial position", () => {
    const rover = new Rover(1, 2, Direction.NORTH);
    expect(rover.getPosition()).toStrictEqual({ x: 1, y: 2 });
  });
  it("should store the initial direction", () => {
    const rover = new Rover(1, 2, Direction.NORTH);
    expect(rover.getDirection()).toBe(Direction.NORTH);
  });

  it("can rotate left", () => {
    const rover = new Rover(0, 0, Direction.NORTH);

    rover.rotateLeft();
    expect(rover.getDirection()).toBe(Direction.WEST);

    rover.rotateLeft();
    expect(rover.getDirection()).toBe(Direction.SOUTH);

    rover.rotateLeft();
    expect(rover.getDirection()).toBe(Direction.EAST);

    rover.rotateLeft();
    expect(rover.getDirection()).toBe(Direction.NORTH);
  });

  it("can rotate right", () => {
    const rover = new Rover(0, 0, Direction.NORTH);

    rover.rotateRight();
    expect(rover.getDirection()).toBe(Direction.EAST);

    rover.rotateRight();
    expect(rover.getDirection()).toBe(Direction.SOUTH);

    rover.rotateRight();
    expect(rover.getDirection()).toBe(Direction.WEST);

    rover.rotateRight();
    expect(rover.getDirection()).toBe(Direction.NORTH);
  });

  it("can move forward towards NORTH by maintaining the current direction", () => {
    const rover = new Rover(0, 0, Direction.NORTH);

    rover.moveForward();
    expect(rover.getDirection()).toBe(Direction.NORTH);
    expect(rover.getPosition()).toStrictEqual({ x: 0, y: 1 });
  });

  it("can move forward towards WEST by maintaining the current direction", () => {
    const rover = new Rover(0, 0, Direction.WEST);

    rover.moveForward();
    expect(rover.getDirection()).toBe(Direction.WEST);
    expect(rover.getPosition()).toStrictEqual({ x: -1, y: 0 });
  });

  it("can move forward towards SOUTH by maintaining the current direction", () => {
    const rover = new Rover(0, 0, Direction.SOUTH);

    rover.moveForward();
    expect(rover.getDirection()).toBe(Direction.SOUTH);
    expect(rover.getPosition()).toStrictEqual({ x: 0, y: -1 });
  });

  it("can move forward towards EAST by maintaining the current direction", () => {
    const rover = new Rover(0, 0, Direction.EAST);

    rover.moveForward();
    expect(rover.getDirection()).toBe(Direction.EAST);
    expect(rover.getPosition()).toStrictEqual({ x: 1, y: 0 });
  });

  it("can move backwards from NORTH by maintaining the current direction", () => {
    const rover = new Rover(0, 0, Direction.NORTH);

    rover.moveBackwards();
    expect(rover.getDirection()).toBe(Direction.NORTH);
    expect(rover.getPosition()).toStrictEqual({ x: 0, y: -1 });
  });

  it("can move backwards from WEST by maintaining the current direction", () => {
    const rover = new Rover(0, 0, Direction.WEST);

    rover.moveBackwards();
    expect(rover.getDirection()).toBe(Direction.WEST);
    expect(rover.getPosition()).toStrictEqual({ x: 1, y: 0 });
  });

  it("can move backwards from SOUTH by maintaining the current direction", () => {
    const rover = new Rover(0, 0, Direction.SOUTH);

    rover.moveBackwards();
    expect(rover.getDirection()).toBe(Direction.SOUTH);
    expect(rover.getPosition()).toStrictEqual({ x: 0, y: 1 });
  });

  it("can move backwards from EAST by maintaining the current direction", () => {
    const rover = new Rover(0, 0, Direction.EAST);

    rover.moveBackwards();
    expect(rover.getDirection()).toBe(Direction.EAST);
    expect(rover.getPosition()).toStrictEqual({ x: -1, y: 0 });
  });
});
