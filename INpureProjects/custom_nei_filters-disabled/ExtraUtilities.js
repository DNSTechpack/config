// Microblocks always require special handling.
if (FML.isModLoaded("ExtraUtilities") && ExtraUtilities_enabled) {
    NEI.override("ExtraUtilities:drum", [0, 1]);
	NEI.override("ExtraUtilities:nodeUpgrade", [0,1,2,3,5,6,7,8,9]);
	NEI.hide("ExtraUtilities:lawSword");
	NEI.hide("ExtraUtilities:pureLove");

    if (FML.isModLoaded("ForgeMicroblock")) {

        // Special handler for cleanly removing them.
        ExtraUtilities.obliterate_microblocks([1, 2, 3], ForgeMicroblock.getRandomMaterial());
    }
}