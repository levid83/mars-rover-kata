import Obstacles from "../rover/Obstacles";

describe("Test obstacles", () => {
  it("should return a empty set in case of empty obstacles input", () => {
    const obstacles = new Obstacles([]);
    expect(obstacles.getObstacles()).toStrictEqual(new Set<string>());
  });
  it("should return a non-empty set with obstacles passed as an array", () => {
    const obstacles = new Obstacles([
      [1, 2],
      [2, 3],
    ]);
    const obst = obstacles.getObstacles();
    expect(obst.has("1#2")).toBeTruthy();
    expect(obst.has("2#3")).toBeTruthy();
    expect(obst.size).toBe(2);
  });

  it("should return true if a given position has obstacle", () => {
    const obstacles = new Obstacles([
      [1, 2],
      [2, 3],
    ]);
    expect(obstacles.checkObstacle({ x: 1, y: 2 })).toBeTruthy();
  });
  it("should return false if a given position has no obstacles", () => {
    const obstacles = new Obstacles([
      [1, 2],
      [2, 3],
    ]);
    expect(obstacles.checkObstacle({ x: 1, y: 5 })).toBeFalsy();
    expect(obstacles.checkObstacle({ x: 5, y: 2 })).toBeFalsy();
  });
});
