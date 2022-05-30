var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function () { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false }); };

var createScene = function () {
    engine.enableOfflineSupport = false;
    // Scene and Camera
    var scene = new BABYLON.Scene(engine);
    var camera1 = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 4, 10, new BABYLON.Vector3(0, -5, 0), scene);
    //scene.activeCamera = camera1;
    scene.activeCamera.attachControl(canvas, true);
    camera1.lowerRadiusLimit = 2.3;
    camera1.upperRadiusLimit = 4;
    camera1.wheelDeltaPercentage = 0.05;
    camera1.targetScreenOffset = new BABYLON.Vector3(0.35, 0, 0); 

    var bgcamera = camera1.clone("bgcamera");
    bgcamera.attachControl(canvas, true);
    bgcamera.layerMask = 0x10000000;

    scene.activeCameras = [camera1, bgcamera];

    scene.clearColor = new BABYLON.Color3(1, 1, 1);

    // Lights
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 1;
    light.specular = BABYLON.Color3.Black();
    var light2 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, -1.0), scene);
    light2.intensity = 1;
    light2.position = new BABYLON.Vector3(0, 5, 5);
    var light3 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, 0.5, 1.0), scene);
    light3.intensity = 1;
    light3.position = new BABYLON.Vector3(0, 5, 5);
    // Load hero character and play animation
    BABYLON.SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Bag/", modelname, scene, function (newMeshes, particleSystems, skeletons, animationGroups) {
        var hero = newMeshes[1];
        var hern = newMeshes[2];
        var her = newMeshes[3];
        var her1 = newMeshes[4];
        var her2 = newMeshes[5];
        var her3 = newMeshes[6];
        var her4 = newMeshes[7];
        var her5 = newMeshes[8];
        var her6 = newMeshes[9];
        var her7 = newMeshes[10];
        var her8 = newMeshes[11];
        var her9 = newMeshes[12];
        var her10 = newMeshes[13];
        var her11 = newMeshes[14];
        var her12 = newMeshes[15];
        var her13 = newMeshes[16];
        var her14 = newMeshes[17];
        var her15 = newMeshes[18];
        var her16 = newMeshes[19];
        //Scale the model down        
        newMeshes[0].scaling.scaleInPlace(10);

        //Lock camera on the character 
        camera1.target = hero;

        var newmat = new BABYLON.StandardMaterial("newmat", scene);
        newmat.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/bag.jpg", scene);
        newmat.diffuseTexture.uScale = 2;
        newmat.diffuseTexture.vScale = 2;
        newmat.specularColor = new BABYLON.Color3(.1, .1, .1);
        hero.material = newmat;

        var bagmaterials = new BABYLON.StandardMaterial("texturee1", scene);
        bagmaterials.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/2.jpg", scene);
        bagmaterials.diffuseTexture.uScale = 2;
        bagmaterials.diffuseTexture.vScale = 2;
        bagmaterials.specularColor = new BABYLON.Color3(.1, .1, .1);
        hern.material = bagmaterials;
        her.material = bagmaterials;
        her1.material = bagmaterials;
        her2.material = bagmaterials;
        her3.material = bagmaterials;
        her4.material = bagmaterials;
        her5.material = bagmaterials;
        her6.material = bagmaterials;
        her6.material = bagmaterials;
        //const importedAnimGroups = cannonImportResult.animationGroups;
        const aniGr = scene.animationGroups
        scene.animationGroups.forEach((g) => {
            g.stop()
        })

        var fontsizes = "63%"

        var mainpanel = new BABYLON.GUI.Rectangle();
        mainpanel.width = "25%";
        mainpanel.height = "100%";
        mainpanel.verticalAlignment = "Center";
        mainpanel.horizontalAlignment = "Center";
        mainpanel.top = "";
        mainpanel.left = "0.5%";
        mainpanel.cornerRadius = 0;
        mainpanel.color = "Grey";
        mainpanel.thickness = 0;
        mainpanel.background = "#F5F4F2";
        mainpanel.shadowColor = "black";
        mainpanel.shadowOffsetX = 3;
        mainpanel.shadowBlur = 15;
        mainpanel.shadowColor = "#7C7878FF";
        advancedTexture.addControl(mainpanel);

        var grid = new BABYLON.GUI.Grid();
        grid.width = "100%";
        grid.height = "100%";
        grid.addRowDefinition(0.15);
        grid.addRowDefinition(0.15);
        grid.addRowDefinition(0.50);
        grid.addRowDefinition(0.20);
        mainpanel.addControl(grid);



 ///////////////////  Buttons of the customize options 

        var leather = BABYLON.GUI.Button.CreateSimpleButton("Leather", "LEATHER");
        leather.width = "90%"
        leather.height = "50%";
        leather.color = "White";
        leather.background = "#56A3A3";
        leather.cornerRadius = 3;
        leather.thickness = 2;
        leather.fontSize = "30%";
        leather.shadowColor = "black";
        leather.shadowOffsetX = 3;
        leather.shadowBlur = 15;
        leather.shadowColor = "#7C7878FF";
        leather.onPointerUpObservable.add(function () {
            mainpanel.isVisible = false;
            descrippanel.isVisible = true;
            leatherstab.isVisible = true;
            leaname.text = "";
        });
        grid.addControl(leather, 0);

        var leatherlining = BABYLON.GUI.Button.CreateSimpleButton("Leather lining", "LINING");
        leatherlining.width = "90%"
        leatherlining.height = "50%";
        leatherlining.color = "white";
        leatherlining.background = "#56A3A3";
        leatherlining.cornerRadius = 3;
        leatherlining.thickness = 2;
        leatherlining.fontSize = "30%";
        leatherlining.shadowColor = "black";
        leatherlining.shadowOffsetX = 3;
        leatherlining.shadowBlur = 15;
        leatherlining.shadowColor = "#7C7878FF";
        leatherlining.onPointerUpObservable.add(function () {
            mainpanel.isVisible = false;
            leatherliningtab.isVisible = true;
            descrippanel.isVisible = true;
            leaname.text = "";
            
        });
        grid.addControl(leatherlining, 1);


        var rect4 = new BABYLON.GUI.Rectangle();
        rect4.width = "92%";
        rect4.height = "80%";
        rect4.color = "black";
        rect4.thickness = 1;
        grid.addControl(rect4,2);

        var grd = new BABYLON.GUI.Grid();
        grd.width = "100%";
        grd.height = "100%";
        grd.paddingTop = "0%"
        grd.addRowDefinition(0.10);
        grd.addRowDefinition(0.90);
        rect4.addControl(grd);

        var lePText = new BABYLON.GUI.TextBlock();
        lePText.text = "PERSONALISE TAG";
        lePText.fontSize = "85%";
        lePText.top =  "20%";
        grd.addControl(lePText, 0);


        var gIrd = new BABYLON.GUI.Grid();
        gIrd.width = "100%";
        gIrd.height = "100%";
        gIrd.paddingTop = "0%"
        gIrd.addRowDefinition(0.80);
        gIrd.addRowDefinition(0.20);
        grd.addControl(gIrd,1);

        var namefeild = new BABYLON.GUI.InputText("Input");
        namefeild.width = "95%";
        namefeild.height = "80%";
        namefeild.color = "White";
        namefeild.background = "#AFAFAFFF";
        namefeild.placeholderText = "Your Text";
        namefeild.fontSize = "70%";
        namefeild.placeholderText.fontSize = "10px"
        namefeild.placeholderColor = "white";
        namefeild.focusedBackground = "#AFAFAFFF";
        //namefeild.autoStretchWidth = true;
        namefeild.onTextChangedObservable.add(() => {
            if(namefeild && namefeild.text.length > 20) {
                namefeild.text = namefeild.text.substring(0, 20);
            }
        })
        gIrd.addControl(namefeild,1);

        var GIrd = new BABYLON.GUI.Grid();
        GIrd.width = "100%";
        GIrd.height = "100%";
        GIrd.paddingTop = "0%"
        GIrd.addRowDefinition(1/2);
        GIrd.addRowDefinition(1/2);
        GIrd.addColumnDefinition(0.70)
        GIrd.addColumnDefinition(0.30)
        gIrd.addControl(GIrd,0);

        var leP1Text = new BABYLON.GUI.TextBlock();
        leP1Text.text = "Name in Blind Emboss";
        leP1Text.fontSize = "18%";
        leP1Text.verticalAlignment = "top";
        leP1Text.horizontalAlignment = "Center";
        GIrd.addControl(leP1Text, 0,0);

        var leP2Text = new BABYLON.GUI.TextBlock();
        leP2Text.text = "Name in Gold Emboss";
        leP2Text.fontSize = "18%";
        leP2Text.verticalAlignment = "top";
        leP2Text.horizontalAlignment = "Center";
        GIrd.addControl(leP2Text, 1,0);

       

        var ctag;
        var tag1 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/hidesign%20pics/PlainTag.png");
        ctag = tag1;
        tag1.width = "70%"
        tag1.height = "60%";
        tag1.color = "#25BAFFFF";
        tag1.cornerRadius = 20;
        tag1.thickness = 0;
        tag1.onPointerUpObservable.add(function () {
            ctag.thickness = 0;
            ctag = tag1;
            ctag.thickness = 3;
        });
        GIrd.addControl(tag1, 0, 1);

        var tag2 = BABYLON.GUI.Button.CreateImageOnlyButton("Tag2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/hidesign%20pics/GoldTag.png");
        tag2.width = "70%"
        tag2.height = "60%";
        tag2.color = "#25BAFFFF";
        tag2.cornerRadius = 20;
        tag2.thickness = 0;
        tag2.onPointerUpObservable.add(function () {
            ctag.thickness = 0;
            ctag = tag2;
            ctag.thickness = 3;
        });
        GIrd.addControl(tag2, 1, 1);



        var image = new BABYLON.GUI.Image("Image", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Logo.png");
        image.width = "105%";
        image.height = "55%";
        grid.addControl(image,3); 
    

 ////////////////////////////////////////////////////////////////////////////  leather options canvas panel 

        var leatherstab = new BABYLON.GUI.Rectangle();
        leatherstab.isVisible = false;
        leatherstab.width = "25%";
        leatherstab.height = "100%";
        leatherstab.verticalAlignment = "Center";
        leatherstab.horizontalAlignment = "Center";
        leatherstab.background = "#F5F4F2";
        leatherstab.shadowColor = "black";
        leatherstab.shadowOffsetX = 3;
        leatherstab.shadowBlur = 15;
        leatherstab.shadowColor = "#7C7878FF";
        advancedTexture.addControl(leatherstab);

        var leathergd = new BABYLON.GUI.Grid();
        leathergd.width = "100%";
        leathergd.height = "99%";
        leathergd.paddingTop = "0%";
        leathergd.addRowDefinition(0.04);
        leathergd.addRowDefinition(0.96);
        leathergd.addColumnDefinition(0.08);
        leathergd.addColumnDefinition(0.92);
        leatherstab.addControl(leathergd);

        var leText = new BABYLON.GUI.TextBlock();
        leText.text = "LEATHER";
        leText.fontSize = "98%";
        leText.paddingBottom = "0%"
        leText.paddingRight = "0%"
        leathergd.addControl(leText, 0, 1);

        var close = BABYLON.GUI.Button.CreateImageOnlyButton("close", " https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/hidesign%20pics/back.png");
        close.width = "90%"
        close.height = "90%";
        close.color = "black";
        close.fontSize = "90%";
        close.left = "1%";
        close.cornerRadius = 3;
        close.thickness = 0;
        close.onPointerUpObservable.add(function () {
            leatherstab.isVisible = false;
            descrippanel.isVisible = false;
            mainpanel.isVisible = true;
        });
        leathergd.addControl(close, 0, 0);

        var Leathertab = new BABYLON.GUI.Rectangle();
        Leathertab.width = "100%";
        Leathertab.height = "100%";
        leathergd.addControl(Leathertab, 1, 1);

        var scroll = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
        scroll.width = "100%";
        scroll.height = "100%";
        scroll.barSize = "10";
        scroll.thumbImage = new BABYLON.GUI.Image("thumb", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Bar.png");
        scroll.barImage = new BABYLON.GUI.Image("bar", "");
        scroll.thumbLength = 0.3;
        scroll.thumbHeight = 1;
        scroll.barImageHeight = 0.3;
        scroll.barBackground = "blue";


    //check if control is picked
    advancedTexture.onControlPickedObservable.add(e => {
        console.log ("picked scene");
        if (e.name != "root") {
            console.log ("picked scrol");
            camera1.detachControl();
            e.onPointerUpObservable.addOnce(() => camera1.attachControl(canvas, true));
        }
    });

        //add a delay before returning to camera move
        var addDelay = function(){
        // the new and simple way
         BABYLON.setAndStartTimer({
         timeout: 300,
         contextObservable: scene.onBeforeRenderObservable,
         onEnded: () => {
         console.log("ended");
        // code running here is guaranteed to run inside the beforeRender loop
        },
        });
        };
        scroll.onPointerEnterObservable.add(function(){
            console.log("in");
            camera1.detachControl();
            bgcamera.detachControl();
        });
        scroll.onPointerOutObservable.add(function(){
            console.log("out");        
            camera1.attachControl(mainpanel, true);
            bgcamera.attachControl(mainpanel, true);
        });
        Leathertab.addControl(scroll);

        var gd = new BABYLON.GUI.Grid();
        gd.width = "100%";
        gd.height = "100%";
        gd.addRowDefinition(1 / 6);
        gd.addRowDefinition(1 / 6);
        gd.addRowDefinition(1 / 6);
        gd.addRowDefinition(1 / 6);
        gd.addRowDefinition(1 / 6);
        gd.addRowDefinition(1 / 6);
        scroll.addControl(gd);

//////////////////////////////////////////////////////////////////////// kalahari leather option opens 

        var kalaharitab = new BABYLON.GUI.Rectangle();
        kalaharitab.width = "100%";
        kalaharitab.height = "97%";
        kalaharitab.verticalAlignment = "Center";
        kalaharitab.horizontalAlignment = "Center";
        kalaharitab.top = "3%";
        kalaharitab.paddingRight = "1%";
        kalaharitab.cornerRadius = 0;
        kalaharitab.color = "black";
        kalaharitab.thickness = 0;
        kalaharitab.background = "";
        gd.addControl(kalaharitab, 0);


        var kalaharigd = new BABYLON.GUI.Grid("kalaharigd");
        kalaharigd.width = "100%";
        kalaharigd.height = "100%";
        kalaharigd.addRowDefinition(0.30);
        kalaharigd.addRowDefinition(0.70);
        kalaharitab.addControl(kalaharigd);

        var kaltab = new BABYLON.GUI.Rectangle();
        kaltab.width = "100%";
        kaltab.height = "100%";
        kaltab.color = "black";
        kaltab.thickness = 0.5;
        kalaharigd.addControl(kaltab, 0);

        var lelText = new BABYLON.GUI.TextBlock();
        lelText.text = "KALAHARI";
        lelText.fontSize = fontsizes;
        kaltab.addControl(lelText);

        var kalitab = new BABYLON.GUI.Rectangle();
        kalitab.width = "100%";
        kalitab.height = "100%";
        kalitab.color = "black";
        kalitab.thickness = 1;
        kalaharigd.addControl(kalitab, 1);
        
        var kaligd = new BABYLON.GUI.Grid("kaligd");
        kaligd.width = "100%";
        kaligd.height = "100%";
        kaligd.addRowDefinition(1);
        kaligd.addColumnDefinition(1 / 6);
        kaligd.addColumnDefinition(1 / 6);
        kaligd.addColumnDefinition(1 / 6);
        kaligd.addColumnDefinition(1 / 6);
        kaligd.addColumnDefinition(1 / 6);
        kaligd.addColumnDefinition(1 / 6);
        kalitab.addControl(kaligd);

        var currentButton;
        var btnW = "90%";
        var btnH = "70%";
        var btnColor = "#25BAFFFF";
      
        var button11 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI BROWN.jpg ");
        currentButton = button11;
        button11.width = btnW;
        button11.height = btnH;
        button11.color = btnColor;
        button11.cornerRadius = 100;
        button11.thickness = 0;
        button11.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button11;
            currentButton.thickness = 2;
            leaname.text = "KALAHARI\nBROWN";
            leaname.fontSize = "40%";
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        kaligd.addControl(button11, 0, 0);

        var button12 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI MARSALA.jpg ");
        button12.width = btnW;
        button12.height = btnH;
        button12.color = btnColor;
        button12.cornerRadius = 100;
        button12.thickness = 0;
        button12.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button12;
            leaname.text = "KALAHARI\nMARSALA";
            leaname.fontSize = "40%";
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI MARSALA.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        kaligd.addControl(button12, 0, 1);

        var button13 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI SAPPHIRE.jpg ");
        button13.width = btnW;
        button13.height = btnH;
        button13.color = btnColor;
        button13.cornerRadius = 100;
        button13.thickness = 0;
        button13.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button13;
            leaname.text = "KALAHARI\nSAPPHIRE";
            leaname.fontSize = "40%";
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI SAPPHIRE.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        kaligd.addControl(button13, 0, 2);

        var button14 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI TANGERINE.jpg ");
        button14.width = btnW;
        button14.height = btnH;
        button14.color = btnColor;
        button14.cornerRadius = 100;
        button14.thickness = 0;
        button14.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button14;
            leaname.text = "KALAHARI\nTANGERINE";
            leaname.fontSize = "40%";
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI TANGERINE.jpg", scene);
            textureblack.diffuseTexture.uScale = 1;
            textureblack.diffuseTexture.vScale = 1;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        kaligd.addControl(button14, 0, 3);

////////////////////////////////////////////////////////////////////////////////////luxry ostrich 
        var luxostrichtab = new BABYLON.GUI.Rectangle();
        luxostrichtab.width = "100%";
        luxostrichtab.height = "97%";
        luxostrichtab.verticalAlignment = "Center";
        luxostrichtab.horizontalAlignment = "Center";
        luxostrichtab.top = "3%";
        luxostrichtab.paddingRight = "1%";
        luxostrichtab.cornerRadius = 0;
        luxostrichtab.color = "black";
        luxostrichtab.thickness = 0;
        luxostrichtab.background = "";
        gd.addControl(luxostrichtab, 1);


        var luxostgd = new BABYLON.GUI.Grid("kalharigd");
        luxostgd.isVisible = true;
        luxostgd.width = "100%";
        luxostgd.height = "100%";
        luxostgd.paddingBottom = "0%";
        luxostgd.addRowDefinition(0.30);
        luxostgd.addRowDefinition(0.70);
        luxostrichtab.addControl(luxostgd);

        var lxtab = new BABYLON.GUI.Rectangle();
        lxtab.width = "100%";
        lxtab.height = "100%";
        lxtab.color = "black";
        lxtab.thickness = 0.5;
        lxtab.background = "";
        luxostgd.addControl(lxtab, 0);

        var ostext = new BABYLON.GUI.TextBlock();
        ostext.text = "LUXURY OSTRICH";
        ostext.fontSize = fontsizes;
        lxtab.addControl(ostext);

        var lxotab = new BABYLON.GUI.Rectangle();
        lxotab.width = "100%";
        lxotab.height = "100%";
        lxotab.color = "black";
        lxotab.thickness = 1;
        lxotab.background = "";
        luxostgd.addControl(lxotab, 1);

        var ostgd = new BABYLON.GUI.Grid("kaligd");
        ostgd.isVisible = true;
        ostgd.width = "100%";
        ostgd.height = "100%";
        ostgd.paddingTop = "0%";
        ostgd.addRowDefinition(1);
        ostgd.addColumnDefinition(1 / 6);
        ostgd.addColumnDefinition(1 / 6);
        ostgd.addColumnDefinition(1 / 6);
        ostgd.addColumnDefinition(1 / 6);
        ostgd.addColumnDefinition(1 / 6);
        ostgd.addColumnDefinition(1 / 6);
        lxotab.addControl(ostgd);

        var button17 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH CHOCOLATE.jpg ");
        button17.width = btnW;
        button17.height = btnH;
        button17.color = "#25BAFFFF";
        button17.cornerRadius = 100;
        button17.thickness = 0;
        button17.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button17;
            leaname.text = "LUXURY OSTRICH\nCHOCOLATE";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH CHOCOLATE.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        ostgd.addControl(button17, 0, 0);

        var button18 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH RED.jpg ");
        button18.width = btnW;
        button18.height = btnH;
        button18.color = "#25BAFFFF";
        button18.cornerRadius = 100;
        button18.thickness = 0;
        button18.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button18;
            leaname.text = "LUXURY OSTRICH\nRED";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH RED.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        ostgd.addControl(button18, 0, 1);

        var button19 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH TAN.jpg ");
        button19.width = btnW;
        button19.height = btnH;
        button19.color = "#25BAFFFF";
        button19.cornerRadius = 100;
        button19.thickness = 0;
        button19.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button19;
            leaname.text = "LUXURY OSTRICH\nTAN";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH TAN.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        ostgd.addControl(button19, 0, 2);
//////////////////////////////////////////////////////////////////////////////////////////////////////////ranch smooth

        var ranchtab = new BABYLON.GUI.Rectangle();
        ranchtab.width = "100%";
        ranchtab.height = "97%";
        ranchtab.verticalAlignment = "Center";
        ranchtab.horizontalAlignment = "Center";
        ranchtab.top = "3%";
        ranchtab.paddingRight = "1%";
        ranchtab.cornerRadius = 0;
        ranchtab.color = "black";
        ranchtab.thickness = 0;
        ranchtab.background = "";
        gd.addControl(ranchtab,2);


        var ranchgd = new BABYLON.GUI.Grid("kalharigd");
        ranchgd.isVisible = true;
        ranchgd.width = "100%";
        ranchgd.height = "100%";
        ranchgd.paddingBottom = "0%";
        ranchgd.addRowDefinition(0.30);
        ranchgd.addRowDefinition(0.70);
        ranchtab.addControl(ranchgd);

        var ttab = new BABYLON.GUI.Rectangle();
        ttab.width = "100%";
        ttab.height = "100%";
        ttab.color = "black";
        ttab.thickness = .5;
        ranchgd.addControl(ttab, 0);

        var rantext = new BABYLON.GUI.TextBlock();
        rantext.text = "RANCH SMOOTH CALF";
        rantext.fontSize = fontsizes;
        ttab.addControl(rantext);

        var ranctab = new BABYLON.GUI.Rectangle();
        ranctab.width = "100%";
        ranctab.height = "100%";
        ranctab.color = "black";
        ranctab.thickness = 1;
        ranctab.background = "";
        ranchgd.addControl(ranctab, 1);

        var rangd = new BABYLON.GUI.Grid("kaligd");
        rangd.isVisible = true;
        rangd.width = "100%";
        rangd.height = "100%";
        rangd.paddingTop = "0%";
        rangd.addRowDefinition(1);
        rangd.addColumnDefinition(1 / 6);
        rangd.addColumnDefinition(1 / 6);
        rangd.addColumnDefinition(1 / 6);
        rangd.addColumnDefinition(1 / 6);
        rangd.addColumnDefinition(1 / 6);
        rangd.addColumnDefinition(1 / 6);
        ranctab.addControl(rangd);

        var button20 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF BLACK.jpg ");
        button20.width =btnW;
        button20.height = btnH;
        button20.color = "#25BAFFFF";
        button20.cornerRadius = 100;
        button20.thickness = 0;
        button20.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button20;
            leaname.text = "RANCH SMOOTH\nCALF BLACK";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        rangd.addControl(button20, 0, 0);

        var button21 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF EMERALD.jpg ");
        button21.width =btnW;
        button21.height = btnH;
        button21.color = "#25BAFFFF";
        button21.cornerRadius = 100;
        button21.thickness = 0;
        button21.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button21;
            leaname.text = "RANCH SMOOTH\nCALF EMERALD";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF EMERALD.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        rangd.addControl(button21, 0, 1);


        var button22 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF MID NIGHT BLUE.jpg ");
        button22.width =btnW;
        button22.height = btnH;
        button22.color = "#25BAFFFF";
        button22.cornerRadius = 100;
        button22.thickness = 0;
        button22.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button22;
            leaname.text = "RANCH SMOOTH CALF\nMID NIGHT BLUE";
            leaname.fontSize = "35%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF MID NIGHT BLUE.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        rangd.addControl(button22, 0, 2);

        var button23 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF RED.jpg ");
        button23.width =btnW;
        button23.height = btnH;
        button23.color = "#25BAFFFF";
        button23.cornerRadius = 100;
        button23.thickness = 0;
        button23.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button23;
            leaname.text = "RANCH SMOOTH\nCALF RED";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF RED.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        rangd.addControl(button23, 0, 3);

        var button24 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN  BROWN.jpg ");
        button24.width =btnW;
        button24.height = btnH;
        button24.color = "#25BAFFFF";
        button24.cornerRadius = 100;
        button24.thickness = 0;
        button24.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button24;
            leaname.text = "RANCH SMOOTH\nCALF TAN BROWN";
            leaname.fontSize = "35%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN  BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        rangd.addControl(button24, 0, 4);

        var button25 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN.jpg ");
        button25.width =btnW;
        button25.height = btnH;
        button25.color = "#25BAFFFF";
        button25.cornerRadius = 100;
        button25.thickness = 0;
        button25.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button25;
            leaname.text = "RANCH SMOOTH\nCALF TAN";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        rangd.addControl(button25, 0, 5);


/////////////////////////////////////////////////////////// real dear
        var deartab = new BABYLON.GUI.Rectangle();
        deartab.width = "100%";
        deartab.height = "97%";
        deartab.verticalAlignment = "Center";
        deartab.horizontalAlignment = "Center";
        deartab.top = "3%";
        deartab.paddingRight = "1%";
        deartab.cornerRadius = 0;
        deartab.color = "black";
        deartab.thickness = 0;
        deartab.background = "";
        gd.addControl(deartab, 3);


        var deargd = new BABYLON.GUI.Grid("kalharigd");
        deargd.isVisible = true;
        deargd.width = "100%";
        deargd.height = "100%";
        deargd.paddingBottom = "0%";
        deargd.addRowDefinition(0.30);
        deargd.addRowDefinition(0.70);
        deartab.addControl(deargd);

        var rgtab = new BABYLON.GUI.Rectangle();
        rgtab.width = "100%";
        rgtab.height = "100%";
        rgtab.color = "black";
        rgtab.thickness = .5;
        deargd.addControl(rgtab, 0);

        var deartext = new BABYLON.GUI.TextBlock();
        deartext.text = "REAL DEER";
        deartext.fontSize = fontsizes;
        rgtab.addControl(deartext);

        var deertab = new BABYLON.GUI.Rectangle();
        deertab.width = "100%";
        deertab.height = "100%";
        deertab.color = "black";
        deertab.thickness = 1;
        deertab.background = "";
        deargd.addControl(deertab, 1);

        var dearsgd = new BABYLON.GUI.Grid("kaligd");
        dearsgd.isVisible = true;
        dearsgd.width = "100%";
        dearsgd.height = "100%";
        dearsgd.paddingTop = "0%";
        dearsgd.addRowDefinition(1);
        dearsgd.addColumnDefinition(1 / 6);
        dearsgd.addColumnDefinition(1 / 6);
        dearsgd.addColumnDefinition(1 / 6);
        dearsgd.addColumnDefinition(1 / 6);
        dearsgd.addColumnDefinition(1 / 6);
        dearsgd.addColumnDefinition(1 / 6);
        deertab.addControl(dearsgd);


        var button26 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REAL DEER BLACK.jpg ");
        button26.width =btnW;
        button26.height = btnH;
        button26.color = "#25BAFFFF";
        button26.cornerRadius = 100;
        button26.thickness = 0;
        button26.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button26;
            leaname.text = "REAL DEER\nBLACK";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REAL DEER BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
dearsgd.addControl(button26, 0, 0);

/////////////////////////////////////////////////////////////////////// Regular classic

var regulartab = new BABYLON.GUI.Rectangle();
regulartab.width = "100%";
regulartab.height = "97%";
regulartab.verticalAlignment = "Center";
regulartab.horizontalAlignment = "Center";
regulartab.top = "3%";
regulartab.paddingRight = "1%";
regulartab.cornerRadius = 0;
regulartab.color = "black";
regulartab.thickness = 0;
regulartab.background = "";
gd.addControl(regulartab, 4);


var regulargd = new BABYLON.GUI.Grid("kalharigd");
regulargd.isVisible = true;
regulargd.width = "100%";
regulargd.height = "100%";
regulargd.paddingBottom = "0%";
regulargd.addRowDefinition(0.30);
regulargd.addRowDefinition(0.70);
regulartab.addControl(regulargd);

var rgtab = new BABYLON.GUI.Rectangle();
rgtab.width = "100%";
rgtab.height = "100%";
rgtab.color = "black";
rgtab.thickness = .5;
regulargd.addControl(rgtab, 0);

var regutext = new BABYLON.GUI.TextBlock();
regutext.text = "REGULAR CLASSIC";
regutext.fontSize = fontsizes;
rgtab.addControl(regutext);

var regtab = new BABYLON.GUI.Rectangle();
regtab.width = "100%";
regtab.height = "100%";
regtab.color = "black";
regtab.thickness = 1;
regulargd.addControl(regtab, 1);

var regugd = new BABYLON.GUI.Grid("kaligd");
regugd.isVisible = true;
regugd.width = "100%";
regugd.height = "100%";
regugd.paddingTop = "0%";
regugd.addRowDefinition(1 );
regugd.addColumnDefinition(1 / 6);
regugd.addColumnDefinition(1 / 6);
regugd.addColumnDefinition(1 / 6);
regugd.addColumnDefinition(1 / 6);
regugd.addColumnDefinition(1 / 6);
regugd.addColumnDefinition(1 / 6);
regtab.addControl(regugd);


 var button27 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BLACK.jpg ");
 button27.width =btnW;
 button27.height = btnH;
 button27.color = "#25BAFFFF";
 button27.cornerRadius = 100;
 button27.thickness= 0;
 button27.onPointerUpObservable.add(function () {
     currentButton.thickness = 0;
    currentButton = button27;
    leaname.text = "REGULAR CLASSIC\nLEATHER BLACK";
    leaname.fontSize = "40%";
     currentButton.thickness = 3;
     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BLACK.jpg", scene);
     textureblack.diffuseTexture.uScale = 2;
     textureblack.diffuseTexture.vScale = 2;
     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
     hero.material = textureblack;
 });
 regugd.addControl(button27, 0, 0);

 var button28 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BROWN.jpg ");
 button28.width =btnW;
 button28.height = btnH;
 button28.color = "#25BAFFFF";
 button28.cornerRadius = 100;
 button28.thickness = 0;
 button28.onPointerUpObservable.add(function () {
     currentButton.thickness = 0;
    currentButton = button28;
    leaname.text = "REGULAR CLASSIC\nLEATHER BROWN";
    leaname.fontSize = "40%";
     currentButton.thickness = 3;
     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BROWN.jpg", scene);
     textureblack.diffuseTexture.uScale = 2;
     textureblack.diffuseTexture.vScale = 2;
     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
     hero.material = textureblack;
 });
 regugd.addControl(button28, 0, 1);

 var button29 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER HONEY.jpg ");
 button29.width =btnW;
 button29.height = btnH;
 button29.color = "#25BAFFFF";
 button29.cornerRadius = 100;
 button29.thickness = 0;
 button29.onPointerUpObservable.add(function () {
     currentButton.thickness = 0;
    currentButton = button29;
    leaname.text = "REGULAR CLASSIC\nLEATHER HONEY";
    leaname.fontSize = "40%";
     currentButton.thickness = 3;
     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER HONEY.jpg", scene);
     textureblack.diffuseTexture.uScale = 2;
     textureblack.diffuseTexture.vScale = 2;
     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
     hero.material = textureblack;
 });
 regugd.addControl(button29, 0, 2);

 var button30 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER MID NIGHT BLUE.jpg ");
 button30.width =btnW;
 button30.height = btnH;
 button30.color = "#25BAFFFF";
 button30.cornerRadius = 100;
 button30.thickness = 0;
 button30.onPointerUpObservable.add(function () {
     currentButton.thickness = 0;
    currentButton = button30;
    leaname.text = "REGULAR CLASSIC\nLEATHER MID NIGHT BLUE";
    leaname.fontSize = "30%";
     currentButton.thickness = 3;
     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER MID NIGHT BLUE.jpg", scene);
     textureblack.diffuseTexture.uScale = 2;
     textureblack.diffuseTexture.vScale = 2;
     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
     hero.material = textureblack;
 });
 regugd.addControl(button30, 0, 3);

 var button31 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER RED.jpg ");
 button31.width =btnW;
 button31.height = btnH;
 button31.color = "#25BAFFFF";
 button31.cornerRadius = 100;
 button31.thickness = 0;
 button31.onPointerUpObservable.add(function () {
     currentButton.thickness = 0;
    currentButton = button31;
    leaname.text = "REGULAR CLASSIC\nLEATHER RED";
    leaname.fontSize = "40%";
     currentButton.thickness = 3;
     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER RED.jpg", scene);
     textureblack.diffuseTexture.uScale = 2;
     textureblack.diffuseTexture.vScale = 2;
     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
     hero.material = textureblack;
 });
 regugd.addControl(button31, 0, 4);

 var button32 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER TAN.jpg ");
 button32.width =btnW;
 button32.height = btnH;
 button32.color = "#25BAFFFF";
 button32.cornerRadius = 100;
 button32.thickness= 0;
 button32.onPointerUpObservable.add(function () {
     currentButton.thickness = 0;
    currentButton = button32;
    leaname.text = "REGULAR CLASSIC\nLEATHER TAN";
    leaname.fontSize = "40%";
     currentButton.thickness = 3;
     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER TAN.jpg", scene);
     textureblack.diffuseTexture.uScale = 2;
     textureblack.diffuseTexture.vScale = 2;
     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
     hero.material = textureblack;
 });
 regugd.addControl(button32, 0, 5);


/////////////////////////////////////////////////////////////////////////////////////// baby croco 
var babycrocotab = new BABYLON.GUI.Rectangle("babycroco");
babycrocotab.width = "100%";
babycrocotab.height = "97%";
babycrocotab.verticalAlignment = "Center";
babycrocotab.horizontalAlignment = "Center";
babycrocotab.top = "3%";
babycrocotab.paddingRight = "1%";
babycrocotab.cornerRadius = 0;
babycrocotab.color = "black";
babycrocotab.thickness = 0;
babycrocotab.background = "";
gd.addControl(babycrocotab, 5);


var babycrocogd = new BABYLON.GUI.Grid("babycroco");
babycrocogd.width = "100%";
babycrocogd.height = "100%";
babycrocogd.addRowDefinition(0.30);
babycrocogd.addRowDefinition(0.70);
babycrocotab.addControl(babycrocogd);

var babytab = new BABYLON.GUI.Rectangle();
babytab.width = "100%";
babytab.height = "100%";
babytab.color = "black";
babytab.thickness = .5;
babycrocogd.addControl(babytab, 0);

var babyText = new BABYLON.GUI.TextBlock();
babyText.text = "BABY CROCO";
babyText.fontSize = fontsizes;
babytab.addControl(babyText);

var babycrtab = new BABYLON.GUI.Rectangle();
babycrtab.width = "100%";
babycrtab.height = "100%";
babycrtab.color = "black";
babycrtab.thickness = 1;
babycrocogd.addControl(babycrtab, 1);

var babygd = new BABYLON.GUI.Grid("kaligd");
babygd.width = "100%";
babygd.height = "100%";
babygd.addRowDefinition(1 );
babygd.addColumnDefinition(1 / 6);
babygd.addColumnDefinition(1 / 6);
babygd.addColumnDefinition(1 / 6);
babygd.addColumnDefinition(1 / 6);
babygd.addColumnDefinition(1 / 6);
babygd.addColumnDefinition(1 / 6);
babycrtab.addControl(babygd);


    var L1Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture1", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BLACK.jpg");
        L1Btn.width = btnW;
        L1Btn.height = btnH;
        L1Btn.color = "#25BAFFFF";
        L1Btn.cornerRadius = 100;
        L1Btn.thickness = 0;
        L1Btn.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = L1Btn;
            leaname.text = "BABY CROCO\nBLACK";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        babygd.addControl(L1Btn, 0, 0);

        var L2Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BROWN.jpg ");
        L2Btn.width = btnW;
        L2Btn.height = btnH;
        L2Btn.color = "#25BAFFFF";
        L2Btn.cornerRadius = 100;
        L2Btn.thickness = 0;
        L2Btn.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = L2Btn;
            leaname.text = "BABY CROCO\nBROWN";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        babygd.addControl(L2Btn, 0, 1);


        var L3Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO EMERALD.jpg ");
        L3Btn.width = btnW;
        L3Btn.height =  btnH;
        L3Btn.color = "#25BAFFFF";
        L3Btn.cornerRadius = 100;
        L3Btn.thickness = 0;
        L3Btn.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = L3Btn;
            leaname.text = "BABY CROCO\nEMERALD";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO EMERALD.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        babygd.addControl(L3Btn, 0, 2);



        var L4Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture4", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO MID NIGHT BLUE.jpg ");
        L4Btn.width = btnW;
        L4Btn.height = btnH;
        L4Btn.color = "#25BAFFFF";
        L4Btn.cornerRadius = 100;
        L4Btn.thickness = 0;
        L4Btn.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = L4Btn;
            leaname.text = "BABY CROCO\nMID NIGHT BLUE";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO MID NIGHT BLUE.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        babygd.addControl(L4Btn, 0, 3);

        var L5Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture5", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO PINK.jpg ");
        L5Btn.width = btnW;
        L5Btn.height = btnH;
        L5Btn.color = "#25BAFFFF";
        L5Btn.cornerRadius = 100;
        L5Btn.thickness = 0;
        L5Btn.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = L5Btn;
            leaname.text = "BABY CROCO\nPINK";
            leaname.fontSize = "40%";
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO PINK.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        babygd.addControl(L5Btn, 0, 4);






