import { Position } from "./Types";

export default class Obstacles {
  private obstacles;
  constructor(obst: [number, number][] = []) {
    this.obstacles = new Set<string>([...obst.map((o) => o[0] + "#" + o[1])]);
  }

  getObstacles(): Set<string> {
    return this.obstacles;
  }
  checkObstacle(pos: Position) {
    return this.obstacles.has(pos.x + "#" + pos.y);
  }
}
