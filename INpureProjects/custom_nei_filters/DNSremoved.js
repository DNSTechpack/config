if (vanilla_enabled) {
	NEI.override_invert("Backpack:backpack", [100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116]);
	NEI.hide("Botania:buriedPetals");
	NEI.override("IC2:itemFluidCell", [0]);
	NEI.override("Mekanism:MachineBlock2", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
	NEI.override("OpenBlocks:tank", [0]);
	NEI.override("extracells:pattern.fluid", [0]);
	NEI.hide("minechem:fluid.*");
	NEI.override("pressure:Canister", [0]);
	
}