////////////////////////////////////////////////    leather lining main canvas 

        var leatherliningtab = new BABYLON.GUI.Rectangle();
        leatherliningtab.isVisible = false;
        leatherliningtab.width = "25%";
        leatherliningtab.height = "100%";
        leatherliningtab.verticalAlignment = "Center";
        leatherliningtab.horizontalAlignment = "Center";
        leatherliningtab.color ="black";
        leatherliningtab.thickness = 0;
        leatherliningtab.background = "#F5F4F2";
        leatherliningtab.shadowColor = "black";
        leatherliningtab.shadowOffsetX = 3;
        leatherliningtab.shadowBlur = 15;
        leatherliningtab.shadowColor = "#7C7878FF";
        advancedTexture.addControl(leatherliningtab);

        var lininggd = new BABYLON.GUI.Grid();
        lininggd.width = "100%";
        lininggd.height = "100%";
        lininggd.paddingTop = "0%";
        lininggd.addRowDefinition(0.05);
        lininggd.addRowDefinition(0.95);
        lininggd.addColumnDefinition(0.09);
        lininggd.addColumnDefinition(0.91);
        leatherliningtab.addControl(lininggd);

        var leliText = new BABYLON.GUI.TextBlock();
        leliText.text = "LININGS";
        leliText.fontSize = "98%";
        lininggd.addControl(leliText,0,1);

        var liclose = BABYLON.GUI.Button.CreateImageOnlyButton("close", " https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/hidesign%20pics/back.png");
        liclose.width = "90%"
        liclose.height = "90%";
        liclose.color = "black";
        liclose.fontSize = "90%";
        liclose.left = "1%";
        liclose.cornerRadius = 3;
        liclose.thickness = 0;
        liclose.onPointerUpObservable.add(function () {
            leatherliningtab.isVisible = false;
            mainpanel.isVisible = true;
            descrippanel.isVisible = false;
        });
        lininggd.addControl(liclose, 0, 0);

        var Leatherlinintab = new BABYLON.GUI.Rectangle();
        Leatherlinintab.width = "100%";
        Leatherlinintab.height = "100%";
        Leatherlinintab.verticalAlignment = "Center";
        Leatherlinintab.horizontalAlignment = "Center";
        Leatherlinintab.color ="black";
        Leatherlinintab.thickness = 0;
        lininggd.addControl(Leatherlinintab, 1, 1);


        var scroll1 = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
        scroll1.width = "100%";
        scroll1.height = "100%";
        scroll1.barSize = "10";
        scroll1.thumbImage = new BABYLON.GUI.Image("thumb", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Bar.png");
        scroll1.barImage = new BABYLON.GUI.Image("bar", "");
        scroll1.thumbLength = 0.3;
        scroll1.thumbHeight = 1;
        scroll1.barImageHeight = 0.3;
        scroll1.barBackground = "blue";
        scroll1.onPointerEnterObservable.add(function(){
            console.log("in");
            camera1.detachControl();
            bgcamera.detachControl();
        });
        scroll1.onPointerOutObservable.add(function(){
            console.log("out");        
            camera1.attachControl(leatherliningtab, true);
            bgcamera.attachControl(leatherliningtab, true);
        });
        Leatherlinintab.addControl(scroll1)

        var gd1 = new BABYLON.GUI.Grid();
        gd1.width = "100%";
        gd1.height = "100%";
        gd1.addRowDefinition(1/6);
        gd1.addRowDefinition(1/6);
        gd1.addRowDefinition(1/6);
        gd1.addRowDefinition(1/6);
        gd1.addRowDefinition(1/6);
        gd1.addRowDefinition(1/6);
        scroll1.addControl(gd1);
////////////////////////////////////////////////////////////////////////////////////////////////

        var linText = new BABYLON.GUI.TextBlock();
        linText.text = "LEATHER LINING";
        linText.fontSize = "34%";
        gd1.addControl(linText,0);

        var LINgd = new BABYLON.GUI.Grid("kaligd");
        LINgd.width = "100%";
        LINgd.height = "100%";
        LINgd.addRowDefinition(0.30);
        LINgd.addRowDefinition(0.70);
        gd1.addControl(LINgd,1);

        var Ptab = new BABYLON.GUI.Rectangle();
        Ptab.width = "100%";
        Ptab.height = "100%";
        Ptab.color = "black";
        Ptab.thickness = .5;
        LINgd.addControl(Ptab, 0);

        var lText = new BABYLON.GUI.TextBlock();
        lText.text = "KID SUEDE";
        lText.fontSize = "50%";
        Ptab.addControl(lText,0);

        var PLtab = new BABYLON.GUI.Rectangle();
        PLtab.width = "100%";
        PLtab.height = "100%";
        PLtab.color = "black";
        PLtab.thickness = 1;
        LINgd.addControl(PLtab, 1);

        var LININGgd = new BABYLON.GUI.Grid("kaligd");
        LININGgd.width = "100%";
        LININGgd.height = "100%";
        LININGgd.addRowDefinition(1);
        LININGgd.addColumnDefinition(1 / 6);
        LININGgd.addColumnDefinition(1 / 6);
        LININGgd.addColumnDefinition(1 / 6);
        LININGgd.addColumnDefinition(1 / 6);
        LININGgd.addColumnDefinition(1 / 6);
        LININGgd.addColumnDefinition(1 / 6);
        PLtab.addControl(LININGgd,1);
        
        var crnt;
        
        var button15 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER BROWN.jpg ");
        crnt = button15;
        button15.width = "90%";
        button15.height = "70%";
        button15.color = "#25BAFFFF";
        button15.cornerRadius = 100;
        button15.thickness = 0;
        button15.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = button15;
            leaname.text = "KID SUEDE GENUINE\nLEATHER BROWN";
            leaname.fontSize = "30%";
            crnt.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        LININGgd.addControl(button15, 0, 0);

        var button16 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER TAN.jpg ");
        button16.width = "90%"
        button16.height = "70%";
        button16.color = "#25BAFFFF";
        button16.cornerRadius = 100;
        button16.thickness = 0;
        button16.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = button16;
            leaname.text = "KID SUEDE GENUINE\nLEATHER TAN";
            leaname.fontSize = "30%";
            crnt.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER TAN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        LININGgd.addControl(button16, 0, 1);

/////////////////////////////////



        var HBLText = new BABYLON.GUI.TextBlock();
        HBLText.text = "FABRIC LINING";
        HBLText.fontSize = "35%";
        gd1.addControl(HBLText,2);

    
        var HBgd = new BABYLON.GUI.Grid("kalharigd");
        HBgd.isVisible = true;
        HBgd.width = "100%";
        HBgd.height = "100%";
        HBgd.addRowDefinition(0.30);
        HBgd.addRowDefinition(0.70);
        gd1.addControl(HBgd,3);

        var hbtab = new BABYLON.GUI.Rectangle();
        hbtab.width = "100%";
        hbtab.height = "100%";
        hbtab.color = "black";
        hbtab.thickness = 0.5;
        HBgd.addControl(hbtab, 0);

        var HBLText = new BABYLON.GUI.TextBlock();
        HBLText.text = "HIDESIGN BRANDED LINING";
        HBLText.fontSize = "50%";
        hbtab.addControl(HBLText);

        var htab = new BABYLON.GUI.Rectangle();
        htab.width = "100%";
        htab.height = "100%";
        htab.color = "black";
        htab.thickness = 1;
        HBgd.addControl(htab, 1);

        var hbrgd = new BABYLON.GUI.Grid("kaligd");
        hbrgd.isVisible = true;
        hbrgd.width = "100%";
        hbrgd.height = "100%";
        hbrgd.addRowDefinition(1 );
        hbrgd.addColumnDefinition(1 / 6);
        hbrgd.addColumnDefinition(1 / 6);
        hbrgd.addColumnDefinition(1 / 6);
        hbrgd.addColumnDefinition(1 / 6);
        hbrgd.addColumnDefinition(1 / 6);
        hbrgd.addColumnDefinition(1 / 6);
        HBgd.addControl(hbrgd,1);

        var L8Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture8", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BIG BROWN.jpg ");
        L8Btn.width = "90%";
        L8Btn.height = "70%";
        L8Btn.color = "#25BAFFFF";
        L8Btn.cornerRadius = 100;
        L8Btn.thickness = 0;
        L8Btn.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = L8Btn;
            leaname.text = "HIDESIGN BRANDED\nLINING BIG BROWN";
            leaname.fontSize = "30%";
            crnt.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BIG BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        hbrgd.addControl(L8Btn, 0, 0);

        var L9Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture9", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BLACK.jpg ");
        L9Btn.width = "90%";
        L9Btn.height = "70%";
        L9Btn.color = "#25BAFFFF";
        L9Btn.cornerRadius = 100;
        L9Btn.thickness = 0;
        L9Btn.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = L4Btn;
            crnt.thickness = 3;
            leaname.text = "HIDESIGN BRANDED\nLINING BLACK";
            leaname.fontSize = "30%";
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        hbrgd.addControl(L9Btn, 0, 1);

