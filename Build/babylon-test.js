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

        var scrol = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
        scrol.width = "95%";
        scrol.height = "98%";
        scrol.background = "";
        scrol.barSize = "10";
        scrol.top = "";
        scrol.cornerRadius = 0;
        scrol.thickness = 0;
        scrol.thumbImage = new BABYLON.GUI.Image("thumb", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Bars.png");
        scrol.barImage = new BABYLON.GUI.Image("bar", "");
        scrol.thumbLength = 0.3;
        scrol.thumbHeight = 1;
        scrol.barImageHeight = 0.2;
        scrol.scrollBackground = "";
        scrol.barBackground = "blue";
        canvas.addControl(scrol);

        var grid = new BABYLON.GUI.Grid();
        grid.width = "100%";
        grid.height = "100%";
        grid.paddingTop = "10%"
        grid.addRowDefinition(1/4);
        grid.addRowDefinition(1/4);
        grid.addRowDefinition(1/4);
        grid.addRowDefinition(1/4);
      
        scrol.addControl(grid);



///////////////////  Buttons of the customize options 

var activatetab
let activeTab = "";

        var leather = BABYLON.GUI.Button.CreateSimpleButton("Leather", "LEATHER");
        leather.width = "90%"
        leather.height = "40%";
        leather.color = "White";
        leather.background = "#2A1502FF";
        leather.cornerRadius = 3;
        leather.thickness = 2;
        leather.fontSize = "20%";
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
        leatherlining.fontSize = "20%";
        leatherlining.shadowColor = "black";
        leatherlining.shadowOffsetX = 3;
        leatherlining.shadowBlur = 15;
        leatherlining.shadowColor = "#7C7878FF";
        leatherlining.onPointerUpObservable.add(function () {
            leatherliningtab.isVisible = true;
            canvas.isVisible = false;
        });
        grid.addControl(leatherlining, 1);


        var colors = BABYLON.GUI.Button.CreateSimpleButton("Leather lining", "COLORS");
        colors.width = "90%"
        colors.height = "40%";
        colors.color = "white";
        colors.background = "#2A1502FF";
        colors.cornerRadius = 3;
        colors.thickness = 2;
        colors.fontSize = "20%";
        colors.shadowColor = "black";
        colors.shadowOffsetX = 3;
        colors.shadowBlur = 40;
        colors.shadowColor = "#7C7878FF";
        colors.onPointerUpObservable.add(function  () {
            colortab.isVisible = true;
            canvas.isVisible = false;
        });
        grid.addControl(colors, 2);
///////////////////////////////////////////////////////////////////////////////// making the tabs visible and off

// //let activeTab = "";
// function setActiveTab(tabName) {
//     if (activeTab === tabName) return;
//     // hide the old tab
//     if (tabContent[activeTab]) {
//         tabContent[activeTab].isVisible = false;
//     }
//     activeTab = tabName;
//     for(const button of tabButtons) {
//         // update the button colors
//         if (activeTab === button.name) {
//             button.color = "#E4D9B9FF";
//         } else {
//             button.color = "#808080FF";
//         }
//     }
//     // show the new tab
//     if (tabContent[activeTab]) {
//         tabContent[activeTab].isVisible = true;
//         tabContent[activeTab].left = "0%";
//         tabContent[activeTab].isPointerBlocker = false;
//     }
// };

////////////////////////////////////////////////////////////////////////////

        var leatherstab = new BABYLON.GUI.Rectangle();
        leatherstab.isVisible = false;
        leatherstab.width = "25%";
        leatherstab.height = "100%";
        leatherstab.verticalAlignment = "Center";
        leatherstab.horizontalAlignment = "Center";
        leatherstab.top = "";
        leatherstab.left = "0.5%";
        leatherstab.cornerRadius = 0;
        leatherstab.color = "Grey";
        leatherstab.thickness = 0;
        leatherstab.background = "#F5F4F2";
        leatherstab.shadowColor = "black";
        leatherstab.shadowOffsetX = 3;
        leatherstab.shadowBlur = 15;
        leatherstab.shadowColor = "#7C7878FF";
        advancedTexture.addControl(leatherstab);

        var leathergd = new BABYLON.GUI.Grid();
        leathergd.width = "100%";
        leathergd.height = "98%";
        leathergd.paddingTop = "0%";
        leathergd.addRowDefinition(0.04);
        leathergd.addRowDefinition(0.96);
        leathergd.addColumnDefinition(0.05);
        leathergd.addColumnDefinition(0.95);
        leatherstab.addControl(leathergd);





        // var letherscroll = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
        // letherscroll.width = "95%";
        // letherscroll.height = "98%";
        // letherscroll.background = "";
        // letherscroll.barSize = "10";
        // letherscroll.top = "0%";
        // letherscroll.cornerRadius = 0;
        // letherscroll.thickness = 0;
        // letherscroll.thumbImage = new BABYLON.GUI.Image("thumb", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Bars.png");
        // letherscroll.barImage = new BABYLON.GUI.Image("bar", "");
        // letherscroll.thumbLength = 0.3;
        // letherscroll.thumbHeight = 1;
        // letherscroll.barImageHeight = 0.3;
        // letherscroll.scrollBackground = "";
        // letherscroll.barBackground = "blue";
        // leatherstab.addControl(letherscroll);

        var leText = new BABYLON.GUI.TextBlock();
        leText.text = "LEATHER";
        leText.fontSize = "98%";    
        leText.paddingBottom = "0%"
        leText.paddingRight = "0%"
        leathergd.addControl(leText,0,1);

        var close = BABYLON.GUI.Button.CreateImageOnlyButton("close", " https://www.figma.com/file/wruZAbV1s7CtRs6d9EIxJd/HIDESIGN-UI-3?node-id=2%3A48");
        close.width = "90%"
        close.height = "90%";
        close.color = "black";
        close.fontSize = "100%";
        close.cornerRadius = 3;
        close.thickness = 0;
        // close.fontSize = "20%";
        // close.shadowColor = "black";
        // close.shadowOffsetX = 3;
        // close.shadowBlur = 40;
        // close.shadowColor = "#7C7878FF";
        close.onPointerUpObservable.add(function  () {
            leatherstab.isVisible = false;
            leatherlining.isVisible = true;
            colors.isVisible = true;
            canvas.isVisible = true;
        });
        leathergd.addControl(close, 0, 0);


        var Leathertab = new BABYLON.GUI.Rectangle();
        Leathertab.width = "98%";
        Leathertab.height = "90%";
        Leathertab.verticalAlignment = "Center";
        Leathertab.horizontalAlignment = "Center";
        Leathertab.top = "3%";
        Leathertab.left = "1%";
        Leathertab.cornerRadius = 0;
        Leathertab.color = "black";
        Leathertab.thickness = 1;
        Leathertab.background = "";
        leathergd.addControl(Leathertab,1,1);

       
      
        var scroll = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
        scroll.width = "95%";
        scroll.height = "98%";
        scroll.background = "";
        scroll.barSize = "10";
        scroll.top = "0%";
        scroll.cornerRadius = 0;
        scroll.thickness = 0;
        scroll.thumbImage = new BABYLON.GUI.Image("thumb", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Bars.png");
        scroll.barImage = new BABYLON.GUI.Image("bar", "");
        scroll.thumbLength = 0.3;
        scroll.thumbHeight = 1;
        scroll.barImageHeight = 0.3;
        scroll.scrollBackground = "";
        scroll.barBackground = "blue";
        Leathertab.addControl(scroll);

        var gd = new BABYLON.GUI.Grid();
        gd.width = "100%";
        gd.height = "90%";
        gd.paddingTop = "10%"
        gd.addColumnDefinition(1 / 4);
        gd.addColumnDefinition(1 / 4);
        gd.addColumnDefinition(1 / 4);
        gd.addColumnDefinition(1 / 4);
        gd.addRowDefinition(1/6);
        gd.addRowDefinition(1/6);
        gd.addRowDefinition(1/6);
        gd.addRowDefinition(1/6);
        gd.addRowDefinition(1/6);+
        gd.addRowDefinition(1/6); 
        scroll.addControl(gd);
       
        var currentButton; 
        /// leather items start
        var button11 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI BROWN.jpg ");
        currentButton = button11;
        button11.width = "95%"
        button11.height = "95%";
        button11.color = "#25BAFFFF";
        button11.cornerRadius = 10;
        button11.thickness = 0;
        button11.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button11;
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 20;
            textureblack.diffuseTexture.vScale = 20;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button11, 0, 0);

        var button12 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI MARSALA.jpg ");
        button12.width = "95%"
        button12.height = "95%";
        button12.color = "#25BAFFFF";
        button12.cornerRadius = 10;
        button12.thickness =0;
        button12.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button12;
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI MARSALA.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button12, 0, 1);

        var button13 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI SAPPHIRE.jpg ");
        button13.width = "95%"
        button13.height = "95%";
        button13.color = "#25BAFFFF";
        button13.cornerRadius = 10;
        button13.thickness = 0;
        button13.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button13;
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI SAPPHIRE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button13, 0, 2);

        var button14 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI TANGERINE.jpg ");
        button14.width = "95%"
        button14.height = "95%";
        button14.color = "#25BAFFFF";
        button14.cornerRadius = 10;
        button14.thickness = 0;
        button14.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button14;
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI TANGERINE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button14, 0, 3);

        var button15 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER BROWN.jpg ");
        button15.width = "95%"
        button15.height = "95%";
        button15.color = "#25BAFFFF";
        button15.cornerRadius = 10;
        button15.thickness = 0;
        button15.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button15;
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button15, 1, 0);

        var button16 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER TAN.jpg ");
        button16.width = "95%"
        button16.height = "95%";
        button16.color = "#25BAFFFF";
        button16.cornerRadius = 10;
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
        gd.addControl(button16, 1, 1);

        var button17 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH CHOCOLATE.jpg ");
        button17.width = "95%"
        button17.height = "95%";
        button17.color = "#25BAFFFF";
        button17.cornerRadius = 10;
        button17.thickness =0; 
        button17.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button17;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH CHOCOLATE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button17, 1, 2);

        var button18 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH RED.jpg ");
        button18.width = "95%"
        button18.height = "95%";
        button18.color = "#25BAFFFF";
        button18.cornerRadius = 10;
        button18.thickness = 0;
        button18.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
            currentButton = button18;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH RED.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button18, 1, 3);

        var button19 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH TAN.jpg ");
        button19.width = "95%"
        button19.height = "95%";
        button19.color = "#25BAFFFF";
        button19.cornerRadius = 10;
        button19.thickness = 0;
        button19.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button19;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH TAN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button19, 2, 0);

        var button20 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF BLACK.jpg ");
        button20.width = "95%"
        button20.height = "95%";
        button20.color = "#25BAFFFF";
        button20.cornerRadius = 10;
        button20.thickness = 0;
        button20.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button20;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button20, 2, 1);

        var button21 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF EMERALD.jpg ");
        button21.width = "95%"
        button21.height = "95%";
        button21.color = "#25BAFFFF";
        button21.cornerRadius = 10;
        button21.thickness = 0;
        button21.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button21;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF EMERALD.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button21, 2, 2);

 
        var button22 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF MID NIGHT BLUE.jpg ");
        button22.width = "95%"
        button22.height = "95%";
        button22.color = "#25BAFFFF";
        button22.cornerRadius = 10;
        button22.thickness = 0;
        button22.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button22;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF MID NIGHT BLUE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button22, 2, 3);
   
        var button23 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF RED.jpg ");
        button23.width = "95%"
        button23.height = "95%";
        button23.color = "#25BAFFFF";
        button23.cornerRadius = 10;
        button23.thickness = 0;
        button23.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button23;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF RED.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button23, 3, 0);

        var button24 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN  BROWN.jpg ");
        button24.width = "95%"
        button24.height = "95%";
        button24.color = "#25BAFFFF";
        button24.cornerRadius = 10;
        button24.thickness = 0;
        button24.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button24;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN  BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button24, 3, 1);
   
        var button25 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN.jpg ");
        button25.width = "95%"
        button25.height = "95%";
        button25.color = "#25BAFFFF";
        button25.cornerRadius = 10;
        button25.thickness= 0;
        button25.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button25;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button25, 3, 2);

        var button26 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REAL DEER BLACK.jpg ");
        button26.width = "95%"
        button26.height = "95%";
        button26.color = "#25BAFFFF";
        button26.cornerRadius = 10;
        button26.thickness = 0;
        button26.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button26;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REAL DEER BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button26, 3, 3);
        var button27 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BLACK.jpg ");
        button27.width = "95%"
        button27.height = "95%";
        button27.color = "#25BAFFFF";
        button27.cornerRadius = 10;
        button27.thickness= 0;
        button27.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button27;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button27, 4, 0);
        var button28 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BROWN.jpg ");
        button28.width = "95%"
        button28.height = "95%";
        button28.color = "#25BAFFFF";
        button28.cornerRadius = 10;
        button28.thickness = 0;
        button28.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button28;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BROWN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button28, 4, 1);
        var button29 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER HONEY.jpg ");
        button29.width = "95%"
        button29.height = "95%";
        button29.color = "#25BAFFFF";
        button29.cornerRadius = 10;
        button29.thickness = 0;
        button29.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button29;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER HONEY.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button29, 4, 2);

        var button30 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER MID NIGHT BLUE.jpg ");
        button30.width = "95%"
        button30.height = "95%";
        button30.color = "#25BAFFFF";
        button30.cornerRadius = 10;
        button30.thickness = 0;
        button30.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button30;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER MID NIGHT BLUE.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button30, 4, 3);
        var button31 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER RED.jpg ");
        button31.width = "95%"
        button31.height = "95%";
        button31.color = "#25BAFFFF";
        button31.cornerRadius = 10;
        button31.thickness = 0;
        button31.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button31;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER RED.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button31, 5, 0);
        var button32 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER TAN.jpg ");
        button32.width = "95%"
        button32.height = "95%";
        button32.color = "#25BAFFFF";
        button32.cornerRadius = 10;
        button32.thickness= 0;
        button32.onPointerUpObservable.add(function () {
            currentButton.thickness = 0;
           currentButton = button32;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER TAN.jpg", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button32, 5, 1);
       
      
     ////////////////////////////////////////////////    
        var leatherliningtab = new BABYLON.GUI.Rectangle();
        leatherliningtab.width = "98%";
        leatherliningtab.height = "20%";
        leatherliningtab.verticalAlignment = "Center";
        leatherliningtab.horizontalAlignment = "Center";
        leatherliningtab.top = "32%";
        leatherliningtab.left = "1%";
        leatherliningtab.cornerRadius = 0;
        leatherliningtab.color = "black";
        leatherliningtab.thickness = 1;
        leatherliningtab.background = "";
       // scrol.addControl(leatherliningtab);

       var leliText = new BABYLON.GUI.TextBlock();
       leliText.text = "LEATHER LINING";
       leliText.fontSize = "16%";
       leliText.verticalAlignment = "top";
       leliText.horizontalAlignment = "Center";
       leliText.paddingBottom = "70%"
       leliText.paddingRight = "37%"
       leatherliningtab.addControl(leliText);
      
        var scroll1 = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
        scroll1.width = "95%";
        scroll1.height = "70%";
        scroll1.background = "";
        scroll1.barSize = "10";
        scroll1.top = "15%";
        scroll1.cornerRadius = 0;
        scroll1.thickness = 0;
        scroll1.thumbImage = new BABYLON.GUI.Image("thumb", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Bars.png");
        scroll1.barImage = new BABYLON.GUI.Image("bar", "");
        scroll1.thumbLength = 0.3;
        scroll1.thumbHeight = 1;
        scroll1.barImageHeight = 0.3;
        scroll1.scrollBackground = "";
        scroll1.barBackground = "blue";
        leatherliningtab.addControl(scroll1)

        var gd1 = new BABYLON.GUI.Grid();
        gd1.width = "100%";
        gd1.height = "250%";
        gd1.paddingTop = "10%"
        gd1.addColumnDefinition(1 / 4);
        gd1.addColumnDefinition(1 / 4);
        gd1.addColumnDefinition(1 / 4);
        gd1.addColumnDefinition(1 / 4);
        gd1.addRowDefinition(1/3);
        gd1.addRowDefinition(1/3);
        gd1.addRowDefinition(1/3);
        scroll1.addControl(gd1);

        var crnt;
        var L1Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture1", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BLACK.jpg");
        crnt = L1Btn;
        L1Btn.width = "95%"
        L1Btn.height = "95%";
        L1Btn.color = "#25BAFFFF";
        L1Btn.cornerRadius = 10;
        L1Btn.thickness = 0;
        L1Btn.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = L1Btn;
            crnt.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BLACK.jpg", scene);
            textureblack.diffuseTexture.uScale = 1;
            textureblack.diffuseTexture.vScale = 1;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd1.addControl(L1Btn, 0, 0);

        var L2Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BROWN.jpg ");
        L2Btn.width = "95%"
        L2Btn.height = "95%";
        L2Btn.color = "#25BAFFFF";
        L2Btn.cornerRadius = 10;
        L2Btn.thickness = 0;
        L2Btn.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = L2Btn;
            crnt.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BROWN.jpg", scene);
            hero.material = textureblack;
        });
        gd1.addControl(L2Btn, 0, 1);


        var L3Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO EMERALD.jpg ");
        L3Btn.width = "95%"
        L3Btn.height = "95%";
        L3Btn.color = "#25BAFFFF";
        L3Btn.cornerRadius = 10;
        L3Btn.thickness = 0;
        L3Btn.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
           crnt = L3Btn;
            crnt.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO EMERALD.jpg", scene);
            hero.material = textureblack;
        });
        gd1.addControl(L3Btn, 0, 2);



        var L4Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture4", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO MID NIGHT BLUE.jpg ");
        L4Btn.width = "95%"
        L4Btn.height = "95%";
        L4Btn.color = "#25BAFFFF";
        L4Btn.cornerRadius = 10;
        L4Btn.thickness = 0;
        L4Btn.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = L4Btn;
            crnt.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO MID NIGHT BLUE.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd1.addControl(L4Btn, 0, 3);

        var L5Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture5", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO PINK.jpg ");
        L5Btn.width = "95%"
        L5Btn.height = "95%";
        L5Btn.color = "#25BAFFFF";
        L5Btn.cornerRadius = 10;
        L5Btn.thickness = 0;
        L5Btn.onPointerUpObservable.add(function () {
            crnt.thickness = 0;
            crnt = L5Btn;
            crnt.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO PINK.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd1.addControl(L5Btn, 1, 0);

        var L6Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture6", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE BLUE.jpg ");
        L6Btn.width = "95%"
        L6Btn.height = "95%";
        L6Btn.color = "#25BAFFFF";
        L6Btn.cornerRadius = 10;
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
        gd1.addControl(L6Btn, 1, 1);

        var L7Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture7", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE RED.jpg ");
        L7Btn.width = "95%"
        L7Btn.height = "95%";
        L7Btn.color = "#25BAFFFF";
        L7Btn.cornerRadius = 10;
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
        gd1.addControl(L7Btn, 1, 2);

        var L8Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture8", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BIG BROWN.jpg ");
        L8Btn.width = "95%"
        L8Btn.height = "95%";
        L8Btn.color = "#25BAFFFF";
        L8Btn.cornerRadius = 10;
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
        gd1.addControl(L8Btn, 1, 3);

        var L9Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture9", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BLACK.jpg ");
        L9Btn.width = "95%"
        L9Btn.height = "95%";
        L9Btn.color = "#25BAFFFF";
        L9Btn.cornerRadius = 10;
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
        gd1.addControl(L9Btn, 2, 0);

     ///////////////////////////////////////////////////////
     var colortab = new BABYLON.GUI.Rectangle();
     colortab.width = "98%";
     colortab.height = "20%";
     colortab.verticalAlignment = "Center";
     colortab.horizontalAlignment = "Center";
     colortab.top = "54%";
     colortab.left = "1%";
     colortab.cornerRadius = 0;
     colortab.color = "black";
     colortab.thickness = 1;
     colortab.background = "";
     //scrol.addControl(colortab);

 
     var leLText = new BABYLON.GUI.TextBlock();
     leLText.text = "COLORS";
     leLText.fontSize = "15%";
     leLText.verticalAlignment = "top";
     leLText.horizontalAlignment = "Center";
     leLText.paddingBottom = "70%"
     leLText.paddingRight = "65%"
     colortab.addControl(leLText);
   
     var scrollS = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
     scrollS.width = "95%";
     scrollS.height = "70%";
     scrollS.background = "";
     scrollS.barSize = "10";
     scrollS.top = "15%";
     scrollS.cornerRadius = 0;
     scrollS.thickness = 0;
     colortab.addControl(scrollS)

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

     var curtn;


     var C1Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture1", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/2.jpg");
     curtn = C1Btn;
     C1Btn.width = "95%"
     C1Btn.height = "95%";
     C1Btn.color = "#25BAFFFF";
     C1Btn.cornerRadius = 10;
     C1Btn.thickness = 0;
     C1Btn.onPointerUpObservable.add(function () {
        curtn.thickness = 0;
        curtn = C1Btn;
        curtn.thickness = 3;
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
     C2Btn.color = "#25BAFFFF";
     C2Btn.cornerRadius = 10;
     C2Btn.thickness =0;
     C2Btn.onPointerUpObservable.add(function () {
        curtn.thickness = 0;
        curtn =C2Btn;
        curtn.thickness = 3;
         var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
         textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/3.jpg", scene);
         hero.material = textureblack;
     });
     gd2.addControl(C2Btn, 0, 1);


     var C3Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/1.jpg ");
     C3Btn.width = "95%"
     C3Btn.height = "95%";
     C3Btn.color = "#25BAFFFF";
     C3Btn.cornerRadius = 10;
     C3Btn.thickness = 0;
     C3Btn.onPointerUpObservable.add(function () {
        curtn.thickness = 0;
        curtn = C3Btn;
        curtn.thickness = 3;
         var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
         textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/1.jpg", scene);
         hero.material = textureblack;
     });
     gd2.addControl(C3Btn, 0, 2);



     var C4Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/bag.jpg ");
     C4Btn.width = "95%"
     C4Btn.height = "95%";
     C4Btn.color = "#25BAFFFF";
     C4Btn.cornerRadius = 10;
     C4Btn.thickness = 0;
     C4Btn.onPointerUpObservable.add(function () {
        curtn.thickness = 0;
        curtn = C4Btn;
        curtn.thickness = 3;
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
        scrol.addControl(rect4);
        
       
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
        lePText.fontSize = "60%";
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
        grd.addControl(namefeild,3);
      
     var ctag;

        var tag1 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/PlainTag.png ");
        ctag = tag1;
        tag1.width = "80%"
        tag1.height = "80%";
        tag1.color = "#25BAFFFF";
        tag1.cornerRadius = 10;
        tag1.thickness =0;
        tag1.onPointerUpObservable.add(function () {
            ctag.thickness =0;
            ctag = tag1;
            ctag.thickness = 3;
        });
        grd.addControl(tag1,1,2);

        var tag2 = BABYLON.GUI.Button.CreateImageOnlyButton("Tag2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/GoldTag.png");

        tag2.width = "80%"
        tag2.height = "80%";
        tag2.color = "#25BAFFFF";
        tag2.cornerRadius = 10;
        tag2.thickness = 0;
        tag2.onPointerUpObservable.add(function () {
            ctag.thickness = 0;
            ctag = tag2;
            ctag.thickness = 3; 
        });
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



     
 window.addEventListener("resize", () => {advancedTexture.scaleTo(engine.getRenderWidth(), engine.getRenderHeight());});

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
   // console.log("scene width and height will be " + window.scene ) 
};



initFunction().then(() => {sceneToRender = scene                    
});

function resize(){
    setTimeout(function(){
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