if (FML.isModLoaded("witchery")) {
	NEI.hide("witchery:statuegoddess");
	NEI.hide("witchery:coffinblock");
	NEI.hide("witchery:*portal");
	NEI.override("witchery:circletalisman", [0]);
	NEI.override("witchery:scarecrow", [0]);
	NEI.override("witchery:witchladder", [0]);
	NEI.hide("witchery:infinityegg");
	NEI.hide("witchery:*bramble");
	NEI.hide("witchery:decursed*");
	NEI.hide("witchery:disease");
	NEI.hide("witchery:wolftoken");
}