//////////////////////////////////////////////////////////




var BFgd = new BABYLON.GUI.Grid("kalharigd");
BFgd.isVisible = true;
BFgd.top = "0%";
BFgd.width = "100%";
BFgd.height = "100%";
BFgd.addRowDefinition(0.30);
BFgd.addRowDefinition(0.70);
gd1.addControl(BFgd,4);

var BBFtab = new BABYLON.GUI.Rectangle();
BBFtab.width = "100%";
BBFtab.height = "100%";
BBFtab.color = "black";
BBFtab.thickness = 0.5;
BFgd.addControl(BBFtab, 0);

var BGFText = new BABYLON.GUI.TextBlock();
BGFText.text = "BRUSHED FABRIC";
BGFText.fontSize = "50%";
BBFtab.addControl(BGFText);

var Btab = new BABYLON.GUI.Rectangle();
Btab.width = "100%";
Btab.height = "100%";
Btab.color = "black";
Btab.thickness = 1;
BFgd.addControl(Btab, 1);

var Bgd = new BABYLON.GUI.Grid("kaligd");
Bgd.isVisible = true;
Bgd.width = "100%";
Bgd.height = "100%";
Bgd.addRowDefinition(1);
Bgd.addColumnDefinition(1 / 6);
Bgd.addColumnDefinition(1 / 6);
Bgd.addColumnDefinition(1 / 6);
Bgd.addColumnDefinition(1 / 6);
Bgd.addColumnDefinition(1 / 6);
Bgd.addColumnDefinition(1 / 6);
Btab.addControl(Bgd);

