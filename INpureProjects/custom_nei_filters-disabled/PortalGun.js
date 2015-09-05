if (FML.isModLoaded("PortalGun")) {
	NEI.hide("PortalGun:Portal_Block*");
	NEI.override("PortalGun:PortalGunOrange", [5]);
	NEI.override("PortalGun:PortalMulti", [0,2,3,11,14,4,5,13]);
}