const CANVAS_SIZE = [500, 500];
const SNAKE_START = [
                      [10, 9],
                      [10, 10]
                    ];

const APPLE_START = [3, 3];
const SCALE = 25;
const SPEED = 100;
const DIRECTIONS = {
                      37: [-1, 0], // left
                      38: [0, -1], // up
                      39: [1, 0], // right
                      40: [0, 1] // down
                    };

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};