if (FML.isModLoaded("BinnieCore")){
	NEI.hide("BinnieCore:container*");
	NEI.hide("ExtraTrees:carpentry");
	NEI.hide("ExtraTrees:stainedglass");
	NEI.hide("ExtraTrees:drink");
	NEI.hide("ExtraTrees:panel");
	NEI.override("ExtraTrees:fence", [32,16387]);
	NEI.override("ExtraTrees:gate", [32]);
	NEI.override("ExtraTrees:slab", [0]);
	NEI.override("ExtraTrees:doubleSlab", [0]);
	NEI.override("ExtraTrees:door", [32]);
	NEI.override("ExtraTrees:stairs", [0]);
}