// Microblocks always require special handling.
if (FML.isModLoaded("BuildCraft|Transport")) {

    // Special handler that cleanly removes facades.
    BC.obliterate_facades(java.random(BC.getFacadesSize()));
	NEI.hide("BuildCraft|Energy:blockRedPlasma");
	NEI.hide("BuildCraft|Transport:pipeBlock");
	NEI.hide("BuildCraft|Core:eternalSpring");
	NEI.hide("BuildCraft|Core:debugger");
	NEI.hide("BuildCraft|Silicon:package");
	NEI.override("BuildCraft|Core:paintbrush", [0]);
	NEI.override_invert("BuildCraft|Core:engineBlock", [3]);
}