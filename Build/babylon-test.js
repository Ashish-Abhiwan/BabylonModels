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
    scene.activeCamera = camera1;
    scene.activeCamera.attachControl(canvas, true);
    camera1.lowerRadiusLimit = 3;
    camera1.upperRadiusLimit = 6;
    camera1.wheelDeltaPercentage = 0.05;
    camera1.targetScreenOffset = new BABYLON.Vector3(0.5, 0, 0); 

    var bgcamera = camera1.clone("bgcamera");
    bgcamera.attachControl(canvas, true);
    bgcamera.layerMask = 0x10000000;

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
        bagmaterials.diffuseTexture.uScale = 5;
        bagmaterials.diffuseTexture.vScale = 5;
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

        var canvas = new BABYLON.GUI.Rectangle();
        canvas.width = "25%";
        canvas.height = "100%";
        canvas.verticalAlignment = "Center";
        canvas.horizontalAlignment = "Center";
        canvas.top = "";
        canvas.left = "0.5%";
        canvas.cornerRadius = 0;
        canvas.color = "Grey";
        canvas.thickness = 0;
        canvas.background = "#F5F4F2";
        canvas.shadowColor = "black";
        canvas.shadowOffsetX = 3;
        canvas.shadowBlur = 15;
        canvas.shadowColor = "#7C7878FF";
        advancedTexture.addControl(canvas);

        var grid = new BABYLON.GUI.Grid();
        grid.width = "100%";
        grid.height = "100%";
        grid.addRowDefinition(0.20);
        grid.addRowDefinition(0.20);
        grid.addRowDefinition(0.60);
        canvas.addControl(grid);



        ///////////////////  Buttons of the customize options 

        var leather = BABYLON.GUI.Button.CreateSimpleButton("Leather", "LEATHER");
        leather.width = "90%"
        leather.height = "40%";
        leather.color = "White";
        leather.background = "#2A1502FF";
        leather.cornerRadius = 3;
        leather.thickness = 2;
        leather.fontSize = "15%";
        leather.shadowColor = "black";
        leather.shadowOffsetX = 3;
        leather.shadowBlur = 15;
        leather.shadowColor = "#7C7878FF";
        leather.onPointerUpObservable.add(function () {
            // activatetab = leatherstab;
            leatherstab.isVisible = true;
            canvas.isVisible = false;
        });
        grid.addControl(leather, 0);

        var leatherlining = BABYLON.GUI.Button.CreateSimpleButton("Leather lining", "LEATHER LINING");
        leatherlining.width = "90%"
        leatherlining.height = "40%";
        leatherlining.color = "white";
        leatherlining.background = "#2A1502FF";
        leatherlining.cornerRadius = 3;
        leatherlining.thickness = 2;
        leatherlining.fontSize = "15%";
        leatherlining.shadowColor = "black";
        leatherlining.shadowOffsetX = 3;
        leatherlining.shadowBlur = 15;
        leatherlining.shadowColor = "#7C7878FF";
        leatherlining.onPointerUpObservable.add(function () {
            leatherliningtab.isVisible = true;
            canvas.isVisible = false;
            
        });
        grid.addControl(leatherlining, 1);


        var rect4 = new BABYLON.GUI.Rectangle();
        rect4.width = "97%";
        rect4.height = "80%";
        rect4.color = "black";
        rect4.thickness = 2;
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
        namefeild.autoStretchWidth = true;
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
        var tag1 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/PlainTag.png");
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

        var tag2 = BABYLON.GUI.Button.CreateImageOnlyButton("Tag2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/GoldTag.png");
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
          
            canvas.isVisible = true;
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
        scroll.thumbImage = new BABYLON.GUI.Image("thumb", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Bars.png");
        scroll.barImage = new BABYLON.GUI.Image("bar", "");
        scroll.thumbLength = 0.3;
        scroll.thumbHeight = 1;
        scroll.barImageHeight = 0.3;
        scroll.barBackground = "blue";
        scroll.onPointerEnterObservable.add(function(){
           // console.log("in");
            camera1.detachControl();
            bgcamera.detachControl();
        });
        scroll.onPointerOutObservable.add(function(){
          //  console.log("out");        
            camera1.attachControl(canvas, true);
            bgcamera.attachControl(canvas, true);
        });
        Leathertab.addControl(scroll);

        var gd = new BABYLON.GUI.Grid();
        gd.width = "100%";
        gd.height = "170%";
        gd.addRowDefinition(1 / 7   );
        gd.addRowDefinition(1 / 7);
        gd.addRowDefinition(1 / 7);
        gd.addRowDefinition(1 / 7);
        gd.addRowDefinition(1 / 7);
        gd.addRowDefinition(1 / 7);
        gd.addRowDefinition(1 / 7);
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
        kalaharigd.addRowDefinition(0.20);
        kalaharigd.addRowDefinition(0.80);
        kalaharitab.addControl(kalaharigd);

        var kaltab = new BABYLON.GUI.Rectangle();
        kaltab.width = "100%";
        kaltab.height = "100%";
        kaltab.color = "black";
        kaltab.thickness = 2;
        kalaharigd.addControl(kaltab, 0);

        var lelText = new BABYLON.GUI.TextBlock();
        lelText.text = "KALAHARI";
        lelText.fontSize = fontsizes;
        kaltab.addControl(lelText);

        var kalitab = new BABYLON.GUI.Rectangle();
        kalitab.width = "100%";
        kalitab.height = "100%";
        kalitab.color = "black";
        kalitab.thickness = 2;
        kalaharigd.addControl(kalitab, 1);
        
        var kaligd = new BABYLON.GUI.Grid("kaligd");
        kaligd.width = "100%";
        kaligd.height = "100%";
        kaligd.addRowDefinition(1 / 2);
        kaligd.addRowDefinition(1 / 2);
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
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI TANGERINE.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        kaligd.addControl(button14, 0, 3);

 /////////////////////////////////////////////////////////////////////////////// kid suede leather option 


        var kidsudetab = new BABYLON.GUI.Rectangle();
        kidsudetab.width = "100%";
        kidsudetab.height = "97%";
        kidsudetab.verticalAlignment = "Center";
        kidsudetab.horizontalAlignment = "Center";
        kidsudetab.top = "3%";
        kidsudetab.paddingRight = "1%";
        gd.addControl(kidsudetab, 1);


        var kalharigd = new BABYLON.GUI.Grid("kalharigd");
        kalharigd.isVisible = true;
        kalharigd.width = "100%";
        kalharigd.height = "100%";
        kalharigd.addRowDefinition(0.20);
        kalharigd.addRowDefinition(0.80);
        kidsudetab.addControl(kalharigd);

        var kidtab = new BABYLON.GUI.Rectangle();
        kidtab.width = "100%";
        kidtab.height = "100%";
        kidtab.color = "black";
        kidtab.thickness = 2;
        kalharigd.addControl(kidtab, 0);

        var lelext = new BABYLON.GUI.TextBlock();
        lelext.text = "KID SUEDE GENUINE LEATHER";
        lelext.fontSize = fontsizes;
        kidtab.addControl(lelext);

        var kidsab = new BABYLON.GUI.Rectangle();
        kidsab.width = "100%";
        kidsab.height = "100%";
        kidsab.color = "black";
        kidsab.thickness = 2;
        kalharigd.addControl(kidsab, 1);

        var kalgd = new BABYLON.GUI.Grid("kaligd");
        kalgd.isVisible = true;
        kalgd.width = "100%";
        kalgd.height = "100%";
        kalgd.paddingTop = "0%";
        kalgd.addRowDefinition(1 / 2);
        kalgd.addRowDefinition(1 / 2);
        kalgd.addColumnDefinition(1 / 6);
        kalgd.addColumnDefinition(1 / 6);
        kalgd.addColumnDefinition(1 / 6);
        kalgd.addColumnDefinition(1 / 6);
        kalgd.addColumnDefinition(1 / 6);
        kalgd.addColumnDefinition(1 / 6);
        kidsab.addControl(kalgd);


        var button15 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER BROWN.jpg ");
        button15.width = btnW;
        button15.height = btnH;
        button15.color = "#25BAFFFF";
        button15.cornerRadius = 100;
        button15.thickness = 0;
        button15.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button15;
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        kalgd.addControl(button15, 0, 0);

        var button16 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER TAN.jpg ");
        button16.width = btnW
        button16.height = btnH;
        button16.color = "#25BAFFFF";
        button16.cornerRadius = 100;
        button16.thickness = 0;
        button16.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button16;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER TAN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        kalgd.addControl(button16, 0, 1);

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
        gd.addControl(luxostrichtab, 2);


        var luxostgd = new BABYLON.GUI.Grid("kalharigd");
        luxostgd.isVisible = true;
        luxostgd.width = "100%";
        luxostgd.height = "100%";
        luxostgd.paddingBottom = "0%";
        luxostgd.addRowDefinition(0.20);
        luxostgd.addRowDefinition(0.80);
        luxostrichtab.addControl(luxostgd);

        var lxtab = new BABYLON.GUI.Rectangle();
        lxtab.width = "100%";
        lxtab.height = "100%";
        lxtab.color = "black";
        lxtab.thickness = 2;
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
        lxotab.thickness = 2;
        lxotab.background = "";
        luxostgd.addControl(lxotab, 1);

        var ostgd = new BABYLON.GUI.Grid("kaligd");
        ostgd.isVisible = true;
        ostgd.width = "100%";
        ostgd.height = "100%";
        ostgd.paddingTop = "0%";
        ostgd.addRowDefinition(1 / 2);
        ostgd.addRowDefinition(1 / 2);
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
        gd.addControl(ranchtab, 3);


        var ranchgd = new BABYLON.GUI.Grid("kalharigd");
        ranchgd.isVisible = true;
        ranchgd.width = "100%";
        ranchgd.height = "100%";
        ranchgd.paddingBottom = "0%";
        ranchgd.addRowDefinition(0.20);
        ranchgd.addRowDefinition(0.80);
        ranchtab.addControl(ranchgd);

        var ttab = new BABYLON.GUI.Rectangle();
        ttab.width = "100%";
        ttab.height = "100%";
        ttab.verticalAlignment = "Center";
        ttab.horizontalAlignment = "Center";
        ttab.top = "0%";
        ttab.paddingRight = "0%";
        ttab.cornerRadius = 0;
        ttab.color = "black";
        ttab.thickness = 2;
        ttab.background = "";
        ranchgd.addControl(ttab, 0);

        var rantext = new BABYLON.GUI.TextBlock();
        rantext.text = "RANCH SMOOTH CALF";
        rantext.fontSize = fontsizes;
        ttab.addControl(rantext);

        var ranctab = new BABYLON.GUI.Rectangle();
        ranctab.width = "100%";
        ranctab.height = "100%";
        ranctab.color = "black";
        ranctab.thickness = 2;
        ranctab.background = "";
        ranchgd.addControl(ranctab, 1);

        var rangd = new BABYLON.GUI.Grid("kaligd");
        rangd.isVisible = true;
        rangd.width = "100%";
        rangd.height = "100%";
        rangd.paddingTop = "0%";
        rangd.addRowDefinition(1 / 2);
        rangd.addRowDefinition(1 / 2);
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
        gd.addControl(deartab, 4);


        var deargd = new BABYLON.GUI.Grid("kalharigd");
        deargd.isVisible = true;
        deargd.width = "100%";
        deargd.height = "100%";
        deargd.paddingBottom = "0%";
        deargd.addRowDefinition(0.20);
        deargd.addRowDefinition(0.80);
        deartab.addControl(deargd);

        var rgtab = new BABYLON.GUI.Rectangle();
        rgtab.width = "100%";
        rgtab.height = "100%";
        rgtab.color = "black";
        rgtab.thickness = 2;
        deargd.addControl(rgtab, 0);

        var deartext = new BABYLON.GUI.TextBlock();
        deartext.text = "REAL DEER";
        deartext.fontSize = fontsizes;
        rgtab.addControl(deartext);

        var deertab = new BABYLON.GUI.Rectangle();
        deertab.width = "100%";
        deertab.height = "100%";
        deertab.color = "black";
        deertab.thickness = 2;
        deertab.background = "";
        deargd.addControl(deertab, 1);

        var dearsgd = new BABYLON.GUI.Grid("kaligd");
        dearsgd.isVisible = true;
        dearsgd.width = "100%";
        dearsgd.height = "100%";
        dearsgd.paddingTop = "0%";
        dearsgd.addRowDefinition(1 / 2);
        dearsgd.addRowDefinition(1 / 2);
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
gd.addControl(regulartab, 5);


var regulargd = new BABYLON.GUI.Grid("kalharigd");
regulargd.isVisible = true;
regulargd.width = "100%";
regulargd.height = "100%";
regulargd.paddingBottom = "0%";
regulargd.addRowDefinition(0.20);
regulargd.addRowDefinition(0.80);
regulartab.addControl(regulargd);

var rgtab = new BABYLON.GUI.Rectangle();
rgtab.width = "100%";
rgtab.height = "100%";
rgtab.color = "black";
rgtab.thickness = 2;
regulargd.addControl(rgtab, 0);

var regutext = new BABYLON.GUI.TextBlock();
regutext.text = "REGULAR CLASSIC";
regutext.fontSize = fontsizes;
rgtab.addControl(regutext);

var regtab = new BABYLON.GUI.Rectangle();
regtab.width = "100%";
regtab.height = "100%";
regtab.color = "black";
regtab.thickness = 2;
regulargd.addControl(regtab, 1);

var regugd = new BABYLON.GUI.Grid("kaligd");
regugd.isVisible = true;
regugd.width = "100%";
regugd.height = "100%";
regugd.paddingTop = "0%";
regugd.addRowDefinition(1 / 2);
regugd.addRowDefinition(1 / 2);
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
gd.addControl(babycrocotab, 6);


var babycrocogd = new BABYLON.GUI.Grid("babycroco");
babycrocogd.width = "100%";
babycrocogd.height = "100%";
babycrocogd.addRowDefinition(0.20);
babycrocogd.addRowDefinition(0.80);
babycrocotab.addControl(babycrocogd);

var babytab = new BABYLON.GUI.Rectangle();
babytab.width = "100%";
babytab.height = "100%";
babytab.color = "black";
babytab.thickness = 2;
babycrocogd.addControl(babytab, 0);

var babyText = new BABYLON.GUI.TextBlock();
babyText.text = "BABY CROCO";
babyText.fontSize = fontsizes;
babytab.addControl(babyText);

var babycrtab = new BABYLON.GUI.Rectangle();
babycrtab.width = "100%";
babycrtab.height = "100%";
babycrtab.color = "black";
babycrtab.thickness = 2;
babycrocogd.addControl(babycrtab, 1);

var babygd = new BABYLON.GUI.Grid("kaligd");
babygd.width = "100%";
babygd.height = "100%";
babygd.addRowDefinition(1 / 2);
babygd.addRowDefinition(1 / 2);
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
        leatherliningtab.background = "#F5F4F2";
        leatherliningtab.shadowColor = "black";
        leatherliningtab.shadowOffsetX = 3;
        leatherliningtab.shadowBlur = 15;
        leatherliningtab.shadowColor = "#7C7878FF";
        advancedTexture.addControl(leatherliningtab);

        var lininggd = new BABYLON.GUI.Grid();
        lininggd.width = "100%";
        lininggd.height = "99%";
        lininggd.paddingTop = "0%";
        lininggd.addRowDefinition(0.04);
        lininggd.addRowDefinition(0.96);
        lininggd.addColumnDefinition(0.08);
        lininggd.addColumnDefinition(0.92);
        leatherliningtab.addControl(lininggd);

        var leliText = new BABYLON.GUI.TextBlock();
        leliText.text = "LEATHER LINING";
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
            canvas.isVisible = true;
        });
        lininggd.addControl(liclose, 0, 0);

        var Leatherlinintab = new BABYLON.GUI.Rectangle();
        Leatherlinintab.width = "100%";
        Leatherlinintab.height = "100%";
        lininggd.addControl(Leatherlinintab, 1, 1);


        var scroll1 = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
        scroll1.width = "100%";
        scroll1.height = "100%";
        scroll1.barSize = "10";
        scroll1.thumbImage = new BABYLON.GUI.Image("thumb", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Bars.png");
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
        gd1.addRowDefinition(1 / 2);
        gd1.addRowDefinition(1 / 2);
        scroll1.addControl(gd1);

        var brushtab = new BABYLON.GUI.Rectangle("brushed polyster");
        brushtab.width = "100%";
        brushtab.height = "97%";
        brushtab.verticalAlignment = "Center";
        brushtab.horizontalAlignment = "Center";
        brushtab.top = "3%";
        brushtab.paddingRight = "1%";
        brushtab.cornerRadius = 0;
        brushtab.color = "black";
        brushtab.thickness = 0;
        brushtab.background = "";
        gd1.addControl(brushtab, 0);

        var Brushgd = new BABYLON.GUI.Grid("brushed ployster");
        Brushgd.width = "100%";
        Brushgd.height = "100%";
        Brushgd.addRowDefinition(0.20);
        Brushgd.addRowDefinition(0.80);
        brushtab.addControl(Brushgd);

        var brstab = new BABYLON.GUI.Rectangle();
        brstab.width = "100%";
        brstab.height = "100%";
        brstab.color = "black";
        brstab.thickness = 2;
        Brushgd.addControl(brstab, 0);

        var linText = new BABYLON.GUI.TextBlock();
        linText.text = "BRUSHED POLYSTER";
        linText.fontSize = "40%";
        brstab.addControl(linText);

        var POLtab = new BABYLON.GUI.Rectangle();
        POLtab.width = "100%";
        POLtab.height = "100%";
        POLtab.color = "black";
        POLtab.thickness = 2;
        Brushgd.addControl(POLtab, 1);

        var LININGgd = new BABYLON.GUI.Grid("kaligd");
        LININGgd.width = "100%";
        LININGgd.height = "100%";
        LININGgd.addRowDefinition(1 / 2);
        LININGgd.addRowDefinition(1 / 2);
        LININGgd.addColumnDefinition(1 / 6);
        LININGgd.addColumnDefinition(1 / 6);
        LININGgd.addColumnDefinition(1 / 6);
        LININGgd.addColumnDefinition(1 / 6);
        LININGgd.addColumnDefinition(1 / 6);
        LININGgd.addColumnDefinition(1 / 6);
        POLtab.addControl(LININGgd);
        
        var crnt;
        
        var L6Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture6", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE BLUE.jpg ");
        crnt = L6Btn;
        L6Btn.width = btnW;
        L6Btn.height = "40%";
        L6Btn.color = "#25BAFFFF";
        L6Btn.cornerRadius = 100;
        L6Btn.thickness = 0;
        L6Btn.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = L6Btn;
            crnt.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE BLUE.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        LININGgd.addControl(L6Btn, 0, 0);

        var L7Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture7", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE RED.jpg ");
        L7Btn.width = btnW;
        L7Btn.height = "40%";
        L7Btn.color = "#25BAFFFF";
        L7Btn.cornerRadius = 100;
        L7Btn.thickness = 0;
        L7Btn.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = L7Btn;
            crnt.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE RED.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        LININGgd.addControl(L7Btn, 0, 1);
