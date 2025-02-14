controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        2 2 5 
        `, sd, 400000, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (true) {
        sprites.destroy(sd, effects.fire, 500)
        sprites.destroy(mySprite, effects.fire, 500)
        info.changeLifeBy(-1)
        game.splash("if player 1 dead", "change then chosseeblue and revind")
    } else {
    	
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        2 2 5 
        `, mySprite, 400000, 0)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let sd: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    e e . . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e e . . . . . . . . . . . . 
    e e e f . . . . . . . . . . . . 
    e e e f e . . . . . . . . . . . 
    e e 2 f e c . . . . . . . . . . 
    2 2 2 c 4 c e e . . . . . . . . 
    2 2 4 c 4 c 4 e e f c f c c c c 
    4 4 4 2 4 2 5 5 4 f 4 f b d d d 
    4 4 4 2 5 2 2 2 . . . . . . . . 
    4 4 4 f 2 2 . . . . . . . . . . 
    4 5 5 f 2 . . . . . . . . . . . 
    5 4 4 2 . . . . . . . . . . . . 
    4 4 2 2 . . . . . . . . . . . . 
    2 2 2 . . . . . 1 . . . . . . . 
    2 2 . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setLife(1)
sd = sprites.create(img`
    e e . . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e e . . . . . . . . . . . . 
    e e e f . . . . . . . . . . . . 
    e e e f e . . . . . . . . . . . 
    e e 2 f e c . . . . . . . . . . 
    2 2 2 c 4 c e e 3 3 3 . . . . . 
    2 2 4 c 4 c 4 e 3 3 3 f c c c c 
    4 4 4 2 4 2 5 5 3 3 3 f b d d d 
    4 4 4 2 5 2 2 2 . . . . . . . . 
    4 4 4 f 2 2 . . . . . . . . . . 
    4 5 5 f 2 . . . . . . . . . . . 
    5 4 4 2 . . . . . . . . . . . . 
    4 4 2 2 . . . . . . . . . . . . 
    2 2 2 . . . . . 1 . . . . . . . 
    2 2 . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setLife(1)
controller.player1.moveSprite(mySprite, 100, 100)
controller.player2.moveSprite(sd, 100, 100)
mySprite.setPosition(4, 22)
sd.setPosition(6, 45)
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . e e 
        . . . . . . . . . . . . . e e e 
        . . . . . . . . . . . . e e e e 
        . . . . . . . . . . . . f e e e 
        . . . . . . . . . . . . f e e e 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . f 4 4 4 
        . . . . . . . . . . . . 2 2 2 2 
        . . . . . . . . . . . . 2 2 2 2 
        . . . . . . . . . . . . 2 2 2 2 
        . . . . . . . . . . . . 2 2 2 2 
        . . . . . . . . . . . . 2 2 2 2 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(180, randint(0, 190))
    mySprite2.setVelocity(-50, 0)
})
