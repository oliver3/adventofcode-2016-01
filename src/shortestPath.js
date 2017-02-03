import { NORTH, ORIGIN, turnLeft, turnRight, forward } from './taxicab';

export default function shortestPath(instructions) {
    let direction = NORTH;
    let location = ORIGIN;

    instructions
        .split(', ')
        .map((instruction) => ({
            turn: instruction[0] === 'L' ? turnLeft : turnRight,
            blocks: parseInt(instruction.slice(1))
        }))
        .forEach((instruction) => {
            direction = instruction.turn(direction);
            location = forward(location, direction, instruction.blocks);
        });

    return Math.abs(location.x) + Math.abs(location.y);

}

