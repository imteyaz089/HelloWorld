sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/UIComponent"
], function (Controller,JSONModel,Filter,FilterOperator,UIComponent) {
	"use strict";

	return Controller.extend("imt.demo.MyDemo1.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf imt.demo.MyDemo1.view.Main
		 */
		onInit: function () {
		
		var oInput = {
			state : ""
		};
		var oModel = new JSONModel( oInput );
		this.getView().setModel(oModel,"input");
		},
		
		onSearchState: function(oEvent) {
			var text = this.byId("state").getValue();
			var oBinding = this.byId("list").getBinding("items");
			var aFilter = [];
			aFilter.push( new Filter("state",FilterOperator.Contains,text) );
			oBinding.filter(aFilter);
		},
		
		onSelectItem: function(oEvent) {
			// var oContext = oEvent.getParameter("listItem").getBindingContext("sample");
			var oContext = oEvent.getSource().getBindingContext("sample");
			var sPath = oContext.getPath().substr(1);
			// var oPanel = this.byId("panel");
			// oPanel.bindElement({path:sPath,model:"sample"});
			// oPanel.setVisible(true);
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("Object",{
				arg:window.encodeURIComponent(sPath)});
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf imt.demo.MyDemo1.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf imt.demo.MyDemo1.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf imt.demo.MyDemo1.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});