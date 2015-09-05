if (FML.isModLoaded("ProjectBlue")) {
	NEI.override("ProjectBlue:miniatureLever", [0]);
	NEI.override("ProjectBlue:miniatureButton", [0]);
	NEI.override("ProjectBlue:miniatureLamp", [0]);
	NEI.override("ProjectBlue:sprayCan", [0]);
	NEI.hide("ProjectBlue:pneumaticTube");
}