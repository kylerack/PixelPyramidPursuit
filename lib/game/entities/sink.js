/*
 This entity gives damage (through ig.Entity's receiveDamage() method) to
 the entity that is passed as the first argument to the triggeredBy() method.

 I.e. you can connect an EntityTrigger to an EntityHurt to give damage to the
 entity that activated the trigger.


 Keys for Weltmeister:

 damage
 Damage to give to the entity that triggered this entity.
 Default: 10
 */

ig.module(
    'game.entities.sink'
)
    .requires(
    'impact.entity'
)
    .defines(function(){


        EntitySink = ig.Entity.extend({
            _wmDrawBox: true,
            _wmBoxColor: 'rgba(255, 0, 0, 0.7)',

            size: {x: 8, y: 8},

            triggeredBy: function( entity, trigger ) {

                if (entity.pos.y > 253) {
                    entity.gravityFactor = 0;
                }
                else{
                    entity.gravityFactor = 1;
                }

                if( ig.input.state('right') ) {
                    entity.currentAnim = entity.anims.swim;
                    entity.currentAnim.flip.y = false;
                    entity.currentAnim.flip.x = false;
                    entity.pos.x += 2;
                }
                else if (ig.input.state('left')){
                    entity.currentAnim = entity.anims.swim;
                    //entity.currentAnim.flip.y = true;
                    entity.currentAnim.flip.x = true;
                    entity.pos.x -= 2;
                }
                else if ( ig.input.state('up') || ig.input.state('jump') ){
                    entity.pos.y -= 2;
                }
                else if (ig.input.state('down')) {
                    entity.pos.y += 2;
                }
                else{
                        entity.currentAnim = entity.anims.swim;
                        entity.currentAnim.flip.y = false;
                        entity.currentAnim.flip.x = false;
                    }


            },

            update: function(){}
        });

    });