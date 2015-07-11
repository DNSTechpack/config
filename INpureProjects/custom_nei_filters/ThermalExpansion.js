if (FML.isModLoaded("ThermalExpansion") && ThermalExpansion_enabled) {
    NEI.override("ThermalExpansion:florb", [0, 1]);
	NEI.override("ThermalExpansion:Sponge", [1,2]);
	NEI.override("ThermalExpansion:meter", [0]);
	NEI.override("ThermalExpansion:igniter", [0]);
	NEI.override("ThermalExpansion:Strongbox", [1,2,3,4]);
	NEI.override("ThermalExpansion:Tank", [1,2,3,4]);
	NEI.override("ThermalExpansion:Cache", [1,2,3,4]);
	NEI.override("ThermalExpansion:Cell", [1,2,3,4]);
	NEI.override("ThermalExpansion:capacitor", [1,2,3,4,5]);
	NEI.override("ThermalExpansion:Light", [0,1,2]);
	NEI.override("RedstoneArsenal:*", [0]);
}