var L6Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture6", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE BLUE.jpg ");
L6Btn.width = "90%";
L6Btn.height = "70%";
L6Btn.color = "#25BAFFFF";
L6Btn.cornerRadius = 100;
L6Btn.thickness = 0;
L6Btn.onPointerUpObservable.add(function () {
    crnt.thickness = 0;
    crnt = L6Btn;
    leaname.text = "BRUSHED POLYESTER\nSUEDE BLUE";
    leaname.fontSize = "30%";
    crnt.thickness = 3;
    var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
    textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE BLUE.jpg", scene);
    textureblack.diffuseTexture.uScale = 2;
    textureblack.diffuseTexture.vScale = 2;
    textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
    hero.material = textureblack;
});
Bgd.addControl(L6Btn, 0, 0);

var L7Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture7", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE RED.jpg ");
L7Btn.width = "90%";
L7Btn.height = "70%";
L7Btn.color = "#25BAFFFF";
L7Btn.cornerRadius = 100;
L7Btn.thickness = 0;
L7Btn.onPointerUpObservable.add(function () {
    crnt.thickness = 0;
    crnt = L7Btn;
    leaname.text = "BRUSHED POLYESTER\nSUEDE RED";
    leaname.fontSize = "30%";
    crnt.thickness = 3;
    var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
    textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE RED.jpg", scene);
    textureblack.diffuseTexture.uScale = 2;
    textureblack.diffuseTexture.vScale = 2;
    textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
    hero.material = textureblack;
});
Bgd.addControl(L7Btn, 0, 1);

});



