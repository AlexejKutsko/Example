/*
 МЕНЮ ТОРГОВЦА

        Продажа

    var btnMinusWoodSell = document.getElementById('minus-wood_x5F_sell'); - кнопка, уменьшает количество продаваемого дерева, можно зажать
    var btnPlusWoodSell = document.getElementById('plus-wood_x5F_sell'); - кнопка, увеличивает количество продаваемого дерева, можно зажать
    var quantityWoodSell = document.getElementById('quantity-wood_x5F_sell'); - отображает количество продаваемого дерева
    var moneyWoodSell = document.getElementById('money-wood_x5F_sell'); - отображает количество денег за продаваемое дерево
    var btnSellWood = document.getElementById('btn-sell_x5F_wood'); - кнопка, продажа

    var btnMinusStoneSell = document.getElementById('minus-stone_x5F_sell');
    var btnPlusStoneSell = document.getElementById('plus-stone_x5F_sell');
    var quantityStoneSell = document.getElementById('quantity-stone_x5F_sell');
    var moneyStoneSell = document.getElementById('money-stone_x5F_sell');
    var btnSellStone = document.getElementById('btn-sell_x5F_stone');

    var btnMinusWaterSell = document.getElementById('minus-water_x5F_sell');
    var btnPlusWaterSell = document.getElementById('plus-water_x5F_sell');
    var quantityWaterSell = document.getElementById('quantity-water_x5F_sell');
    var moneyWaterSell = document.getElementById('money-water_x5F_sell');
    var btnSellWater = document.getElementById('btn-sell_x5F_water');

    var btnMinusEarthSell = document.getElementById('minus-earth_x5F_sell');
    var btnPlusEarthSell = document.getElementById('plus-earth_x5F_sell');
    var quantityEarthSell = document.getElementById('quantity-earth_x5F_sell');
    var moneyEarthSell = document.getElementById('money-earth_x5F_sell');
    var btnSellEarth = document.getElementById('btn-sell_x5F_earth');

        Покупка ( для покупки инструмента нужно определенное количество ресурса и денег)

    var btnBuyEx2 = document.getElementById('btn-buy_x5F_ex2');
    var btnBuyEx3 = document.getElementById('btn-buy_x5F_ex3');
    var btnBuySaw = document.getElementById('btn-buy_x5F_saw');
    var btnBuyEx4 = document.getElementById('btn-buy_x5F_ex4');
    var btnBuyEx5 = document.getElementById('btn-buy_x5F_ex5');
    var btnBuySaw2 = document.getElementById('btn-buy_x5F_saw2');

    var btnBuyPick2 = document.getElementById('btn-buy_x5F_pick2');
    var btnBuyPick3 = document.getElementById('btn-buy_x5F_pick3');
    var btnBuyPerf = document.getElementById('btn-buy_x5F_perf');
    var btnBuyPick4 = document.getElementById('btn-buy_x5F_pick4');
    var btnBuyPick5 = document.getElementById('btn-buy_x5F_pick5');
    var btnBuyPerf2 = document.getElementById('btn-buy_x5F_perf2');

    var btnBuyBucket2 = document.getElementById('btn-buy_x5F_bucket2');
    var btnBuyBucket3 = document.getElementById('btn-buy_x5F_bucket3');
    var btnBuyPump = document.getElementById('btn-buy_x5F_pump');
    var btnBuyBucket4 = document.getElementById('btn-buy_x5F_bucket4');
    var btnBuyBucket5 = document.getElementById('btn-buy_x5F_bucket5');
    var btnBuyPump2 = document.getElementById('btn-buy_x5F_pump2');

    var btnBuyShovel2 = document.getElementById('btn-buy_x5F_shovel2');
    var btnBuyShovel3 = document.getElementById('btn-buy_x5F_shovel3');
    var btnBuyShovel4 = document.getElementById('btn-buy_x5F_shovel4');
    var btnBuyShovel5 = document.getElementById('btn-buy_x5F_shovel5');

 МЕНЮ ПЕРСОНАЖА

        Статусы

    var statusPoints = document.getElementById('quantity-status-point'); - количество очков статов, добавляются за удаленные деревья, скалы, водицу

    var needStatusPointStr = document.getElementById('quantity-need-status_x5F_str'); - необходимое количество очков статов для апа силы, ростет с каждым апом в арифметической прогрессии
    var upStr = document.getElementById('up-pick_x5F_str'); - кнопка апа силы
    var statusPointStr = document.getElementById('quantity-status_x5F_str'); - количество силы, влияет на количество добываемого ресурса инструментом первого уровня

    var needStatusPointAgi = document.getElementById('quantity-need-status_x5F_agi'); - необходимое количество очков статов для апа ловкости, ростет с каждым апом в арифметической прогрессии
    var upAgi = document.getElementById('up-pick_x5F_agi'); - кнопка апа ловкости
    var statusPointAgi = document.getElementById('quantity-status_x5F_agi'); - количество ловкости, влияет на скорость добычи инструментом первого уровня

    var needStatusPointInt = document.getElementById('quantity-need-status_x5F_int'); - необходимое количество очков статов для апа интелекта, ростет с каждым апом в арифметической прогрессии
    var upInt = document.getElementById('up-pick_x5F_int'); - кнопка апа интелекта
    var statusPointInt = document.getElementById('quantity-status_x5F_int'); - количество интелекта, влияет на возможность использования инструмента второго уровня

        Сумка с инструментом ( инструмент появляется в сумке только после покупки у торговца, для использования инструмента необходимо иметь определенное количество статов для каждого инструмента)
    
    id="shovel6-pick_x5F_bag"
    id="shovel5-pick_x5F_bag"
    id="shovel4-pick_x5F_bag"
    id="shovel3-pick_x5F_bag"
    id="shovel2-pick_x5F_bag"
    id="shovel-pick_x5F_bag"
    
    id="bucket6-pick_x5F_bag"
    id="pump2-pick_x5F_bag"
    id="bucket5-pick_x5F_bag"
    id="bucket4-pick_x5F_bag"
    id="pump-pick_x5F_bag"
    id="bucket3-pick_x5F_bag"
    id="bucket2-pick_x5F_bag"
    id="bucket-pick_x5F_bag"

    id="pick6-pick_x5F_bag"
    id="perf2-pick_x5F_bag"
    id="pick5-pick_x5F_bag"
    id="pick4-pick_x5F_bag"
    id="perf-pick_x5F_bag"
    id="pick3-pick_x5F_bag"
    id="pick2-pick_x5F_bag"
    id="pick-pick_x5F_bag"

    id="ex6-pick_x5F_bag"  
    id="saw2-pick_x5F_bag"
    id="ex5-pick_x5F_bag"
    id="ex4-pick_x5F_bag"
    id="saw-pick_x5F_bag"
    id="ex3-pick_x5F_bag"
    id="ex2-pick_x5F_bag"
    id="ex-pick_x5F_bag"

УДАЛЯЕМЫЕ ДЕРЕВЬЯ, ТРАВА, СКАЛЫ, ОЗЕРО, ОСТРОВ
    
        Деревья 
    
    id="forest" - общая группа деревьев
    id="tree1" по id="tree488" - удаляются по очереди

        Трава (трава удаляется по мере удаления деревьев, нужно подобрать)
    
    id="grass" - общая группа травы
        Порядок удаления:
    id="grass1_1_"
    id="grass2_1_"
    id="grass3_2_"
    id="grass4_1_"
    id="grass5_1_"
    id="grass6_1_"
    id="grass7_1_"
    id="grass8_1_"
    id="grass9"

        Скалы

    id="cliffs" - общая группа скал
        Порядок удаления:
    id="cliff1"
    id="cliff2"
    id="cliff3"
    id="cliff4"
    id="cliff5"
    id="cliff6"
    id="cliff7"
    id="cliff8"
    id="cliff9"
    id="cliff10"
    id="cliff11"
    id="cliff12"
    id="cliff13"
    id="cliff14"
    id="cliff8-2"
    id="cliff9-2"
    id="cliff10-2"
    id="cliff11-2"
    id="cliff12-2"
    id="cliff13-2"
    id="cliff14-2"
    id="cliff9-3"
    id="cliff11-3"
    id="cliff12-3"
    id="cliff13-3"
    id="cliff14-3"
    id="cliff12-4"
    id="cliff13-4"
    id="cliff14-4"
    id="cliff14-5"

        Озеро

    id="sea" - общая группа озера
        Порядок удаления:
    id="sea1"
    id="sea2"
    id="sea3"
    id="sea4"
    id="sea5"
    id="sea6"
    id="sea7"
    id="sea8"
    id="sea9"
    id="sea10"
    id="sea11"
        
        Земля

    id="earth" - общая группа земли
        Порядок удаления:
    id="earth1"
    id="earth2_1_"
    id="earth3_1_"
    id="earth4_1_"
    id="earth5_1_"
    id="earth6_1_"
    id="earth7_1_"
    id="earth8_1_"
    id="earth9_1_"
    id="earth10_1_"
    id="earth11_1_"
    id="earth12_1_"
    id="earth13_1_"
    id="earth14_1_"
    id="earth15_1_"
    id="earth16_1_"
    id="earth17_1_"
    id="earth18_1_"
    id="earth19_1_"
    id="earth20_1_"
    id="earth21_1_"
    id="earth22_1_"
    id="earth23"
    
*/

