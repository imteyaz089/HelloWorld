sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller,UIComponent) {
	"use strict";

	return Controller.extend("imt.demo.MyDemo1.controller.Object", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf imt.demo.MyDemo1.view.Object
		 */
		onInit: function () {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.getRoute("Object").attachPatternMatched(this._onObjectMatched,this);
		},
		
		_onObjectMatched: function(oEvent) {
			var sPath = window.decodeURIComponent(oEvent.getParameter("arguments").arg);
			this.getView().bindElement({
				path: '/' + sPath,
				model: "sample"
			});
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf imt.demo.MyDemo1.view.Object
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf imt.demo.MyDemo1.view.Object
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf imt.demo.MyDemo1.view.Object
		 */
		//	onExit: function() {
		//
		//	}

	});

});