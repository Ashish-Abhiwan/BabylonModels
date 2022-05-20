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
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };

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
    BABYLON.SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Bag/", modelname , scene, function (newMeshes, particleSystems, skeletons, animationGroups) {
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
        newMeshes[0].position.y = 15;
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

        var canvas = new BABYLON.GUI.Rectangle();
        canvas.width = "25%";
        canvas.height = "100%";
        canvas.verticalAlignment = "Center";
        canvas.horizontalAlignment = "Center";
        canvas.top = "";
        canvas.left = "";
        canvas.cornerRadius = 0;
        canvas.color = "Grey";
        canvas.thickness = 0;
        canvas.background = "#F5F4F2";
        canvas.shadowColor = "black";
        canvas.shadowOffsetX = 3;
        canvas.shadowBlur = 15;
        canvas.shadowColor = "#7C7878FF";
        
        advancedTexture.addControl(canvas);

        var titleRect = new BABYLON.GUI.Rectangle();
        titleRect.width = "85%";
        titleRect.height = "6.5%";
        titleRect.verticalAlignment = "Center";
        titleRect.horizontalAlignment = "Center";
        titleRect.top = "2%";
        titleRect.left = "1%";
        titleRect.cornerRadius = 0;
        titleRect.color = "black";
        titleRect.thickness = 2;
        titleRect.background = "white";
        titleRect.paddingLeft = "17%"
        canvas.addControl(titleRect);


        var titleText = new BABYLON.GUI.TextBlock();
        titleText.text = "CUSTOMIZE";
        titleText.fontSize = "80%";
        // titleText.verticalAlignment = "top";
        // titleText.horizontalAlignment = "Center";
        titleRect.addControl(titleText);

        var rect1 = new BABYLON.GUI.Rectangle();
        rect1.width = "98%";
        rect1.height = "20%";
        rect1.verticalAlignment = "Center";
        rect1.horizontalAlignment = "Center";
        rect1.top = "10%";
        rect1.left = "1%";
        rect1.cornerRadius = 0;
        rect1.color = "black";
        rect1.thickness = 1;
        rect1.background = "";
        canvas.addControl(rect1);


        var leText = new BABYLON.GUI.TextBlock();
        leText.text = "LEATHER";
        leText.fontSize = "15%";    
        leText.paddingBottom = "70%"
        leText.paddingRight = "63%"
        rect1.addControl(leText);
      
        var scroll = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
        scroll.width = "95%";
        scroll.height = "70%";
        scroll.background = "";
        scroll.barSize = "10";
        scroll.top = "15%";
        scroll.cornerRadius = 0;
        scroll.thickness = 0;
        rect1.addControl(scroll);

        var gd = new BABYLON.GUI.Grid();
        gd.width = "100%";
        gd.height = "650%";
        gd.paddingTop = "10%"
        gd.addColumnDefinition(1 / 4);
        gd.addColumnDefinition(1 / 4);
        gd.addColumnDefinition(1 / 4);
        gd.addColumnDefinition(1 / 4);
        gd.addRowDefinition(1/8);
        gd.addRowDefinition(1/8);
        gd.addRowDefinition(1/8);
        gd.addRowDefinition(1/8);
        gd.addRowDefinition(1/8);
        gd.addRowDefinition(1/8);
        gd.addRowDefinition(1/8);
        gd.addRowDefinition(1/8);
        scroll.addControl(gd);

        var button2 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture1", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BLACK.jpg");
        button2.width = "95%"
        button2.height = "95%";
        button2.color = "white";
        button2.cornerRadius = 10;
        button2.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 1;
            textureblack.diffuseTexture.vScale = 1;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button2, 0, 0);

        var button3 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BROWN.jpg ");
        button3.width = "95%"
        button3.height = "95%";
        button3.color = "white";
        button3.cornerRadius = 10;
        button3.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BROWN.jpg", scene);
            hero.material = textureblack;
        });
        gd.addControl(button3, 0, 1);

        var button4 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO EMERALD.jpg ");
        button4.width = "95%"
        button4.height = "95%";
        button4.color = "white";
        button4.cornerRadius = 10;
        button4.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO EMERALD.jpg", scene);
            hero.material = textureblack;
        });
        gd.addControl(button4, 0, 2);

        var button5 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO MID NIGHT BLUE.jpg ");
        button5.width = "95%"
        button5.height = "95%";
        button5.color = "white";
        button5.cornerRadius = 10;
        button5.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO MID NIGHT BLUE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button5, 0, 3);

        
        var button6 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO PINK.jpg ");
        button6.width = "95%"
        button6.height = "95%";
        button6.color = "white";
        button6.cornerRadius = 10;
        button6.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO PINK.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button6, 1, 0);
        
        var button7 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE BLUE.jpg ");
        button7.width = "95%"
        button7.height = "95%";
        button7.color = "white";
        button7.cornerRadius = 10;
        button7.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE BLUE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button7, 1, 1);
        
        var button8 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE RED.jpg ");
        button8.width = "95%"
        button8.height = "95%";
        button8.color = "white";
        button8.cornerRadius = 10;
        button8.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE RED.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button8, 1, 2);
        
        var button9 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BIG BROWN.jpg ");
        button9.width = "95%"
        button9.height = "95%";
        button9.color = "white";
        button9.cornerRadius = 10;
        button9.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BIG BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button9, 1, 3);

        var button10 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BLACK.jpg ");
        button10.width = "95%"
        button10.height = "95%";
        button10.color = "white";
        button10.cornerRadius = 10;
        button10.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button10, 2, 0);
        var button11 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI BROWN.jpg ");
        button11.width = "95%"
        button11.height = "95%";
        button11.color = "white";
        button11.cornerRadius = 10;
        button11.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button11, 2, 1);
        var button12 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI MARSALA.jpg ");
        button12.width = "95%"
        button12.height = "95%";
        button12.color = "white";
        button12.cornerRadius = 10;
        button12.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI MARSALA.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button12, 2, 2);
        var button13 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI SAPPHIRE.jpg ");
        button13.width = "95%"
        button13.height = "95%";
        button13.color = "white";
        button13.cornerRadius = 10;
        button13.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI SAPPHIRE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button13, 2, 3);

        var button14 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI TANGERINE.jpg ");
        button14.width = "95%"
        button14.height = "95%";
        button14.color = "white";
        button14.cornerRadius = 10;
        button14.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI TANGERINE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button14, 3, 0);

        var button15 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER BROWN.jpg ");
        button15.width = "95%"
        button15.height = "95%";
        button15.color = "white";
        button15.cornerRadius = 10;
        button15.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button15, 3, 1);

        var button16 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER TAN.jpg ");
        button16.width = "95%"
        button16.height = "95%";
        button16.color = "white";
        button16.cornerRadius = 10;
        button16.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER TAN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button16, 3, 2);

        var button17 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH CHOCOLATE.jpg ");
        button17.width = "95%"
        button17.height = "95%";
        button17.color = "white";
        button17.cornerRadius = 10;
        button17.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH CHOCOLATE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button17, 3, 3);

        var button18 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH RED.jpg ");
        button18.width = "95%"
        button18.height = "95%";
        button18.color = "white";
        button18.cornerRadius = 10;
        button18.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH RED.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button18, 4, 0);
        var button19 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH TAN.jpg ");
        button19.width = "95%"
        button19.height = "95%";
        button19.color = "white";
        button19.cornerRadius = 10;
        button19.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH TAN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button19, 4, 1);
        var button20 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF BLACK.jpg ");
        button20.width = "95%"
        button20.height = "95%";
        button20.color = "white";
        button20.cornerRadius = 10;
        button20.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button20, 4, 2);
        var button21 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF EMERALD.jpg ");
        button21.width = "95%"
        button21.height = "95%";
        button21.color = "white";
        button21.cornerRadius = 10;
        button21.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF EMERALD.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button21, 4, 3);

 
        var button22 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF MID NIGHT BLUE.jpg ");
        button22.width = "95%"
        button22.height = "95%";
        button22.color = "white";
        button22.cornerRadius = 10;
        button22.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF MID NIGHT BLUE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button22, 5, 0);
   
        var button23 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF RED.jpg ");
        button23.width = "95%"
        button23.height = "95%";
        button23.color = "white";
        button23.cornerRadius = 10;
        button23.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF RED.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button23, 5, 1);

        var button24 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN  BROWN.jpg ");
        button24.width = "95%"
        button24.height = "95%";
        button24.color = "white";
        button24.cornerRadius = 10;
        button24.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN  BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button24, 5, 2);
   
        var button25 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN.jpg ");
        button25.width = "95%"
        button25.height = "95%";
        button25.color = "white";
        button25.cornerRadius = 10;
        button25.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button25, 5, 3);

        var button26 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REAL DEER BLACK.jpg ");
        button26.width = "95%"
        button26.height = "95%";
        button26.color = "white";
        button26.cornerRadius = 10;
        button26.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REAL DEER BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button26, 6, 0);
        var button27 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BLACK.jpg ");
        button27.width = "95%"
        button27.height = "95%";
        button27.color = "white";
        button27.cornerRadius = 10;
        button27.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button27, 6, 1);
        var button28 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BROWN.jpg ");
        button28.width = "95%"
        button28.height = "95%";
        button28.color = "white";
        button28.cornerRadius = 10;
        button28.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button28, 6, 2);
        var button29 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER HONEY.jpg ");
        button29.width = "95%"
        button29.height = "95%";
        button29.color = "white";
        button29.cornerRadius = 10;
        button29.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER HONEY.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button29, 6, 3);

        var button30 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER MID NIGHT BLUE.jpg ");
        button30.width = "95%"
        button30.height = "95%";
        button30.color = "white";
        button30.cornerRadius = 10;
        button30.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER MID NIGHT BLUE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button30, 7, 0);
        var button31 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER RED.jpg ");
        button31.width = "95%"
        button31.height = "95%";
        button31.color = "white";
        button31.cornerRadius = 10;
        button31.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER RED.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button31, 7, 1);
        var button32 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER TAN.jpg ");
        button32.width = "95%"
        button32.height = "95%";
        button32.color = "white";
        button32.cornerRadius = 10;
        button32.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER TAN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button32, 7, 2);
       
      
     ////////////////////////////////////////////////    
        var rect2 = new BABYLON.GUI.Rectangle();
        rect2.width = "98%";
        rect2.height = "20%";
        rect2.verticalAlignment = "Center";
        rect2.horizontalAlignment = "Center";
        rect2.top = "32%";
        rect2.left = "1%";
        rect2.cornerRadius = 0;
        rect2.color = "black";
        rect2.thickness = 1;
        rect2.background = "";
        canvas.addControl(rect2);

       var leliText = new BABYLON.GUI.TextBlock();
       leliText.text = "LEATHER LINING";
       leliText.fontSize = "16%";
       leliText.verticalAlignment = "top";
       leliText.horizontalAlignment = "Center";
       leliText.paddingBottom = "70%"
       leliText.paddingRight = "37%"
       rect2.addControl(leliText);
      
        var scroll1 = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
        scroll1.width = "95%";
        scroll1.height = "70%";
        scroll1.background = "";
        scroll1.barSize = "10";
        scroll1.top = "15%";
        scroll1.cornerRadius = 0;
        scroll1.thickness = 0;
        rect2.addControl(scroll1)

        var gd1 = new BABYLON.GUI.Grid();
        gd1.width = "100%";
        gd1.height = "100%";
        gd1.paddingTop = "10%"
        gd1.addColumnDefinition(1 / 4);
        gd1.addColumnDefinition(1 / 4);
        gd1.addColumnDefinition(1 / 4);
        gd1.addColumnDefinition(1 / 4);
        gd1.addRowDefinition(1);
        scroll1.addControl(gd1);

        var L1Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture1", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/2.jpg");
        L1Btn.width = "95%"
        L1Btn.height = "95%";
        L1Btn.color = "white";
        L1Btn.cornerRadius = 10;
        L1Btn.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/2.jpg", scene);
            textureblack.diffuseTexture.uScale = 1;
            textureblack.diffuseTexture.vScale = 1;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd1.addControl(L1Btn, 0, 0);

        var L2Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/3.jpg ");
        L2Btn.width = "95%"
        L2Btn.height = "95%";
        L2Btn.color = "white";
        L2Btn.cornerRadius = 10;
        L2Btn.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/3.jpg", scene);
            hero.material = textureblack;
        });
        gd1.addControl(L2Btn, 0, 1);


        var L3Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/1.jpg ");
        L3Btn.width = "95%"
        L3Btn.height = "95%";
        L3Btn.color = "white";
        L3Btn.cornerRadius = 10;
        L3Btn.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/1.jpg", scene);
            hero.material = textureblack;
        });
        gd1.addControl(L3Btn, 0, 2);



        var L4Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/bag.jpg ");
        L4Btn.width = "95%"
        L4Btn.height = "95%";
        L4Btn.color = "white";
        L4Btn.cornerRadius = 10;
        L4Btn.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/bag.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd1.addControl(L4Btn, 0, 3);


     ///////////////////////////////////////////////////////
     var rect3 = new BABYLON.GUI.Rectangle();
     rect3.width = "98%";
     rect3.height = "20%";
     rect3.verticalAlignment = "Center";
     rect3.horizontalAlignment = "Center";
     rect3.top = "54%";
     rect3.left = "1%";
     rect3.cornerRadius = 0;
     rect3.color = "black";
     rect3.thickness = 1;
     rect3.background = "";
     canvas.addControl(rect3);

 
     var leLText = new BABYLON.GUI.TextBlock();
     leLText.text = "COLORS";
     leLText.fontSize = "15%";
     leLText.verticalAlignment = "top";
     leLText.horizontalAlignment = "Center";
     leLText.paddingBottom = "70%"
     leLText.paddingRight = "65%"
     rect3.addControl(leLText);
   
     var scrollS = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
     scrollS.width = "95%";
     scrollS.height = "70%";
     scrollS.background = "";
     scrollS.barSize = "10";
     scrollS.top = "15%";
     scrollS.cornerRadius = 0;
     scrollS.thickness = 0;
     rect3.addControl(scrollS)

     var gd2 = new BABYLON.GUI.Grid();
     gd2.width = "100%";
     gd2.height = "100%";
     gd2.paddingTop = "10%"
     gd2.addColumnDefinition(1 / 4);
     gd2.addColumnDefinition(1 / 4);
     gd2.addColumnDefinition(1 / 4);
     gd2.addColumnDefinition(1 / 4);
     gd2.addRowDefinition(1);
     scrollS.addControl(gd2);
     var C1Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture1", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/2.jpg");
     C1Btn.width = "95%"
     C1Btn.height = "95%";
     C1Btn.color = "white";
     C1Btn.cornerRadius = 10;
     C1Btn.onPointerUpObservable.add(function () {
         var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
         textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/2.jpg", scene);
         textureblack.diffuseTexture.uScale = 1;
         textureblack.diffuseTexture.vScale = 1;
         textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
         hero.material = textureblack;
     });
     gd2.addControl(C1Btn, 0, 0);

     var C2Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/3.jpg ");
     C2Btn.width = "95%"
     C2Btn.height = "95%";
     C2Btn.color = "white";
     C2Btn.cornerRadius = 10;
     C2Btn.onPointerUpObservable.add(function () {
         var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
         textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/3.jpg", scene);
         hero.material = textureblack;
     });
     gd2.addControl(C2Btn, 0, 1);


     var C3Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/1.jpg ");
     C3Btn.width = "95%"
     C3Btn.height = "95%";
     C3Btn.color = "white";
     C3Btn.cornerRadius = 10;
     C3Btn.onPointerUpObservable.add(function () {
         var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
         textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/1.jpg", scene);
         hero.material = textureblack;
     });
     gd2.addControl(C3Btn, 0, 2);



     var C4Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/bag.jpg ");
     C4Btn.width = "95%"
     C4Btn.height = "95%";
     C4Btn.color = "white";
     C4Btn.cornerRadius = 10;
     C4Btn.onPointerUpObservable.add(function () {
         var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
         textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/bag.jpg", scene);
         textureblack.diffuseTexture.uScale = 2;
         textureblack.diffuseTexture.vScale = 2;
         textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
         hero.material = textureblack;
     });
     gd2.addControl(C4Btn, 0, 3);

     ////////////////////////////////////////////////////////////////       
        var rect4 = new BABYLON.GUI.Rectangle();
        rect4.width = "98%";
        rect4.height = "24%";
        rect4.verticalAlignment = "Center";
        rect4.horizontalAlignment = "Center";
        rect4.top = "76%";
        rect4.left = "1%";
        rect4.cornerRadius = 0;
        rect4.color = "black";
        rect4.thickness = 1;
        rect4.background = "";
        canvas.addControl(rect4);
        
       
        var grd = new BABYLON.GUI.Grid();
        grd.width = "100%";
        grd.height = "100%";
        grd.paddingTop = "5%"
      //  gdd.addColumnDefinition();
        grd.addRowDefinition(1/4);
        grd.addRowDefinition(1/4);
        grd.addRowDefinition(1/4);
        grd.addRowDefinition(1/4);
        grd.addColumnDefinition(0.70);
        grd.addColumnDefinition(0.30);
        rect4.addControl(grd);
 
        var lePText = new BABYLON.GUI.TextBlock();
        lePText.text = "PERSONALISE TAG";
        lePText.fontSize = "65%";
        lePText.verticalAlignment = "top";
        lePText.horizontalAlignment = "Center";
        // lePText.paddingBottom = "65%"
        //lePText.paddingRight = "28%"
        grd.addControl(lePText,0);

        var leP1Text = new BABYLON.GUI.TextBlock();
        leP1Text.text = "Name in Blind Emboss";
        leP1Text.fontSize = "55%";
        leP1Text.verticalAlignment = "top";
        leP1Text.horizontalAlignment = "Center";
       // leP1Text.paddingBottom = "30%"
       // leP1Text.paddingRight = "27%"
        grd.addControl(leP1Text,1);

        var leP2Text = new BABYLON.GUI.TextBlock();
        leP2Text.text = "Name in Gold Emboss";
        leP2Text.fontSize = "55%";
        leP2Text.verticalAlignment = "top";
        leP2Text.horizontalAlignment = "Center";
        //leP2Text.paddingTop = "20%"
       // leP2Text.paddingRight = "27%"
        grd.addControl(leP2Text,2);

        var namefeild = new BABYLON.GUI.InputText("Input");
        namefeild.width = "85%";
        namefeild.height = "80%";
        namefeild.color = "white";
        namefeild.background = "#AFAFAFFF";
        namefeild.placeholderText = "Your Name";
        namefeild.placeholderColor = "White";
        namefeild.focusedBackground = "#AFAFAFFF"
        grd.addControl(namefeild,3);

        var tag1 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/PlainTag.png ");
        tag1.width = "80%"
        tag1.height = "80%";
        tag1.color = "white";
        tag1.cornerRadius = 10;
        grd.addControl(tag1,1,2);

        var tag2 = BABYLON.GUI.Button.CreateImageOnlyButton("Tag2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/GoldTag.png");
        tag2.width = "80%"
        tag2.height = "80%";
        tag2.color = "white";
        tag2.cornerRadius = 10;
        grd.addControl(tag2,2,2);

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
        someAnim1.loopAnimation = false
    });
    advancedTexture.addControl(button1);
    
   

    /// animations 
    var animationGroup = new BABYLON.AnimationGroup("my group");



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

window.initFunction = async function() {
    var asyncEngineCreation = async function() {
        try {
            return createDefaultEngine();
        } catch(e) {
            return createDefaultEngine();
        }
    }
    window.engine = await asyncEngineCreation();
    if (!engine) throw 'engine should not be null.';
    startRenderLoop(engine, canvas);
    window.scene = createScene();
    console.log("scene width and height will be " + window.scene ) 
};



initFunction().then(() => {sceneToRender = scene                    
});

function resize(){
    setTimeout(function(){
        engine.resize();
        console.log("safygfasghfsdhgciujkshgdcj")
    }, 200);
        
}

// Resize
window.addEventListener("resize", async function () {
    engine.resize();
    console.log("safygfasghfsdhgciujkshgdcj")
});