if (FML.isModLoaded("EnderIO")){
	NEI.override("EnderIO:item.darkSteel_*", [0]);
	NEI.override("EnderIO:itemTravelStaff", [0]);
	NEI.override("EnderIO:itemMagnet", [0]);
	NEI.override("EnderIO:blockDarkSteelAnvil", [0]);
	NEI.override("EnderIO:blockPoweredSpawner", [0]);
	NEI.override("EnderIO:itemBrokenSpawner", [0]);
	NEI.override("EnderIO:blockCapBank", [1,2,3]);
	NEI.override("EnderIO:blockBuffer", [0,1,2]);
	NEI.hide("EnderIO:blockCapacitorBank");
	NEI.hide("EnderIO:blockLightNode");
	NEI.hide("EnderIO:blockConduitBundle");
}