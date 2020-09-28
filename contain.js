function contain(sprite, container) {

    let collision = undefined;

    //Left
    if (sprite.x < container.x) {
        sprite.x = container.x;
        collision = "left";
    }

    //Top
    if (sprite.y < container.y) {
        sprite.y = container.y;
        collision = "top";
    }

    //Right
    if (sprite.x > container.width + container.x - sprite.width) {
        sprite.x = container.width + container.x - sprite.width;
        collision = "right";
    }

    //Bottom
    if (sprite.y + sprite.height > container.height + container.y) {
        sprite.y = container.height + container.y - sprite.height;
        collision = "bottom";
    }

    //Return the `collision` value
    return collision;
}

export default contain