
enum Direction {
  Up,
  Down,
  Left,
  Right
}

function move(dir: Direction): void {
  switch (dir) {
    case Direction.Up:
      console.log("Going Up");
      break;
    case Direction.Down:
      console.log("Going Down");
      break;
    case Direction.Left:
      console.log("Going Left");
      break;
    case Direction.Right:
      console.log("Going Right");
      break;
  }
}

move(Direction.Right);
