if (FML.isModLoaded("TConstruct") && Tcon_enabled) {
	NEI.override("TConstruct:WoolSlab*", [0]);
	NEI.override("TConstruct:ToolForgeBlock", [0]);
	NEI.override("TConstruct:Glass*", [0]);
	NEI.override("TConstruct:slime.gel", [0,1]);
	NEI.override("TConstruct:ToolStationBlock", [0,1,5,10]);
	NEI.override_invert("TConstruct:SearedBrick", [3,4]);
	NEI.override_invert("TConstruct:CraftedSoil", [5]);
	NEI.hide("TConstruct:slime.grass*");
	NEI.hide("TConstruct:slime.sapling");
	NEI.hide("TConstruct:ore.berries.*");
	NEI.hide("TConstruct:liquid.slime");
	NEI.hide("TConstruct:HeldItemBlock");
	NEI.hide("TConstruct:BattleSignBlock");
	NEI.hide("TConstruct:*Pattern");
	NEI.hide("TConstruct:pickaxe*");
	NEI.hide("TConstruct:shovel*");
	NEI.hide("TConstruct:hatchet*");
	NEI.hide("TConstruct:*sword");
	NEI.hide("TConstruct:rapier");
	NEI.hide("TConstruct:dagger");
	NEI.hide("TConstruct:cutlass");
	NEI.hide("TConstruct:frypan*");
	NEI.hide("TConstruct:battlesign");
	NEI.hide("TConstruct:mattock");
	NEI.hide("TConstruct:chisel");
	NEI.hide("TConstruct:lumberaxe");
	NEI.hide("TConstruct:cleaver");
	NEI.hide("TConstruct:scythe");
	NEI.hide("TConstruct:excavator");
	NEI.hide("TConstruct:hammer");
	NEI.hide("TConstruct:battleaxe");
	NEI.hide("TConstruct:toolRod");
	NEI.hide("TConstruct:toolShard");
	NEI.hide("TConstruct:binding");
	NEI.hide("TConstruct:tough*");
	NEI.hide("TConstruct:heavyPlate");
	NEI.hide("TConstruct:*Blade");
	NEI.hide("TConstruct:*Guard");
	NEI.hide("TConstruct:crossbar");
	NEI.hide("TConstruct:*Head");
	NEI.hide("TConstruct:creativeModifier");
	NEI.hide("TConstruct:buckets");
	NEI.hide("TConstruct:arrowhead");
	NEI.hide("TConstruct:fletching");
	NEI.hide("TConstruct:hatchet");
	NEI.hide("TConstruct:*Part");
	NEI.hide("TConstruct:Shuriken");
	NEI.hide("TConstruct:ThrowingKnife");
	NEI.hide("TConstruct:Javelin");
	NEI.hide("TConstruct:*Bow");
	NEI.hide("TConstruct:Crossbow");
	NEI.hide("TConstruct:*Ammo");
	NEI.hide("TConstruct:Cast");
	NEI.hide("TConstruct:GlassArrows");
	NEI.hide("TConstruct:Boneana");
	NEI.hide("TConstruct:gearCast");
	NEI.hide("TConstruct:bowstring");
	NEI.hide("TConstruct:titleIcon");
	NEI.hide("TConstruct:slime.leaves");
}