/////////////////////////////////

        var HBLINtab = new BABYLON.GUI.Rectangle();
        HBLINtab.width = "100%";
        HBLINtab.height = "97%";
        HBLINtab.verticalAlignment = "Center";
        HBLINtab.horizontalAlignment = "Center";
        HBLINtab.top = "3%";
        HBLINtab.paddingRight = "1%";
        gd1.addControl(HBLINtab, 1);

        var HLIBgd = new BABYLON.GUI.Grid("kalharigd");
        HLIBgd.isVisible = true;
        HLIBgd.width = "100%";
        HLIBgd.height = "100%";
        HLIBgd.addRowDefinition(0.20);
        HLIBgd.addRowDefinition(0.80);
        HBLINtab.addControl(HLIBgd);

        var HIDtab = new BABYLON.GUI.Rectangle();
        HIDtab.width = "100%";
        HIDtab.height = "100%";
        HIDtab.color = "black";
        HIDtab.thickness = 2;
        HLIBgd.addControl(HIDtab, 0);

        var HBLText = new BABYLON.GUI.TextBlock();
        HBLText.text = "HIDESIGN BRANDED LINNING";
        HBLText.fontSize = "35%";
        HIDtab.addControl(HBLText);

        var hblingtab = new BABYLON.GUI.Rectangle();
        hblingtab.width = "100%";
        hblingtab.height = "100%";
        hblingtab.color = "black";
        hblingtab.thickness = 2;
        HLIBgd.addControl(hblingtab, 1);

        var hbrgd = new BABYLON.GUI.Grid("kaligd");
        hbrgd.isVisible = true;
        hbrgd.width = "100%";
        hbrgd.height = "100%";
        hbrgd.paddingTop = "0%";
        hbrgd.addRowDefinition(1 / 2);
        hbrgd.addRowDefinition(1 / 2);
        hbrgd.addColumnDefinition(1 / 6);
        hbrgd.addColumnDefinition(1 / 6);
        hbrgd.addColumnDefinition(1 / 6);
        hbrgd.addColumnDefinition(1 / 6);
        hbrgd.addColumnDefinition(1 / 6);
        hbrgd.addColumnDefinition(1 / 6);
        hblingtab.addControl(hbrgd);

        var L8Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture8", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BIG BROWN.jpg ");
        L8Btn.width = btnW;
        L8Btn.height = "40%";
        L8Btn.color = "#25BAFFFF";
        L8Btn.cornerRadius = 100;
        L8Btn.thickness = 0;
        L8Btn.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = L8Btn;
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
        L9Btn.width = btnW;
        L9Btn.height = "40%";
        L9Btn.color = "#25BAFFFF";
        L9Btn.cornerRadius = 100;
        L9Btn.thickness = 0;
        L9Btn.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = L4Btn;
            crnt.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        hbrgd.addControl(L9Btn, 0, 1);














    ///////////////////////////////////////////////////////
