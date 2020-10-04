/********************** 
 * Soa_Original1 Test *
 **********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Soa_original1';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
flowScheduler.add(instruction1bRoutineBegin());
flowScheduler.add(instruction1bRoutineEachFrame());
flowScheduler.add(instruction1bRoutineEnd());
flowScheduler.add(instruction2RoutineBegin());
flowScheduler.add(instruction2RoutineEachFrame());
flowScheduler.add(instruction2RoutineEnd());
flowScheduler.add(instruction3RoutineBegin());
flowScheduler.add(instruction3RoutineEachFrame());
flowScheduler.add(instruction3RoutineEnd());
flowScheduler.add(practiceRoutineBegin());
flowScheduler.add(practiceRoutineEachFrame());
flowScheduler.add(practiceRoutineEnd());
const practice_condLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_condLoopBegin, practice_condLoopScheduler);
flowScheduler.add(practice_condLoopScheduler);
flowScheduler.add(practice_condLoopEnd);
flowScheduler.add(reel_startRoutineBegin());
flowScheduler.add(reel_startRoutineEachFrame());
flowScheduler.add(reel_startRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

var frameDur;

function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}
var ConsentComponents;
var ConsentClock;
var Consent_form;
var Consent_resp;
var _Consent_resp_allKeys;
var Consent2Components;
var Consent2Clock;
var Consent_text2;
var Consent_resp2;
var _Consent_resp2_allKeys;
var Consent3Components;
var Consent3Clock;
var Consent_text3;
var Consent_resp3;
var _Consent_resp3_allKeys;
var instructionClock;
var briefing;
var instruction1bClock;
var instruction_b;
var instruction2Clock;
var briefing_2;
var briefing2;
var  instruction3Clock;
var text;
var trial_begClock;
var begin;
var trialClock;
var linspace;
var a;
var TrialText;
var random_sound;
var OutcomeClock;
var sound_1;
var testClock;
var text_2;
var Blok_breakClock;
var Break;
var break_resp;
var endClock;
var thanks;
var key_resp;
var key_resp_2;
var key_resp_4;
var key_resp_5;
var key_resp_3;
var counteksik;
var compsound;
var key_press;
var globalClock;
var routineTimer;
var t;
var frameN; 
var _key_resp_allKeys;
var instructionComponents;
var _key_press_allKeys;
var trialComponents;
var _key_resp_2_allKeys;
var _key_resp_4_allKeys;
var instruction1bComponents;
var _key_resp_5_allKeys;
var   instruction2Components;
var instruction3Components;
var _key_resp_3_allKeys; 
var trial_begComponents;
var sound_2Clock;
var sound_2Components;
var testComponents;
var Blok_breakComponents;
var _break_resp_allKeys;
var endComponents;
var blocks;
var currentLoop;
var conditions;
var frameRemains;
var continueRoutine;
var pressed; 
var automatic;
var pressTime;
var tStart; 
var walking_stickman;
var walking_stickmanClock;
var count;
var slider;
var ending_slider;
var _ending_slider_allKeys;
var practiceComponents;
var practiceClock;
var practice_begTextClock;
var practice_begTextComponents;
var practice_Text2;
var practice_targetClock;
var practice_targetComponents;
var practice_eachtext;
var practice_temp;
var practice_targetResp;
var _practice_targetResp_allKeys;
var practiceText1;
var practic_startResp;
var _practic_startResp_allKeys;
var practice_outcomeComponents;
var practice_outcomeClock;
var practice_sound;
var reproduction_beg;
var reproduction_begClock;
var reproduction_begComponents;
var repro_begText;
var repro_begResp;
var _repro_begResp_allKeys;
var repro_end;
var repro_endClock;
var repro_endComponents;
var repro_square;
var repro_endResp;
var _repro_endResp_allKeys;
var reel_start;
var reel_startComponents;
var reel_startClock;
var reel_startText;
var reel_startResp;
var _reel_startResp_allKeys;
var reproduction_text;
var reproduction_textClock;
var reproduction_textComponents;
var repro_ReelText;
var repro_ReelResp;
var _repro_ReelResp_allKeys;
var repro_Reel_2;
var repro_Reel_2Components;
var repro_Reel_2Clock;
var repro_ReelStim;
var repro_reelEnd;
var _repro_reelEnd_allKeys;
var practice_cond;
var practice_tempClock;

function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  briefing = new visual.TextStim({
    win: psychoJS.window,
    name: 'briefing',
    text: 'Merhaba! \nBu deneyde sizden her denemede istediginiz herhangi bir an SPACE tuşuna basmanız istenmektedir. \n\n\nTuşa basış bazı denemelerde bir sese sebep olmakta, bazılarında olmamaktadır.\nBazı denemelerde ise bilgisayar kendiliğinden bu sesi üretmektedir.\n\nDevam etmek için lütfen herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction1b"
  instruction1bClock = new util.Clock();
  instruction_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_b',
    text: 'Her denemede ekranda yürüyen bir çöp adam belirecek.\nBunun sesin oluşmasıyla herhangi bir sebepsel ilişkisi yoktur.\n\nÇöp adam ekranda olduğu sürece ona bakmanız gerekmektedir.\n\nDevam etmek için herhangi bir tuşa basınız.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction2"
  instruction2Clock = new util.Clock();
  briefing2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'briefing2',
    text: "Sizden istenen, deneme bittikten sonra denemede geçen süreyi klavyedeki 'b' tuşu ile üretmeniz ve \nayrıca deneme sonunda oluşan sese ne kadar sizin SPACE tuşuna basmanızın sebep olduğunu değerlendirmektir.\n\nHer denemede göreceğiniz çöp adamın ekranda kalmasını hedef süre olarak\ndüşünmenizi isteyeceğiz ve bu süreyi mümkün olduğunca doğru bir şekilde yeniden\nüretmenizi bekleyeceğiz.\n\nDevam etmek için lütfen herhangi bir tuşa basınız.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction3"
  instruction3Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Önemli hatırlatma!\n\nDeney boyunca saymayın, ritim tutmayın \nve zaman aralıkları ile ilgili size bilgi verebilecek herhangi bir strateji geliştirmeyin.\n\nLütfen, deneye başlamak için bilgisayarınızdan ses duyabildiğinize emin olun \nve bilgisayarınızın sesini 40 olarak ayarlayın. \n\nDevam etmek için lütfen boşluk tuşuna basın.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  practiceText1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'practiceText1',
    text: 'Şimdi zaman üretimi için birkaç alıştırma yapacağız.\n\nHazır olduğunuzda başlamak için herhangi bir tuşa basın.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  practic_startResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_begText"
  practice_begTextClock = new util.Clock();
  practice_Text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_Text2',
    text: 'SPACE tuşuna basmaya başlayabileceğinizi belirten yazı çıktıktan sonra\nistediğiniz bir an tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "practice_target"
  practice_targetClock = new util.Clock();
  practice_eachtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_eachtext',
    text: 'Hazır olduğunuzda istediğiniz herhangi bir an SPACE tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  practice_targetResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_outcome"
  practice_outcomeClock = new util.Clock();
  practice_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'beep.mp3',
    secs: (- 1),
    });
  practice_sound.setVolume(1);
  // Initialize components for Routine "reproduction_beg"
  reproduction_begClock = new util.Clock();
  repro_begText = new visual.TextStim({
    win: psychoJS.window,
    name: 'repro_begText',
    text: 'Lütfen çöp adam ekrandayken geçen süreyi mümkün olduğunca doğru bir şekilde yeniden üretiniz.\n\nÜretimi başlatmak için "b" tuşuna basın ve\nhedef sürenin geçtiğini düşündüğünüzde "b" tuşuna\nikinci kere basın.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  repro_begResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "repro_end"
  repro_endClock = new util.Clock();
  repro_square = new visual.Rect ({
    win: psychoJS.window, name: 'repro_square', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  repro_endResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reel_start"
  reel_startClock = new util.Clock();
  reel_startText = new visual.TextStim({
    win: psychoJS.window,
    name: 'reel_startText',
    text: 'Alıştırma kısım bitti. Şimdi test kısmına geçiyoruz.\n\nHazır olduğunuzda herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  reel_startResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_beg"
  trial_begClock = new util.Clock();
  begin = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin',
    text: 'SPACE tuşuna basmaya başlayabileceğinizi belirten yazı çıktıktan sonra\nistediğiniz bir an tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
 a = [];
  
  for (var m = 0, _pj_a = 90; (m < _pj_a); m += 1) {
      a.push((m / 10));
  }

  
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}


// and shuffle it
shuffle(a) 

  counteksik = 0;
  
  TrialText = new visual.TextStim({
    win: psychoJS.window,
    name: 'TrialText',
    text: 'Hazır olduğunuzda istediğiniz herhangi bir an SPACE tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sound_2"
  sound_2Clock = new util.Clock();
  compsound = 0;
  
  sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: 'beep.mp3',
    secs: (- 1),
    });
  sound_1.setVolume(1);
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Sese ne kadar sizin tuşa basmanızın sebep olduğunu hissettiniz?\nAşağıda işaretleyin ve <Enter> tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [1.0, 0.1], pos: [0, (- 0.25)], units: 'height',
    labels: ['Hic', 'Tamamen'], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  ending_slider = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reproduction_text"
  reproduction_textClock = new util.Clock();
  repro_ReelText = new visual.TextStim({
    win: psychoJS.window,
    name: 'repro_ReelText',
    text: 'Lütfen çöp adam ekrandayken geçen süreyi mümkün olduğunca doğru bir şekilde yeniden üretiniz.\n\nÜretimi başlatmak için "b" tuşuna basın ve\nhedef sürenin geçtiğini düşündüğünüzde "b" tuşuna\nikinci kere basın.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  repro_ReelResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "repro_Reel_2"
  repro_Reel_2Clock = new util.Clock();
  repro_ReelStim = new visual.Rect ({
    win: psychoJS.window, name: 'repro_ReelStim', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  repro_reelEnd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blok_break"
  Blok_breakClock = new util.Clock();
  count = 0;
  
  Break = new visual.TextStim({
    win: psychoJS.window,
    name: 'Break',
    text: '1. blok bitti. Isterseniz biraz dinlenin.\n\n2. bloğa devam etmek için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  break_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks',
    text: 'Deney bitti. Katılımınız için teşekkürler!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function instructionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(briefing);
    instructionComponents.push(key_resp);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function instructionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *briefing* updates
    if (t >= 0.5 && briefing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      briefing.tStart = t;  // (not accounting for frame time here)
      briefing.frameNStart = frameN;  // exact frame index
      
      briefing.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: [], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instructionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction'-------
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function instruction1bRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction1b'-------
    t = 0;
    instruction1bClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    instruction1bComponents = [];
    instruction1bComponents.push(instruction_b);
    instruction1bComponents.push(key_resp_4);
    
    for (const thisComponent of instruction1bComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function instruction1bRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction1b'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction1bClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_b* updates
    if (t >= 0.0 && instruction_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_b.tStart = t;  // (not accounting for frame time here)
      instruction_b.frameNStart = frameN;  // exact frame index
      
      instruction_b.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: [], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction1bComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instruction1bRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction1b'-------
    for (const thisComponent of instruction1bComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction1b" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function instruction2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction2'-------
    t = 0;
    instruction2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    instruction2Components = [];
    instruction2Components.push(briefing2);
    instruction2Components.push(key_resp_2);
    
    for (const thisComponent of instruction2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function instruction2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *briefing2* updates
    if (t >= 0.0 && briefing2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      briefing2.tStart = t;  // (not accounting for frame time here)
      briefing2.frameNStart = frameN;  // exact frame index
      
      briefing2.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: [], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instruction2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction2'-------
    for (const thisComponent of instruction2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function instruction3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction3'-------
    t = 0;
    instruction3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    instruction3Components = [];
    instruction3Components.push(text);
    instruction3Components.push(key_resp_3);
    
    for (const thisComponent of instruction3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function instruction3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instruction3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction3'-------
    for (const thisComponent of instruction3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function practiceRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice'-------
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    practic_startResp.keys = undefined;
    practic_startResp.rt = undefined;
    _practic_startResp_allKeys = [];
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(practiceText1);
    practiceComponents.push(practic_startResp);
    
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function practiceRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practiceText1* updates
    if (t >= 0.0 && practiceText1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceText1.tStart = t;  // (not accounting for frame time here)
      practiceText1.frameNStart = frameN;  // exact frame index
      
      practiceText1.setAutoDraw(true);
    }

    
    // *practic_startResp* updates
    if (t >= 0.0 && practic_startResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practic_startResp.tStart = t;  // (not accounting for frame time here)
      practic_startResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practic_startResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practic_startResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practic_startResp.clearEvents(); });
    }

    if (practic_startResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = practic_startResp.getKeys({keyList: [], waitRelease: false});
      _practic_startResp_allKeys = _practic_startResp_allKeys.concat(theseKeys);
      if (_practic_startResp_allKeys.length > 0) {
        practic_startResp.keys = _practic_startResp_allKeys[_practic_startResp_allKeys.length - 1].name;  // just the last key pressed
        practic_startResp.rt = _practic_startResp_allKeys[_practic_startResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function practiceRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice'-------
    for (const thisComponent of practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function practice_condLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_cond = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'condition_practice.xlsx',
    seed: undefined, name: 'practice_cond'
  });
  psychoJS.experiment.addLoop(practice_cond); // add the loop to the experiment
  currentLoop = practice_cond;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice_cond of practice_cond) {
    const snapshot = practice_cond.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(practice_begTextRoutineBegin(snapshot));
    thisScheduler.add(practice_begTextRoutineEachFrame(snapshot));
    thisScheduler.add(practice_begTextRoutineEnd(snapshot));
    thisScheduler.add(practice_targetRoutineBegin(snapshot));
    thisScheduler.add(practice_targetRoutineEachFrame(snapshot));
    thisScheduler.add(practice_targetRoutineEnd(snapshot));
    thisScheduler.add(practice_outcomeRoutineBegin(snapshot));
    thisScheduler.add(practice_outcomeRoutineEachFrame(snapshot));
    thisScheduler.add(practice_outcomeRoutineEnd(snapshot));
    thisScheduler.add(reproduction_begRoutineBegin(snapshot));
    thisScheduler.add(reproduction_begRoutineEachFrame(snapshot));
    thisScheduler.add(reproduction_begRoutineEnd(snapshot));
    thisScheduler.add(repro_endRoutineBegin(snapshot));
    thisScheduler.add(repro_endRoutineEachFrame(snapshot));
    thisScheduler.add(repro_endRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}

function practice_condLoopEnd() {
  psychoJS.experiment.removeLoop(practice_cond);

  return Scheduler.Event.NEXT;
}

function blocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlock of blocks) {
    const snapshot = blocks.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const conditionsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(conditionsLoopBegin, conditionsLoopScheduler);
    thisScheduler.add(conditionsLoopScheduler);
    thisScheduler.add(conditionsLoopEnd);
    thisScheduler.add(Blok_breakRoutineBegin(snapshot));
    thisScheduler.add(Blok_breakRoutineEachFrame(snapshot));
    thisScheduler.add(Blok_breakRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}

function conditionsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  conditions = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'all_conditions2.xlsx',
    seed: undefined, name: 'conditions'
  });
  psychoJS.experiment.addLoop(conditions); // add the loop to the experiment
  currentLoop = conditions;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCondition of conditions) {
    const snapshot = conditions.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trial_begRoutineBegin(snapshot));
    thisScheduler.add(trial_begRoutineEachFrame(snapshot));
    thisScheduler.add(trial_begRoutineEnd(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(sound_2RoutineBegin(snapshot));
    thisScheduler.add(sound_2RoutineEachFrame(snapshot));
    thisScheduler.add(sound_2RoutineEnd(snapshot));
    thisScheduler.add(testRoutineBegin(snapshot));
    thisScheduler.add(testRoutineEachFrame(snapshot));
    thisScheduler.add(testRoutineEnd(snapshot));
    thisScheduler.add(reproduction_textRoutineBegin(snapshot));
    thisScheduler.add(reproduction_textRoutineEachFrame(snapshot));
    thisScheduler.add(reproduction_textRoutineEnd(snapshot));
    thisScheduler.add(repro_Reel_2RoutineBegin(snapshot));
    thisScheduler.add(repro_Reel_2RoutineEachFrame(snapshot));
    thisScheduler.add(repro_Reel_2RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}

function conditionsLoopEnd() {
  psychoJS.experiment.removeLoop(conditions);

  return Scheduler.Event.NEXT;
}

function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}

function practice_begTextRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice_begText'-------
    t = 0;
    practice_begTextClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    practice_begTextComponents = [];
    practice_begTextComponents.push(practice_Text2);
    
    for (const thisComponent of practice_begTextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function practice_begTextRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice_begText'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_begTextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_Text2* updates
    if (t >= 0.0 && practice_Text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_Text2.tStart = t;  // (not accounting for frame time here)
      practice_Text2.frameNStart = frameN;  // exact frame index
      
      practice_Text2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practice_Text2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_Text2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_begTextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function practice_begTextRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice_begText'-------
    for (const thisComponent of practice_begTextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}

function practice_targetRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice_target'-------
    t = 0;
    practice_targetClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    pressed = false;
    pressTime = Number.parseFloat("inf");
    tStart = t;
    
    practice_tempClock = new util.Clock();
    practice_temp = new visual.MovieStim({
      win: psychoJS.window,
      name: 'practice_temp',
      units: undefined,
      movie: speed_p,
      pos: [0, 0],
      size: undefined,
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: false,
      });
    practice_targetResp.keys = undefined;
    practice_targetResp.rt = undefined;
    _practice_targetResp_allKeys = [];
    // keep track of which components have finished
    practice_targetComponents = [];
    practice_targetComponents.push(practice_eachtext);
    practice_targetComponents.push(practice_temp);
    practice_targetComponents.push(practice_targetResp);
    
    for (const thisComponent of practice_targetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function practice_targetRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice_target'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_targetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((practice_targetResp.keys === "space") && (! pressed))) {
        pressed = true;
        pressTime = t;
    }
    
    if ((t > (tStart + 9))) {
        continueRoutine = false;
    }
    
    // *practice_eachtext* updates
    if (t >= 3 && practice_eachtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_eachtext.tStart = t;  // (not accounting for frame time here)
      practice_eachtext.frameNStart = frameN;  // exact frame index
      
      practice_eachtext.setAutoDraw(true);
    }

    frameRemains = 3 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practice_eachtext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_eachtext.setAutoDraw(false);
    }
    
    // *practice_temp* updates
    if (t >= 0.0 && practice_temp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_temp.tStart = t;  // (not accounting for frame time here)
      practice_temp.frameNStart = frameN;  // exact frame index
      
      practice_temp.setAutoDraw(true);
    }

    if (practice_temp.status === PsychoJS.Status.STARTED && Boolean(undefined)) {
      practice_temp.setAutoDraw(false);
    }

    
    // *practice_targetResp* updates
    if (t >= 3 && practice_targetResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_targetResp.tStart = t;  // (not accounting for frame time here)
      practice_targetResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_targetResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_targetResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_targetResp.clearEvents(); });
    }

    if (practice_targetResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_targetResp.getKeys({keyList: ['space'], waitRelease: false});
      _practice_targetResp_allKeys = _practice_targetResp_allKeys.concat(theseKeys);
      if (_practice_targetResp_allKeys.length > 0) {
        practice_targetResp.keys = _practice_targetResp_allKeys[_practice_targetResp_allKeys.length - 1].name;  // just the last key pressed
        practice_targetResp.rt = _practice_targetResp_allKeys[_practice_targetResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_targetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function practice_targetRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice_target'-------
    for (const thisComponent of practice_targetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "practice_target" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function practice_outcomeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice_outcome'-------
    t = 0;
    practice_outcomeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    practice_sound.setVolume(1);
    // keep track of which components have finished
    practice_outcomeComponents = [];
    practice_outcomeComponents.push(practice_sound);
    
    for (const thisComponent of practice_outcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function practice_outcomeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice_outcome'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_outcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop practice_sound
    if (t >= 0.0 && practice_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_sound.tStart = t;  // (not accounting for frame time here)
      practice_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ practice_sound.play(); });  // screen flip
      practice_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (practice_sound.getDuration() + practice_sound.tStart)     && practice_sound.status === PsychoJS.Status.STARTED) {
      practice_sound.stop();  // stop the sound (if longer than duration)
      practice_sound.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_outcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function practice_outcomeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice_outcome'-------
    for (const thisComponent of practice_outcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    practice_sound.stop();  // ensure sound has stopped at end of routine
    // the Routine "practice_outcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function reproduction_begRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'reproduction_beg'-------
    t = 0;
    reproduction_begClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    repro_begResp.keys = undefined;
    repro_begResp.rt = undefined;
    _repro_begResp_allKeys = [];
    // keep track of which components have finished
    reproduction_begComponents = [];
    reproduction_begComponents.push(repro_begText);
    reproduction_begComponents.push(repro_begResp);
    
    for (const thisComponent of reproduction_begComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function reproduction_begRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'reproduction_beg'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = reproduction_begClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *repro_begText* updates
    if (t >= 0.0 && repro_begText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repro_begText.tStart = t;  // (not accounting for frame time here)
      repro_begText.frameNStart = frameN;  // exact frame index
      
      repro_begText.setAutoDraw(true);
    }

    
    // *repro_begResp* updates
    if (t >= 0.0 && repro_begResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repro_begResp.tStart = t;  // (not accounting for frame time here)
      repro_begResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { repro_begResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { repro_begResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { repro_begResp.clearEvents(); });
    }

    if (repro_begResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = repro_begResp.getKeys({keyList: ['b'], waitRelease: false});
      _repro_begResp_allKeys = _repro_begResp_allKeys.concat(theseKeys);
      if (_repro_begResp_allKeys.length > 0) {
        repro_begResp.keys = _repro_begResp_allKeys[_repro_begResp_allKeys.length - 1].name;  // just the last key pressed
        repro_begResp.rt = _repro_begResp_allKeys[_repro_begResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reproduction_begComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function reproduction_begRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'reproduction_beg'-------
    for (const thisComponent of reproduction_begComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "reproduction_beg" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function repro_endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'repro_end'-------
    t = 0;
    repro_endClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    repro_endResp.keys = undefined;
    repro_endResp.rt = undefined;
    _repro_endResp_allKeys = [];
    // keep track of which components have finished
    repro_endComponents = [];
    repro_endComponents.push(repro_square);
    repro_endComponents.push(repro_endResp);
    
    for (const thisComponent of repro_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function repro_endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'repro_end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = repro_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *repro_square* updates
    if (t >= 0.0 && repro_square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repro_square.tStart = t;  // (not accounting for frame time here)
      repro_square.frameNStart = frameN;  // exact frame index
      
      repro_square.setAutoDraw(true);
    }

    
    // *repro_endResp* updates
    if (t >= 0.0 && repro_endResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repro_endResp.tStart = t;  // (not accounting for frame time here)
      repro_endResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { repro_endResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { repro_endResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { repro_endResp.clearEvents(); });
    }

    if (repro_endResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = repro_endResp.getKeys({keyList: ['b'], waitRelease: false});
      _repro_endResp_allKeys = _repro_endResp_allKeys.concat(theseKeys);
      if (_repro_endResp_allKeys.length > 0) {
        repro_endResp.keys = _repro_endResp_allKeys[_repro_endResp_allKeys.length - 1].name;  // just the last key pressed
        repro_endResp.rt = _repro_endResp_allKeys[_repro_endResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of repro_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function repro_endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'repro_end'-------
    for (const thisComponent of repro_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "repro_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function reel_startRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'reel_start'-------
    t = 0;
    reel_startClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    reel_startResp.keys = undefined;
    reel_startResp.rt = undefined;
    _reel_startResp_allKeys = [];
    // keep track of which components have finished
    reel_startComponents = [];
    reel_startComponents.push(reel_startText);
    reel_startComponents.push(reel_startResp);
    
    for (const thisComponent of reel_startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function reel_startRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'reel_start'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = reel_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *reel_startText* updates
    if (t >= 0.0 && reel_startText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reel_startText.tStart = t;  // (not accounting for frame time here)
      reel_startText.frameNStart = frameN;  // exact frame index
      
      reel_startText.setAutoDraw(true);
    }

    
    // *reel_startResp* updates
    if (t >= 0.0 && reel_startResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reel_startResp.tStart = t;  // (not accounting for frame time here)
      reel_startResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { reel_startResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { reel_startResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { reel_startResp.clearEvents(); });
    }

    if (reel_startResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = reel_startResp.getKeys({keyList: [], waitRelease: false});
      _reel_startResp_allKeys = _reel_startResp_allKeys.concat(theseKeys);
      if (_reel_startResp_allKeys.length > 0) {
        reel_startResp.keys = _reel_startResp_allKeys[_reel_startResp_allKeys.length - 1].name;  // just the last key pressed
        reel_startResp.rt = _reel_startResp_allKeys[_reel_startResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reel_startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function reel_startRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'reel_start'-------
    for (const thisComponent of reel_startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "reel_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function trial_begRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial_beg'-------
    t = 0;
    trial_begClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    trial_begComponents = [];
    trial_begComponents.push(begin);
    
    for (const thisComponent of trial_begComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function trial_begRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial_beg'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial_begClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *begin* updates
    if (t >= 0.0 && begin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin.tStart = t;  // (not accounting for frame time here)
      begin.frameNStart = frameN;  // exact frame index
      
      begin.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (begin.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      begin.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_begComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trial_begRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial_beg'-------
    for (const thisComponent of trial_begComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}

function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    pressed = false;
    pressTime = Number.parseFloat("inf");
    automatic = false;
    tStart = t;
    if ((w_sound === 1)) {
        automatic = true;
    }
    if (((counteksik !== 0) && (w_sound === 0))) {
        automatic = true;
        counteksik = (counteksik - 1);
    }
    
    walking_stickmanClock = new util.Clock();
    walking_stickman = new visual.MovieStim({
      win: psychoJS.window,
      name: 'walking_stickman',
      units: undefined,
      movie: Speed,
      pos: [0, 0],
      size: undefined,
      ori: 0,
      opacity: 1,
      loop: true,
      noAudio: false,
      });
    key_press.keys = undefined;
    key_press.rt = undefined;
    _key_press_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(TrialText);
    trialComponents.push(walking_stickman);
    trialComponents.push(key_press);
    
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((key_press.keys === "space") && (! pressed))) {
        pressed = true;
        pressTime = t;
    }
    if ((t > (tStart + 9))) {
        continueRoutine = false;
    }
    
    
    // *TrialText* updates
    if (t >= 3 && TrialText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TrialText.tStart = t;  // (not accounting for frame time here)
      TrialText.frameNStart = frameN;  // exact frame index
      
      TrialText.setAutoDraw(true);
    }

    frameRemains = 3 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TrialText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TrialText.setAutoDraw(false);
    }
    
    // *walking_stickman* updates
    if (t >= 0 && walking_stickman.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      walking_stickman.tStart = t;  // (not accounting for frame time here)
      walking_stickman.frameNStart = frameN;  // exact frame index
      
      walking_stickman.setAutoDraw(true);
    }

    if (walking_stickman.status === PsychoJS.Status.STARTED && Boolean(((pressed && (t > (pressTime + delay))) || (automatic && (t > (tStart + a[0])))))) {
      walking_stickman.setAutoDraw(false);
    }

    if (walking_stickman.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    
    // *key_press* updates
    if (t >= 3 && key_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_press.tStart = t;  // (not accounting for frame time here)
      key_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_press.clearEvents(); });
    }

    if (key_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_press.getKeys({keyList: ['space'], waitRelease: false});
      _key_press_allKeys = _key_press_allKeys.concat(theseKeys);
      if (_key_press_allKeys.length > 0) {
        key_press.keys = _key_press_allKeys[_key_press_allKeys.length - 1].name;  // just the last key pressed
        key_press.rt = _key_press_allKeys[_key_press_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };

function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    psychoJS.experiment.addData('key_press.keys', key_press.keys);
    if (typeof key_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_press.rt', key_press.rt);
        }
    
    key_press.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function sound_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'sound_2'-------
    t = 0;
    sound_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (((automatic === false) && (key_press.keys === undefined))) {
        continueRoutine = false;
    }
    if ((((compsound < 27) && (automatic === true)) && (key_press.keys === "space"))) {
        counteksik = (counteksik + 1);
    }
    if (((automatic === true) && (key_press.keys === undefined))) {
        compsound = (compsound + 1);
    }
    
    sound_1.setVolume(1);
    // keep track of which components have finished
    sound_2Components = [];
    sound_2Components.push(sound_1);
    
    for (const thisComponent of sound_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function sound_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'sound_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = sound_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((key_press.keys === undefined)) {
        continueRoutine = false;
    }
    
    // start/stop sound_1
    if (t >= 0.0 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_1.getDuration() + sound_1.tStart)     && sound_1.status === PsychoJS.Status.STARTED) {
      sound_1.stop();  // stop the sound (if longer than duration)
      sound_1.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sound_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function sound_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'sound_2'-------
    for (const thisComponent of sound_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound_1.stop();  // ensure sound has stopped at end of routine
    // the Routine "sound_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function testRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'test'-------
    t = 0;
    testClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (((key_press.keys === undefined) && (automatic === true))) {
        continueRoutine = false;
    }
    
    slider.reset()
    ending_slider.keys = undefined;
    ending_slider.rt = undefined;
    _ending_slider_allKeys = [];
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(text_2);
    testComponents.push(slider);
    testComponents.push(ending_slider);
    
    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function testRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'test'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((key_press.keys === undefined) && (automatic === true))) {
        continueRoutine = false;
    }
    
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // *ending_slider* updates
    if (t >= 0.0 && ending_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ending_slider.tStart = t;  // (not accounting for frame time here)
      ending_slider.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ending_slider.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ending_slider.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ending_slider.clearEvents(); });
    }

    if (ending_slider.status === PsychoJS.Status.STARTED) {
      let theseKeys = ending_slider.getKeys({keyList: ['return'], waitRelease: false});
      _ending_slider_allKeys = _ending_slider_allKeys.concat(theseKeys);
      if (_ending_slider_allKeys.length > 0) {
        ending_slider.keys = _ending_slider_allKeys[_ending_slider_allKeys.length - 1].name;  // just the last key pressed
        ending_slider.rt = _ending_slider_allKeys[_ending_slider_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function testRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'test'-------
    for (const thisComponent of testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function reproduction_textRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'reproduction_text'-------
    t = 0;
    reproduction_textClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((Reproduction === 0)) {
        continueRoutine = false;
    }
    
    repro_ReelResp.keys = undefined;
    repro_ReelResp.rt = undefined;
    _repro_ReelResp_allKeys = [];
    // keep track of which components have finished
    reproduction_textComponents = [];
    reproduction_textComponents.push(repro_ReelText);
    reproduction_textComponents.push(repro_ReelResp);
    
    for (const thisComponent of reproduction_textComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function reproduction_textRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'reproduction_text'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = reproduction_textClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((Reproduction === 0)) {
        continueRoutine = false;
    }
    
    
    // *repro_ReelText* updates
    if (t >= 0.0 && repro_ReelText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repro_ReelText.tStart = t;  // (not accounting for frame time here)
      repro_ReelText.frameNStart = frameN;  // exact frame index
      
      repro_ReelText.setAutoDraw(true);
    }

    
    // *repro_ReelResp* updates
    if (t >= 0.0 && repro_ReelResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repro_ReelResp.tStart = t;  // (not accounting for frame time here)
      repro_ReelResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { repro_ReelResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { repro_ReelResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { repro_ReelResp.clearEvents(); });
    }

    if (repro_ReelResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = repro_ReelResp.getKeys({keyList: ['b'], waitRelease: false});
      _repro_ReelResp_allKeys = _repro_ReelResp_allKeys.concat(theseKeys);
      if (_repro_ReelResp_allKeys.length > 0) {
        repro_ReelResp.keys = _repro_ReelResp_allKeys[_repro_ReelResp_allKeys.length - 1].name;  // just the last key pressed
        repro_ReelResp.rt = _repro_ReelResp_allKeys[_repro_ReelResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reproduction_textComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function reproduction_textRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'reproduction_text'-------
    for (const thisComponent of reproduction_textComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "reproduction_text" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function repro_Reel_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'repro_Reel_2'-------
    t = 0;
    repro_Reel_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((Reproduction === 0)) {
        continueRoutine = false;
    }
    
    repro_reelEnd.keys = undefined;
    repro_reelEnd.rt = undefined;
    _repro_reelEnd_allKeys = [];
    // keep track of which components have finished
    repro_Reel_2Components = [];
    repro_Reel_2Components.push(repro_ReelStim);
    repro_Reel_2Components.push(repro_reelEnd);
    
    for (const thisComponent of repro_Reel_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function repro_Reel_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'repro_Reel_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = repro_Reel_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((Reproduction === 0)) {
        continueRoutine = false;
    }
    
    
    // *repro_ReelStim* updates
    if (t >= 0.0 && repro_ReelStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repro_ReelStim.tStart = t;  // (not accounting for frame time here)
      repro_ReelStim.frameNStart = frameN;  // exact frame index
      
      repro_ReelStim.setAutoDraw(true);
    }

    
    // *repro_reelEnd* updates
    if (t >= 0.0 && repro_reelEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repro_reelEnd.tStart = t;  // (not accounting for frame time here)
      repro_reelEnd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { repro_reelEnd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { repro_reelEnd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { repro_reelEnd.clearEvents(); });
    }

    if (repro_reelEnd.status === PsychoJS.Status.STARTED) {
      let theseKeys = repro_reelEnd.getKeys({keyList: ['b'], waitRelease: false});
      _repro_reelEnd_allKeys = _repro_reelEnd_allKeys.concat(theseKeys);
      if (_repro_reelEnd_allKeys.length > 0) {
        repro_reelEnd.keys = _repro_reelEnd_allKeys[_repro_reelEnd_allKeys.length - 1].name;  // just the last key pressed
        repro_reelEnd.rt = _repro_reelEnd_allKeys[_repro_reelEnd_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of repro_Reel_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function repro_Reel_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'repro_Reel_2'-------
    for (const thisComponent of repro_Reel_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "repro_Reel_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Blok_breakRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Blok_break'-------
    t = 0;
    Blok_breakClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    count = (count + 1);
    if ((count === 2)) {
        continueRoutine = false;
    }
    
    break_resp.keys = undefined;
    break_resp.rt = undefined;
    _break_resp_allKeys = [];
    // keep track of which components have finished
    Blok_breakComponents = [];
    Blok_breakComponents.push(Break);
    Blok_breakComponents.push(break_resp);
    
    for (const thisComponent of Blok_breakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function Blok_breakRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Blok_break'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Blok_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((count === 2)) {
        continueRoutine = false;
    }
    
    
    // *Break* updates
    if (t >= 0.0 && Break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Break.tStart = t;  // (not accounting for frame time here)
      Break.frameNStart = frameN;  // exact frame index
      
      Break.setAutoDraw(true);
    }

    
    // *break_resp* updates
    if (t >= 0.0 && break_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_resp.tStart = t;  // (not accounting for frame time here)
      break_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { break_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { break_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { break_resp.clearEvents(); });
    }

    if (break_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = break_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _break_resp_allKeys = _break_resp_allKeys.concat(theseKeys);
      if (_break_resp_allKeys.length > 0) {
        break_resp.keys = _break_resp_allKeys[_break_resp_allKeys.length - 1].name;  // just the last key pressed
        break_resp.rt = _break_resp_allKeys[_break_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Blok_breakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Blok_breakRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Blok_break'-------
    for (const thisComponent of Blok_breakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Blok_break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(thanks);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks* updates
    if (t >= 0.0 && thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks.tStart = t;  // (not accounting for frame time here)
      thanks.frameNStart = frameN;  // exact frame index
      
      thanks.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}

function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
