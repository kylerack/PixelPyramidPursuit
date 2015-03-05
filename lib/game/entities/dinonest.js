ig.module(
    'game.entities.dinonest'
)
    .requires(
    'impact.entity'
)
    .defines(function(){

        EntityDinonest = ig.Entity.extend({
            animSheet: new ig.AnimationSheet( 'media/dinonest.png', 16, 16 ),
            size: {x: 8, y:14},
            offset: {x: 4, y: 2},
            maxVel: {x: 100, y: 100},
            flip: false,
            friction: {x: 150, y: 0},
            speed: 0,
            type: ig.Entity.TYPE.B,
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.PASSIVE,
            init: function( x, y, settings ) {
                this.parent( x, y, settings );
                this.addAnim('walk', .07, [0,1,2,3,4]);
            },
            update: function() {
                // near an edge? return!
                ledge = Math.floor(Math.random() * 10) + 1;

                if (ledge > 5) {
                    if (!ig.game.collisionMap.getTile(
                            this.pos.x + (this.flip ? +4 : this.size.x - 4),
                            this.pos.y + this.size.y + 1
                        )
                    ) {
                        this.flip = !this.flip;
                    }
                }
                else{}

                var xdir = this.flip ? -1 : 1;
                this.vel.x = this.speed * xdir;
                this.currentAnim.flip.x = this.flip;
                this.parent();
            },
            handleMovementTrace: function( res ) {
                this.parent( res );
                // collision with a wall? return!
                if( res.collision.x ) {
                    this.flip = !this.flip;
                }
            },
            check: function( other ) {
                other.receiveDamage( 10, this );
                //this.kill();
            },
            receiveDamage: function(value){
                this.parent(value);
                if(this.health > 0)
                    ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y, {particles: 2, colorOffset: 1});
            },
            kill: function(){
                ig.game.stats.kills ++;
                this.parent();
                ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y, {colorOffset: 1});
            }
        });
    });
