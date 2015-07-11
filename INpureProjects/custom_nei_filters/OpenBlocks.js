if (FML.isModLoaded("OpenBlocks")) {
	NEI.override("OpenBlocks:tank", [0]);
	NEI.hide("OpenBlocks:trophy");
	NEI.override("OpenBlocks:paintcan", [0]);
	NEI.override("OpenBlocks:paintBrush", [0]);
	NEI.override("OpenBlocks:elevator", [0]);
	NEI.hide("OpenBlocks:heal");
	NEI.hide("OpenBlocks:grave");
	NEI.hide("OpenBlocks:canvasglass");
	NEI.hide("OpenBlocks:stencil");
	NEI.override("OpenBlocks:goldenEye", [100]);
}