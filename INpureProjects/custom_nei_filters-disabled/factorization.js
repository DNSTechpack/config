if (FML.isModLoaded("factorization")){
	NEI.hide("factorization:Lightair");
	NEI.hide("factorization:ColossalBlock");

	NEI.override_invert("factorization:ResourceBlock", [0,2]);
	NEI.override_invert("factorization:daybarrel", [0]);
}