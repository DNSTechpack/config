var vanilla_blocks = ["portal", "end_portal", "water", "lava", "mob_spawner", "spawn_egg", "bedrock", "dragon_egg", "farmland", "end_portal_frame", "monster_egg", "command_block", "command_block_minecart", "leaves", "leaves2", "tallgrass", "deadbush"];
if (vanilla_enabled) {
    for each(block in vanilla_blocks){
        // Vanilla items and blocks have special handlers.
        NEI.hide("minecraft", block);
    }
	
	NEI.override("minecraft:double_plant", [0,1,4,5]);
	NEI.override("minecraft:anvil", [0]);

}