var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);
    advancedTexture.layer.layerMask = 0x10000000;





    
    var anipanel = new BABYLON.GUI.Rectangle();
    //anipanel.isVisible = false;
    anipanel.verticalAlignment = "Center";
    anipanel.horizontalAlignment = "Top";
    anipanel.width = "10%";
    anipanel.height = "6%";
    anipanel.left = "88%";
    anipanel.top = "30%";
    anipanel.bottom = "30%";
    anipanel.cornerRadius = 10;
    anipanel.color = "Grey";
    anipanel.thickness = 0;
    anipanel.background = "#F5F4F2";
    anipanel.image = "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE RED.jpg";
    anipanel.resizeToFit = true;
    advancedTexture.addControl(anipanel);


    var image = new BABYLON.GUI.Image("Image", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Logo.png");
    image.width = "105%";
    image.height = "55%";
    grid.addControl(image,3); 

    var AnimationgD = new BABYLON.GUI.Grid("kaligd");
    AnimationgD.width = "100%";
    AnimationgD.height = "100%";
    AnimationgD.addRowDefinition(1);
    // AnimationgD.addRowDefinition(0.80);
    // AnimationgD.addRowDefinition(0.10);
    AnimationgD.addColumnDefinition(1 / 2);
    AnimationgD.addColumnDefinition(1 / 2);
    anipanel.addControl(AnimationgD);




    var button1 = BABYLON.GUI.Button.CreateSimpleButton("Open_Btn", );
    button1.width = "100%"
    button1.height = "100%";
    button1.fontSize = "40%";
    button1.textBlock.text = "OPEN";
    button1.color = "white";
    button1.resizeToFit = true;
    button1.cornerRadius = 100;
    button1.background = "green";
    button1.onPointerUpObservable.add(function () {
        const aniGr = scene.animationGroups
        // console.log(aniGr)
        scene.animationGroups.forEach((g) => {
            g.stop()
        })
        let someAnim = scene.animationGroups[1]
        let someAnims = scene.animationGroups[2]
        let someAnim1 = scene.animationGroups[10]
        someAnim.play()
        someAnim.loopAnimation = false
        someAnims.play()
        someAnims.loopAnimation = false
        someAnim1.play()
        someAnim1.loopAnimation = false;
        button1.isVisible = false;
        CLOSED.isVisible = true;
    });
    AnimationgD.addControl(button1,0,0);


    var CLOSED = BABYLON.GUI.Button.CreateSimpleButton("_Btn", );
    CLOSED.isVisible = false;
    CLOSED.width = "100%"
    CLOSED.height = "100%";
    CLOSED.fontSize = "40%";
    CLOSED.textBlock.text = "CLOSE";
    CLOSED.color = "white";
    CLOSED.resizeToFit = true;
    CLOSED.cornerRadius = 100;
    CLOSED.background = "red";
    CLOSED.onPointerUpObservable.add(function () {
        const aniGr = scene.animationGroups
        // console.log(aniGr)
        scene.animationGroups.forEach((g) => {
            g.stop()
        })
        let someAnim = scene.animationGroups[1]
        let someAnims = scene.animationGroups[2]
        let someAnim1 = scene.animationGroups[10]
        someAnim.play()
        someAnim.loopAnimation = false
        someAnims.play()
        someAnims.loopAnimation = false
        someAnim1.play()
        someAnim1.loopAnimation = false;
        button1.isVisible = true;
        CLOSED.isVisible = false;

    });
    AnimationgD.addControl(CLOSED,0,1);








    var descrippanel = new BABYLON.GUI.Rectangle();
    descrippanel.isVisible = false;
    descrippanel.verticalAlignment = "Center";
    descrippanel.horizontalAlignment = "Top";
    descrippanel.width = "20%";
    descrippanel.height = "10%";
    descrippanel.left = "79.8%";
    descrippanel.top = "1%";
    descrippanel.bottom = "30%";
    descrippanel.cornerRadius = 0;
    descrippanel.color = "Grey";
    descrippanel.thickness = 0;
    descrippanel.background = "#F5F4F2";
    descrippanel.shadowColor = "black";
    descrippanel.shadowOffsetX = 3;
    descrippanel.shadowBlur = 15;
    descrippanel.shadowColor = "#7C7878FF";
    descrippanel.resizeToFit = true;
    advancedTexture.addControl(descrippanel);

    var leaname = new BABYLON.GUI.TextBlock();
    leaname.text = "";
    leaname.color = "green";
    leaname.fontSize = "40%";
    leaname.resizeToFit = true;
    descrippanel.addControl(leaname);
     

/// animations 
 var animationGroup = new BABYLON.AnimationGroup("my group");


/////// CAM AUTOROTATION defaults

camera1.speed = 50;

//camera1.useAutoRotationBehavior = false;
camera1.useAutoRotationBehavior = true;
camera1.idleRotationWaitTime = 3000;
camera1.idleRotationSpinupTime = 1000;
camera1.autoRotationBehavior.idleRotationSpeed = 1;




    window.addEventListener("resize", () => { advancedTexture.scaleTo(engine.getRenderWidth(), engine.getRenderHeight()); });

    return scene;
}

