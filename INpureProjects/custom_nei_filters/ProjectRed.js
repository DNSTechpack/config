if (FML.isModLoaded("ProjRed|Core")) {
	NEI.hide("ProjRed|Exploration:projectred.exploration.lily");
	NEI.hide("ProjRed|Exploration:projectred.exploration.lilyseed");
	NEI.override("ProjRed|Exploration:projectred.exploration.backpack", [0,1,2,6]);
	NEI.override_invert("ProjRed|Exploration:projectred.exploration.ore", [3,4,5]);
	NEI.hide("ProjRed|Illumination:projectred.illumination.airousLight");
	NEI.override("ProjRed|Transmission:projectred.transmission.wire", [0,1,17,18]);
	NEI.override("ProjRed|Transmission:projectred.transmission.framewire", [0,1,17]);
}