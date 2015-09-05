if (FML.isModLoaded("IC2")){
    NEI.override("IC2:itemFluidCell", [0]);
	NEI.hide("IC2:itemCropSeed");
	NEI.hide("IC2:blockWall");
	NEI.hide("IC2:blockDoorAlloy");
	NEI.hide("IC2:blockReinforcedFoam");
	NEI.hide("IC2:blockFoam");
	NEI.hide("IC2:itemDebug");
	NEI.hide("IC2:blockOreCopper");
	NEI.hide("IC2:blockOreTin");
	NEI.hide("IC2:blockOreLead");
	NEI.override("IC2:obscurator", [0]);
	NEI.override("IC2:plasmaLauncher", [0]);
	NEI.override("IC2:windmeter", [0]);
	NEI.override("IC2:itemTool*Drill", [0]);
	NEI.override("IC2:itemToolChainsaw", [0]);
	NEI.override("IC2:item*Electric", [0]);
	NEI.override("IC2:itemToolMiningLaser", [0]);
	NEI.override("IC2:itemToolMEter", [0]);
	NEI.override("IC2:itemScanner*", [0]);
	NEI.override("IC2:itemNanoSaber", [0]);
	NEI.override("IC2:itemArmor*", [0]);
	NEI.override("IC2:itemSolarHelmet", [0]);
	NEI.override("IC2:itemNightvisionGoggles", [0]);
	NEI.override("IC2:itemBatRE*", [0]);
	NEI.override("IC2:itemAdvBat", [0]);
	NEI.override("IC2:itemBat*Crystal", [0]);
	NEI.override("IC2:itemBatSU", [0]);
	NEI.override("IC2:itemBatCharge*", [0]);
	NEI.override("IC2:itemToolHoe", [0]);
	NEI.override("IC2:itemCellEmpty", [0]);
	NEI.override("GraviSuite:*", [0]);
	NEI.hide("GraviSuite:BlockRelocatorPortal");
	NEI.override("QuarryPlus:qpArmor", [0]);
	NEI.override("AdvancedSolarPanel:*helmet", [0]);
	NEI.override("IC2NuclearControl:blockNuclearControlLight", [0,2]);
	NEI.override("IC2NuclearControl:ItemToolDigitalThermometer", [101]);

}