//   var colortab = new BABYLON.GUI.Rectangle();
//         colortab.width = "98%";
//         colortab.height = "20%";
//         colortab.verticalAlignment = "Center";
//         colortab.horizontalAlignment = "Center";
//         colortab.top = "54%";
//         colortab.left = "1%";
//         colortab.cornerRadius = 0;
//         colortab.color = "black";
//         colortab.thickness = 1;
//         colortab.background = "";
//         //scrol.addControl(colortab);


//         var leLText = new BABYLON.GUI.TextBlock();
//         leLText.text = "COLORS";
//         leLText.fontSize = "15%";
//         leLText.verticalAlignment = "top";
//         leLText.horizontalAlignment = "Center";
//         leLText.paddingBottom = "70%"
//         leLText.paddingRight = "65%"
//         colortab.addControl(leLText);

//         var scrollS = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
//         scrollS.width = "95%";
//         scrollS.height = "70%";
//         scrollS.background = "";
//         scrollS.barSize = "10";
//         scrollS.top = "15%";
//         scrollS.cornerRadius = 0;
//         scrollS.thickness = 0;
//         colortab.addControl(scrollS)

//         var gd2 = new BABYLON.GUI.Grid();
//         gd2.width = "100%";
//         gd2.height = "100%";
//         gd2.paddingTop = "10%"
//         gd2.addColumnDefinition(1 / 4);
//         gd2.addColumnDefinition(1 / 4);
//         gd2.addColumnDefinition(1 / 4);
//         gd2.addColumnDefinition(1 / 4);
//         gd2.addRowDefinition(1);
//         scrollS.addControl(gd2);

