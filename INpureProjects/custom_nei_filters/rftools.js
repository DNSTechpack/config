if (FML.isModLoaded("rftools")){
	NEI.hide("rftools:volcanic*");
	NEI.hide("rftools:creative*");
	NEI.hide("rftools:proxyBlock");
	NEI.hide("rftools:*ShieldBlock");
	NEI.hide("rftools:supportBlock");
	NEI.hide("rftools:screenHitBlock");
	NEI.hide("rftools:spaceProjectBlock");
	NEI.hide("rftools:realizedDimensionTab");
	NEI.hide("rftools:dimlet*Item");
	NEI.hide("rftools:developerDelightItem");
	NEI.hide("rftools:unknownDimlet");
	NEI.hide("rftools:teleportProbeItem");
	NEI.hide("rftools:shardWandItem");
	NEI.override("rftools:knownDimlet", [159,24,197,198,201,245,253,252,265,337,14,15,16,17,18,19,20,21,22,23,280,1,2,238]);
}