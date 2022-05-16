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

function createScene() {


    // Low Poly Character with Blender Tutorial of Grant Abbitt: https://www.youtube.com/user/mediagabbitt
    // Character animations by Mixamo: https://www.mixamo.com/

    engine.enableOfflineSupport = false;

    // Scene and Camera
    var scene = new BABYLON.Scene(engine);

    var camera1 = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 4, 10, new BABYLON.Vector3(0, -5, 0), scene);
    scene.activeCamera = camera1;
    scene.activeCamera.attachControl(canvas, true);
    camera1.lowerRadiusLimit = 4;
    camera1.upperRadiusLimit = 10;
    camera1.wheelDeltaPercentage = 0.01;

    scene.clearColor = new BABYLON.Color3(0.89, 0.89, 0.83);


    // Skybox
    // var dome = new BABYLON.PhotoDome(
    //         "testdome",
    //         "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/Skybox.jpg",
    //         {
    //             resolution: 50,
    //             size: 1000
    //         },
    //         scene
    //     );
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



    // Ground
    // var ground = BABYLON.MeshBuilder.CreateGround("ground", { height: 5, width: 5, subdivisions: 4 }, scene);
    // var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
    // groundMaterial.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/wood.jpg", scene);
    // groundMaterial.diffuseTexture.uScale = 3;
    // groundMaterial.diffuseTexture.vScale = 3;
    // groundMaterial.specularColor = new BABYLON.Color3(.1, .1, .1);
    // ground.material = groundMaterial;
    // const random = {
    //     get real(){return Math.random()},
    //         float: (min=0,max=1)=>Math.random() * (max - min) + min,
    //         hex: (length=1) => {let s = "";for(let i = 0;i<length;i++){s += Math.floor(Math.random() * 16).toString(16)}return s;},
    //         get bool(){return Math.round(Math.random())?true:false},
    //         bin: (length=1) => {let b = "";for(let i = 0;i<length;i++){b += Math.round(Math.random())}return b;},
    //         int: (min=0,max=1) => Math.round(Math.random() * (max - min) + min),
    //         char: (len=1,min=33,max=126)=>{let s='';for(let i=0;i<len;i++){s+=String.fromCharCode(rand.int(min,max))};return s},
    //         cords: (dis=1,y0) => {
    //             let angle = rand.real*pi*2, angle2 = rand.real*pi*2;
    //             return y0?new Vector3(dis*Math.cos(angle),0,dis*Math.sin(angle)):new Vector3(dis*Math.cos(angle),dis*Math.sin(angle)*Math.cos(angle2),dis*Math.sin(angle)*Math.sin(angle2))
    //             console.log("here" + random);
    //         },
    // };
    // Load hero character and play animation
    BABYLON.SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Bag/New.glb", "", scene, function (newMeshes, particleSystems, skeletons, animationGroups) {
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

        // console.log(hero.material.name)
        //Scale the model down        
        newMeshes[0].scaling.scaleInPlace(10);

        //Lock camera on the character 
        camera1.target = hero;

        //Get the Samba animation Group
        //const sambaAnim = scene.getAnimationGroupByName("Shoved Reaction With Spin");
        //Play the Samba animation  
        //sambaAnim.start(true, 1.0, sambaAnim.from, sambaAnim.to, false);
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

        //   var bagmaterial = new BABYLON.StandardMaterial("bagmaterial", scene);
        //  bagmaterial.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/2.jpg", scene);
        //  bagmaterial.diffuseTexture.uScale = 5;
        //  bagmaterial.diffuseTexture.vScale = 5;
        //  bagmaterial.specularColor = new BABYLON.Color3(.1, .1, .1);
        //     her7.material = bagmaterial;
        //      her8.material = bagmaterial;
        //      her9.material = bagmaterial;
        //      her10.material = bagmaterial;
        //      her11.material = bagmaterial;
        //     her12.material = bagmaterial;
        //     her13.material = bagmaterial;
        //      her14.material = bagmaterial;
        //     her15.material = bagmaterial;
        //      her16.material = bagmaterial;
        //const importedAnimGroups = cannonImportResult.animationGroups;
        const aniGr = scene.animationGroups;
        // console.log(aniGr)
        scene.animationGroups.forEach((g) => {
            g.stop();
        });
        let someAnim = scene.animationGroups[3];
        // someAnim.play()
        //someAnim.loopAnimation = true
        var rect1 = new BABYLON.GUI.Rectangle();
        rect1.width = "30%";
        rect1.height = "30%";
        rect1.verticalAlignment = "Top";
        rect1.horizontalAlignment = "Left";
        rect1.cornerRadius = 20;
        rect1.color = "";
        rect1.thickness = 2;
        rect1.background = "";
        advancedTexture.addControl(rect1);

        var scroll = new BABYLON.GUI.ScrollViewer("Texture", scene, true);
        scroll.width = "100%";
        scroll.height = "100%";
        scroll.background = "";
        scroll.barSize = "10";
        //  scroll.verticalAlignment = "Top";
        //scroll.horizontalAlignment = "Left";
        scroll.cornerRadius = 0;
        scroll.thickness = 0;
        // scroll.left = "20";
        //scroll.top = "30";
        // scroll.thumbImage = new BABYLON.GUI.Image("thumb", "https://i.imgur.com/kDTplHW.png");
        // scroll.barImage = new BABYLON.GUI.Image("bar", "https://i.imgur.com/aPLvx9B.png");
        // scroll.thumbLength = 0.05;
        // scroll.thumbHeight = 0.7;
        // scroll.barImageHeight = 0.3;
        // scroll.scrollBackground = "";
        // scroll.barBackground = "blue";
        rect1.addControl(scroll);
        // advancedTexture.addControl(scroll);
        var gd = new BABYLON.GUI.Grid();
        gd.width = "600px";
        gd.height = "250px";
        gd.paddingTop = "10%";
        gd.addColumnDefinition(1 / 6);
        gd.addColumnDefinition(1 / 6);
        gd.addColumnDefinition(1 / 6);
        gd.addColumnDefinition(1 / 6);
        gd.addColumnDefinition(1 / 6);
        gd.addColumnDefinition(1 / 6);
        gd.addRowDefinition(0.5);
        gd.addRowDefinition(0.5);

        scroll.addControl(gd);

        var button2 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture1", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/2.jpg");
        button2.width = "95%";
        button2.height = "95%";
        button2.color = "white";
        //button2.verticalAlignment = "Top";
        // button2.horizontalAlignment = "Left";
        button2.cornerRadius = 20;
        // button2.left = "20";
        button2.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/2.jpg", scene);
            textureblack.diffuseTexture.uScale = 1;
            textureblack.diffuseTexture.vScale = 1;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        // advancedTexture.addControl(button2);
        gd.addControl(button2, 0, 0);

        var button3 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture2", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/3.jpg ");
        button3.width = "95%";
        button3.height = "95%";
        button3.color = "white";
        // button3.verticalAlignment = "Top";
        // button3.horizontalAlignment = "Left";
        // button3.top = "80";
        //  button3.left = "20";
        button3.cornerRadius = 20;
        button3.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/3.jpg", scene);
            hero.material = textureblack;
        });
        //  advancedTexture.addControl(button3);
        gd.addControl(button3, 1, 0);


        var button4 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/4.jpg ");
        button4.width = "95%";
        button4.height = "95%";
        button4.color = "white";
        button4.cornerRadius = 20;
        button4.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/4.jpg", scene);
            hero.material = textureblack;
        });
        gd.addControl(button4, 1, 1);



        var button5 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/bag.jpg ");
        button5.width = "95%";
        button5.height = "95%";
        button5.color = "white";
        button5.cornerRadius = 20;
        button5.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/bag.jpg", scene);
            textureblack.diffuseTexture.uScale = 2;
            textureblack.diffuseTexture.vScale = 2;
            textureblack.specularColor = new BABYLON.Color3(.1, .1, .1);
            hero.material = textureblack;
        });
        gd.addControl(button5, 0, 1);



        var button6 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/4.jpg ");
        button6.width = "95%";
        button6.height = "95%";
        button6.color = "white";
        button6.cornerRadius = 20;
        button6.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/4.jpg", scene);
            hero.material = textureblack;
        });
        gd.addControl(button6, 0, 2);


        var button7 = BABYLON.GUI.Button.CreateImageOnlyButton("Texture3", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/4.jpg ");
        button7.width = "95%";
        button7.height = "95%";
        button7.color = "white";
        button7.cornerRadius = 20;
        button7.onPointerUpObservable.add(function () {
            var textureblack = new BABYLON.StandardMaterial("textureblack", scene);
            textureblack.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/4.jpg", scene);
            hero.material = textureblack;
        });
        gd.addControl(button7, 2, 0);


        // var next = BABYLON.GUI.Button.CreateImageOnlyButton("Arrow_Btn", "https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/hidesign%20pics/4.jpg");
        // next.width = "50px"
        // next.height = "40px";
        // next.color = "";
        // rect1.addControl(next)

        // function fetchApi() {
        //     console.log("XGshagxhCgsalchagchjagchjagdcjhVHSDJLKNL SJDH FUIARYIUFYRUYUARYHF SAY DUIFHYSADFGSAYDH SAFUYHSAUDFYHUISA");
        //     const res = await fetch("https://raw.githubusercontent.com/Ashishj34/BabylonModels/main/Bag/New.glb");
        //     const data = await res.json();
        //     console.log("herestfad7yDFAHEG GASDUIFSATEYTF YUASE FEYTEYUFDWE7TDY GFQEFDUYKGAETDFGEWJHGDUWEVFU WGEUIFDHGKV FBD" + data);
        // }



    });


    
    
    
    
    // function apple(){
    //     console.log("nkjdhcjhnd dcfdsjnhcfidshck dshchjsdlc");
    // }

    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);


    var button1 = BABYLON.GUI.Button.CreateSimpleButton("Open_Btn", "Open");
    button1.width = "15%";
    button1.height = "4%";
    button1.color = "white";
    button1.verticalAlignment = "Top";
    button1.cornerRadius = 20;
    button1.background = "green";
    button1.onPointerUpObservable.add(function () {
        const aniGr = scene.animationGroups;
        console.log(aniGr);
        scene.animationGroups.forEach((g) => {
            g.stop();
        });
        let someAnim = scene.animationGroups[1];
        let someAnims = scene.animationGroups[2];
        let someAnim1 = scene.animationGroups[10];
        someAnim.play();
        someAnim.loopAnimation = false;
        someAnims.play();
        someAnims.loopAnimation = false;
        someAnim1.play();
        someAnim1.loopAnimation = false;
    });
    advancedTexture.addControl(button1);

    /// animations 
    var animationGroup = new BABYLON.AnimationGroup("my group");
    return scene;
}
        window.initFunction = async function() {
            
            
            var asyncEngineCreation = async function() {
                try {
                return createDefaultEngine();
                } catch(e) {
                console.log("the available createEngine function failed. Creating the default engine instead");
                return createDefaultEngine();
                }
            }

            window.engine = await asyncEngineCreation();
if (!engine) throw 'engine should not be null.';
startRenderLoop(engine, canvas);
window.scene = createScene();};
initFunction().then(() => {sceneToRender = scene                    
});



// Resize
window.addEventListener("resize", function () {
    engine.resize();
});
