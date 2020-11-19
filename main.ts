namespace SpriteKind {
    export const Present = SpriteKind.create()
}
function PrsesentFall () {
    mySprite4.vy = 50
    mySprite4.vx = -40
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (activePresents < 3) {
        mySprite4 = sprites.create([img`
            . . . . . . . . . . . 
            . . f f . . . f f . . 
            . f 7 7 f f f 7 7 f . 
            . f 7 7 f 7 f 7 7 f . 
            f f f f f f f f f f f 
            f 2 2 2 f 7 f 2 2 2 f 
            f 2 2 2 f 7 f 2 2 2 f 
            f 2 2 2 f 7 f 2 2 2 f 
            f 2 2 2 f 7 f 2 2 2 f 
            f f f f f f f f f f f 
            `, img`
            . . . . . . . . . . . 
            . . f f . . . f f . . 
            . f 2 2 f f f 2 2 f . 
            . f 2 2 f 2 f 2 2 f . 
            f f f f f f f f f f f 
            f 4 4 4 f 2 f 4 4 4 f 
            f 4 4 4 f 2 f 4 4 4 f 
            f 4 4 4 f 2 f 4 4 4 f 
            f 4 4 4 f 2 f 4 4 4 f 
            f f f f f f f f f f f 
            `, img`
            . . . . . . . . . . . 
            . . f f . . . f f . . 
            . f 4 4 f f f 4 4 f . 
            . f 4 4 f 4 f 4 4 f . 
            f f f f f f f f f f f 
            f 7 7 7 f 4 f 7 7 7 f 
            f 7 7 7 f 4 f 7 7 7 f 
            f 7 7 7 f 4 f 7 7 7 f 
            f 7 7 7 f 4 f 7 7 7 f 
            f f f f f f f f f f f 
            `, img`
            . . . . . . . . . . . 
            . . f f . . . f f . . 
            . f 7 7 f f f 7 7 f . 
            . f 7 7 f 7 f 7 7 f . 
            f f f f f f f f f f f 
            f 8 8 8 f 7 f 8 8 8 f 
            f 8 8 8 f 7 f 8 8 8 f 
            f 8 8 8 f 7 f 8 8 8 f 
            f 8 8 8 f 7 f 8 8 8 f 
            f f f f f f f f f f f 
            `, img`
            . . . . . . . . . . . 
            . . f f . . . f f . . 
            . f 2 2 f f f 2 2 f . 
            . f 2 2 f 2 f 2 2 f . 
            f f f f f f f f f f f 
            f 5 6 5 f 2 f 6 5 6 f 
            f 6 5 6 f 2 f 5 6 5 f 
            f 5 6 5 f 2 f 6 5 6 f 
            f 6 5 6 f 2 f 5 6 5 f 
            f f f f f f f f f f f 
            `][randint(0, 4)], SpriteKind.Present)
        mySprite4.setPosition(mySprite.x - 30, mySprite.y + 5)
        PrsesentFall()
    }
    pause(500)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
	
})
scene.onHitWall(SpriteKind.Present, function (sprite, location) {
    sprite.destroy()
    activePresents += -1
})
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let activePresents = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    .................................d...............d...............d..............
    ................................dd...d..........dd...d..........dd...d..........
    .................................dd.ddd..........dd.ddd..........dd.ddd.........
    ........11........................d.d.............d.d.............d.d...........
    ........1122......................eee.............eee.............eee...........
    ...........22....................eeeeef..........eeeeef..........eeeee2.........
    ...........222....................eeee............eeee............eeee..........
    ..........22222...........e......7ee......e......7ee......e......6ee............
    .222......dfddf........fffeeffff7772efffffeeffff7772efffffeeffff6662e...........
    ..222......111.......ff....eeeeee2777......eeeeee2777......eeeeee2666...........
    ...222....f111f.fffff.....eeeeeeeee727....eeeeeeeee727....eeeeeeeee626..........
    ...2222..f44144f2222......eeeeeeeeee7.....eeeeeeeeee7.....eeeeeeeeee6...........
    ...2222..f44444f22..2.....eeeeeeeeee......eeeeeeeeee......eeeeeeeeee............
    ...22222.f44442222.2.......eee...eee.......eee...eee.......eee...eee............
    ...222222222222222.........ee.....ee.......ee.....ee.......ee.....ee............
    ...222222222222222.........ee.....ee.......ee.....ee.......ee.....ee............
    ....22222222222222.e......ee.......ee.....ee.......ee.....ee.......ee...........
    .....222222222222.e.......ee.......ee.....ee.......ee.....ee.......ee...........
    .....e........e...e.......fe.......fe.....fe.......fe.....fe.......fe...........
    ..eeeeeeeeeeeeeeee........ff.......ff.....ff.......ff.....ff.......ff...........
    `, SpriteKind.Player)
mySprite.setPosition(80, 35)
scene.setBackgroundColor(8)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ............................f...................................................................................................................................
    ...........................ff......f............................................................................................................................
    ...........................fff.....f............f...............................................................................................................
    ..........................fffff....ff..........fff..............................................................................................................
    .........................fffffff...ff..........fff..............................................................................................................
    .........................f.ffff...fff.........fffff.............................................................................................................
    ..........................fffff...ffff........ffffff............................................................................................................
    .........................fffffff...ff..........ffff.............................................................................................................
    ..........................ffff.ff..fff.......ffffff.............................................................................................................
    .........................ffffff...fff.........ffffff............................................................................................................
    ........................ff.fffff..ffff.......fffff.ff...........................................................................................................
    ..........................ffffffffffff......fffffff.............................................................................................................
    .........................fffffffffffffffffff..ffffff............................................................................................................
    .............f..........fffffffffffffffffffff..ffffff........................................................................................f..................
    ............fff...........fffffffffffffffffffffff......................................................................................f....ff..................
    ............ff..........ffffffffffffffffffffffffff..................................f..................................................ff...ff..................
    ...........fff.........ffffffffffffffffffffffffffff.................................ff.................................................ff..fff..................
    ..........fffff......fffffffffffffffffffffffffffffff................................ff............................................f...ffff.fffff................
    ...........fff.....ffffffffffffffffffffffffffffffffff..............................ffff..........................................fff..ffff..ff..................
    ............fff...ffffffffffffffffffffffffffffffffffff.............................ffff....f.....................................fff...ff..ffffff...............
    ..........ffff..fffffffffffffffffffffffffffffffffffffff.....................ff......ff.....f....................................ffff.fffffffff.........f........
    ...........fffffffffffffffffffffffffffffffffffffffffffff...................fff....ffffff...ff.....................................fff.ffff...ff........f........
    ............fffffffffffffffffffffffffffffffffffffffffffff.................ffff.....ffff....ff....................................fff..fffff..f........ffff......
    ............ffffffffffffffffffffffffffffffffffffffffffffff..................fff....fffff..fff.............f....................fffffffffffff.f.........f........
    ...........fffffffffffffffffffffffffffffffffffffffffffffff................ffffff.ffffffff.ffff...........ff.....................fffffffffffffffff....ffff.......
    ..........fffffffffffffffffffffffffffffffffffffffffffffffff..............ffffff.ffffffffff.ff............fff.............f.....fffff..fffffffffffff...fff.......
    ........ffffffffffffffffffffffffffffffffffffffffffffffffffff...............ffffff..ffff....fff..........fffff............f....ffffffffffffffffffffff..fffff.....
    .......ffffffffffffffffffffffffffffffffffffffffffffffffffffff.............ffffff..ffffff..fff..........fffffff...........ff.....ffffffffffffffffffffffffff......
    ......ffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........fffffffffffffffffffffff.......f.ffff............ff....ffffffffffffffffffffffffff.......
    .....ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............fffffffffffffffffffffff.....fffff...........fff....ffffffffffffffffffffffffff.......
    ...fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........ffffffffffffffffffffffffff..fffffff...........f....ffffffffffffffffffffffffffff......
    ..fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........ffffffffffffffffffffffffffffff.ffff.f..........ffff..ffffffffffffffffffffffffffffff....
    .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....fffffffffffffffffffffffffffffffffffff............ff..fffffffffffffffffffffffffffffffff..
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...fffffffffffffffffffffffffffffffffffffff.........fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..........ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..........fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mySprite.setFlag(SpriteFlag.ShowPhysics, false)
activePresents = 0
game.onUpdateInterval(1700, function () {
    mySprite3 = sprites.create([img`
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444
        `, img`
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777
        `, img`
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222
        `, img`
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888
        `, img`
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666
        `][randint(0, 4)], SpriteKind.Projectile)
    mySprite3.setPosition(180, 100)
    mySprite3.vx = -50
})