//         var curtn;


//         var C1Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture1", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/2.jpg");
//         curtn = C1Btn;
//         C1Btn.width = "95%"
//         C1Btn.height = "95%";
//         C1Btn.color = "#25BAFFFF";
//         C1Btn.cornerRadius = 10;
//         C1Btn.thickness = 0;
//         C1Btn.onPointerUpObservable.add(function () {
//             curtn.thickness = 0;
//             curtn = C1Btn;
//             curtn.thickness = 3;
//             var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
//             textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/2.jpg", scene);
//             textureblack.diffuseTexture.uScale = 1;
//             textureblack.diffuseTexture.vScale = 1;
//             textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
//             hero.material = textureblack;
//         });
//         gd2.addControl(C1Btn, 0, 0);

//         var C2Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/3.jpg ");
//         C2Btn.width = "95%"
//         C2Btn.height = "95%";
//         C2Btn.color = "#25BAFFFF";
//         C2Btn.cornerRadius = 10;
//         C2Btn.thickness = 0;
//         C2Btn.onPointerUpObservable.add(function () {
//             curtn.thickness = 0;
//             curtn = C2Btn;
//             curtn.thickness = 3;
//             var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
//             textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/3.jpg", scene);
//             hero.material = textureblack;
//         });
//         gd2.addControl(C2Btn, 0, 1);


