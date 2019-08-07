
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/skins/Package1Skin.exml'] = window.Package1Skin = (function (_super) {
	__extends(Package1Skin, _super);
	function Package1Skin() {
		_super.call(this);
		this.skinParts = ["img_body"];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this.img_body_i()];
	}
	var _proto = Package1Skin.prototype;

	_proto.img_body_i = function () {
		var t = new eui.Image();
		this.img_body = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bottle1_0_png";
		t.top = 0;
		return t;
	};
	return Package1Skin;
})(eui.Skin);generateEUI.paths['resource/skins/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	var GameSkin$Skin1 = 	(function (_super) {
		__extends(GameSkin$Skin1, _super);
		function GameSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_replay1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_replay_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin1;
	})(eui.Skin);

	var GameSkin$Skin2 = 	(function (_super) {
		__extends(GameSkin$Skin2, _super);
		function GameSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_start1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin2;
	})(eui.Skin);

	function GameSkin() {
		_super.call(this);
		this.skinParts = ["lb_score","gp_conveyer","gp_pack","btn_replay","btn_mainMenu","lb_score_over","panel_over"];
		
		this.height = 950;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.lb_score_i(),this.gp_conveyer_i(),this.gp_pack_i(),this.panel_over_i()];
	}
	var _proto = GameSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.source = "gamebg_png";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "gameui1_png";
		t.x = -3;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "conveyer_png";
		t.x = 227;
		t.y = 119;
		return t;
	};
	_proto.lb_score_i = function () {
		var t = new eui.Label();
		this.lb_score = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Verdana";
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x0a0909;
		t.width = 169.67;
		t.x = 410;
		t.y = 81.5;
		return t;
	};
	_proto.gp_conveyer_i = function () {
		var t = new eui.Group();
		this.gp_conveyer = t;
		t.height = 830.67;
		t.width = 112;
		t.x = 237;
		t.y = 119;
		return t;
	};
	_proto.gp_pack_i = function () {
		var t = new eui.Group();
		this.gp_pack = t;
		t.x = 0;
		t.y = 198;
		t.elementsContent = [this._Package11_i(),this._Package12_i(),this._Package13_i(),this._Package14_i(),this._Package15_i(),this._Package16_i()];
		return t;
	};
	_proto._Package11_i = function () {
		var t = new Package1();
		t.Pos = 1;
		t.height = 231;
		t.skinName = "Package1Skin";
		t.width = 146;
		t.x = 0;
		t.y = 1.33;
		return t;
	};
	_proto._Package12_i = function () {
		var t = new Package1();
		t.Pos = 2;
		t.height = 231;
		t.skinName = "Package1Skin";
		t.width = 146;
		t.x = 0;
		t.y = 231;
		return t;
	};
	_proto._Package13_i = function () {
		var t = new Package1();
		t.Pos = 3;
		t.height = 231;
		t.skinName = "Package1Skin";
		t.width = 146;
		t.x = 0;
		t.y = 462;
		return t;
	};
	_proto._Package14_i = function () {
		var t = new Package1();
		t.Pos = 4;
		t.height = 231;
		t.skinName = "Package1Skin";
		t.width = 146;
		t.x = 454;
		t.y = 0;
		return t;
	};
	_proto._Package15_i = function () {
		var t = new Package1();
		t.Pos = 5;
		t.height = 231;
		t.skinName = "Package1Skin";
		t.width = 146;
		t.x = 454;
		t.y = 231;
		return t;
	};
	_proto._Package16_i = function () {
		var t = new Package1();
		t.Pos = 6;
		t.height = 231;
		t.skinName = "Package1Skin";
		t.width = 146;
		t.x = 454;
		t.y = 462;
		return t;
	};
	_proto.panel_over_i = function () {
		var t = new eui.Panel();
		this.panel_over = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect1_i(),this._Image4_i(),this._Image5_i(),this.btn_replay_i(),this.btn_mainMenu_i(),this._Label1_i(),this.lb_score_over_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "overrole_png";
		t.x = 180;
		t.y = 408.66;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "overpanel_png";
		t.x = 73;
		t.y = 43;
		return t;
	};
	_proto.btn_replay_i = function () {
		var t = new eui.Button();
		this.btn_replay = t;
		t.label = "";
		t.x = 127.5;
		t.y = 775.5;
		t.skinName = GameSkin$Skin1;
		return t;
	};
	_proto.btn_mainMenu_i = function () {
		var t = new eui.Button();
		this.btn_mainMenu = t;
		t.label = "";
		t.x = 127.5;
		t.y = 850.5;
		t.skinName = GameSkin$Skin2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "Score:";
		t.x = 213.5;
		t.y = 175;
		return t;
	};
	_proto.lb_score_over_i = function () {
		var t = new eui.Label();
		this.lb_score_over = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Verdana";
		t.text = "12";
		t.width = 166;
		t.x = 315;
		t.y = 173;
		return t;
	};
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/skins/LoaingSkin.exml'] = window.LoaingSkin = (function (_super) {
	__extends(LoaingSkin, _super);
	function LoaingSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 950;
		this.width = 600;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Image1_i()];
	}
	var _proto = LoaingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 1;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Verdana";
		t.text = "yoyohan";
		t.width = 134.66;
		t.x = 236;
		t.y = 481;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.source = "hankuke_jpg";
		t.width = 200;
		t.x = 200;
		t.y = 245.34;
		return t;
	};
	return LoaingSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartSkin.exml'] = window.StartSkin = (function (_super) {
	__extends(StartSkin, _super);
	var StartSkin$Skin3 = 	(function (_super) {
		__extends(StartSkin$Skin3, _super);
		function StartSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_play1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_play_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSkin$Skin3;
	})(eui.Skin);

	function StartSkin() {
		_super.call(this);
		this.skinParts = ["btn_play"];
		
		this.height = 950;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.btn_play_i()];
	}
	var _proto = StartSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "FangSong";
		t.horizontalCenter = 0;
		t.size = 72;
		t.text = "接瓶子";
		t.textColor = 0x0f0f0f;
		t.y = 199;
		return t;
	};
	_proto.btn_play_i = function () {
		var t = new eui.Button();
		this.btn_play = t;
		t.label = "";
		t.x = 134.5;
		t.y = 701;
		t.skinName = StartSkin$Skin3;
		return t;
	};
	return StartSkin;
})(eui.Skin);