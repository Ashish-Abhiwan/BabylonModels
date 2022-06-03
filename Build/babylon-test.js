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
    camera1.lowerRadiusLimit = 2;
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

    // Load Bag character and play animation
    BABYLON.SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/BAGS/", modelname, scene, function (newMeshes, particleSystems, skeletons, animationGroups) {
        var Bag = newMeshes[1];
        var Stich = newMeshes[2];
        var Metal = newMeshes[3];

        //Scale the model down        
        newMeshes[0].scaling.scaleInPlace(10);

        //Lock camera on the character 
        camera1.target = Bag;

        //const importedAnimGroups = cannonImportResult.animationGroups;
        const aniGr = scene.animationGroups
        scene.animationGroups.forEach((g) => {
            g.stop()
        })

        var fontsizes = "63%"

        var mainpanel = new BABYLON.GUI.Rectangle();
        mainpanel.width = "100%";
        mainpanel.height = "100%";
        mainpanel.verticalAlignment = "Center";
        mainpanel.horizontalAlignment = "Center";
        mainpanel.top = "0%";
        mainpanel.left = "0%";
        mainpanel.cornerRadius = 0;
        mainpanel.color = "Grey";
        mainpanel.thickness = 0;
        mainpanel.background = "#F5F4F2";
        advancedTexture.addControl(mainpanel);


        var backgroundimg = new BABYLON.GUI.Image("Image", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/hidesign/background.jpg");
        backgroundimg.width = "100%";
        backgroundimg.height = "100%";
        mainpanel.addControl(backgroundimg);

        var mainpanelgrid = new BABYLON.GUI.Grid();
        mainpanelgrid.width = "100%";
        mainpanelgrid.height = "100%";
        mainpanelgrid.addColumnDefinition(1 / 3);
        mainpanelgrid.addColumnDefinition(1 / 3);
        mainpanelgrid.addColumnDefinition(1 / 3);
        mainpanel.addControl(mainpanelgrid);



        ////////////////////////////////////////////  Buttons of the customize options 

        var leather = BABYLON.GUI.Button.CreateImageOnlyButton("Leather", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/hidesign/Leather.png");
        leather.width = "90%"
        leather.height = "50%";
        leather.resizeToFit = true;
        leather.cornerRadius = 0;
        leather.thickness = 0;
        leather.onPointerUpObservable.add(function () {
            mainpanel.isVisible = false;
            descrippanel.isVisible = true;
            leatherstab.isVisible = true;
            leText.isVisible = true;
            leaname.text = "";
        });
        mainpanelgrid.addControl(leather, 0, 0);

        var leatherlining = BABYLON.GUI.Button.CreateImageOnlyButton("Leather lining", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/hidesign/leather lining.png");
        leatherlining.width = "90%"
        leatherlining.height = "50%";
        leatherlining.resizeToFit = true;
        leatherlining.cornerRadius = 0;
        leatherlining.thickness = 0;
        leatherlining.onPointerUpObservable.add(function () {
            mainpanel.isVisible = false;
            leatherliningtab.isVisible = true;
            descrippanel.isVisible = true;
            leaname.text = "";

        });
        mainpanelgrid.addControl(leatherlining, 0, 1);

        var persolizetag = BABYLON.GUI.Button.CreateImageOnlyButton("Leather lining", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/hidesign/personalised tag.png");
        persolizetag.width = "90%"
        persolizetag.height = "50%";
        persolizetag.resizeToFit = true;
        persolizetag.cornerRadius = 0;
        persolizetag.thickness = 0;
        persolizetag.onPointerUpObservable.add(function () {
            mainpanel.isVisible = false;
            personzetagmenu.isVisible = true;
            personalText.isVisible = true;
        });
        mainpanelgrid.addControl(persolizetag, 0, 2);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// personize tag panel 

        var personzetagmenu = new BABYLON.GUI.Rectangle();
        personzetagmenu.isVisible = false;
        personzetagmenu.width = "25%";
        personzetagmenu.height = "100%";
        personzetagmenu.verticalAlignment = "Center";
        personzetagmenu.horizontalAlignment = "Center";
        personzetagmenu.resizeToFit = true;
        personzetagmenu.thickness = 0;
        advancedTexture.addControl(personzetagmenu);



        var personalText = new BABYLON.GUI.TextBlock();
        personalText.isVisible = false
        personalText.text = "Personalised\nTag";
        personalText.resizeToFit = true;
        personalText.fontSize = "7%";
        personalText.paddingBottom = "85%"
        personalText.left = "40%"
        personalText.fontFamily = "Pacifico";
        personalText.fontStyle = "oblique"
        advancedTexture.addControl(personalText);


        var persongdextra = new BABYLON.GUI.Grid();
        persongdextra.width = "100%";
        persongdextra.height = "100%";
        persongdextra.addRowDefinition(0.05);
        persongdextra.addRowDefinition(0.95);
        persongdextra.addColumnDefinition(0.10);
        persongdextra.addColumnDefinition(0.90);
        personzetagmenu.addControl(persongdextra);

        var close = BABYLON.GUI.Button.CreateImageOnlyButton("close", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/hidesign/back button.png");
        close.width = "100%"
        close.height = "100%";
        close.thickness = 0;
        close.onPointerUpObservable.add(function () {
            personzetagmenu.isVisible = false;
            descrippanel.isVisible = false;
            mainpanel.isVisible = true;
            personalText.isVisible = false;
        });
        persongdextra.addControl(close, 0, 0);

        var personalizetabbg = new BABYLON.GUI.Image("Image", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/hidesign/personalised tag table.png");
        personalizetabbg.width = "100%";
        personalizetabbg.height = "100%";
        persongdextra.addControl(personalizetabbg, 1, 1);


        var persolizetaggrid = new BABYLON.GUI.Grid();
        persolizetaggrid.width = "100%";
        persolizetaggrid.height = "95%";
        persolizetaggrid.addRowDefinition(1 / 4);
        persolizetaggrid.addRowDefinition(1 / 4);
        persolizetaggrid.addRowDefinition(1 / 4);
        persolizetaggrid.addRowDefinition(1 / 4);
        persongdextra.addControl(persolizetaggrid, 1, 1);

        var perText1 = new BABYLON.GUI.TextBlock();
        perText1.text = "Name In\nBlind Emboss";
        perText1.resizeToFit = true;
        perText1.fontSize = "13%";
        persolizetaggrid.addControl(perText1, 0);

        var perText2 = new BABYLON.GUI.TextBlock();
        perText2.text = "Name In\nGold Emboss";
        perText2.resizeToFit = true;
        perText2.fontSize = "13%";
        persolizetaggrid.addControl(perText2, 2);


        var ctag;

        var tag1 = BABYLON.GUI.Button.CreateImageOnlyButton("Tag1", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/hidesign%20pics/PlainTag.png");
        ctag = tag1;
        tag1.width = "50%"
        tag1.height = "90%";
        tag1.color = "#25BAFFFF";
        tag1.cornerRadius = 20;
        tag1.thickness = 0;
        tag1.resizeToFit = true;
        tag1.onPointerUpObservable.add(function () {
            ctag.thickness = 0;
            ctag = tag1;
            ctag.thickness = 3;
        });
        persolizetaggrid.addControl(tag1, 1);

        var tag2 = BABYLON.GUI.Button.CreateImageOnlyButton("Tag2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/hidesign%20pics/GoldTag.png");
        tag2.width = "50%"
        tag2.height = "90%";
        tag2.color = "#25BAFFFF";
        tag2.cornerRadius = 20;
        tag2.thickness = 0;
        tag2.resizeToFit = true;
        tag2.onPointerUpObservable.add(function () {
            ctag.thickness = 0;
            ctag = tag2;
            ctag.thickness = 3;
        });
        persolizetaggrid.addControl(tag2, 3);

        //////////////////////////////////////////////////////////////////////////////  leather options canvas panel 

        var leatherstab = new BABYLON.GUI.Rectangle();
        leatherstab.isVisible = false;
        leatherstab.width = "25%";
        leatherstab.height = "100%";
        leatherstab.verticalAlignment = "Center";
        leatherstab.horizontalAlignment = "Center";
        advancedTexture.addControl(leatherstab);


        var leText = new BABYLON.GUI.TextBlock();
        leText.isVisible = false
        leText.text = "LEATHER";
        leText.resizeToFit = true;
        leText.fontSize = "7%";
        leText.paddingBottom = "85%"
        leText.left = "40%"
        leText.fontFamily = "Pacifico";
        leText.fontStyle = "oblique"
        advancedTexture.addControl(leText);

        var personalizetabbg = new BABYLON.GUI.Image("Image", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/hidesign/leathers table.png");
        personalizetabbg.width = "100%";
        personalizetabbg.height = "100%";
        leatherstab.addControl(personalizetabbg);


        var leathergdextra = new BABYLON.GUI.Grid();
        leathergdextra.width = "100%";
        leathergdextra.height = "99.9%";
        leathergdextra.addRowDefinition(0.05);
        leathergdextra.addRowDefinition(0.95);
        leathergdextra.addColumnDefinition(0.10);
        leathergdextra.addColumnDefinition(0.90);
        leatherstab.addControl(leathergdextra);

        var close = BABYLON.GUI.Button.CreateImageOnlyButton("close", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/hidesign/back button.png");
        close.width = "100%"
        close.height = "100%";
        close.thickness = 0;
        close.onPointerUpObservable.add(function () {
            leatherstab.isVisible = false;
            descrippanel.isVisible = false;
            mainpanel.isVisible = true;
            leText.isVisible = false;
        });
        leathergdextra.addControl(close, 0, 0);


        var leathergd = new BABYLON.GUI.Grid();
        leathergd.width = "100%";
        leathergd.height = "99.9%";
        leathergd.addRowDefinition(1 / 3);
        leathergd.addRowDefinition(1 / 3);
        leathergd.addRowDefinition(1 / 3);
        leathergd.addColumnDefinition(1 / 2);
        leathergd.addColumnDefinition(1 / 2);
        leathergdextra.addControl(leathergd, 1, 1);

        ///////////////////////////////////// kalahari 
        var kalaharigd = new BABYLON.GUI.Grid();
        kalaharigd.width = "100%";
        kalaharigd.height = "99.9%";
        kalaharigd.addRowDefinition(0.30);
        kalaharigd.addRowDefinition(0.70);
        leathergd.addControl(kalaharigd, 0, 0);

        var KALAHARIText = new BABYLON.GUI.TextBlock();
        KALAHARIText.text = "KALAHARI";
        KALAHARIText.resizeToFit = true;
        KALAHARIText.fontSize = "28%";
        kalaharigd.addControl(KALAHARIText, 0);

        var kaligd = new BABYLON.GUI.Grid("kaligd");
        kaligd.width = "100%";
        kaligd.height = "100%";
        kaligd.addRowDefinition(1 / 2);
        kaligd.addRowDefinition(1 / 2);
        kaligd.addColumnDefinition(1 / 2);
        kaligd.addColumnDefinition(1 / 2);
        kalaharigd.addControl(kaligd, 1);

        var currentButton;
        var btnW = "60%";
        var btnH = "60%";
        var btnColor = "#25BAFFFF";
        var fonttext = "27%";

        var Loadingpanel = new BABYLON.GUI.Rectangle();
        Loadingpanel.isVisible = false
        Loadingpanel.width = "100%";
        Loadingpanel.height = "100%";
        Loadingpanel.verticalAlignment = "Center";
        Loadingpanel.horizontalAlignment = "Center";
        Loadingpanel.top = "";
        Loadingpanel.left = "0.5%";
        Loadingpanel.cornerRadius = 0;
        Loadingpanel.color = "black";
        Loadingpanel.thickness = 0;
        Loadingpanel.background = "#F5F4F2";
        Loadingpanel.shadowColor = "black";
        Loadingpanel.shadowOffsetX = 3;
        Loadingpanel.shadowBlur = 15;
        Loadingpanel.shadowColor = "#7C7878FF";
        advancedTexture.addControl(Loadingpanel);


        var Loadingtext = new BABYLON.GUI.TextBlock();
        Loadingtext.text = "Loading....";
        Loadingtext.resizeToFit = true;
        Loadingtext.fontSize = "15%";
        Loadingpanel.addControl(Loadingtext);


        var button11 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI BROWN.jpg ");
        currentButton = button11;
        button11.width = btnW;
        button11.height = btnH;
        button11.color = btnColor;
        button11.cornerRadius = 100;
        button11.thickness = 0;
        button11.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button11;
            currentButton.thickness = 2;
            leaname.text = "KALAHARI\nBROWN";
            leaname.fontSize = fonttext;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/KALAHARI BROWN.jpg", scene);
            //   textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/KALAHARI BROWN.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            // textureblack.bumpTexture.uScale = 10;
            // textureblack.bumpTexture.vScale = 10;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_NOTLOADED;
            Bag.hasAlpha = true;
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        kaligd.addControl(button11, 0, 0);

        var button12 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI MARSALA.jpg ");
        button12.width = btnW;
        button12.height = btnH;
        button12.color = btnColor;
        button12.cornerRadius = 100;
        button12.thickness = 0;
        button12.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button12;
            leaname.text = "KALAHARI\nMARSALA";
            leaname.fontSize = fonttext;
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/KALAHARI MARSALA.jpg", scene);
            // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/KALAHARI MARSALA.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            // textureblack.bumpTexture.uScale = 10;
            //textureblack.bumpTexture.vScale = 10;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.83, 0.29, 0.29)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })


        });
        kaligd.addControl(button12, 0, 1);

        var button13 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI SAPPHIRE.jpg ");
        button13.width = btnW;
        button13.height = btnH;
        button13.color = btnColor;
        button13.cornerRadius = 100;
        button13.thickness = 0;
        button13.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button13;
            leaname.text = "KALAHARI\nSAPPHIRE";
            leaname.fontSize = fonttext;
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/KALAHARI SAPPHIRE.jpg", scene);
            // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/KALAHARI SAPPHIRE.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            // textureblack.bumpTexture.uScale = 10;
            //  textureblack.bumpTexture.vScale = 10;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.29, 0.68, 0.83)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        kaligd.addControl(button13, 1, 0);

        var button14 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KALAHARI TANGERINE.jpg ");
        button14.width = btnW;
        button14.height = btnH;
        button14.color = btnColor;
        button14.cornerRadius = 100;
        button14.thickness = 0;
        button14.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button14;
            leaname.text = "KALAHARI\nTANGERINE";
            leaname.fontSize = fonttext;
            currentButton.thickness = 2;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/KALAHARI TANGERINE.jpg", scene);
            //  textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/KALAHARI TANGERINE.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            // textureblack.bumpTexture.uScale = 10;
            // textureblack.bumpTexture.vScale = 10;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        kaligd.addControl(button14, 1, 1);

        // ////////////////////////////////////////////////////////////////////////////////////luxry ostrich 
        var ostrichgd = new BABYLON.GUI.Grid();
        ostrichgd.width = "100%";
        ostrichgd.height = "99.9%";
        ostrichgd.addRowDefinition(0.30);
        ostrichgd.addRowDefinition(0.70);
        leathergd.addControl(ostrichgd, 1, 0);

        var ostrichText = new BABYLON.GUI.TextBlock();
        ostrichText.text = "LUXURY\nOSTRICH";
        ostrichText.resizeToFit = true;
        ostrichText.fontSize = "28%";
        ostrichgd.addControl(ostrichText, 0);

        var ostgd = new BABYLON.GUI.Grid("kaligd");
        ostgd.isVisible = true;
        ostgd.width = "100%";
        ostgd.height = "100%";
        ostgd.paddingTop = "0%";
        ostgd.addRowDefinition(1 / 2);
        ostgd.addRowDefinition(1 / 2);
        ostgd.addColumnDefinition(1 / 2);
        ostgd.addColumnDefinition(1 / 2);
        ostrichgd.addControl(ostgd, 1);

        var button17 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH CHOCOLATE.jpg ");
        button17.width = btnW;
        button17.height = btnH;
        button17.color = "#25BAFFFF";
        button17.cornerRadius = 100;
        button17.thickness = 0;
        button17.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button17;
            leaname.text = "LUXURY OSTRICH\nCHOCOLATE";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/LUXURY OSTRICH CHOCOLATE.jpg", scene);
            //textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/LUXURY OSTRICH CHOCOLATE.bmp", scene);
            textureblack.diffuseTexture.uScale = 3;
            textureblack.diffuseTexture.vScale = 3;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        ostgd.addControl(button17, 0, 0);

        var button18 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH RED.jpg ");
        button18.width = btnW;
        button18.height = btnH;
        button18.color = "#25BAFFFF";
        button18.cornerRadius = 100;
        button18.thickness = 0;
        button18.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button18;
            leaname.text = "LUXURY OSTRICH\nRED";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/LUXURY OSTRICH RED.jpg", scene);
            // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/LUXURY OSTRICH RED.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        ostgd.addControl(button18, 0, 1);

        var button19 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/LUXURY OSTRICH TAN.jpg ");
        button19.width = btnW;
        button19.height = btnH;
        button19.color = "#25BAFFFF";
        button19.cornerRadius = 100;
        button19.thickness = 0;
        button19.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button19;
            leaname.text = "LUXURY OSTRICH\nTAN";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/LUXURY OSTRICH TAN.jpg", scene);
            // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/LUXURY OSTRICH TAN.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        ostgd.addControl(button19, 1, 0);
        // //////////////////////////////////////////////////////////////////////////////////////////////////////////ranch smooth

        var ranchgd = new BABYLON.GUI.Grid();
        ranchgd.width = "100%";
        ranchgd.height = "99.9%";
        ranchgd.addRowDefinition(0.30);
        ranchgd.addRowDefinition(0.70);
        leathergd.addControl(ranchgd, 0, 1);

        var ranchText = new BABYLON.GUI.TextBlock();
        ranchText.text = "RANCH SMOOTH\nCALF";
        ranchText.resizeToFit = true;
        ranchText.fontSize = "28%";
        ranchgd.addControl(ranchText, 0);

        var rangd = new BABYLON.GUI.Grid("kaligd");
        rangd.isVisible = true;
        rangd.width = "100%";
        rangd.height = "100%";
        rangd.paddingTop = "0%";
        rangd.addRowDefinition(1/2);
        rangd.addRowDefinition(1/2);
        rangd.addColumnDefinition(1 / 3);
        rangd.addColumnDefinition(1 / 3);
        rangd.addColumnDefinition(1 / 3);
        ranchgd.addControl(rangd,1);

        var btcW = "85%";
        var btcH = "60%";


        var button20 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF BLACK.jpg ");
        button20.width = btcW;
        button20.height = btcH;
        button20.color = "#25BAFFFF";
        button20.cornerRadius = 100;
        button20.thickness = 0;
        button20.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button20;
            leaname.text = "RANCH SMOOTH\nCALF BLACK";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/RANCH SMOOTH CALF BLACK.jpg", scene);
            // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/RANCH SMOOTH CALF BLACK.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        rangd.addControl(button20, 0, 0);

        var button21 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF EMERALD.jpg ");
        button21.width = btcW;
        button21.height = btnH;
        button21.color = "#25BAFFFF";
        button21.cornerRadius = 100;
        button21.thickness = 0;
        button21.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button21;
            leaname.text = "RANCH SMOOTH\nCALF EMERALD";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/RANCH SMOOTH CALF EMERALD.jpg", scene);
            //  textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/RANCH SMOOTH CALF EMERALD.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        rangd.addControl(button21, 0, 1);


        var button22 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF MID NIGHT BLUE.jpg ");
        button22.width = btcW;
        button22.height = btcH;
        button22.color = "#25BAFFFF";
        button22.cornerRadius = 100;
        button22.thickness = 0;
        button22.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button22;
            leaname.text = "RANCH SMOOTH CALF\nMID NIGHT BLUE";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/RANCH SMOOTH CALF MID NIGHT BLUE.jpg", scene);
            //  textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/RANCH SMOOTH CALF MID NIGHT BLUE.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        rangd.addControl(button22, 0, 2);

        var button23 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF RED.jpg ");
        button23.width = btcW;
        button23.height = btcH;
        button23.color = "#25BAFFFF";
        button23.cornerRadius = 100;
        button23.thickness = 0;
        button23.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button23;
            leaname.text = "RANCH SMOOTH\nCALF RED";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/RANCH SMOOTH CALF RED.jpg", scene);
            //textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/RANCH SMOOTH CALF RED.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        rangd.addControl(button23, 1, 0);

        var button24 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN  BROWN.jpg ");
        button24.width = btcW;
        button24.height = btcH;
        button24.color = "#25BAFFFF";
        button24.cornerRadius = 100;
        button24.thickness = 0;
        button24.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button24;
            leaname.text = "RANCH SMOOTH\nCALF TAN BROWN";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/RANCH SMOOTH CALF TAN  BROWN.jpg", scene);
            //textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/RANCH SMOOTH CALF TAN  BROWN.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            // textureblack.bumpTexture.uScale = 2;
            // textureblack.bumpTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        rangd.addControl(button24, 1, 1);

        var button25 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/RANCH SMOOTH CALF TAN.jpg ");
        button25.width = btcW;
        button25.height = btcH;
        button25.color = "#25BAFFFF";
        button25.cornerRadius = 100;
        button25.thickness = 0;
        button25.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button25;
            leaname.text = "RANCH SMOOTH\nCALF TAN";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/RANCH SMOOTH CALF TAN.jpg", scene);
            //  textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/RANCH SMOOTH CALF TAN.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        rangd.addControl(button25, 1, 2);


        // /////////////////////////////////////////////////////////// real dear
     


        var raeldeergd = new BABYLON.GUI.Grid();
        raeldeergd.width = "100%";
        raeldeergd.height = "99.9%";
        raeldeergd.addRowDefinition(0.30);
        raeldeergd.addRowDefinition(0.70);
        leathergd.addControl(raeldeergd, 2, 0);

        var DeerText = new BABYLON.GUI.TextBlock();
        DeerText.text = "REAL DEER";
        DeerText.resizeToFit = true;
        DeerText.fontSize = "28%";
        raeldeergd.addControl(DeerText, 0);

        var button26 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REAL DEER BLACK.jpg ");
        button26.width = "32%";
        button26.height = "32%";
        button26.color = "#25BAFFFF";
        button26.cornerRadius = 100;
        button26.thickness = 0;
        button26.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button26;
            leaname.text = "REAL DEER\nBLACK";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/REAL DEER BLACK.jpg", scene);
           // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/REAL DEER BLACK.bmp", scene);
            textureblack.diffuseTexture.uScale = 5;
            textureblack.diffuseTexture.vScale = 5;
            // textureblack.bumpTexture.uScale = 5;
            // textureblack.bumpTexture.vScale = 5;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        raeldeergd.addControl(button26, 1);

        // /////////////////////////////////////////////////////////////////////// Regular classic
        var regulargd = new BABYLON.GUI.Grid();
        regulargd.width = "100%";
        regulargd.height = "99.9%";
        regulargd.addRowDefinition(0.30);
        regulargd.addRowDefinition(0.70);
        leathergd.addControl(regulargd, 2, 1);

        var DeerText = new BABYLON.GUI.TextBlock();
        DeerText.text = "REGULAR\nCLASSIC";
        DeerText.resizeToFit = true;
        DeerText.fontSize = "28%";
        regulargd.addControl(DeerText, 0);

        var regugd = new BABYLON.GUI.Grid("kaligd");
        regugd.isVisible = true;
        regugd.width = "100%";
        regugd.height = "100%";
        regugd.paddingTop = "0%";
        regugd.addRowDefinition(1/2);
        regugd.addRowDefinition(1/2);
        regugd.addColumnDefinition(1 / 3);
        regugd.addColumnDefinition(1 / 3);
        regugd.addColumnDefinition(1 / 3);
        regulargd.addControl(regugd, 1);


        var button27 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BLACK.jpg ");
        button27.width = btnW;
        button27.height = btnH;
        button27.color = "#25BAFFFF";
        button27.cornerRadius = 100;
        button27.thickness = 0;
        button27.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button27;
            leaname.text = "REGULAR CLASSIC\nLEATHER BLACK";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/REGULAR CLASSIC LEATHER BLACK.jpg", scene);
           // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/REGULAR CLASSIC LEATHER BLACK.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        regugd.addControl(button27, 0, 0);

        var button28 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER BROWN.jpg ");
        button28.width = btnW;
        button28.height = btnH;
        button28.color = "#25BAFFFF";
        button28.cornerRadius = 100;
        button28.thickness = 0;
        button28.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button28;
            leaname.text = "REGULAR CLASSIC\nLEATHER BROWN";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/REGULAR CLASSIC LEATHER BROWN.jpg", scene);
            //textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/REGULAR CLASSIC LEATHER BROWN.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        regugd.addControl(button28, 0, 1);

        var button29 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER HONEY.jpg ");
        button29.width = btnW;
        button29.height = btnH;
        button29.color = "#25BAFFFF";
        button29.cornerRadius = 100;
        button29.thickness = 0;
        button29.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button29;
            leaname.text = "REGULAR CLASSIC\nLEATHER HONEY";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/REGULAR CLASSIC LEATHER HONEY.jpg", scene);
         //   textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/REGULAR CLASSIC LEATHER HONEY.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        regugd.addControl(button29, 0, 2);

        var button30 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER MID NIGHT BLUE.jpg ");
        button30.width = btnW;
        button30.height = btnH;
        button30.color = "#25BAFFFF";
        button30.cornerRadius = 100;
        button30.thickness = 0;
        button30.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button30;
            leaname.text = "REGULAR CLASSIC\nLEATHER MID NIGHT BLUE";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/REGULAR CLASSIC LEATHER MID NIGHT BLUE.jpg", scene);
           // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/REGULAR CLASSIC LEATHER MID NIGHT BLUE.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        regugd.addControl(button30, 1, 0);

        var button31 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER RED.jpg ");
        button31.width = btnW;
        button31.height = btnH;
        button31.color = "#25BAFFFF";
        button31.cornerRadius = 100;
        button31.thickness = 0;
        button31.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button31;
            leaname.text = "REGULAR CLASSIC\nLEATHER RED";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/REGULAR CLASSIC LEATHER RED.jpg", scene);
           // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/REGULAR CLASSIC LEATHER RED.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        regugd.addControl(button31, 1, 1);

        var button32 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/REGULAR CLASSIC LEATHER TAN.jpg ");
        button32.width = btnW;
        button32.height = btnH;
        button32.color = "#25BAFFFF";
        button32.cornerRadius = 100;
        button32.thickness = 0;
        button32.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = button32;
            leaname.text = "REGULAR CLASSIC\nLEATHER TAN";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/REGULAR CLASSIC LEATHER TAN.jpg", scene);
           // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/REGULAR CLASSIC LEATHER TAN.bmp", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        regugd.addControl(button32, 1, 2);


        // /////////////////////////////////////////////////////////////////////////////////////// baby croco 
        // var babycrocotab = new BABYLON.GUI.Rectangle("babycroco");
        // babycrocotab.width = "100%";
        // babycrocotab.height = "97%";
        // babycrocotab.verticalAlignment = "Center";
        // babycrocotab.horizontalAlignment = "Center";
        // babycrocotab.top = "3%";
        // babycrocotab.paddingRight = "1%";
        // babycrocotab.cornerRadius = 0;
        // babycrocotab.color = "black";
        // babycrocotab.thickness = 0;
        // babycrocotab.background = "";
        // gd.addControl(babycrocotab, 5);


        // var babycrocogd = new BABYLON.GUI.Grid("babycroco");
        // babycrocogd.width = "100%";
        // babycrocogd.height = "100%";
        // babycrocogd.addRowDefinition(0.30);
        // babycrocogd.addRowDefinition(0.70);
        // babycrocotab.addControl(babycrocogd);

        // var babytab = new BABYLON.GUI.Rectangle();
        // babytab.width = "100%";
        // babytab.height = "100%";
        // babytab.color = "black";
        // babytab.thickness = .5;
        // babycrocogd.addControl(babytab, 0);

        // var babyText = new BABYLON.GUI.TextBlock();
        // babyText.text = "BABY CROCO";
        // babyText.resizeToFit = true;
        // babyText.fontSize = fontsizes;
        // babytab.addControl(babyText);

        // var babycrtab = new BABYLON.GUI.Rectangle();
        // babycrtab.width = "100%";
        // babycrtab.height = "100%";
        // babycrtab.color = "black";
        // babycrtab.thickness = 1;
        // babycrocogd.addControl(babycrtab, 1);

        var babycrocogd = new BABYLON.GUI.Grid();
        babycrocogd.width = "100%";
        babycrocogd.height = "99.9%";
        babycrocogd.addRowDefinition(0.30);
        babycrocogd.addRowDefinition(0.70);
        leathergd.addControl(babycrocogd, 1, 1);

        var DeerText = new BABYLON.GUI.TextBlock();
        DeerText.text = "BABY\nCROCO";
        DeerText.resizeToFit = true;
        DeerText.fontSize = "28%";
        babycrocogd.addControl(DeerText, 0);



        var babygd = new BABYLON.GUI.Grid("kaligd");
        babygd.width = "100%";
        babygd.height = "100%";
        babygd.addRowDefinition(1/2);
        babygd.addRowDefinition(1/2);
        babygd.addColumnDefinition(1 / 3);
        babygd.addColumnDefinition(1 / 3);
        babygd.addColumnDefinition(1 / 3);
        babycrocogd.addControl(babygd,1);


        var L1Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture1", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BLACK.jpg");
        L1Btn.width = btnW;
        L1Btn.height = btnH;
        L1Btn.color = "#25BAFFFF";
        L1Btn.cornerRadius = 100;
        L1Btn.thickness = 0;
        L1Btn.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = L1Btn;
            leaname.text = "BABY CROCO\nBLACK";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/BABY CROCO BLACK.jpg", scene);
         //   textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/BABY CROCO BLACK.bmp", scene);
            textureblack.diffuseTexture.uScale = 4;
            textureblack.diffuseTexture.vScale = 4;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        babygd.addControl(L1Btn, 0, 0);

        var L2Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO BROWN.jpg ");
        L2Btn.width = btnW;
        L2Btn.height = btnH;
        L2Btn.color = "#25BAFFFF";
        L2Btn.cornerRadius = 100;
        L2Btn.thickness = 0;
        L2Btn.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = L2Btn;
            leaname.text = "BABY CROCO\nBROWN";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/BABY CROCO BROWN.jpg", scene);
          //  textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/BABY CROCO BROWN.bmp", scene);
            textureblack.diffuseTexture.uScale = 4;
            textureblack.diffuseTexture.vScale = 4;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        babygd.addControl(L2Btn, 0, 1);


        var L3Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO EMERALD.jpg ");
        L3Btn.width = btnW;
        L3Btn.height = btnH;
        L3Btn.color = "#25BAFFFF";
        L3Btn.cornerRadius = 100;
        L3Btn.thickness = 0;
        L3Btn.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = L3Btn;
            leaname.text = "BABY CROCO\nEMERALD";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/BABY CROCO EMERALD.jpg", scene);
            //textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/BABY CROCO EMERALD.bmp", scene);
            textureblack.diffuseTexture.uScale = 4;
            textureblack.diffuseTexture.vScale = 4;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        babygd.addControl(L3Btn, 0, 2);



        var L4Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture4", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO MID NIGHT BLUE.jpg ");
        L4Btn.width = btnW;
        L4Btn.height = btnH;
        L4Btn.color = "#25BAFFFF";
        L4Btn.cornerRadius = 100;
        L4Btn.thickness = 0;
        L4Btn.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = L4Btn;
            leaname.text = "BABY CROCO\nMID NIGHT BLUE";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/BABY CROCO MID NIGHT BLUE.jpg", scene);
          //  textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/BABY CROCO MID NIGHT BLUE.bmp", scene);
            textureblack.diffuseTexture.uScale = 4;
            textureblack.diffuseTexture.vScale = 4;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        babygd.addControl(L4Btn, 1, 0);

        var L5Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture5", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BABY CROCO PINK.jpg ");
        L5Btn.width = btnW;
        L5Btn.height = btnH;
        L5Btn.color = "#25BAFFFF";
        L5Btn.cornerRadius = 100;
        L5Btn.thickness = 0;
        L5Btn.onPointerUpObservable.add(function () {
            Loadingpanel.isVisible = true;
            currentButton.thickness = 0;
            currentButton = L5Btn;
            leaname.text = "BABY CROCO\nPINK";
            leaname.fontSize = fonttext;
            currentButton.thickness = 3;
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/BABY CROCO PINK.jpg", scene);
           // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/BABY CROCO PINK.bmp", scene);
            textureblack.diffuseTexture.uScale = 4;
            textureblack.diffuseTexture.vScale = 4;
            // textureblack.bumpTexture.uScale = 1.1;
            // textureblack.bumpTexture.vScale = 1.1;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            Bag.material = textureblack;
            Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
            Stich.renderOverlay = true;
            textureblack.diffuseTexture.onLoadObservable.add(tex => {
                console.log('alpha:', textureblack.hasAlpha)
                Loadingpanel.isVisible = false;
            })
        });
        babygd.addControl(L5Btn, 1, 1);


        // ////////////////////////////////////////////////    leather lining main canvas 

        // var leatherliningtab = new BABYLON.GUI.Rectangle();
        // leatherliningtab.isVisible = false;
        // leatherliningtab.width = "25%";
        // leatherliningtab.height = "100%";
        // leatherliningtab.verticalAlignment = "Center";
        // leatherliningtab.horizontalAlignment = "Center";
        // leatherliningtab.color = "black";
        // leatherliningtab.thickness = 0;
        // leatherliningtab.background = "#F5F4F2";
        // leatherliningtab.shadowColor = "black";
        // leatherliningtab.shadowOffsetX = 3;
        // leatherliningtab.shadowBlur = 15;
        // leatherliningtab.shadowColor = "#7C7878FF";
        // advancedTexture.addControl(leatherliningtab);

        // var lininggd = new BABYLON.GUI.Grid();
        // lininggd.width = "100%";
        // lininggd.height = "100%";
        // lininggd.paddingTop = "0%";
        // lininggd.addRowDefinition(0.05);
        // lininggd.addRowDefinition(0.95);
        // lininggd.addColumnDefinition(0.09);
        // lininggd.addColumnDefinition(0.91);
        // leatherliningtab.addControl(lininggd);

        // var leliText = new BABYLON.GUI.TextBlock();
        // leliText.text = "LININGS";
        // leliText.resizeToFit = true;
        // leliText.fontSize = "98%";
        // lininggd.addControl(leliText, 0, 1);

        // var liclose = BABYLON.GUI.Button.CreateImageOnlyButton("close", " https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/hidesign%20pics/back.png");
        // liclose.width = "90%"
        // liclose.height = "90%";
        // liclose.color = "black";
        // liclose.fontSize = "90%";
        // liclose.left = "1%";
        // liclose.cornerRadius = 3;
        // liclose.thickness = 0;
        // liclose.onPointerUpObservable.add(function () {
        //     leatherliningtab.isVisible = false;
        //     mainpanel.isVisible = true;
        //     descrippanel.isVisible = false;
        // });
        // lininggd.addControl(liclose, 0, 0);

        // var Leatherlinintab = new BABYLON.GUI.Rectangle();
        // Leatherlinintab.width = "100%";
        // Leatherlinintab.height = "100%";
        // Leatherlinintab.verticalAlignment = "Center";
        // Leatherlinintab.horizontalAlignment = "Center";
        // Leatherlinintab.color = "black";
        // Leatherlinintab.thickness = 0;
        // lininggd.addControl(Leatherlinintab, 1, 1);


        // var scroll1 = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
        // scroll1.width = "100%";
        // scroll1.height = "100%";
        // scroll1.barSize = "10";
        // scroll1.thumbImage = new BABYLON.GUI.Image("thumb", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Bar.png");
        // scroll1.barImage = new BABYLON.GUI.Image("bar", "");
        // scroll1.thumbLength = 0.3;
        // scroll1.thumbHeight = 1;
        // scroll1.barImageHeight = 0.3;
        // scroll1.barBackground = "blue";
        // scroll1.onPointerEnterObservable.add(function () {
        //     // console.log("in");
        //     camera1.detachControl();
        //     bgcamera.detachControl();
        // });
        // scroll1.onPointerOutObservable.add(function () {
        //     //   console.log("out");        
        //     camera1.attachControl(leatherliningtab, true);
        //     bgcamera.attachControl(leatherliningtab, true);
        // });
        // Leatherlinintab.addControl(scroll1)

        // var gd1 = new BABYLON.GUI.Grid();
        // gd1.width = "100%";
        // gd1.height = "100%";
        // gd1.addRowDefinition(1 / 6);
        // gd1.addRowDefinition(1 / 6);
        // gd1.addRowDefinition(1 / 6);
        // gd1.addRowDefinition(1 / 6);
        // gd1.addRowDefinition(1 / 6);
        // gd1.addRowDefinition(1 / 6);
        // scroll1.addControl(gd1);
        // ////////////////////////////////////////////////////////////////////////////////////////////////

        // var linText = new BABYLON.GUI.TextBlock();
        // linText.text = "LEATHER LINING";
        // linText.resizeToFit = true;
        // linText.fontSize = "34%";
        // gd1.addControl(linText, 0);

        // var LINgd = new BABYLON.GUI.Grid("kaligd");
        // LINgd.width = "100%";
        // LINgd.height = "100%";
        // LINgd.addRowDefinition(0.30);
        // LINgd.addRowDefinition(0.70);
        // gd1.addControl(LINgd, 1);

        // var Ptab = new BABYLON.GUI.Rectangle();
        // Ptab.width = "100%";
        // Ptab.height = "100%";
        // Ptab.color = "black";
        // Ptab.thickness = .5;
        // LINgd.addControl(Ptab, 0);

        // var lText = new BABYLON.GUI.TextBlock();
        // lText.text = "KID SUEDE";
        // lText.resizeToFit = true;
        // lText.fontSize = "50%";
        // Ptab.addControl(lText, 0);

        // var PLtab = new BABYLON.GUI.Rectangle();
        // PLtab.width = "100%";
        // PLtab.height = "100%";
        // PLtab.color = "black";
        // PLtab.thickness = 1;
        // LINgd.addControl(PLtab, 1);

        // var LININGgd = new BABYLON.GUI.Grid("kaligd");
        // LININGgd.width = "100%";
        // LININGgd.height = "100%";
        // LININGgd.addRowDefinition(1);
        // LININGgd.addColumnDefinition(1 / 6);
        // LININGgd.addColumnDefinition(1 / 6);
        // LININGgd.addColumnDefinition(1 / 6);
        // LININGgd.addColumnDefinition(1 / 6);
        // LININGgd.addColumnDefinition(1 / 6);
        // LININGgd.addColumnDefinition(1 / 6);
        // PLtab.addControl(LININGgd, 1);

        // var crnt;

        // var button15 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER BROWN.jpg ");
        // crnt = button15;
        // button15.width = "90%";
        // button15.height = "70%";
        // button15.color = "#25BAFFFF";
        // button15.cornerRadius = 100;
        // button15.thickness = 0;
        // button15.onPointerUpObservable.add(function () {
        //     Loadingpanel.isVisible = true;
        //     crnt.thickness = 0;
        //     crnt = button15;
        //     leaname.text = "KID SUEDE GENUINE\nLEATHER BROWN";
        //     leaname.fontSize = fonttext;
        //     crnt.thickness = 2;
        //     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
        //     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/KID SUEDE GENUINE LEATHER BROWN.jpg", scene);
        //    // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/KID SUEDE GENUINE LEATHER BROWN.bmp", scene);
        //     textureblack.diffuseTexture.uScale = 2;
        //     textureblack.diffuseTexture.vScale = 2;
        //     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
        //     Bag.material = textureblack;
        //     Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
        //     Stich.renderOverlay = true;
        //     textureblack.diffuseTexture.onLoadObservable.add(tex => {
        //         console.log('alpha:', textureblack.hasAlpha)
        //         Loadingpanel.isVisible = false;
        //     })
        // });
        // LININGgd.addControl(button15, 0, 0);

        // var button16 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/KID SUEDE GENUINE LEATHER TAN.jpg ");
        // button16.width = "90%"
        // button16.height = "70%";
        // button16.color = "#25BAFFFF";
        // button16.cornerRadius = 100;
        // button16.thickness = 0;
        // button16.onPointerUpObservable.add(function () {
        //     Loadingpanel.isVisible = true;
        //     crnt.thickness = 0;
        //     crnt = button16;
        //     leaname.text = "KID SUEDE GENUINE\nLEATHER TAN";
        //     leaname.fontSize = fonttext;
        //     crnt.thickness = 2;
        //     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
        //     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/KID SUEDE GENUINE LEATHER TAN.jpg", scene);
        //   //  textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/KID SUEDE GENUINE LEATHER TAN.bmp", scene);
        //     textureblack.diffuseTexture.uScale = 3;
        //     textureblack.diffuseTexture.vScale = 3;
        //     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
        //     Bag.material = textureblack;
        //     Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
        //     Stich.renderOverlay = true;
        //     textureblack.diffuseTexture.onLoadObservable.add(tex => {
        //         console.log('alpha:', textureblack.hasAlpha)
        //         Loadingpanel.isVisible = false;
        //     })
        // });
        // LININGgd.addControl(button16, 0, 1);

        // /////////////////////////////////



        // var HBLText = new BABYLON.GUI.TextBlock();
        // HBLText.text = "FABRIC LINING";
        // HBLText.resizeToFit = true;
        // HBLText.fontSize = "35%";
        // gd1.addControl(HBLText, 2);


        // var HBgd = new BABYLON.GUI.Grid("kalharigd");
        // HBgd.isVisible = true;
        // HBgd.width = "100%";
        // HBgd.height = "100%";
        // HBgd.addRowDefinition(0.30);
        // HBgd.addRowDefinition(0.70);
        // gd1.addControl(HBgd, 3);

        // var hbtab = new BABYLON.GUI.Rectangle();
        // hbtab.width = "100%";
        // hbtab.height = "100%";
        // hbtab.color = "black";
        // hbtab.thickness = 0.5;
        // HBgd.addControl(hbtab, 0);

        // var HBLTex = new BABYLON.GUI.TextBlock();
        // HBLTex.text = "HIDESIGN BRANDED LINING";
        // HBLTex.resizeToFit = true;
        // HBLTex.fontSize = "50%";
        // hbtab.addControl(HBLTex);

        // var htab = new BABYLON.GUI.Rectangle();
        // htab.width = "100%";
        // htab.height = "100%";
        // htab.color = "black";
        // htab.thickness = 1;
        // HBgd.addControl(htab, 1);

        // var hbrgd = new BABYLON.GUI.Grid("kaligd");
        // hbrgd.isVisible = true;
        // hbrgd.width = "100%";
        // hbrgd.height = "100%";
        // hbrgd.addRowDefinition(1);
        // hbrgd.addColumnDefinition(1 / 6);
        // hbrgd.addColumnDefinition(1 / 6);
        // hbrgd.addColumnDefinition(1 / 6);
        // hbrgd.addColumnDefinition(1 / 6);
        // hbrgd.addColumnDefinition(1 / 6);
        // hbrgd.addColumnDefinition(1 / 6);
        // HBgd.addControl(hbrgd, 1);

        // var L8Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture8", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BIG BROWN.jpg ");
        // L8Btn.width = "90%";
        // L8Btn.height = "70%";
        // L8Btn.color = "#25BAFFFF";
        // L8Btn.cornerRadius = 100;
        // L8Btn.thickness = 0;
        // L8Btn.onPointerUpObservable.add(function () {
        //     Loadingpanel.isVisible = true;
        //     crnt.thickness = 0;
        //     crnt = L8Btn;
        //     leaname.text = "HIDESIGN BRANDED\nLINING BIG BROWN";
        //     leaname.fontSize = fonttext;
        //     crnt.thickness = 3;
        //     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
        //     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/HIDESIGN BRANDED LINING BIG BROWN.jpg", scene);
        //    // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/HIDESIGN BRANDED LINING BIG BROWN.bmp", scene);
        //     textureblack.diffuseTexture.uScale = 2;
        //     textureblack.diffuseTexture.vScale = 2;
        //     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
        //     Bag.material = textureblack;
        //     Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
        //     Stich.renderOverlay = true;
        //     textureblack.diffuseTexture.onLoadObservable.add(tex => {
        //         console.log('alpha:', textureblack.hasAlpha)
        //         Loadingpanel.isVisible = false;
        //     })
        // });
        // hbrgd.addControl(L8Btn, 0, 0);

        // var L9Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture9", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/HIDESIGN BRANDED LINING BLACK.jpg ");
        // L9Btn.width = "90%";
        // L9Btn.height = "70%";
        // L9Btn.color = "#25BAFFFF";
        // L9Btn.cornerRadius = 100;
        // L9Btn.thickness = 0;
        // L9Btn.onPointerUpObservable.add(function () {
        //     Loadingpanel.isVisible = true;
        //     crnt.thickness = 0;
        //     crnt = L4Btn;
        //     crnt.thickness = 3;
        //     leaname.text = "HIDESIGN BRANDED\nLINING BLACK";
        //     leaname.fontSize = fonttext;
        //     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
        //     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev2/seam/HIDESIGN BRANDED LINING BLACK.jpg", scene);
        //    // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/HIDESIGN BRANDED LINING BLACK.bmp", scene);
        //     textureblack.diffuseTexture.uScale = 2;
        //     textureblack.diffuseTexture.vScale = 2;
        //     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
        //     Bag.material = textureblack;
        //     Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
        //     Stich.renderOverlay = true;
        //     textureblack.diffuseTexture.onLoadObservable.add(tex => {
        //         console.log('alpha:', textureblack.hasAlpha)
        //         Loadingpanel.isVisible = false;
        //     })
        // });
        // hbrgd.addControl(L9Btn, 0, 1);

        // //////////////////////////////////////////////////////////




        // var BFgd = new BABYLON.GUI.Grid("kalharigd");
        // BFgd.isVisible = true;
        // BFgd.top = "0%";
        // BFgd.width = "100%";
        // BFgd.height = "100%";
        // BFgd.addRowDefinition(0.30);
        // BFgd.addRowDefinition(0.70);
        // gd1.addControl(BFgd, 4);

        // var BBFtab = new BABYLON.GUI.Rectangle();
        // BBFtab.width = "100%";
        // BBFtab.height = "100%";
        // BBFtab.color = "black";
        // BBFtab.thickness = 0.5;
        // BFgd.addControl(BBFtab, 0);

        // var BGFText = new BABYLON.GUI.TextBlock();
        // BGFText.text = "BRUSHED FABRIC";
        // BGFText.resizeToFit = true;
        // BGFText.fontSize = "50%";
        // BBFtab.addControl(BGFText);

        // var Btab = new BABYLON.GUI.Rectangle();
        // Btab.width = "100%";
        // Btab.height = "100%";
        // Btab.color = "black";
        // Btab.thickness = 1;
        // BFgd.addControl(Btab, 1);

        // var Bgd = new BABYLON.GUI.Grid("kaligd");
        // Bgd.isVisible = true;
        // Bgd.width = "100%";
        // Bgd.height = "100%";
        // Bgd.addRowDefinition(1);
        // Bgd.addColumnDefinition(1 / 6);
        // Bgd.addColumnDefinition(1 / 6);
        // Bgd.addColumnDefinition(1 / 6);
        // Bgd.addColumnDefinition(1 / 6);
        // Bgd.addColumnDefinition(1 / 6);
        // Bgd.addColumnDefinition(1 / 6);
        // Btab.addControl(Bgd);

        // var L6Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture6", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE BLUE.jpg ");
        // L6Btn.width = "90%";
        // L6Btn.height = "70%";
        // L6Btn.color = "#25BAFFFF";
        // L6Btn.cornerRadius = 100;
        // L6Btn.thickness = 0;
        // L6Btn.onPointerUpObservable.add(function () {
        //     Loadingpanel.isVisible = true;
        //     crnt.thickness = 0;
        //     crnt = L6Btn;
        //     leaname.text = "BRUSHED POLYESTER\nSUEDE BLUE";
        //     leaname.fontSize = fonttext;
        //     crnt.thickness = 3;
        //     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
        //     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE BLUE.jpg", scene);
        //    // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/BRUSHED POLYESTER SUEDE BLUE.bmp", scene);
        //     textureblack.diffuseTexture.uScale = 2;
        //     textureblack.diffuseTexture.vScale = 2;
        //     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
        //     Bag.material = textureblack;
        //     Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
        //     Stich.renderOverlay = true;
        //     textureblack.diffuseTexture.onLoadObservable.add(tex => {
        //         console.log('alpha:', textureblack.hasAlpha)
        //         Loadingpanel.isVisible = false;
        //     })
        // });
        // Bgd.addControl(L6Btn, 0, 0);

        // var L7Btn = BABYLON.GUI.Button.CreateImageOnlyButton("Texture7", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE RED.jpg ");
        // L7Btn.width = "90%";
        // L7Btn.height = "70%";
        // L7Btn.color = "#25BAFFFF";
        // L7Btn.cornerRadius = 100;
        // L7Btn.thickness = 0;
        // L7Btn.onPointerUpObservable.add(function () {
        //     Loadingpanel.isVisible = true;
        //     crnt.thickness = 0;
        //     crnt = L7Btn;
        //     leaname.text = "BRUSHED POLYESTER\nSUEDE RED";
        //     leaname.fontSize = fonttext;
        //     crnt.thickness = 3;
        //     var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
        //     textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE RED.jpg", scene);
        //    // textureblack.bumpTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/Dev/Normals/Normals/BRUSHED POLYESTER SUEDE RED.bmp", scene);
        //     textureblack.diffuseTexture.uScale = 2;
        //     textureblack.diffuseTexture.vScale = 2;
        //     textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
        //     Bag.material = textureblack;
        //     Stich.overlayColor = new BABYLON.Color3(0.97, 0.75, 0.41)
        //     Stich.renderOverlay = true;
        //     textureblack.diffuseTexture.onLoadObservable.add(tex => {
        //         console.log('alpha:', textureblack.hasAlpha)
        //         Loadingpanel.isVisible = false;
        //     })
        // });
        // Bgd.addControl(L7Btn, 0, 1);

    });



    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);
    advancedTexture.layer.layerMask = 0x10000000;






    // var anipanel = new BABYLON.GUI.Rectangle();
    // anipanel.verticalAlignment = "Center";
    // anipanel.horizontalAlignment = "Center";
    // anipanel.width = "10%";
    // anipanel.height = "7%";
    // anipanel.left = "88%";
    // anipanel.top = "3%";
    // anipanel.bottom = "30%";
    // anipanel.cornerRadius = 10;
    // anipanel.color = "Grey";
    // anipanel.thickness = 0;
    // anipanel.background = "#F5F4F2";
    // anipanel.image = "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Textures/BRUSHED POLYESTER SUEDE RED.jpg";
    // anipanel.resizeToFit = true;
    // advancedTexture.addControl(anipanel);



    // var AnimationgD = new BABYLON.GUI.Grid("kaligd");
    // AnimationgD.width = "98%";
    // AnimationgD.height = "100%";
    // AnimationgD.addRowDefinition(1);
    // AnimationgD.addColumnDefinition(1 / 2);
    // AnimationgD.addColumnDefinition(1 / 2);
    // anipanel.addControl(AnimationgD);


    // var button1 = BABYLON.GUI.Button.CreateSimpleButton("CLOSED_Btn");
    // button1.width = "100%"
    // button1.height = "80%";
    // button1.fontSize = "30%";
    // button1.textBlock.text = "CLOSED";
    // button1.color = "White";
    // button1.resizeToFit = true;
    // button1.cornerRadius = 100;
    // button1.background = "#56A3A3";
    // button1.onPointerUpObservable.add(function () {
    //     const aniGr = scene.animationGroups

    //     scene.animationGroups.forEach((g) => {
    //         g.stop()
    //     })
    //     let someAnim = scene.animationGroups[1]
    //     let someAnims = scene.animationGroups[2]
    //     let someAnim1 = scene.animationGroups[10]
    //     someAnim.play()
    //     someAnim.loopAnimation = false
    //     someAnims.play()
    //     someAnims.loopAnimation = false
    //     someAnim1.play()
    //     someAnim1.loopAnimation = false;
    //     button1.isVisible = false;
    //     CLOSED.isVisible = true;

    // });
    // AnimationgD.addControl(button1, 0, 0);


    // var CLOSED = BABYLON.GUI.Button.CreateSimpleButton("OPEN_Btn");
    // CLOSED.isVisible = false;
    // CLOSED.width = "100%"
    // CLOSED.height = "80%";
    // CLOSED.fontSize = "35%";
    // CLOSED.textBlock.text = "OPEN";
    // CLOSED.color = "white";
    // CLOSED.resizeToFit = true;
    // CLOSED.cornerRadius = 100;
    // CLOSED.background = "#56A3A3";
    // CLOSED.onPointerUpObservable.add(function () {
    //     const aniGr = scene.animationGroups
    //     scene.animationGroups.forEach((g) => {
    //         g.stop()
    //     })
    //     let someAnim = scene.animationGroups[1]
    //     let someAnims = scene.animationGroups[2]
    //     let someAnim1 = scene.animationGroups[10]
    //     someAnim.play()
    //     someAnim.loopAnimation = false
    //     someAnims.play()
    //     someAnims.loopAnimation = false
    //     someAnim1.play()
    //     someAnim1.loopAnimation = false;
    //     button1.isVisible = true;
    //     CLOSED.isVisible = false;
    //     // imageCLOSE.isVisible = false;
    //     // imageopen.isVisible = true;

    // });
    // AnimationgD.addControl(CLOSED, 0, 1);








    var descrippanel = new BABYLON.GUI.Rectangle();
    descrippanel.isVisible = false;
    descrippanel.verticalAlignment = "Center";
    descrippanel.horizontalAlignment = "Top";
    descrippanel.width = "18%";
    descrippanel.height = "10%";
    descrippanel.left = "81.5%";
    descrippanel.top = "15%";
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

    }, 180);

}

// Resize
window.addEventListener("resize", async function () {
    engine.resize();
    // console.log("safygfasghfsdhgciujkshgdcj")
});