//         var C3Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/1.jpg ");
//         C3Btn.width = "95%"
//         C3Btn.height = "95%";
//         C3Btn.color = "#25BAFFFF";
//         C3Btn.cornerRadius = 10;
//         C3Btn.thickness = 0;
//         C3Btn.onPointerUpObservable.add(function () {
//             curtn.thickness = 0;
//             curtn = C3Btn;
//             curtn.thickness = 3;
//             var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
//             textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/1.jpg", scene);
//             hero.material = textureblack;
//         });
//         gd2.addControl(C3Btn, 0, 2);



//         var C4Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/bag.jpg ");
//         C4Btn.width = "95%"
//         C4Btn.height = "95%";
//         C4Btn.color = "#25BAFFFF";
//         C4Btn.cornerRadius = 10;
//         C4Btn.thickness = 0;
//         C4Btn.onPointerUpObservable.add(function () {
//             curtn.thickness = 0;
//             curtn = C4Btn;
//             curtn.thickness = 3;
//             var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
//             textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/bag.jpg", scene);
//             textureblack.diffuseTexture.uScale = 2;
//             textureblack.diffuseTexture.vScale = 2;
//             textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
//             hero.material = textureblack;
//         });
//         gd2.addControl(C4Btn, 0, 3);

        ////////////////////////////////////////////////////////////////       
     


    });

    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);

    var button1 = BABYLON.GUI.Button.CreateSimpleButton("Open_Btn", "Open");
    button1.width = "15%"
    button1.height = "7%";
    button1.fontSize = "4%";
    button1.top = "3%";
    button1.color = "white";
    button1.verticalAlignment = "Top";
    button1.cornerRadius = 10;
    button1.background = "grey";
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
        someAnim1.loopAnimation = false
    });
    advancedTexture.addControl(button1);



    /// animations 
    var animationGroup = new BABYLON.AnimationGroup("my group");


/////// CAM AUTOROTATION defaults

camera1.speed = 50;

//camera1.useAutoRotationBehavior = false;
camera1.useAutoRotationBehavior = true;
camera1.idleRotationWaitTime = 3000;
camera1.idleRotationSpinupTime = 1000;
camera1.autoRotationBehavior.idleRotationSpeed = .5;




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
    }, 200);

}

// Resize
window.addEventListener("resize", async function () {
    engine.resize();
    // console.log("safygfasghfsdhgciujkshgdcj")
});