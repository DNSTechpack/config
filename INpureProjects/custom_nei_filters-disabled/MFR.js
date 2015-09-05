if (FML.isModLoaded("MineFactoryReloaded") && MFR_enabled) {
    NEI.override("MineFactoryReloaded:stainedglass.block", [0]);
    NEI.override("MineFactoryReloaded:stainedglass.pane", [0]);
	NEI.override("MineFactoryReloaded:conveyor", [16]);
	NEI.hide("MineFactoryReloaded:rubberwood.sapling");
	NEI.hide("MineFactoryReloaded:rubberwood.leaves");
	NEI.override("MineFactoryReloaded:rednet.meter", [0,1]);
}