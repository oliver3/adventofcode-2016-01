/*
 North
 ^ (0,1)
 |
 |
 |       (1,0)
 +-------->  East
 (0,0)

 https://en.wikipedia.org/wiki/Taxicab_geometry

 */

export const NORTH = new Direction(0, 1);

export function Direction(dx, dy) {
    this.dx = dx;
    this.dy = dy;
}

export const ORIGIN = new Location(0, 0);

export function Location(x, y) {
    this.x = x;
    this.y = y;
}

export function turnLeft(direction) {
    return new Direction(-direction.dy, direction.dx);
}

export function turnRight(direction) {
    return new Direction(direction.dy, -direction.dx);
}

export function forward(location, direction, blocks) {
    return new Location(
        location.x + direction.dx * blocks,
        location.y + direction.dy * blocks
    );
}