// window.initFunction = async function() {
//     var asyncEngineCreation = async function() {
//         try {
//             return createDefaultEngine();
//         } catch(e) {
//             return createDefaultEngine();
//         }
//     }
//     window.engine = await asyncEngineCreation();
//     if (!engine) throw 'engine should not be null.';
//     startRenderLoop(engine, canvas);
//     window.scene = createScene();
//     console.log("scene width and height will be " + window.scene ) 
// };

window.initFunction = async function () {
    var asyncEngineCreation = async function () {
        try {
            return createDefaultEngine();
        } catch (e) {
            return createDefaultEngine();
        }
    }
    window.engine = await asyncEngineCreation();
    if (!engine) throw 'engine should not be null.';
    startRenderLoop(engine, canvas);
    window.scene = createScene();
    // console.log("scene width and height will be " + window.scene ) 
};



initFunction().then(() => {
    sceneToRender = scene
});

function resize() {
    setTimeout(function () {
        engine.resize();
        if ($(window).width() < 450) {
            alert('For better experience open in landscpe mode');
        }
        // console.log("safygfasghfsdhgciujkshgdcj")
    }, 180);

}

// Resize
window.addEventListener("resize", async function () {
    engine.resize();
    // console.log("safygfasghfsdhgciujkshgdcj")
});