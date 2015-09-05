if (FML.isModLoaded("pressure")) {
	NEI.override("pressure:Canister", [0]);
	NEI.hide("pressure:Creative");
	NEI.hide("pressure:Debugger");
}