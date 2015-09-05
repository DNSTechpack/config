if (FML.isModLoaded("appliedenergistics2") && AE2_enabled) {
    NEI.override(AE2.getFacadeItem(), [java.random(AE2.getNumberOfTypes())]);
	NEI.override("appliedenergistics2:item.ToolC*", [0]);
	NEI.override("appliedenergistics2:item.ToolE*", [0]);
	NEI.override("appliedenergistics2:item.ToolM*", [0]);
	NEI.override("appliedenergistics2:item.ToolP*", [0]);
	NEI.override("appliedenergistics2:item.ToolW*", [0]);
	NEI.hide("appliedenergistics2:*Creative*");
	NEI.hide("appliedenergistics2:tile.BlockMatrixFrame");
	NEI.hide("appliedenergistics2:tile.BlockCableBus");
	NEI.hide("appliedenergistics2:tile.BlockPaint");
}