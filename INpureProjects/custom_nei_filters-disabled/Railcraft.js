if (FML.isModLoaded("Railcraft")){
	NEI.hide("Railcraft:residual.heat");
	NEI.override("Railcraft:anvil", [0]);
	NEI.override("Railcraft:machine.alpha", [7,12,3,14,8,15,11,6,0,2,13,1,5,9,10]);
	NEI.override("Railcraft:stair", [3]);
	NEI.override("Railcraft:slab", [3]);
	NEI.override("Railcraft:wall.alpha", [0]);
	NEI.hide("Railcraft:wall.beta");
	NEI.override("Railcraft:lantern.metal", [0]);
	NEI.override("Railcraft:lantern.stone", [0]);
	NEI.override("Railcraft:post.metal", [0]);
	NEI.override("Railcraft:post.metal.platform", [0]);
	NEI.override("Railcraft:glass", [0]);
	NEI.override("Railcraft:brick.*", [2]);
	NEI.hide("Railcraft:firestone.recharge");
	NEI.hide("Railcraft:cart.anchor.admin");
	NEI.override("Railcraft:firestone.refined", [0]);
	NEI.override("Railcraft:firestone.cracked", [0]);
	NEI.hide("Railcraft:worldlogic");
}