(function(appMethods){
    var LOCATION = {
        enterPage: 'enterPage',
        island: 'island',
        forest: 'forest',
        cliffs: 'cliffs',
        sea: 'sea',
        earth: 'earth',
        pier: 'pier'
    };

    var ARMS_IDS = {
        'axe_1': ['right-arm_x5F_ex', 'left-arm_3_', 'first-left-arm_3_', 'first-right-arm_3_'],
        'axe_2': ['right-arm_x5F_ex', 'left-arm_3_', 'first-left-arm_3_', 'first-right-arm_x5F_ex2'],
        'axe_3': ['right-arm_x5F_ex', 'left-arm_3_', 'first-left-arm_3_', 'first-right-arm_x5F_ex3'],
        'axe_4': ['right-arm_x5F_ex', 'left-arm_3_', 'first-left-arm_3_', 'first-right-arm_x5F_ex4'],
        'axe_5': ['right-arm_x5F_ex', 'left-arm_3_', 'first-left-arm_3_', 'first-right-arm_x5F_ex5_1_'],
        'axe_6': ['right-arm_x5F_ex', 'left-arm_3_', 'first-left-arm_3_', 'first-right-arm_x5F_ex6'],
        'saw_1': ['right-arm_x5F_saw', 'left-arm_x5F_saw', 'first-right-arm_x5F_saw', 'first-left-arm_2_', 'chainsaw'],
        'saw_2': ['right-arm_x5F_saw2', 'left-arm_x5F_saw2', 'first-right-arm_x5F_saw2', 'first-left-arm_7_', 'saw2'],
        'sliver_1': ['sliver1'],
        'sliver_2': ['sliver2'],
        'sliver_3': ['sliver3'],
        'sliver_4': ['sliver4'],
        'sliver_5': ['sliver5'],
        'sliver_6': ['sliver6'],
        'sliver_7': ['sliver7'],
        'sliver_8': ['sliver8'],
        'sliver_9': ['sliver9'],
        'sliver_10': ['sliver10'],
        'sliver_11': ['sliver11'],

        'pick_1': ['right-armpick_1_', 'left-arm_2_', 'first-left-arm_4_', 'first-right-arm_4_'],
        'pick_2': ['right-armpick_1_', 'left-arm_2_', 'first-left-arm_4_', 'first-right-arm_x5F_pick2'],
        'pick_3': ['right-armpick_1_', 'left-arm_2_', 'first-left-arm_4_', 'first-right-arm_x5F_pick3'],
        'pick_4': ['right-armpick_1_', 'left-arm_2_', 'first-left-arm_4_', 'first-right-arm_x5F_pick4_1_'],
        'pick_5': ['right-armpick_1_', 'left-arm_2_', 'first-left-arm_4_', 'first-right-arm_x5F_pick5_1_'],
        'pick_6': ['right-armpick_1_', 'left-arm_2_', 'first-left-arm_4_', 'first-right-arm_x5F_pick6'],
        'perf_1': ['right-arm_x5F_perf', 'left-arm_x5F_perf', 'first-right-arm_x5F_perf', 'first-left-arm_5_', 'perf'],
        'perf_2': ['right-arm_x5F_perf2', 'left-arm_x5F_perf2', 'first-right-arm_x5F_perf2', 'first-left-arm_6_', 'perf2'],
        'splinters_1': ['splinters1'],
        'splinters_2': ['splinters2'],
        'splinters_3': ['splinters3'],
        'splinters_4': ['splinters4'],
        'splinters_5': ['splinters5'],
        'splinters_6': ['splinters6'],
        'splinters_7': ['splinters7'],
        'splinters_8': ['splinters8'],
        'splinters_9': ['splinters9'],
        'splinters_10': ['splinters10'],
        'splinters_11': ['splinters11'],

        'bucket_1': ['right-arm_x5F_bucket_1_', 'left-arm_4_', 'first-right-arm_x5F_bucket_1_', 'first-left-arm_8_', 'bucket_x5F_1_2_', 'bucket1_1_'],
        'bucket_2': ['right-arm_x5F_bucket_1_', 'left-arm_4_', 'first-right-arm_x5F_bucket2_2_', 'first-left-arm_8_', 'bucket_x5F_2_1_', 'bucket2_1_'],
        'bucket_3': ['right-arm_x5F_bucket_1_', 'left-arm_4_', 'first-right-arm_x5F_bucket3_1_', 'first-left-arm_8_', 'bucket_x5F_3_1_', 'bucket3_1_'],
        'bucket_4': ['right-arm_x5F_bucket_1_', 'left-arm_4_', 'first-right-arm_x5F_bucket4', 'first-left-arm_8_', 'bucket_x5F_4', 'bucket3_2_'],
        'bucket_5': ['right-arm_x5F_bucket_1_', 'left-arm_4_', 'first-right-arm_x5F_bucket5_1_', 'first-left-arm_8_', 'bucket_x5F_5_1_', 'bucket3_4_'],
        'bucket_6': ['right-arm_x5F_bucket_1_', 'left-arm_4_', 'first-right-arm_x5F_bucket6', 'first-left-arm_8_', 'bucket_x5F_6', 'bucket6'],
        'pump_1': ['right-arm_x5F_pump', 'left-arm_x5F_pump', 'first-right-arm_x5F_pump', 'first-left-arm_1_', 'handle'],
        'pump_2': ['right-arm_x5F_pump2', 'left-arm_x5F_pump', 'first-right-arm_x5F_pump2', 'first-left-arm_1_', 'handle2'],

        'shovel_1': ['right-arm_x5F_shovel', 'left-arm_5_', 'first-right-arm_x5F_shovel1', 'first-left-arm_11_', 'pile1'],
        'shovel_2': ['right-arm_x5F_shovel', 'left-arm_5_', 'first-right-arm_x5F_shovel2_2_', 'first-left-arm_11_', 'pile2'],
        'shovel_3': ['right-arm_x5F_shovel', 'left-arm_5_', 'first-right-arm_x5F_shovel3_2_', 'first-left-arm_11_', 'pile3'],
        'shovel_4': ['right-arm_x5F_shovel', 'left-arm_5_', 'first-right-arm_x5F_shovel4_1_', 'first-left-arm_11_', 'pile4'],
        'shovel_5': ['right-arm_x5F_shovel', 'left-arm_5_', 'first-right-arm_x5F_shovel5_1_', 'first-left-arm_11_', 'pile5'],
        'shovel_6': ['right-arm_x5F_shovel', 'left-arm_5_', 'first-right-arm_x5F_shovel6', 'first-left-arm_11_', 'pile6']
    };

    var gameModel = {
        activeLocation: 'enterPage',
        activeAnimationLevel1: null,
        activeAnimationLevel2: null,
        timeOutAnimation: null,
        timeOutAnimationForReflection: null,
        char: {
            armForest: null,
            armCliffs: null,
            armSea: null,
            armEarth: null,
            strength: 0,
            intelligence: 0,
            agi: 0,
            woods: 0,
            allWoods: 0,
            rocks: 0,
            allRocks: 0,
            water: 0,
            allWater: 0,
            earth: 0,
            allEarth: 0,
            money: 0
        },
        eventStartHandler: null,
        eventEndHandler: null
    };

    var startGameBtn = document.getElementById('btn_x5F_newgame');
    var exitBtn = document.getElementById('exit');
    var backBtn = document.getElementById('back');
    var charBtn = document.getElementById('char');
    var menuBagItems = document.getElementById('bag_x5F_char');
    var menuChar = document.getElementById('game-menu-char');

    var modalwindow = document.getElementById('modalwindow');
    var mainwindow = document.getElementById('mainwindow');

    var island = document.getElementById('game-island');

    var cliffs = document.getElementById('cliffs');
    var modalcliffs = document.querySelector('.game-modalcliffs');
    var gameCharCliffs = document.querySelector('#game-char-cliffs');
    var stone_extraction = document.getElementById('modalcliffs');

    var forest = document.getElementById('forest');
    var modalforest = document.querySelector('.game-modalforest');
    var gameCharForest = document.querySelector('#game-char-forest');
    var wood_extraction = document.getElementById('modalforest');

    var sea = document.getElementById('sea');
    var modalsea = document.querySelector('.game-modalsea');
    var gameCharSea = document.querySelector('#game-char-sea');
    var seaPiece = document.querySelector('#piece-sea'); //кусок озера, скрывающий черпак
    var water_extraction = document.getElementById('modalsea');

    var earth = document.getElementById('earth');
    var modalearth = document.querySelector('.game-modalearth');
    var gameCharEarth = document.querySelector('#game-char-earth');
    var earthPiece = document.querySelector('#piece-earth'); //кусок озера, скрывающий черпак
    var earth_extraction = document.getElementById('modalearth');

    var pier = document.getElementById('pier');
    var modalpier = document.querySelector('.game-modalpier');

    var outstone = document.getElementById('outstone');
    var outwood = document.getElementById('outwood');

    setArmAfterStartGame();

    startGameBtn.onclick = function() {
        startExitGame('enter');

        //todo set counters
    };

    exitBtn.onclick = function() {
        setLocationVisibility();
        startExitGame('exit');

        //todo clear counters
    };

    var _touchStartYBagMenu, _touchEndYBagMenu;
    menuBagItems.addEventListener('touchstart', function(evt){
        _touchStartYBagMenu = evt.changedTouches[0].clientY;
    });

    menuBagItems.addEventListener('touchend', function(evt) {
        _touchEndYBagMenu = evt.changedTouches[0].clientY;
        var _diffPosition = Math.abs(_touchStartYBagMenu - _touchEndYBagMenu);
        if(_diffPosition < 5){
            var _item = findGElement(evt.target),
                _itemId = _item.getAttribute('id');

            if(_item.classList.contains('arm-forest')){
                processingArmForestMenu(_itemId);
            } else if(_item.classList.contains('arm-cliffs')){
                processingArmCliffsMenu(_itemId);
            } else if(_item.classList.contains('arm-sea')){
                processingArmSeaMenu(_itemId);
            } else if(_item.classList.contains('arm-earth')){
                processingArmSeaMenu(_itemId);
            }

            setVisibilityArm(gameModel.char);
            menuChar.classList.toggle('display-block');
        }
    });

    function startExitGame(action){
        modalwindow.classList.toggle('display-block');
        mainwindow.classList.toggle('display-block');
        island.classList.toggle('display-block');

        gameModel.activeLocation = (action === 'enter') ? LOCATION.island : LOCATION.enterPage;
    }

    backBtn.onclick = function () {
        removeListenersHelper();
        setBtnsIslandVisibility();
        setLocationVisibility();
        //stop animation
        if(gameModel.activeAnimationLevel1){
            gameModel.activeAnimationLevel1.pupils.classList.toggle('pupils');
            gameModel.activeAnimationLevel1.mouthsmile.classList.toggle('display-block');
            gameModel.activeAnimationLevel1.mouth.classList.toggle('display-block');

            gameModel.activeAnimationLevel1.right_arm.DOM.classList.toggle(gameModel.activeAnimationLevel1.right_arm.animationClass);
            gameModel.activeAnimationLevel1.first_right_arm.DOM.classList.toggle(gameModel.activeAnimationLevel1.first_right_arm.animationClass);
            gameModel.activeAnimationLevel1.left_arm.DOM.classList.toggle(gameModel.activeAnimationLevel1.left_arm.animationClass);
            gameModel.activeAnimationLevel1.first_left_arm.DOM.classList.toggle(gameModel.activeAnimationLevel1.first_left_arm.animationClass);

            if(gameModel.activeLocation === 'sea'){
                gameModel.activeAnimationLevel1.bucket.DOM.classList.toggle(gameModel.activeAnimationLevel1.bucket.animationClass);
                gameModel.activeAnimationLevel1.bucketWithHandle.DOM.classList.toggle(gameModel.activeAnimationLevel1.bucketWithHandle.animationClass);
                gameCharSea.classList.remove('reflection');
                if(!seaPiece.classList.contains('display-block')){
                    seaPiece.classList.add('display-block');
                }
                clearTimeout(gameModel.timeOutAnimationForReflection);
            }
            gameModel.activeAnimationLevel1 = null;
            clearTimeout(gameModel.timeOutAnimation);
        }
        gameModel.activeLocation = LOCATION.island;
    };
    // лес
    forest.onclick = function () {
        gameModel.activeLocation = LOCATION.forest;
        setBtnsIslandVisibility();
        setLocationVisibility();

        var options = getOptionsAnimation(gameModel.char.armForest);
        setListeners(gameCharForest, options);
    };
    // скалы
    cliffs.onclick = function () {
        gameModel.activeLocation = LOCATION.cliffs;
        setBtnsIslandVisibility();
        setLocationVisibility();

        var options = getOptionsAnimation(gameModel.char.armCliffs);
        setListeners(gameCharCliffs, options);
    };
    // озеро
    sea.onclick = function () {
        gameModel.activeLocation = LOCATION.sea;
        setBtnsIslandVisibility();
        setLocationVisibility();

        var options = getOptionsAnimation(gameModel.char.armSea);
        setListeners(gameCharSea, options);
    };
    // земля
    earth.onclick = function () {
        gameModel.activeLocation = LOCATION.earth;
        setBtnsIslandVisibility();
        setLocationVisibility();

        var options = getOptionsAnimation(gameModel.char.armEarth);
        setListeners(gameCharEarth, options);
    };
    //причал
    var dealer = document.getElementById('game-dealer');
    var menuDealer = document.getElementById('game-menu-dealer');
    var closeMenuDealer = document.getElementById('btn-close_x5F_menu_1_');
    var premiumMenuBtn = document.getElementById('btn-premium_x5F_menu');
    var shopMenu = document.getElementById('menu_x5F_shop');

    pier.onclick = function () {
        gameModel.activeLocation = LOCATION.pier;
        setBtnsIslandVisibility();
        setLocationVisibility();
    };

    dealer.onclick = function () {
        menuDealer.style.display = 'block';
    };
    closeMenuDealer.onclick = function () {
        menuDealer.style.display = 'none';
    };
    premiumMenuBtn.onclick = function () {
        shopMenu.classList.toggle('display-none');
    }


    // меню персонажа
    charBtn.onclick = function () {
        menuChar.classList.toggle('display-block');
    };

    // methods
    function actionStartHelper(options){
        switch (gameModel.activeLocation){
            case 'forest' : {
                if(gameModel.char.armForest.indexOf('axe') !== -1){
                    gameAnimationCharLevel1(options);
                } else if(gameModel.char.armForest.indexOf('saw') !== -1){
                    gameAnimationCharLevel2Down(options);
                }
                break;
            }
            case 'cliffs' : {
                if(gameModel.char.armCliffs.indexOf('pick') !== -1){
                    gameAnimationCharLevel1(options);
                } else if(gameModel.char.armCliffs.indexOf('perf') !== -1){
                    gameAnimationCharLevel2Down(options);
                }
                break;
            }
            case 'sea' : {
                if(gameModel.char.armSea.indexOf('bucket') !== -1){
                    gameAnimationCharLevel1(options);
                } else if(gameModel.char.armSea.indexOf('pump') !== -1){
                    gameAnimationCharLevel2Down(options);
                }
                break;
            }
            case 'earth' : {
                if(gameModel.char.armEarth.indexOf('shovel') !== -1){
                    gameAnimationCharLevel1(options);
                }
                break;
            }
            case 'pier' : {

                break;
            }
        }
    }

    function actionEndHelper(options) {
        switch (gameModel.activeLocation){
            case 'forest' : {
                if(gameModel.char.armForest.indexOf('axe') !== -1){

                } else if(gameModel.char.armForest.indexOf('saw') !== -1){
                    gameAnimationCharLevel2Up(options);
                }
                break;
            }
            case 'cliffs' : {
                if(gameModel.char.armCliffs.indexOf('pick') !== -1){

                } else if(gameModel.char.armCliffs.indexOf('perf') !== -1){
                    gameAnimationCharLevel2Up(options);
                }
                break;
            }
            case 'sea' : {
                if(gameModel.char.armSea.indexOf('bucket') !== -1){
                   
                } else if(gameModel.char.armSea.indexOf('pump') !== -1){
                    gameAnimationCharLevel2Up(options);
                }
                break;
            }
            case 'earth' : {
                if(gameModel.char.armEarth.indexOf('shovel') !== -1){
                   
                }
                break;
            }
            case 'pier' : {

                break;
            }
        }
    }

    function setListeners(char, options){
        gameModel.eventStartHandler = function () {
            actionStartHelper(options);
        };

        gameModel.eventEndHandler = function () {
            actionEndHelper(options);
        };

        char.addEventListener('touchstart', gameModel.eventStartHandler);
        char.addEventListener('touchend', gameModel.eventEndHandler);
    }

    function removeListeners(char){
        char.removeEventListener('touchstart', gameModel.eventStartHandler);
        char.removeEventListener('touchend', gameModel.eventEndHandler);

        gameModel.eventStartHandler = null;
        gameModel.eventEndHandler = null;
    }

    function getOptionsAnimation(arm) {
        var _result, _rightArm, _leftArm, _firstRightArm, _firstLeftArm, _handleArm, _saw, _perf, _bucketWithHandle, _bucket, _pile,_sliver1, _sliver2, _sliver3, _sliver4, _sliver5, _sliver6, _sliver7, _sliver8, _sliver9, _sliver10, _sliver11, _splinters1, _splinters2, _splinters3, _splinters4, _splinters5, _splinters6, _splinters7, _splinters8, _splinters9, _splinters10, _splinters11;
        switch (gameModel.activeLocation){
            case 'forest' : {
                if(arm.indexOf('axe') !== -1){
                    switch (arm){
                        case 'axe_1': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_3_'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'axe_2': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_ex2'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'axe_3': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_ex3'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'axe_4': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_ex4'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'axe_5': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_ex5_1_'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'axe_6': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_ex6'), animationClass: 'first_right_armex'};
                            break;
                        }
                    }

                    _leftArm = {DOM: document.getElementById('left-arm_3_'), animationClass: 'left_armex'};
                    _rightArm = {DOM: document.getElementById('right-arm_x5F_ex'), animationClass: 'right_armex'};
                    _firstLeftArm = {DOM: document.getElementById('first-left-arm_3_'), animationClass: 'first_left_armex'};
                    _sliver1 = {DOM: document.getElementById('sliver1'), animationClass: 'sliver1'};
                    _sliver2 = {DOM: document.getElementById('sliver2'), animationClass: 'sliver2'};
                    _sliver3 = {DOM: document.getElementById('sliver3'), animationClass: 'sliver3'};
                    _sliver4 = {DOM: document.getElementById('sliver4'), animationClass: 'sliver4'};
                    _sliver5 = {DOM: document.getElementById('sliver5'), animationClass: 'sliver5'};
                    _sliver6 = {DOM: document.getElementById('sliver6'), animationClass: 'sliver6'};
                    _sliver7 = {DOM: document.getElementById('sliver7'), animationClass: 'sliver7'};
                    _sliver8 = {DOM: document.getElementById('sliver8'), animationClass: 'sliver8'};
                    _sliver9 = {DOM: document.getElementById('sliver9'), animationClass: 'sliver9'};
                    _sliver10 = {DOM: document.getElementById('sliver10'), animationClass: 'sliver10'};
                    _sliver11 = {DOM: document.getElementById('sliver11'), animationClass: 'sliver11'};

                    _result = {
                        pupils: document.getElementById('pupils_1_'),
                        mouthsmile: document.getElementById('mouthsmile_1_'),
                        mouth: document.getElementById('mouth'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        sliver1: _sliver1,
                        sliver2: _sliver2,
                        sliver3: _sliver3,
                        sliver4: _sliver4,
                        sliver5: _sliver5,
                        sliver6: _sliver6,
                        sliver7: _sliver7,
                        sliver8: _sliver8,
                        sliver9: _sliver9,
                        sliver10: _sliver10,
                        sliver11: _sliver11,
                        delay: 2000
                    };

                } else if(arm.indexOf('saw') !== -1){
                    switch (arm){
                        case 'saw_1': {
                            _rightArm = {DOM: document.getElementById('right-arm_x5F_saw'), animationClass: 'right_arm_saw'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_saw'), animationClass: 'left_arm_saw'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_saw'), animationClass: 'first_right_arm_saw'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_2_'), animationClass: 'first_left_arm_saw'};
                            _saw = {DOM: document.getElementById('chainsaw'), animationClass: 'saw'};
                            break;
                        }

                        case 'saw_2': {
                            _rightArm =  {DOM: document.getElementById('right-arm_x5F_saw2'), animationClass: 'right_arm_saw'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_saw2'), animationClass: 'left_arm_saw'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_saw2'), animationClass: 'first_right_arm_saw'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_7_'), animationClass: 'first_left_arm_saw'};
                            _saw = {DOM: document.getElementById('saw2'), animationClass: 'saw'};
                            break;
                        }
                    }

                    _result = {
                        pupils: document.getElementById('pupils_1_'),
                        mouthsmile: document.getElementById('mouthsmile_1_'),
                        mouth: document.getElementById('mouth'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        saw: _saw,
                        delay: 2000
                    };
                }
                break;
            }
            case 'cliffs' : {
                if(gameModel.char.armCliffs.indexOf('pick') !== -1){
                    switch (arm){
                        case 'pick_1': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_4_'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'pick_2': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pick2'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'pick_3': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pick3'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'pick_4': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pick4_1_'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'pick_5': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pick5_1_'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'pick_6': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pick6'), animationClass: 'first_right_armex'};
                            break;
                        }
                    }

                    _leftArm = {DOM: document.getElementById('left-arm_2_'), animationClass: 'left_armex'};
                    _rightArm = {DOM: document.getElementById('right-armpick_1_'), animationClass: 'right_armex'};
                    _firstLeftArm = {DOM: document.getElementById('first-left-arm_4_'), animationClass: 'first_left_armex'};
                    _splinters1 = {DOM: document.getElementById('splinters1'), animationClass: 'splinters1'};
                    _splinters2 = {DOM: document.getElementById('splinters2'), animationClass: 'splinters2'};
                    _splinters3 = {DOM: document.getElementById('splinters3'), animationClass: 'splinters3'};
                    _splinters4 = {DOM: document.getElementById('splinters4'), animationClass: 'splinters4'};
                    _splinters5 = {DOM: document.getElementById('splinters5'), animationClass: 'splinters5'};
                    _splinters6 = {DOM: document.getElementById('splinters6'), animationClass: 'splinters6'};
                    _splinters7 = {DOM: document.getElementById('splinters7'), animationClass: 'splinters7'};
                    _splinters8 = {DOM: document.getElementById('splinters8'), animationClass: 'splinters8'};
                    _splinters9 = {DOM: document.getElementById('splinters9'), animationClass: 'splinters9'};
                    _splinters10 = {DOM: document.getElementById('splinters10'), animationClass: 'splinters10'};
                    _splinters11 = {DOM: document.getElementById('splinters11'), animationClass: 'splinters11'};

                    _result = {
                        pupils: document.getElementById('pupils_3_'),
                        mouthsmile: document.getElementById('mouthsmile_3_'),
                        mouth: document.getElementById('mouth_1_'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        splinters1: _splinters1,
                        splinters2: _splinters2,
                        splinters3: _splinters3,
                        splinters4: _splinters4,
                        splinters5: _splinters5,
                        splinters6: _splinters6,
                        splinters7: _splinters7,
                        splinters8: _splinters8,
                        splinters9: _splinters9,
                        splinters10: _splinters10,
                        splinters11: _splinters11,
                        delay: 2000
                    };
                } else if(gameModel.char.armCliffs.indexOf('perf') !== -1){
                    switch (arm){
                        case 'perf_1': {
                            _rightArm = {DOM: document.getElementById('right-arm_x5F_perf'), animationClass: 'right_arm_perf'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_perf'), animationClass: 'left_arm_perf'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_perf'), animationClass: 'first_right_arm_perf'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_5_'), animationClass: 'first_left_arm_perf'};
                            _perf = {DOM: document.getElementById('perf'), animationClass: 'perf'};
                            break;
                        }

                        case 'perf_2': {
                            _rightArm = {DOM: document.getElementById('right-arm_x5F_perf2'), animationClass: 'right_arm_perf'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_perf2'), animationClass: 'left_arm_perf'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_perf2'), animationClass: 'first_right_arm_perf'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_6_'), animationClass: 'first_left_arm_perf'};
                            _perf = {DOM: document.getElementById('perf2'), animationClass: 'perf'};
                            break;
                        }
                    }

                    _result = {
                        pupils: document.getElementById('pupils_3_'),
                        mouthsmile: document.getElementById('mouthsmile_3_'),
                        mouth: document.getElementById('mouth_1_'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        perf: _perf,
                        delay: 2000
                    };
                }
                break;
            }
            case 'sea' : {
                if(gameModel.char.armSea.indexOf('bucket') !== -1){
                    switch (arm){
                        case 'bucket_1': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_bucket_1_'), animationClass: 'first_right_arm_bucket'};
                            _bucketWithHandle = {DOM: document.getElementById('bucket_x5F_1_2_'), animationClass: 'bucket_handle'};
                            _bucket = {DOM: document.getElementById('bucket1_1_'), animationClass: 'bucket'};
                            break;
                        }

                        case 'bucket_2': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_bucket2_2_'), animationClass: 'first_right_arm_bucket'};
                            _bucketWithHandle = {DOM: document.getElementById('bucket_x5F_2_1_'), animationClass: 'bucket_handle'};
                            _bucket = {DOM: document.getElementById('bucket2_1_'), animationClass: 'bucket'};
                            break;
                        }

                        case 'bucket_3': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_bucket3_1_'), animationClass: 'first_right_arm_bucket'};
                            _bucketWithHandle = {DOM: document.getElementById('bucket_x5F_3_1_'), animationClass: 'bucket_handle'};
                            _bucket = {DOM: document.getElementById('bucket3_1_'), animationClass: 'bucket'};
                            break;
                        }

                        case 'bucket_4': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_bucket4'), animationClass: 'first_right_arm_bucket'};
                            _bucketWithHandle = {DOM: document.getElementById('bucket_x5F_4'), animationClass: 'bucket_handle'};
                            _bucket = {DOM: document.getElementById('bucket3_2_'), animationClass: 'bucket'};
                            break;
                        }

                        case 'bucket_5': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_bucket5_1_'), animationClass: 'first_right_arm_bucket'};
                            _bucketWithHandle = {DOM: document.getElementById('bucket_x5F_5_1_'), animationClass: 'bucket_handle'};
                            _bucket = {DOM: document.getElementById('bucket3_4_'), animationClass: 'bucket'};
                            break;
                        }

                        case 'bucket_6': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_bucket6'), animationClass: 'first_right_arm_bucket'};
                            _bucketWithHandle = {DOM: document.getElementById('bucket_x5F_6'), animationClass: 'bucket_handle'};
                            _bucket = {DOM: document.getElementById('bucket6'), animationClass: 'bucket'};
                            break;
                        }
                    }

                    _leftArm = {DOM: document.getElementById('left-arm_4_'), animationClass: 'left_arm_bucket'};
                    _rightArm = {DOM: document.getElementById('right-arm_x5F_bucket_1_'), animationClass: 'right_arm_bucket'};
                    _firstLeftArm = {DOM: document.getElementById('first-left-arm_8_'), animationClass: 'first_left_arm_bucket'};

                    _result = {
                        pupils: document.getElementById('pupils_2_'),
                        mouthsmile: document.getElementById('mouthsmile_2_'),
                        mouth: document.getElementById('mouth_2_'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        bucketWithHandle: _bucketWithHandle,
                        bucket: _bucket,
                        delay: 2000
                    };
                } else if(gameModel.char.armSea.indexOf('pump') !== -1){
                    switch (arm){
                        case 'pump_1': {
                            _rightArm = {DOM: document.getElementById('right-arm_x5F_pump'), animationClass: 'right_arm_pump'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_pump'), animationClass: 'left_arm_pump'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pump'), animationClass: 'first_right_arm_pump'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_1_'), animationClass: 'first_left_arm_pump'};
                            _handleArm = {DOM: document.getElementById('handle'), animationClass: 'handle_pump'};
                            break;
                        }

                        case 'pump_2': {
                            _rightArm = {DOM: document.getElementById('right-arm_x5F_pump2'), animationClass: 'right_arm_pump'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_pump'), animationClass: 'left_arm_pump'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pump2'), animationClass: 'first_right_arm_pump'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_1_'), animationClass: 'first_left_arm_pump'};
                            _handleArm = {DOM: document.getElementById('handle2'), animationClass: 'handle_pump'};
                            break;
                        }
                    }

                    _result = {
                        pupils: document.getElementById('pupils_2_'),
                        mouthsmile: document.getElementById('mouthsmile_2_'),
                        mouth: document.getElementById('mouth_2_'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        handleArm: _handleArm,
                        delay: 2000
                    };
                }
                break;
            }
             case 'earth' : {
                if(gameModel.char.armEarth.indexOf('shovel') !== -1){
                    switch (arm){
                        case 'shovel_1': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_shovel1'), animationClass: 'first_right_arm_shovel'};
                            _pile = {DOM: document.getElementById('pile1'), animationClass: 'pile'};
                            break;
                        }

                        case 'shovel_2': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_shovel2_2_'), animationClass: 'first_right_arm_shovel'};
                            _pile = {DOM: document.getElementById('pile2'), animationClass: 'pile'};
                            break;
                        }

                        case 'shovel_3': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_shovel3_2_'), animationClass: 'first_right_arm_shovel'};
                            _pile = {DOM: document.getElementById('pile3'), animationClass: 'pile'};
                            break;
                        }

                        case 'shovel_4': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_shovel4_1_'), animationClass: 'first_right_arm_shovel'};
                            _pile = {DOM: document.getElementById('pile4'), animationClass: 'pile'};
                            break;
                        }

                        case 'shovel_5': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_shovel5_1_'), animationClass: 'first_right_arm_shovel'};
                            _pile = {DOM: document.getElementById('pile5'), animationClass: 'pile'};
                            break;
                        }
                        case 'shovel_6': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_shovel6'), animationClass: 'first_right_arm_shovel'};
                            _pile = {DOM: document.getElementById('pile6'), animationClass: 'pile'};
                            break;
                        }
                    }

                    _leftArm = {DOM: document.getElementById('left-arm_5_'), animationClass: 'left_arm_shovel'};
                    _rightArm = {DOM: document.getElementById('right-arm_x5F_shovel'), animationClass: 'right_arm_shovel'};
                    _firstLeftArm = {DOM: document.getElementById('first-left-arm_11_'), animationClass: 'first_left_arm_shovel'};

                    _result = {
                        pupils: document.getElementById('pupils_5_'),
                        mouthsmile: document.getElementById('mouthsmile_5_'),
                        mouth: document.getElementById('mouth_3_'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        pile: _pile,
                        delay: 2000
                    };
                }
                break;
            }
        }

        return _result;
    }

    function gameAnimationCharLevel1(options) {
        if(!gameModel.activeAnimationLevel1){
            gameModel.activeAnimationLevel1 = options;

            options.pupils.classList.toggle('pupils');
            options.mouthsmile.classList.toggle('display-block');
            options.mouth.classList.toggle('display-block');

            options.right_arm.DOM.classList.toggle(options.right_arm.animationClass);
            options.first_right_arm.DOM.classList.toggle(options.first_right_arm.animationClass);
            options.left_arm.DOM.classList.toggle(options.left_arm.animationClass);
            options.first_left_arm.DOM.classList.toggle(options.first_left_arm.animationClass);

            if (options.bucketWithHandle) {
                options.bucketWithHandle.DOM.classList.toggle(options.bucketWithHandle.animationClass);
                options.bucket.DOM.classList.toggle(options.bucket.animationClass);

                gameModel.timeOutAnimationForReflection = setTimeout(function() {
                    gameCharSea.classList.toggle('reflection');
                    seaPiece.classList.toggle('display-block');
                }, options.delay/2);
            }

            gameModel.timeOutAnimation = setTimeout(function(){
                gameModel.activeAnimationLevel1 = null;

                options.pupils.classList.toggle('pupils');
                options.mouthsmile.classList.toggle('display-block');
                options.mouth.classList.toggle('display-block');

                options.right_arm.DOM.classList.toggle(options.right_arm.animationClass);
                options.first_right_arm.DOM.classList.toggle(options.first_right_arm.animationClass);
                options.left_arm.DOM.classList.toggle(options.left_arm.animationClass);
                options.first_left_arm.DOM.classList.toggle(options.first_left_arm.animationClass);

                if (options.bucketWithHandle) {
                    options.bucketWithHandle.DOM.classList.toggle(options.bucketWithHandle.animationClass);
                    options.bucket.DOM.classList.toggle(options.bucket.animationClass);
                    gameCharSea.classList.toggle('reflection');
                    seaPiece.classList.toggle('display-block');
                }
            }, options.delay);
        }
    }

    function gameAnimationCharLevel2Down(options){
        gameModel.activeAnimationLevel2 = options;
        options.pupils.classList.add('pupils_saw');
        options.mouthsmile.classList.add('display-block');
        options.mouth.classList.add('display-block');

        options.right_arm.DOM.classList.add(options.right_arm.animationClass);
        options.first_right_arm.DOM.classList.add(options.first_right_arm.animationClass);
        options.left_arm.DOM.classList.add(options.left_arm.animationClass);
        options.first_left_arm.DOM.classList.add(options.first_left_arm.animationClass);

        if(gameModel.timeOutAnimation){
            clearTimeout(gameModel.timeOutAnimation);
        }
        gameModel.timeOutAnimation = setTimeout(function() {
            if (gameModel.activeLocation === 'sea') {
                options.handleArm.DOM.classList.add(options.handleArm.animationClass);
            }
            if (gameModel.activeLocation === 'cliffs') {
                options.perf.DOM.classList.add(options.perf.animationClass);
            }
            if (gameModel.activeLocation === 'forest') {
                options.saw.DOM.classList.add(options.saw.animationClass);
            }
        }, options.delay);
    }

    function gameAnimationCharLevel2Up(options){
        gameModel.activeAnimationLevel2 = null;
        options.pupils.classList.remove('pupils_saw');
        options.mouthsmile.classList.remove('display-block');
        options.mouth.classList.remove('display-block');

        options.right_arm.DOM.classList.remove(options.right_arm.animationClass);
        options.first_right_arm.DOM.classList.remove(options.first_right_arm.animationClass);
        options.left_arm.DOM.classList.remove(options.left_arm.animationClass);
        options.first_left_arm.DOM.classList.remove(options.first_left_arm.animationClass);

        if(gameModel.activeLocation === 'sea'){
            options.handleArm.DOM.classList.remove(options.handleArm.animationClass);
        }
        if (gameModel.activeLocation === 'cliffs') {
            options.perf.DOM.classList.remove(options.perf.animationClass);
        }
        if (gameModel.activeLocation === 'forest') {
            options.saw.DOM.classList.remove(options.saw.animationClass);
        }
    }

    function setBtnsIslandVisibility(){
        island.classList.toggle('display-block');
        backBtn.parentElement.classList.toggle('inline-block');
        exitBtn.parentElement.classList.toggle('inline-block');
    }

    function setLocationVisibility(){
        switch (gameModel.activeLocation){
            case 'forest' : {
                modalforest.classList.toggle('display-block');
                break;
            }
            case 'cliffs' : {
                modalcliffs.classList.toggle('display-block');
                break;
            }
            case 'sea' : {
                modalsea.classList.toggle('display-block');
                break;
            }
            case 'earth' : {
                modalearth.classList.toggle('display-block');
                break;
            }
            case 'pier' : {
                modalpier.classList.toggle('display-block');
                break;
            }
        }
    }

    function removeListenersHelper(){
        switch (gameModel.activeLocation){
            case 'forest' : {
                removeListeners(gameCharForest);
                break;
            }
            case 'cliffs' : {
                removeListeners(gameCharCliffs);
                break;
            }
            case 'sea' : {
                removeListeners(gameCharSea);
                break;
            }
            case 'earth' : {
                removeListeners(gameCharEarth);
                break;
            }
            case 'pier' : {

                break;
            }
        }
    }

    function setArmAfterStartGame(data){
        if(data){

        } else {
            gameModel.char.armForest = 'axe_1';
            gameModel.char.armCliffs = 'pick_1';
            gameModel.char.armSea = 'bucket_1';
            gameModel.char.armEarth = 'shovel_1';
            setVisibilityArm(gameModel.char);
        }
    }

    function setVisibilityArm(char){
        hideAllArms();
        removeListenersHelper();
        ARMS_IDS[char.armForest].forEach(function(id){
            document.getElementById(id).classList.toggle('display-block');
        });
        ARMS_IDS[char.armCliffs].forEach(function(id){
            document.getElementById(id).classList.toggle('display-block');
        });
        ARMS_IDS[char.armSea].forEach(function(id){
            document.getElementById(id).classList.toggle('display-block');
        });
        ARMS_IDS[char.armEarth].forEach(function(id){
            document.getElementById(id).classList.toggle('display-block');
        });

        switch(gameModel.activeLocation){
            case 'forest' : {
                var optionsAnimForest = getOptionsAnimation(char.armForest);
                setListeners(gameCharForest, optionsAnimForest);
                break;
            }
            case 'cliffs' : {
                var optionsAnimCliffs = getOptionsAnimation(gameModel.char.armCliffs);
                setListeners(gameCharCliffs, optionsAnimCliffs);
                break;
            }
            case 'sea' : {
                var optionsAnimSea = getOptionsAnimation(gameModel.char.armSea);
                setListeners(gameCharSea, optionsAnimSea);
                break;
            }
            case 'earth' : {
                var optionsAnimEarth = getOptionsAnimation(gameModel.char.armEarth);
                setListeners(gameCharEarth, optionsAnimEarth);
                break;
            }
            case 'pier' : {

                break;
            }
        }
    }

    function processingArmForestMenu(id){
        switch(id){
            case 'ex-pick_x5F_bag' : {
                gameModel.char.armForest = 'axe_1';
                break;
            }
            case 'ex2-pick_x5F_bag' : {
                gameModel.char.armForest = 'axe_2';
                break;
            }
            case 'ex3-pick_x5F_bag' : {
                gameModel.char.armForest = 'axe_3';
                break;
            }
            case 'ex4-pick_x5F_bag' : {
                gameModel.char.armForest = 'axe_4';
                break;
            }
            case 'ex5-pick_x5F_bag' : {
                gameModel.char.armForest = 'axe_5';
                break;
            }
            case 'ex6-pick_x5F_bag' : {
                gameModel.char.armForest = 'axe_6';
                break;
            }
            case 'saw-pick_x5F_bag' : {
                gameModel.char.armForest = 'saw_1';
                break;
            }
            case 'saw2-pick_x5F_bag_1_' : {
                gameModel.char.armForest = 'saw_2';
                break;
            }
        }
    }

    function processingArmCliffsMenu(id){
        switch(id){
            case 'pick-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'pick_1';
                break;
            }
            case 'pick2-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'pick_2';
                break;
            }
            case 'pick3-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'pick_3';
                break;
            }
            case 'pick4-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'pick_4';
                break;
            }
            case 'pick5-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'pick_5';
                break;
            }
            case 'pick6-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'pick_6';
                break;
            }
            case 'perf-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'perf_1';
                break;
            }
            case 'perf2-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'perf_2';
                break;
            }
        }
    }

    function processingArmSeaMenu(id){
        switch(id){
            case 'bucket-pick_x5F_bag' : {
                gameModel.char.armSea = 'bucket_1';
                break;
            }
            case 'bucket2-pick_x5F_bag' : {
                gameModel.char.armSea = 'bucket_2';
                break;
            }
            case 'bucket3-pick_x5F_bag' : {
                gameModel.char.armSea = 'bucket_3';
                break;
            }
            case 'bucket4-pick_x5F_bag' : {
                gameModel.char.armSea = 'bucket_4';
                break;
            }
            case 'bucket5-pick_x5F_bag' : {
                gameModel.char.armSea = 'bucket_5';
                break;
            }
            case 'bucket6-pick_x5F_bag' : {
                gameModel.char.armSea = 'bucket_6';
                break;
            }
            case 'pump-pick_x5F_bag' : {
                gameModel.char.armSea = 'pump_1';
                break;
            }
            case 'pump2-pick_x5F_bag' : {
                gameModel.char.armSea = 'pump_2';
                break;
            }
        }
    }

    function processingArmEarthMenu(id){
        switch(id){
            case 'shovel-pick_x5F_bag' : {
                gameModel.char.armSea = 'shovel_1';
                break;
            }
            case 'shovel2-pick_x5F_bag' : {
                gameModel.char.armSea = 'shovel_2';
                break;
            }
            case 'shovel3-pick_x5F_bag' : {
                gameModel.char.armSea = 'shovel_3';
                break;
            }
            case 'shovel4-pick_x5F_bag' : {
                gameModel.char.armSea = 'shovel_4';
                break;
            }
            case 'shovel5-pick_x5F_bag' : {
                gameModel.char.armSea = 'shovel_5';
                break;
            }
            case 'shovel6-pick_x5F_bag' : {
                gameModel.char.armSea = 'shovel_6';
                break;
            }
        }
    }

    function hideAllArms(){
        var _allArmsItems = document.querySelectorAll('.char-hand-part');

        _allArmsItems.forEach(function(item){
            if(item.classList.contains('display-block')){
                item.classList.toggle('display-block');
            }
        })
    }

    function findGElement(elem){
        var _elem = elem;

        while(!_elem.classList.contains('bag-arm-item')){
            _elem = _elem.parentElement;
        }

        return _elem;
    }
    
})(appMethods);
