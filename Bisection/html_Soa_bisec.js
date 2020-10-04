/****************** 
 * Soa_Bisec Test *
 ******************/

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
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Soa_bisec';  // from the Builder filename that created this script
let expInfo = {'Katilimci Numarasi (Kendi beirlediginiz, 6 haneli bir sayi giriniz)': '', 'Cinsiyet': '', 'Yas': '', 'Deneyi actiginiz tarayiciniz (Lutfen Safari disinda bir tarayici ile aciniz. Orn: Chrome)': ''};

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
flowScheduler.add(ConsentRoutineBegin());
flowScheduler.add(ConsentRoutineEachFrame());
flowScheduler.add(ConsentRoutineEnd());
flowScheduler.add(Consent2RoutineBegin());
flowScheduler.add(Consent2RoutineEachFrame());
flowScheduler.add(Consent2RoutineEnd());
flowScheduler.add(Consent3RoutineBegin());
flowScheduler.add(Consent3RoutineEachFrame());
flowScheduler.add(Consent3RoutineEnd());
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
flowScheduler.add(prac_target_short_textRoutineBegin());
flowScheduler.add(prac_target_short_textRoutineEachFrame());
flowScheduler.add(prac_target_short_textRoutineEnd());
flowScheduler.add(ref_shortRoutineBegin());
flowScheduler.add(ref_shortRoutineEachFrame());
flowScheduler.add(ref_shortRoutineEnd());
flowScheduler.add(prac_target_long_textRoutineBegin());
flowScheduler.add(prac_target_long_textRoutineEachFrame());
flowScheduler.add(prac_target_long_textRoutineEnd());
flowScheduler.add(ref_longRoutineBegin());
flowScheduler.add(ref_longRoutineEachFrame());
flowScheduler.add(ref_longRoutineEnd());
flowScheduler.add(practice_textRoutineBegin());
flowScheduler.add(practice_textRoutineEachFrame());
flowScheduler.add(practice_textRoutineEnd());
const practice_condLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_condLoopBegin, practice_condLoopScheduler);
flowScheduler.add(practice_condLoopScheduler);
flowScheduler.add(practice_condLoopEnd);
flowScheduler.add(trial_startRoutineBegin());
flowScheduler.add(trial_startRoutineEachFrame());
flowScheduler.add(trial_startRoutineEnd());
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

function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

var frameDur;

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
var trial_startClock;
var trial_startComponents;
var trial_startText;
var trial_startResp;
var _trial_startResp_allKeys;
var trial_begClock;
var begin;
var trialClock;
var a;
var n;
var TrialText;
var random_sound;
var outcome;
var testClock;
var text_2;
var warningClock;
var warningComponents;
var warning_text;
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
var sound_2Components;
var testComponents;
var Blok_breakComponents;
var _break_resp_allKeys;
var endComponents;
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
var prac_target_short_textComponents;
var prac_target_short_textClock;
var practice_short_text;
var prac_short_resp;
var _prac_short_resp_allKeys;
var ref_shortComponents;
var ref_shortClock;
var ref_s;
var prac_target_long_textComponents;
var prac_target_long_textClock;
var practice_long_text;
var prac_long_resp;
var _prac_long_resp_allKeys;
var ref_longComponents;
var ref_longClock;
var ref_l
var practice_textComponents;
var practice_textClock;
var prac_text;
var practice_beg_keys;
var _practice_beg_keys_allKeys;
var practice_begComponents;
var practice_begClock;
var practice_begin;
var PracticeComponents;
var PracticeClock;
var prac_target;
var practice_testComponents;
var practice_testClock;
var prac_test_text;
var prac_resp;
var _prac_resp_allKeys;
var practice_feedback_correctComponents;
var practice_feedback_correctClock;
var practice_corFeedback_text;
var practice_testResp;
var _practice_testResp_allKeys;
var practice_feedback_wrongComponents;
var practice_feedback_wrongClock;
var practice_wrFeedback_Text;
var practice_testResp2;
var _practice_testResp2_allKeys;
var practice_n;
var sk;
var ok;
var fk;
var sku;
var oku;
var fku;
var so;
var oo;
var fo;
var soo;
var ooo;
var foo;
var su;
var ou;
var fu;
var sck;
var ock;
var fck;
var scku;
var ocku;
var fcku;
var sco;
var oco;
var fco;
var scoo;
var ocoo;
var fcoo;
var scu;
var ocu;
var fcu;
var sik;
var oik;
var fik;
var siku;
var oiku;
var fiku;
var sio;
var oio;
var fio;
var sioo;
var oioo;
var fioo;
var siu;
var oiu;
var fiu;
var comp;
var bisec_testComponents;
var bisec_testClock;
var bisec_test_text;
var bisec_resp;
var _bisec_resp_allKeys;
var correct;
var Blok_breakClock;
var Blok_breakComponents;
var Break;
var break_resp;
var _break_resp_allKeys;
var endComponents;
var endClock;
var thanks;
var practice_cond;
var conditions;
var blocks;
var sjk;
var ojk;
var fjk;
var sjku;
var ojku;
var fjku;
var sjo;
var ojo;
var fjo;
var sjoo;
var ojoo;
var fjoo;
var sju;
var oju;
var fju;
var sc;
var oc;
var fc;
var Outcome_start;
var random_start;

function experimentInit() {
  // Initialize components for Routine "Consent"
  ConsentClock = new util.Clock();
  Consent_form = new visual.TextStim({
    win: psychoJS.window,
    name: 'Consent_form',
    text: 'AYDINLATILMIŞ ONAM FORMU\n\nKoç Üniversitesi Psikoloji Bölümü öğretim üyesi Prof. Dr. Fuat Balcı yönetiminde yüksek lisans öğrencisi Merve Erdoğan tarafından\naksiyon alma hissi konusunda yürütülen araştırmaya katılımınız rica olunmaktadır. Bu çalışmada katılımınız tamamen gönüllülük esasına dayanır. \n\nÇALIŞMANIN ADI: Aksiyon Alma Hissinde Zaman Etkisi\n\nÇALIŞMANIN AMACI\nKoç Üniversitesi tarafından yürütülen bu çalışmanın amacı, aksiyon alma hissini kontrol eden bilişsel mekanizmayı araştırmaktır.\n\nPROSEDÜRLER\nBu çalışmaya gönüllü katılmak istemeniz halinde yürütülecek çalışmalar şöyledir;\nYaklaşık yarım saatlik bilgisayar üzerinde yapılacak olan bir davranış deneyine katılmanız beklenmektedir.\nSizden bir tuşa basmanız ve sonrasında oluşan sese sizin sebep olup olmadığınıza dair hissinizi değerlendirmeniz\nve geçen süreyi yeniden üretmeniz istenmektedir.\n\nOnam formunun devamı için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Consent_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Consent2"
  Consent2Clock = new util.Clock();
  Consent_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Consent_text2',
    text: 'OLASI RİSKLER VE RAHATSIZLIKLAR\nDeneyin risk ya da rahatsızlığı yoktur.\nDeney Koç Üniversitesi etik kurulu tarafından onaylanmıştır.\n\nTOPLUMA VE/VEYA DENEKLERE OLASI FAYDALARI\nBu çalışmanın amacı aksiyon alma hissini kontrol eden bilişsel mekanizmayı ve etkileyen faktörleri araştırmaktır. Çalışmanın sonuçları, bu mekanizma hakkında topluma bilgi sağlayacaktır.\n\nGİZLİLİK\nBu çalışmayla bağlantılı olarak elde edilen ve sizinle özdeşleşmiş her bilgi gizli kalacak, kişilerle paylaşılmayacak ve yalnızca sizin izniniz veya\nkanunun gerektirdiği ölçüde ifşa edilecektir. Gizlilik tanımlanmış bir\nkodlama prosedürüyle sağlanacak ve kod çözümüne erişim yalnızca çalışmanın sorumlusu araştırmacıyla sınırlı kalacaktır.\nTüm veriler, sınırlı erişime sahip güvenli ve şifreli bir veri tabanında tutulacaktır.\n\nOnam formunun devamı için herhangi bir tuşa basınız.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Consent_resp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Consent3"
  Consent3Clock = new util.Clock();
  Consent_text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Consent_text3',
    text: 'KATILIM VE AYRILMA\nBu çalışmanın içinde olmak isteyip istemediğinize tamamı ile bağımsız ve etki altında kalmadan karar verebilirsiniz.Çalışmadan çekilmek isterseniz bir cezası yoktur ve sahip olduğunuz faydaları kaybetmezsiniz.\n\nARAŞTIRMACILARIN KİMLİĞİ\nBu araştırma ile ilgili herhangi bir sorunuz veya endişeniz varsa,\nlütfen iletişime geçiniz:\nProf. Dr. Fuat Balcı\nKoç Üniversitesi\nT: 0212 338 1138\nE: fbalci@ku.edu.tr\nMerve Erdoğan\nKoç Üniversitesi\nE: merdogan19@ku.edu.tr\n\nYukarıda açıklanan prosedürleri anladım. Sorularım tatmin olacağım şekilde yanıtlandı ve dilediğim zaman ayrılma hakkım\nsaklı kalmak koşulu ile bu çalışmaya katılmayı onaylıyorum diyorsanız ‘e’ tuşuna, deneyden çekilmek için ‘h’ tuşuna basınız.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Consent_resp3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  briefing = new visual.TextStim({
    win: psychoJS.window,
    name: 'briefing',
    text: 'Merhaba!\n\nDeneyimizin DEMO kısmında, size iki süre öğreteceğiz. Daha sonra, size kare şekil ile gösterdiğimiz süreleri <UZUN> ya da <KISA>\nolarak kategorilere ayırmanızı isteyeceğiz.\n\nTest kısmında ise farklı süreler göstereceğiz ve bu süreleri <UZUNA DAHA YAKINDI> veya <KISAYA DAHA YAKINDI> olarak kategorilere ayırmanızı isteyeceğiz.\n\nDevam etmek için lütfen herhangi bir tuşa basınız.',
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
    text: '\nHer denemede hedef süre esnasında istediginiz herhangi bir an SPACE tuşuna basmanız istenmektedir. \n\nTuşa basış bazı denemelerde bir sese sebep olmakta, bazılarında olmamaktadır.\n\nAyrıca, bazı denemelerde bilgisayar kendiliğinden bu sesi üretmektedir.\n\nSizden istenen sese ne kadar sizin tuşa basışınızın sebep olduğunu hissettiğinizi değerlendirmektir.\n\nDevam etmek için herhangi bir tuşa basınız.\n\n',
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
    text: 'Demo kısmından farklı olarak test esnasında süreleri kare şekil ile değil, yürüyen çöp adam videoları ile göreceksiniz.\n\n\nDevam etmek için lütfen herhangi bir tuşa basınız.',
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
    text: 'Önemli hatırlatma!\n\nDeney boyunca saymayın, ritim tutmayın \nve zaman aralıkları ile ilgili size bilgi verebilecek herhangi bir strateji geliştirmeyin.\n\nLütfen, deneye başlamak için bilgisayarınızdan ses duyabildiğinize emin olun ve bilgisayarınızın sesini\n40 olarak ayarlayın.\nHerhangi bir sebeple deneyi bitirmeden çıkmanız gerekirse o noktaya kadarki sonuçların kaydolması için "Esc" tuşuna basınız.\nHazır olduğunuzda "boşluk" tuşuna basarak Demoyu başlatabilirsiniz.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_target_short_text"
  prac_target_short_textClock = new util.Clock();
  practice_short_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_short_text',
    text: 'Kısa süreyi görmek için boşluk tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  prac_short_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ref_short"
  ref_shortClock = new util.Clock();
  ref_s = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ref_s', units : 'height', 
    image : 'ref.jpeg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "prac_target_long_text"
  prac_target_long_textClock = new util.Clock();
  practice_long_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_long_text',
    text: 'Uzun süreyi görmek için boşluk tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  prac_long_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ref_long"
  ref_longClock = new util.Clock();
  ref_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ref_l', units : 'height', 
    image : 'ref.jpeg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "practice_text"
  practice_textClock = new util.Clock();
  prac_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_text',
    text: 'Şimdi size gösterilen süreleri <Uzun> ya da <Kısa> olarak sınıflandırınız.\n\n\nCevap verirken klavyede;\n\n<Kısa> için"G" tuşuna\n<Uzun> için "L" tuşuna basınız.\n\nSüreyi görmek için boşluk tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  practice_beg_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_beg"
  practice_begClock = new util.Clock();
  practice_n = 1;
  
  practice_begin = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_begin',
    text: 'Süreyi görmek için boşluk tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
   correct = 0;
   
  // Initialize components for Routine "Practice"
  PracticeClock = new util.Clock();
  prac_target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_target', units : 'height', 
    image : 'ref.jpeg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "practice_test"
  practice_testClock = new util.Clock();
  
  prac_test_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_test_text',
    text: 'Gördüğünüz süre <Kısa> mıydı <Uzun> muydu?\n\n\nG (Kısa)\n\nL (Uzun)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  prac_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_feedback_correct"
  practice_feedback_correctClock = new util.Clock();
  practice_corFeedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_corFeedback_text',
    text: 'Cevabınız doğru!\n\nSüreyi görmek için boşluk tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  practice_testResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_feedback_wrong"
  practice_feedback_wrongClock = new util.Clock();
  practice_wrFeedback_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_wrFeedback_Text',
    text: 'Cevabınız yanlış!\n\nSüreyi görmek için boşluk tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  practice_testResp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_start"
  trial_startClock = new util.Clock();
  trial_startText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_startText',
    text: 'Alıştırma kısmı bitti.\n\nTest kısmına başlamak için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  trial_startResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_beg"
  trial_begClock = new util.Clock();
  begin = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin',
    text: 'Tuşa basmaya başlayabileceğinizi belirten yazı çıkana kadar bekleyin ve sonra\nistediğiniz bir an tuşa basınız.\n\nTuşa basmayı deneme boyunca YALNIZCA BIR KERE yapmalısınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  a = [];
  
  for (var m = 0, _pj_a = 51; (m < _pj_a); m += 1) {
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

 if (a[0] > 3) {
     compsound = 1;
 }
 if (a[0] <3) {
     compsound = 0;
 }
  counteksik = 0;
  sk = 0;
  ok = 0;
  fk = 0;
  sku = 0;
  oku = 0;
  fku = 0;
  so = 0;
  oo = 0;
  fo =0;
  soo = 0;
  ooo = 0;
  foo =0;
  su = 0;
  ou = 0;
  fu = 0;
  sc = 0;
  oc = 0;
  fc = 0;
  sck = 0;
  ock = 0;
  fck = 0;
  scku = 0;
  ocku =0;
  fcku =0;
  sco = 0;
  oco=0;
  fco=0;
  scoo = 0;
  ocoo = 0;
  fcoo = 0;
  scu = 0;
  ocu=0;
  fcu=0;
  
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
  
  outcome = new sound.Sound({
    win: psychoJS.window,
    value: 'beep.wav',
    secs: (- 1),
    });
  outcome.setVolume(1);
  random_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'beep.wav',
    secs: (- 1),
    });
  random_sound.setVolume(1);
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Tuşa basmanızın sese sebep olduğunu ne kadar hissettiniz?\nAşağıda işaretleyin ve <Enter> tuşuna basınız.',
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
  
  // Initialize components for Routine "bisec_test"
  bisec_testClock = new util.Clock();
  bisec_test_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bisec_test_text',
    text: 'Gördüğünüz süre KISAYA mı daha yakındı UZUNA mı daha yakındı?\n\n\nG (Kısaya daha yakındı)\n\nL (Uzuna daha yakındı)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  bisec_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "warning"
  warningClock = new util.Clock();
  warning_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'warning_text',
    text: 'Space tuşuna basış yapmadınız. \n\nLütfen denemede size verilen sürede tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
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

function ConsentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent'-------
    t = 0;
    ConsentClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Consent_resp.keys = undefined;
    Consent_resp.rt = undefined;
    _Consent_resp_allKeys = [];
    // keep track of which components have finished
    ConsentComponents = [];
    ConsentComponents.push(Consent_form);
    ConsentComponents.push(Consent_resp);
    
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function ConsentRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Consent_form* updates
    if (t >= 0.0 && Consent_form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_form.tStart = t;  // (not accounting for frame time here)
      Consent_form.frameNStart = frameN;  // exact frame index
      
      Consent_form.setAutoDraw(true);
    }

    
    // *Consent_resp* updates
    if (t >= 0.0 && Consent_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_resp.tStart = t;  // (not accounting for frame time here)
      Consent_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Consent_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp.clearEvents(); });
    }

    if (Consent_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Consent_resp.getKeys({keyList: [], waitRelease: false});
      _Consent_resp_allKeys = _Consent_resp_allKeys.concat(theseKeys);
      if (_Consent_resp_allKeys.length > 0) {
        Consent_resp.keys = _Consent_resp_allKeys[_Consent_resp_allKeys.length - 1].name;  // just the last key pressed
        Consent_resp.rt = _Consent_resp_allKeys[_Consent_resp_allKeys.length - 1].rt;
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
    for (const thisComponent of ConsentComponents)
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

function ConsentRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent'-------
    for (const thisComponent of ConsentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Consent2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent2'-------
    t = 0;
    Consent2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Consent_resp2.keys = undefined;
    Consent_resp2.rt = undefined;
    _Consent_resp2_allKeys = [];
    // keep track of which components have finished
    Consent2Components = [];
    Consent2Components.push(Consent_text2);
    Consent2Components.push(Consent_resp2);
    
    for (const thisComponent of Consent2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function Consent2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Consent2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Consent_text2* updates
    if (t >= 0.0 && Consent_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_text2.tStart = t;  // (not accounting for frame time here)
      Consent_text2.frameNStart = frameN;  // exact frame index
      
      Consent_text2.setAutoDraw(true);
    }

    
    // *Consent_resp2* updates
    if (t >= 0.0 && Consent_resp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_resp2.tStart = t;  // (not accounting for frame time here)
      Consent_resp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Consent_resp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp2.clearEvents(); });
    }

    if (Consent_resp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = Consent_resp2.getKeys({keyList: [], waitRelease: false});
      _Consent_resp2_allKeys = _Consent_resp2_allKeys.concat(theseKeys);
      if (_Consent_resp2_allKeys.length > 0) {
        Consent_resp2.keys = _Consent_resp2_allKeys[_Consent_resp2_allKeys.length - 1].name;  // just the last key pressed
        Consent_resp2.rt = _Consent_resp2_allKeys[_Consent_resp2_allKeys.length - 1].rt;
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
    for (const thisComponent of Consent2Components)
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

function Consent2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent2'-------
    for (const thisComponent of Consent2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Consent2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Consent3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent3'-------
    t = 0;
    Consent3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Consent_resp3.keys = undefined;
    Consent_resp3.rt = undefined;
    _Consent_resp3_allKeys = [];
    // keep track of which components have finished
    Consent3Components = [];
    Consent3Components.push(Consent_text3);
    Consent3Components.push(Consent_resp3);
    
    for (const thisComponent of Consent3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function Consent3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Consent3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Consent_text3* updates
    if (t >= 0.0 && Consent_text3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_text3.tStart = t;  // (not accounting for frame time here)
      Consent_text3.frameNStart = frameN;  // exact frame index
      
      Consent_text3.setAutoDraw(true);
    }

    
    // *Consent_resp3* updates
    if (t >= 0.0 && Consent_resp3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_resp3.tStart = t;  // (not accounting for frame time here)
      Consent_resp3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Consent_resp3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp3.clearEvents(); });
    }

    if (Consent_resp3.status === PsychoJS.Status.STARTED) {
      let theseKeys = Consent_resp3.getKeys({keyList: ['e', 'h'], waitRelease: false});
      _Consent_resp3_allKeys = _Consent_resp3_allKeys.concat(theseKeys);
      if (_Consent_resp3_allKeys.length > 0) {
        Consent_resp3.keys = _Consent_resp3_allKeys[_Consent_resp3_allKeys.length - 1].name;  // just the last key pressed
        Consent_resp3.rt = _Consent_resp3_allKeys[_Consent_resp3_allKeys.length - 1].rt;
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
    for (const thisComponent of Consent3Components)
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

function Consent3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent3'-------
    for (const thisComponent of Consent3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Consent3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
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
      let theseKeys = key_resp_4.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
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

function prac_target_short_textRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'prac_target_short_text'-------
    t = 0;
    prac_target_short_textClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    prac_short_resp.keys = undefined;
    prac_short_resp.rt = undefined;
    _prac_short_resp_allKeys = [];
    // keep track of which components have finished
    prac_target_short_textComponents = [];
    prac_target_short_textComponents.push(practice_short_text);
    prac_target_short_textComponents.push(prac_short_resp);
    
    for (const thisComponent of prac_target_short_textComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function prac_target_short_textRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'prac_target_short_text'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = prac_target_short_textClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_short_text* updates
    if (t >= 0.0 && practice_short_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_short_text.tStart = t;  // (not accounting for frame time here)
      practice_short_text.frameNStart = frameN;  // exact frame index
      
      practice_short_text.setAutoDraw(true);
    }

    
    // *prac_short_resp* updates
    if (t >= 0.0 && prac_short_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_short_resp.tStart = t;  // (not accounting for frame time here)
      prac_short_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_short_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_short_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_short_resp.clearEvents(); });
    }

    if (prac_short_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_short_resp.getKeys({keyList: ['space'], waitRelease: false});
      _prac_short_resp_allKeys = _prac_short_resp_allKeys.concat(theseKeys);
      if (_prac_short_resp_allKeys.length > 0) {
        prac_short_resp.keys = _prac_short_resp_allKeys[_prac_short_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_short_resp.rt = _prac_short_resp_allKeys[_prac_short_resp_allKeys.length - 1].rt;
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
    for (const thisComponent of prac_target_short_textComponents)
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

function prac_target_short_textRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'prac_target_short_text'-------
    for (const thisComponent of prac_target_short_textComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "prac_target_short_text" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function ref_shortRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ref_short'-------
    t = 0;
    ref_shortClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ref_shortComponents = [];
    ref_shortComponents.push(ref_s);
    
    for (const thisComponent of ref_shortComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function ref_shortRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ref_short'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ref_shortClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ref_s* updates
    if (t >= 0.0 && ref_s.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ref_s.tStart = t;  // (not accounting for frame time here)
      ref_s.frameNStart = frameN;  // exact frame index
      
      ref_s.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ref_s.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ref_s.setAutoDraw(false);
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
    for (const thisComponent of ref_shortComponents)
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

function ref_shortRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ref_short'-------
    for (const thisComponent of ref_shortComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}

function prac_target_long_textRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'prac_target_long_text'-------
    t = 0;
    prac_target_long_textClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    prac_long_resp.keys = undefined;
    prac_long_resp.rt = undefined;
    _prac_long_resp_allKeys = [];
    // keep track of which components have finished
    prac_target_long_textComponents = [];
    prac_target_long_textComponents.push(practice_long_text);
    prac_target_long_textComponents.push(prac_long_resp);
    
    for (const thisComponent of prac_target_long_textComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function prac_target_long_textRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'prac_target_long_text'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = prac_target_long_textClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_long_text* updates
    if (t >= 0.0 && practice_long_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_long_text.tStart = t;  // (not accounting for frame time here)
      practice_long_text.frameNStart = frameN;  // exact frame index
      
      practice_long_text.setAutoDraw(true);
    }

    
    // *prac_long_resp* updates
    if (t >= 0.0 && prac_long_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_long_resp.tStart = t;  // (not accounting for frame time here)
      prac_long_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_long_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_long_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_long_resp.clearEvents(); });
    }

    if (prac_long_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_long_resp.getKeys({keyList: ['space'], waitRelease: false});
      _prac_long_resp_allKeys = _prac_long_resp_allKeys.concat(theseKeys);
      if (_prac_long_resp_allKeys.length > 0) {
        prac_long_resp.keys = _prac_long_resp_allKeys[_prac_long_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_long_resp.rt = _prac_long_resp_allKeys[_prac_long_resp_allKeys.length - 1].rt;
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
    for (const thisComponent of prac_target_long_textComponents)
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

function prac_target_long_textRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'prac_target_long_text'-------
    for (const thisComponent of prac_target_long_textComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "prac_target_long_text" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function ref_longRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ref_long'-------
    t = 0;
    ref_longClock.reset(); // clock
    frameN = -1;
    routineTimer.add(5.250000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ref_longComponents = [];
    ref_longComponents.push(ref_l);
    
    for (const thisComponent of ref_longComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function ref_longRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ref_long'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ref_longClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ref_l* updates
    if (t >= 0.0 && ref_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ref_l.tStart = t;  // (not accounting for frame time here)
      ref_l.frameNStart = frameN;  // exact frame index
      
      ref_l.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ref_l.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ref_l.setAutoDraw(false);
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
    for (const thisComponent of ref_longComponents)
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

function ref_longRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ref_long'-------
    for (const thisComponent of ref_longComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}

function practice_textRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice_text'-------
    t = 0;
    practice_textClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    practice_beg_keys.keys = undefined;
    practice_beg_keys.rt = undefined;
    _practice_beg_keys_allKeys = [];
    // keep track of which components have finished
    practice_textComponents = [];
    practice_textComponents.push(prac_text);
    practice_textComponents.push(practice_beg_keys);
    
    for (const thisComponent of practice_textComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function practice_textRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice_text'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_textClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_text* updates
    if (t >= 0.0 && prac_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_text.tStart = t;  // (not accounting for frame time here)
      prac_text.frameNStart = frameN;  // exact frame index
      
      prac_text.setAutoDraw(true);
    }

    
    // *practice_beg_keys* updates
    if (t >= 0.0 && practice_beg_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_beg_keys.tStart = t;  // (not accounting for frame time here)
      practice_beg_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_beg_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_beg_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_beg_keys.clearEvents(); });
    }

    if (practice_beg_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_beg_keys.getKeys({keyList: [], waitRelease: false});
      _practice_beg_keys_allKeys = _practice_beg_keys_allKeys.concat(theseKeys);
      if (_practice_beg_keys_allKeys.length > 0) {
        practice_beg_keys.keys = _practice_beg_keys_allKeys[_practice_beg_keys_allKeys.length - 1].name;  // just the last key pressed
        practice_beg_keys.rt = _practice_beg_keys_allKeys[_practice_beg_keys_allKeys.length - 1].rt;
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
    for (const thisComponent of practice_textComponents)
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

function practice_textRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice_text'-------
    for (const thisComponent of practice_textComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_beg_keys.keys', practice_beg_keys.keys);
    if (typeof practice_beg_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practice_beg_keys.rt', practice_beg_keys.rt);
        routineTimer.reset();
        }
    
    practice_beg_keys.stop();
    // the Routine "practice_text" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function practice_condLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_cond = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.FULLRANDOM,
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
    thisScheduler.add(practice_begRoutineBegin(snapshot));
    thisScheduler.add(practice_begRoutineEachFrame(snapshot));
    thisScheduler.add(practice_begRoutineEnd(snapshot));
    thisScheduler.add(PracticeRoutineBegin(snapshot));
    thisScheduler.add(PracticeRoutineEachFrame(snapshot));
    thisScheduler.add(PracticeRoutineEnd(snapshot));
    thisScheduler.add(practice_testRoutineBegin(snapshot));
    thisScheduler.add(practice_testRoutineEachFrame(snapshot));
    thisScheduler.add(practice_testRoutineEnd(snapshot));
    thisScheduler.add(practice_feedback_correctRoutineBegin(snapshot));
    thisScheduler.add(practice_feedback_correctRoutineEachFrame(snapshot));
    thisScheduler.add(practice_feedback_correctRoutineEnd(snapshot));
    thisScheduler.add(practice_feedback_wrongRoutineBegin(snapshot));
    thisScheduler.add(practice_feedback_wrongRoutineEachFrame(snapshot));
    thisScheduler.add(practice_feedback_wrongRoutineEnd(snapshot));
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
    thisScheduler.add(testRoutineBegin(snapshot));
    thisScheduler.add(testRoutineEachFrame(snapshot));
    thisScheduler.add(testRoutineEnd(snapshot));
    thisScheduler.add(bisec_testRoutineBegin(snapshot));
    thisScheduler.add(bisec_testRoutineEachFrame(snapshot));
    thisScheduler.add(bisec_testRoutineEnd(snapshot));
    thisScheduler.add(warningRoutineBegin(snapshot));
    thisScheduler.add(warningRoutineEachFrame(snapshot));
    thisScheduler.add(warningRoutineEnd(snapshot));
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

function practice_begRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice_beg'-------
    t = 0;
    practice_begClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((practice_n === 1)) {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    practice_begComponents = [];
    practice_begComponents.push(practice_begin);
    
    for (const thisComponent of practice_begComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function practice_begRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice_beg'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_begClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((practice_n === 1)) {
        continueRoutine = false;
    }
    
    
    // *practice_begin* updates
    if (t >= 0.0 && practice_begin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_begin.tStart = t;  // (not accounting for frame time here)
      practice_begin.frameNStart = frameN;  // exact frame index
      
      practice_begin.setAutoDraw(true);
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
    for (const thisComponent of practice_begComponents)
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

function practice_begRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice_beg'-------
    for (const thisComponent of practice_begComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "practice_beg" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function PracticeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Practice'-------
    t = 0;
    PracticeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    PracticeComponents = [];
    PracticeComponents.push(prac_target);
    
    for (const thisComponent of PracticeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function PracticeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_target* updates
    if (t >= 0.0 && prac_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_target.tStart = t;  // (not accounting for frame time here)
      prac_target.frameNStart = frameN;  // exact frame index
      
      prac_target.setAutoDraw(true);
    }

    frameRemains = 0.0 + prac_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_target.setAutoDraw(false);
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
    for (const thisComponent of PracticeComponents)
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

function PracticeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Practice'-------
    for (const thisComponent of PracticeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function practice_testRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice_test'-------
    t = 0;
    practice_testClock.reset(); // clock
    frameN = -1;
    
    
    // update component parameters for each repeat
    prac_resp.keys = undefined;
    prac_resp.rt = undefined;
    _prac_resp_allKeys = [];
    // keep track of which components have finished
    practice_testComponents = [];
    practice_testComponents.push(prac_test_text);
    practice_testComponents.push(prac_resp);
    
    for (const thisComponent of practice_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function practice_testRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice_test'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_test_text* updates
    if (t >= 0.0 && prac_test_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_test_text.tStart = t;  // (not accounting for frame time here)
      prac_test_text.frameNStart = frameN;  // exact frame index
      
      prac_test_text.setAutoDraw(true);
    }

    
    // *prac_resp* updates
    if (t >= 0.0 && prac_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_resp.tStart = t;  // (not accounting for frame time here)
      prac_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_resp.clearEvents(); });
    }

    if (prac_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_resp.getKeys({keyList: ['g', 'l'], waitRelease: false});
      _prac_resp_allKeys = _prac_resp_allKeys.concat(theseKeys);
      if (_prac_resp_allKeys.length > 0) {
        prac_resp.keys = _prac_resp_allKeys[_prac_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_resp.rt = _prac_resp_allKeys[_prac_resp_allKeys.length - 1].rt;
        // was this correct?
        if (prac_resp.keys == corrAns) {
            prac_resp.corr = 1;
        } else {
            prac_resp.corr = 0;
        }
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
    for (const thisComponent of practice_testComponents)
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

function practice_testRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice_test'-------
    for (const thisComponent of practice_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((prac_resp.corr === 1)) {
        correct = (correct + 1);
    }
    
    // was no response the correct answer?!
    if (prac_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         prac_resp.corr = 1;  // correct non-response
      } else {
         prac_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('prac_resp.keys', prac_resp.keys);
    psychoJS.experiment.addData('prac_resp.corr', prac_resp.corr);
    if (typeof prac_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_resp.rt', prac_resp.rt);
        routineTimer.reset();
        }
    
    prac_resp.stop();
    // the Routine "practice_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function practice_feedback_correctRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice_feedback_correct'-------
    t = 0;
    practice_feedback_correctClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((prac_resp.corr === 0)) {
        continueRoutine = false;
    }
    
    practice_testResp.keys = undefined;
    practice_testResp.rt = undefined;
    _practice_testResp_allKeys = [];
    // keep track of which components have finished
    practice_feedback_correctComponents = [];
    practice_feedback_correctComponents.push(practice_corFeedback_text);
    practice_feedback_correctComponents.push(practice_testResp);
    
    for (const thisComponent of practice_feedback_correctComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function practice_feedback_correctRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice_feedback_correct'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_feedback_correctClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((prac_resp.corr === 0)) {
        continueRoutine = false;
    }
    
    
    // *practice_corFeedback_text* updates
    if (t >= 0.0 && practice_corFeedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_corFeedback_text.tStart = t;  // (not accounting for frame time here)
      practice_corFeedback_text.frameNStart = frameN;  // exact frame index
      
      practice_corFeedback_text.setAutoDraw(true);
    }

    
    // *practice_testResp* updates
    if (t >= 0.0 && practice_testResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_testResp.tStart = t;  // (not accounting for frame time here)
      practice_testResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_testResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_testResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_testResp.clearEvents(); });
    }

    if (practice_testResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_testResp.getKeys({keyList: ['space'], waitRelease: false});
      _practice_testResp_allKeys = _practice_testResp_allKeys.concat(theseKeys);
      if (_practice_testResp_allKeys.length > 0) {
        practice_testResp.keys = _practice_testResp_allKeys[_practice_testResp_allKeys.length - 1].name;  // just the last key pressed
        practice_testResp.rt = _practice_testResp_allKeys[_practice_testResp_allKeys.length - 1].rt;
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
    for (const thisComponent of practice_feedback_correctComponents)
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

function practice_feedback_correctRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice_feedback_correct'-------
    for (const thisComponent of practice_feedback_correctComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((correct === 10)) {
        trials.finished = true;
    }
    
    psychoJS.experiment.addData('practice_testResp.keys', practice_testResp.keys);
    if (typeof practice_testResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practice_testResp.rt', practice_testResp.rt);
        routineTimer.reset();
        }
    
    practice_testResp.stop();
    // the Routine "practice_feedback_correct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function practice_feedback_wrongRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice_feedback_wrong'-------
    t = 0;
    practice_feedback_wrongClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((prac_resp.corr === true)) {
        continueRoutine = false;
    }
    
    practice_testResp2.keys = undefined;
    practice_testResp2.rt = undefined;
    _practice_testResp2_allKeys = [];
    // keep track of which components have finished
    practice_feedback_wrongComponents = [];
    practice_feedback_wrongComponents.push(practice_wrFeedback_Text);
    practice_feedback_wrongComponents.push(practice_testResp2);
    
    for (const thisComponent of practice_feedback_wrongComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function practice_feedback_wrongRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice_feedback_wrong'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_feedback_wrongClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((prac_resp.corr === 1)) {
        continueRoutine = false;
    }
    
    
    // *practice_wrFeedback_Text* updates
    if (t >= 0.0 && practice_wrFeedback_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_wrFeedback_Text.tStart = t;  // (not accounting for frame time here)
      practice_wrFeedback_Text.frameNStart = frameN;  // exact frame index
      
      practice_wrFeedback_Text.setAutoDraw(true);
    }

    
    // *practice_testResp2* updates
    if (t >= 0.0 && practice_testResp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_testResp2.tStart = t;  // (not accounting for frame time here)
      practice_testResp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_testResp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_testResp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_testResp2.clearEvents(); });
    }

    if (practice_testResp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_testResp2.getKeys({keyList: ['space'], waitRelease: false});
      _practice_testResp2_allKeys = _practice_testResp2_allKeys.concat(theseKeys);
      if (_practice_testResp2_allKeys.length > 0) {
        practice_testResp2.keys = _practice_testResp2_allKeys[_practice_testResp2_allKeys.length - 1].name;  // just the last key pressed
        practice_testResp2.rt = _practice_testResp2_allKeys[_practice_testResp2_allKeys.length - 1].rt;
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
    for (const thisComponent of practice_feedback_wrongComponents)
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

function practice_feedback_wrongRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice_feedback_wrong'-------
    for (const thisComponent of practice_feedback_wrongComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_testResp2.keys', practice_testResp2.keys);
    if (typeof practice_testResp2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practice_testResp2.rt', practice_testResp2.rt);
        routineTimer.reset();
        }
    
    practice_testResp2.stop();
    // the Routine "practice_feedback_wrong" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function trial_startRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial_start'-------
    t = 0;
    trial_startClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    trial_startResp.keys = undefined;
    trial_startResp.rt = undefined;
    _trial_startResp_allKeys = [];
    // keep track of which components have finished
    trial_startComponents = [];
    trial_startComponents.push(trial_startText);
    trial_startComponents.push(trial_startResp);
    
    for (const thisComponent of trial_startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function trial_startRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial_start'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial_startText* updates
    if (t >= 0.0 && trial_startText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_startText.tStart = t;  // (not accounting for frame time here)
      trial_startText.frameNStart = frameN;  // exact frame index
      
      trial_startText.setAutoDraw(true);
    }

    
    // *trial_startResp* updates
    if (t >= 0.0 && trial_startResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_startResp.tStart = t;  // (not accounting for frame time here)
      trial_startResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial_startResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial_startResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial_startResp.clearEvents(); });
    }

    if (trial_startResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial_startResp.getKeys({keyList: [], waitRelease: false});
      _trial_startResp_allKeys = _trial_startResp_allKeys.concat(theseKeys);
      if (_trial_startResp_allKeys.length > 0) {
        trial_startResp.keys = _trial_startResp_allKeys[_trial_startResp_allKeys.length - 1].name;  // just the last key pressed
        trial_startResp.rt = _trial_startResp_allKeys[_trial_startResp_allKeys.length - 1].rt;
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
    for (const thisComponent of trial_startComponents)
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

function trial_startRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial_start'-------
    for (const thisComponent of trial_startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "trial_start" was not non-slip safe, so reset the non-slip timer
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
    routineTimer.add(3.000000);
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

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    comp = false;
    sik = false;
    oik = false;
    fik = false;
    siku = false;
    oiku = false;
    fiku = false;
    sio = false;
    oio = false;
    fio = false;
    sioo = false;
    oioo = false;
    fioo = false;
    siu = false;
    oiu = false;
    fiu = false;
    sjk = false;
    ojk = false;
    fjk = false;
    sjku = false;
    ojku = false;
    fjku = false;
    sjo= false;
    ojo = false;
    fjo = false;
    sjoo = false;
    ojoo = false;
    fjoo = false;
    sju = false;
    oju = false;
    fju = false;
    Outcome_start = [];
    random_start = [];
    
    tStart = t;
    if ((w_sound === 1)) {
        automatic = true;
    }
    if (((counteksik !== 0) && (w_sound === 0))) {
        automatic = true;
        counteksik = (counteksik - 1);
    }
    
    
    
    if ((Speed === "50fps.mp4") && (sck === 5) && (sk !== 0)) {
        duration = 1.5;
        sjk = true;
    }
    if ((Speed === "63fps.mp4") && (ock === 5) && (ok !== 0)) {
        duration = 1.5;
        ojk = true;
    }
    if ((Speed === "100fps.mp4") && (fck === 5) && (fk !== 0)){
        duration = 1.5;
        fjk = true;
    }
    if ((Speed === "50fps.mp4") && (scku === 5) && (sku !== 0)) {
        duration = 2.25;
        sjku = true;
    }
    if ((Speed === "63fps.mp4") && (ocku === 5) && (oku !== 0)) {
        duration = 2.25
        ojku = true;
    }
    if ((Speed === "100fps.mp4") && (fcku === 5) && (fku !== 0)) {
        duration = 2.25;
        fjku = true;
    }
    if ((Speed === "50fps.mp4") && (sco === 5) && (so !== 0)) {
        duration = 3;
        sjo = true;
    }
    if ((Speed === "63fps.mp4") && (oco === 5) && (oo !== 0)) {
        duration = 3;
        ojo = true;
    }
    if ((Speed === "100fps.mp4") && (fco === 5) && (fo !== 0)) {
        duration = 3;
        fjo = true;
    }
    if ((Speed === "50fps.mp4") && (scoo === 5) && (soo !== 0)) {
        duration = 3.75;
        sjoo = true;
    }
    if ((Speed === "63fps.mp4") && (ocoo === 5) && (ooo !== 0)) {
        duration = 3.75;
        ojoo = true;
    }
    if ((Speed === "100fps.mp4") && (fcoo === 5) && (foo !== 0)) {
        duration = 3.75;
        fjoo = true;
    }
    if ((Speed === "50fps.mp4") && (scu === 5) && (su !== 0)) {
        duration = 4.5;
        sju = true;
    }
    if ((Speed === "63fps.mp4") && (ocu === 5) && (ou !== 0)) {
        duration = 4.5;
        oju = true;
    }
    if ((Speed === "100fps.mp4") && (fcu === 5) && (fu !== 0)) {
        duration = 4.5;
        fju = true;
    }
    
    
    
    
    walking_stickmanClock = new util.Clock();
    walking_stickman = new visual.MovieStim({
      win: psychoJS.window,
      name: 'walking_stickman',
      units: 'height',
      movie: Speed,
      pos: [0, 0],
      size: [0.7, 0.39],
      ori: 0,
      opacity: 1,
      loop: true,
      noAudio: false,
      });
    key_press.keys = undefined;
    key_press.rt = undefined;
    _key_press_allKeys = [];
    outcome.setVolume(1);
    random_sound.setVolume(1);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(TrialText);
    trialComponents.push(walking_stickman);
    trialComponents.push(key_press);
    trialComponents.push(outcome);
    trialComponents.push(random_sound);
    
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
    if ((((automatic === true) && (! pressed)) && (t > a[compsound]))) {
        comp = true;
    }
    if (((pressTime + delay) > duration)) {
        if ((((pressTime + delay) < 2.25))) {
            if ((Speed === "50fps.mp4") && (sck < 5)) {
                duration = 2.25;
                sik = true;
            }
            if ((Speed === "63fps.mp4") && (ock < 5)){
                duration = 2.25;
                oik= true;
            }
            if ((Speed === "100fps.mp4") && (fck < 5)) {
                duration = 2.25;
                fik = true;
            }
        } else {
            if (((((pressTime + delay) > 2.25) && ((pressTime + delay) < 3)))) {
                if ((Speed === "50fps.mp4") && (scku < 5)) {
                duration = 3;
                siku = true;
                }
                if ((Speed === "63fps.mp4") && (ocku < 5)) {
                duration = 3;
                oiku= true;
                }
                if ((Speed === "100fps.mp4") && (fcku < 5)) {
                duration = 3;
                fiku= true;
                }
            } else {
                if (((((pressTime + delay) > 3) && ((pressTime + delay) < 3.75)))) {
                    if ((Speed === "50fps.mp4") && (sco < 5)) {
                        duration = 3.75;
                        sio = true;
                    }
                    if ((Speed === "63fps.mp4") && (oco < 5))  {
                        duration = 3.75;
                        oio= true;
                    }
                    if ((Speed === "100fps.mp4") && (fco < 5)) {
                        duration = 3.75;
                        fio = true;
                    }
                } else {
                    if (((((pressTime + delay) > 3.75) && ((pressTime + delay) < 4.5)))) {
                        if ((Speed === "50fps.mp4") && (scoo <5)){
                           duration = 4.5;
                           sioo = true;
                        }
                        if ((Speed === "63fps.mp4")  && (ocoo <5)) {
                            duration = 4.5;
                            oioo= true;
                        }
                        if ((Speed === "100fps.mp4") && (fcoo <5)){
                            duration = 4.5;
                            fioo = true;
                        }
                    } else {
                        if (((((pressTime + delay) > 4.5) && ((pressTime + delay) < 5.25)))) {
                            if ((Speed === "50fps.mp4") && (scu < 5)){
                                duration = 5.25;
                                siu= true;
                            }
                            if ((Speed === "63fps.mp4") && (ocu < 5)){
                                duration = 5.25;
                                oiu = true;
                            }
                            if ((Speed === "100fps.mp4") && (fcu < 5)){
                                duration = 5.25;
                                fiu = true;
                            }
                        }
                    }
                }
            }
        }
    }
    
    
    if ((Speed === "50fps.mp4") && (sc === 5) && (duration === 1.5)) {
        if (sck < 5){
           duration = 2.25; 
    }else {
        if (scku < 5){
        duration = 3;
    }else {
        if (sco < 5){
        duration = 3.75;
    }else {
        if (scoo < 5){
        duration = 4.25;
    } else {
        if (scu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "63fps.mp4") && (oc === 5) && (duration === 1.5)) {
        if (ock < 5){
           duration = 2.25; 
    }else {
        if (ocku < 5){
        duration = 3;
    }else {
        if (oco < 5){
        duration = 3.75;
    }else {
        if (ocoo < 5){
        duration = 4.25;
    } else {
        if (ocu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "100fps.mp4") && (fc === 5) && (duration === 1.5)) {
        if (fck < 5){
           duration = 2.25; 
    }else {
        if (fcku < 5){
        duration = 3;
    }else {
        if (fco < 5){
        duration = 3.75;
    }else {
        if (fcoo < 5){
        duration = 4.25;
    } else {
        if (fcu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "50fps.mp4") && (sck === 5) && (duration === 2.25)) {
        if (sc < 5){
           duration = 1.5; 
    }else {
        if (scku < 5){
        duration = 3;
    }else {
        if (sco < 5){
        duration = 3.75;
    }else {
        if (scoo < 5){
        duration = 4.25;
    } else {
        if (scu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
   if ((Speed === "63fps.mp4") && (ock === 5) && (duration === 2.25)) {
         if (oc < 5){
           duration = 1.5; 
    }else {
        if (ocku < 5){
        duration = 3;
    }else {
        if (oco < 5){
        duration = 3.75;
    }else {
        if (ocoo < 5){
        duration = 4.25;
    } else {
        if (ocu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "100fps.mp4") && (fck === 5) && (duration === 2.25)) {
         if (fc < 5){
           duration = 1.5; 
    }else {
        if (fcku < 5){
        duration = 3;
    }else {
        if (fco < 5){
        duration = 3.75;
    }else {
        if (foo < 5){
        duration = 4.25;
    } else {
        if (fcu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "50fps.mp4") && (scku === 5) && (duration === 3)) {
         if (sc < 5){
           duration = 1.5; 
    }else {
        if (sck < 5){
        duration = 2.25;
    }else {
        if (sco < 5){
        duration = 3.75;
    }else {
        if (scoo < 5){
        duration = 4.25;
    } else {
        if (scu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "63fps.mp4") && (ocku === 5) && (duration === 3)) {
         if (oc < 5){
           duration = 1.5; 
    }else {
        if (ock < 5){
        duration = 2.25;
    }else {
        if (oco < 5){
        duration = 3.75;
    }else {
        if (ocoo < 5){
        duration = 4.25;
    } else {
        if (ocu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "100fps.mp4") && (fcku === 5) && (duration === 3)) {
         if (fc < 5){
           duration = 1.5; 
    }else {
        if (fck < 5){
        duration = 2.25;
    }else {
        if (fco < 5){
        duration = 3.75;
    }else {
        if (fcoo < 5){
        duration = 4.25;
    } else {
        if (fcu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "50fps.mp4") && (sco === 5) && (duration === 3.75)) {
         if (sc < 5){
           duration = 1.5; 
    }else {
        if (sck < 5){
        duration = 2.25;
    }else {
        if (scku < 5){
        duration = 3;
    }else {
        if (scoo < 5){
        duration = 4.25;
    } else {
        if (scu < 5){
        duration = 5.25;
    }
    }
    }
    }
    } 
    }
    
    if ((Speed === "63fps.mp4") && (oco === 5) && (duration === 3.75)) {
         if (oc < 5) {
           duration = 1.5; 
    }else {
        if (ock < 5){
        duration = 2.25;
    }else {
        if (ocku < 5){
        duration = 3;
    }else {
        if (ocoo < 5){
        duration = 4.25;
    } else {
        if (ocu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "100fps.mp4") && (fco=== 5) && (duration === 3.75)) {
         if (fc < 5){
           duration = 1.5; 
    }else {
        if (fck < 5){
        duration = 2.25;
    }else {
        if (fcku < 5){
        duration = 3;
    }else {
        if (fcoo < 5){
        duration = 4.25;
    } else {
        if (fcu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "50fps.mp4") && (scoo=== 5) && (duration === 4.25)) {
         if (sc < 5){
           duration = 1.5; 
    }else {
        if (sck < 5){
        duration = 2.25;
    }else {
        if (scku < 5){
        duration = 3;
    }else {
        if (sco < 5){
        duration = 3.75;
    } else {
        if (scu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "63fps.mp4") && (ocoo=== 5) && (duration === 4.25)) {
         if (oc < 5){
           duration = 1.5; 
    }else {
        if (ock < 5){
        duration = 2.25;
    }else {
        if (ocku < 5){
        duration = 3;
    }else {
        if (oco < 5){
        duration = 3.75;
    } else {
        if (ocu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "100fps.mp4") && (fcoo=== 5) && (duration === 4.25)) {
         if (fc < 5){
           duration = 1.5; 
    }else {
        if (fck < 5){
        duration = 2.25;
    }else {
        if (fcku < 5){
        duration = 3;
    }else {
        if (fco < 5){
        duration = 3.75;
    } else {
        if (fcu < 5){
        duration = 5.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "50fps.mp4") && (scu=== 5) && (duration === 5.25)) {
         if (sc < 5){
           duration = 1.5; 
    }else {
        if (sck < 5){
        duration = 2.25;
    }else {
        if (scku < 5){
        duration = 3;
    }else {
        if (sco < 5){
        duration = 3.75;
    } else {
        if (scoo < 5){
        duration = 4.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "63fps.mp4") && (ocu=== 5) && (duration === 5.25)) {
         if (oc < 5){
           duration = 1.5; 
    }else {
        if (ock < 5){
        duration = 2.25;
    }else {
        if (ocku < 5){
        duration = 3;
    }else {
        if (oco < 5){
        duration = 3.75;
    } else {
        if (ocoo < 5){
        duration = 4.25;
    }
    }
    }
    }
    }
    }
    
    if ((Speed === "100fps.mp4") && (fcu=== 5) && (duration === 5.25)) {
         if (fc < 5){
           duration = 1.5; 
    }else {
        if (fck < 5){
        duration = 2.25;
    }else {
        if (fcku < 5){
        duration = 3;
    }else {
        if (fco < 5){
        duration = 3.75;
    } else {
        if (fcoo < 5){
        duration = 4.25;
    }
    }
    }
    }
    }
    }
    
    
    if (((duration === 2.25) && (sk !== 0) && ((pressTime + delay) < 1.5) && (Speed === "50fps.mp4")) || ((duration === 2.25) && (sk !== 0) && (! pressed) && (t > 1.4) && (Speed === "50fps.mp4")))  {
        duration = 1.5;
        sjk = true;
    }
    if ((((duration === 2.25) && (ok !== 0) && ((pressTime + delay) < 1.5) && (Speed === "63fps.mp4")) || ((duration === 2.25) && (ok !== 0)) && (! pressed) && (t > 1.4) && (Speed === "63fps.mp4")))  {
        duration = 1.5;
        ojk = true;
    }
    if ((((duration === 2.25) && (fk !== 0) && (pressTime + delay) < 1.5) && (Speed === "100fps.mp4")) || ((duration === 2.25) && (fk !== 0) && (! pressed) && (t > 1.4) && (Speed === "100fps.mp4")))  {
        duration = 1.5;
        fjk = true;
    }
    if ((((duration === 3) && (sku !== 0) && (pressTime + delay) < 2.25) && (Speed === "50fps.mp4")) || ((duration === 3) && (sku !== 0) && (! pressed) && (t > 2.24) && (Speed === "50fps.mp4"))) {
        duration = 2.25;
        sjku = true;
    }
    if ((((duration === 3) && (oku !== 0) && (pressTime + delay) < 2.25) && (Speed === "63fps.mp4")) || ((duration === 3) && (oku !== 0) && (! pressed) && (t > 2.24) && (Speed === "63fps.mp4"))) {
        duration = 2.25;
        ojku = true;
    }
    if ((((duration === 3) && (fku !== 0) && (pressTime + delay) < 2.25) && (Speed === "100fps.mp4")) || ((duration === 3) && (fku !== 0) && (! pressed) && (t > 2.24) && (Speed === "100fps.mp4"))) {
        duration = 2.25;
        fjku = true;
    }
    if ((((duration === 3.75) && (so !== 0) && (pressTime + delay) < 3) && (Speed === "50fps.mp4")) || ((duration === 3.75) && (so !== 0) && (! pressed) && (t > 2.9) && (Speed === "50fps.mp4"))) {
        duration = 3;
        sjo = true;
    }
    if ((((duration === 3.75) && (oo !== 0) && (pressTime + delay) < 3) && (Speed === "63fps.mp4")) || ((duration === 3.75) && (oo !== 0) && (! pressed) && (t >2.9 ) && (Speed === "63fps.mp4"))) {
        duration = 3;
        ojo = true;
    }
    if ((((duration === 3.75) && (fo !== 0) && (pressTime + delay) < 3) && (Speed === "100fps.mp4")) || ((duration === 3.75) && (fo !== 0) && (! pressed) && (t > 2.9) && (Speed === "100fps.mp4"))) {
        duration = 3;
        fjo = true;
    }
    if ((((duration === 4.5) && (soo !== 0) && (pressTime + delay) < 3.75) && (Speed === "50fps.mp4")) || ((duration === 4.5) && (soo !== 0) && (! pressed) && (t > 3.74) && (Speed === "50fps.mp4"))) {
        duration = 3.75;
        sjoo = true;
    }
    if ((((duration === 4.5) && (ooo !== 0) && (pressTime + delay) < 3.75) && (Speed === "63fps.mp4")) || ((duration === 4.5) && (ooo !== 0) && (! pressed) && (t > 3.74) && (Speed === "63fps.mp4")))  {
        duration = 3.75;
        ojoo = true;
    }
    if ((((duration === 4.5) && (foo !== 0) && (pressTime + delay) < 3.75) && (Speed === "100fps.mp4")) || ((duration === 4.5) && (foo !== 0) && (! pressed) && (t > 3.74) && (Speed === "100fps.mp4"))) {
        duration = 3.75;
        fjoo = true;
    }
    if ((((duration === 5.25) && (su !== 0) && (pressTime + delay) < 4.5) && (Speed === "50fps.mp4")) || ((duration === 5.25) && (su !== 0) && (! pressed) && (t > 4.4) && (Speed === "50fps.mp4"))) {
        duration = 4.5;
        sju = true;
    }
    if ((((duration === 5.25) && (ou !== 0) && (pressTime + delay) < 4.5) && (Speed === "63fps.mp4")) || ((duration === 5.25) && (ou !== 0) && (! pressed) && (t > 4.4) && (Speed === "63fps.mp4"))) {
        duration = 4.5;
        oju = true;
    }
    if ((((duration === 5.25) && (fu !== 0) && (pressTime + delay) < 4.5) && (Speed === "100fps.mp4")) || ((duration === 5.25) && (fu !== 0) && (! pressed) && (t > 4.4) && (Speed === "100fps.mp4"))) {
        duration = 4.5;
        fju = true;
    }
    
    
    // *TrialText* updates
    if (t >= 0.5 && TrialText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TrialText.tStart = t;  // (not accounting for frame time here)
      TrialText.frameNStart = frameN;  // exact frame index
      
      TrialText.setAutoDraw(true);
    }

    
    // *walking_stickman* updates
    if (t >= 0 && walking_stickman.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      walking_stickman.tStart = t;  // (not accounting for frame time here)
      walking_stickman.frameNStart = frameN;  // exact frame index
      
      walking_stickman.setAutoDraw(true);
    }

    frameRemains = 0 + duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (walking_stickman.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      walking_stickman.setAutoDraw(false);
    }

    if (walking_stickman.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    
    // *key_press* updates
    if (t >= 0.5 && key_press.status === PsychoJS.Status.NOT_STARTED) {
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
    
    // start/stop outcome
    if (((pressed && (t > (pressTime + delay)))) && outcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outcome.tStart = t;  // (not accounting for frame time here)
      outcome.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ outcome.play(); });  // screen flip
      outcome.status = PsychoJS.Status.STARTED;
    }
    
    if (outcome.status === PsychoJS.Status.STARTED) {
        Outcome_start = outcome.tStart;
    }
    
    if (t >= (outcome.getDuration() + outcome.tStart)     && outcome.status === PsychoJS.Status.STARTED) {
      outcome.stop();  // stop the sound (if longer than duration)
      outcome.status = PsychoJS.Status.FINISHED;
    }
    
    // start/stop random_sound
    if ((((! pressed) && automatic && (t > a[compsound]))) && random_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      random_sound.tStart = t;  // (not accounting for frame time here)
      random_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ random_sound.play(); });  // screen flip
      random_sound.status = PsychoJS.Status.STARTED;
    }
    
    if (random_sound.status === PsychoJS.Status.STARTED) {
        random_start = random_sound.tStart;
    }
    
    if (t >= (random_sound.getDuration() + random_sound.tStart)     && random_sound.status === PsychoJS.Status.STARTED) {
      random_sound.stop();  // stop the sound (if longer than duration)
      random_sound.status = PsychoJS.Status.FINISHED;
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
}

function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((((automatic === true) && (pressTime < a[compsound])) && (compsound < 27))) {
        counteksik = (counteksik + 1);
    }

    if ((((automatic === true) && (! pressed) && (duration < a[compsound])) && (compsound < 27))) {
        counteksik = (counteksik + 1);
    }
    
    if ((duration === 1.5)) {
        if (Speed === "50fps.mp4") {
            sc = (sc+1);
        }
        if (Speed === "63fps.mp4") {
            oc = (oc + 1);
        }
        if (Speed === "100fps.mp4") {
            fc = (fc + 1);
        }
    }  
    
    
    if ((duration === 2.25)) {
        if (Speed === "50fps.mp4") {
            sck = (sck + 1);
        }
        if (Speed === "63fps.mp4") {
            ock = (ock + 1);
        }
        if (Speed === "100fps.mp4") {
            fck = (fck + 1);
        }
    }  
        
    if ((duration === 3)) {
        if (Speed === "50fps.mp4") {
            scku = (scku + 1);
        }
        if (Speed === "63fps.mp4") {
            ocku = (ocku + 1);
        }
        if (Speed === "100fps.mp4") {
            fcku = (fcku + 1);
        }
    }
    
    if ((duration === 3.75)) {
        if (Speed === "50fps.mp4") {
            sco = (sco + 1);
        }
        if (Speed === "63fps.mp4") {
            oco = (oco + 1);
        }
        if (Speed === "100fps.mp4") {
            fco = (fco + 1);
        }
    } 
    if ((duration === 4.5)) {
        if (Speed === "50fps.mp4") {
           scoo = (scoo + 1);
        }
        if (Speed === "63fps.mp4") {
            ocoo = (ocoo + 1);
        }
        if (Speed === "100fps.mp4") {
            fcoo = (fcoo + 1);
        }
    } 
    
    if ((duration === 5.25)) {
        if (Speed === "50fps.mp4") {
           scu = (scu + 1);
        }
        if (Speed === "63fps.mp4") {
            ocu = (ocu + 1);
        }
        if (Speed === "100fps.mp4") {
            fcu = (fcu + 1);
        }
    } 
    
     
    
    if ((comp === true)) {
        compsound = (compsound + 1);
    }
    if ((sik === true)) {
        sk = (sk + 1);
    }
    if ((oik === true)) {
        ok = (ok + 1);
    }
    if ((fik === true)) {
        fk = (fk + 1);
    }
    if ((siku === true)) {
        sku = (sku + 1);
    }
    if ((oiku === true)) {
        oku = (oku + 1);
    }
    if ((fiku === true)) {
        fku = (fku + 1);
    }
    if ((sio === true)) {
        so = (so+ 1);
    }
    if ((oio === true)) {
        oo = (oo + 1);
    }
    
    if ((fio === true)) {
        fo = (fo + 1);
    }
    if ((sioo === true)) {
        soo = (soo + 1);
    }
    if ((oioo === true)) {
        ooo = (ooo + 1);
    }
    if ((fioo === true)) {
        foo = (foo + 1);
    }
    if ((siu === true)) {
        su = (su + 1);
    }
    if ((oiu === true)) {
        ou = (ou + 1);
    }
    if ((fiu === true)) {
        fu = (fu + 1);
    }
    
    if ((sjk === true)) {
        sk = (sk - 1);
    }
    if ((ojk === true)) {
        ok = (ok - 1);
    }
    if ((fjk === true)) {
        fk = (fk - 1);
    }
    if ((sjku === true)) {
        sku = (sku - 1);
    }
    if ((ojku === true)) {
        oku = (oku - 1);
    }
    if ((fjku === true)) {
        fku = (fku - 1);
    }
    if ((sjo === true)) {
        so = (so - 1);
    }
    if ((ojo === true)) {
        oo = (oo - 1);
    }
    if ((fjo === true)) {
        fo = (fo - 1);
    }
    if ((sjoo === true)) {
        soo = (soo - 1);
    }
    if ((ojoo === true)) {
        ooo = (ooo - 1);
    }
    if ((fjoo === true)) {
        foo = (foo - 1);
    }
    if ((sju === true)) {
        su = (su - 1);
    }
    if ((oju === true)) {
        ou = (ou - 1);
    }
    if ((fju === true)) {
        fu = (fu - 1);
    }
    
    
    psychoJS.experiment.addData('key_press.keys', key_press.keys);
    if (typeof key_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_press.rt', key_press.rt);
        }
    psychoJS.experiment.addData('Video duration',t);
    psychoJS.experiment.addData('Outcome Start',Outcome_start);
    psychoJS.experiment.addData('Random Sound',random_start);
     
    key_press.stop();
    outcome.stop();  // ensure sound has stopped at end of routine
    random_sound.stop();  // ensure sound has stopped at end of routine
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
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
    if ((key_press.keys === undefined)) {
        continueRoutine = false;
    }
    
    console.log(sck);
    console.log(ock);
    console.log(fck);
    console.log(scku);
    console.log(ocku);
    console.log(fcku);
    console.log(sco);
    console.log(oco);
    console.log(fco);
    console.log(scoo);
    console.log(ocoo);
    console.log(fcoo);
    console.log(scu);
    console.log(ocu);
    console.log(fcu);
    console.log(sc);
    console.log(oc);
    console.log(fc);
    
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
    if ((key_press.keys === undefined)) {
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
    psychoJS.experiment.addData('ending_slider.keys', ending_slider.keys);
    if (typeof ending_slider.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ending_slider.rt', ending_slider.rt);
        routineTimer.reset();
        }
    
    ending_slider.stop();
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function bisec_testRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'bisec_test'-------
    t = 0;
    bisec_testClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    bisec_resp.keys = undefined;
    bisec_resp.rt = undefined;
    _bisec_resp_allKeys = [];
    // keep track of which components have finished
    bisec_testComponents = [];
    bisec_testComponents.push(bisec_test_text);
    bisec_testComponents.push(bisec_resp);
    
    for (const thisComponent of bisec_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function bisec_testRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'bisec_test'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = bisec_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bisec_test_text* updates
    if (t >= 0.0 && bisec_test_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bisec_test_text.tStart = t;  // (not accounting for frame time here)
      bisec_test_text.frameNStart = frameN;  // exact frame index
      
      bisec_test_text.setAutoDraw(true);
    }

    
    // *bisec_resp* updates
    if (t >= 0.0 && bisec_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bisec_resp.tStart = t;  // (not accounting for frame time here)
      bisec_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { bisec_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { bisec_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { bisec_resp.clearEvents(); });
    }

    if (bisec_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = bisec_resp.getKeys({keyList: ['g', 'l'], waitRelease: false});
      _bisec_resp_allKeys = _bisec_resp_allKeys.concat(theseKeys);
      if (_bisec_resp_allKeys.length > 0) {
        bisec_resp.keys = _bisec_resp_allKeys[_bisec_resp_allKeys.length - 1].name;  // just the last key pressed
        bisec_resp.rt = _bisec_resp_allKeys[_bisec_resp_allKeys.length - 1].rt;
        // was this correct?
        if (bisec_resp.keys == corrAns) {
            bisec_resp.corr = 1;
        } else {
            bisec_resp.corr = 0;
        }
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
    for (const thisComponent of bisec_testComponents)
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

function bisec_testRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'bisec_test'-------
    for (const thisComponent of bisec_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (bisec_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         bisec_resp.corr = 1;  // correct non-response
      } else {
         bisec_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('bisec_resp.keys', bisec_resp.keys);
    psychoJS.experiment.addData('bisec_resp.corr', bisec_resp.corr);
    if (typeof bisec_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('bisec_resp.rt', bisec_resp.rt);
        routineTimer.reset();
        }
    
    bisec_resp.stop();
    // the Routine "bisec_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function warningRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'warning'-------
    t = 0;
    warningClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    if ((key_press.keys === "space")) {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    warningComponents = [];
    warningComponents.push(warning_text);
    
    for (const thisComponent of warningComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function warningRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'warning'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = warningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((key_press.keys === "space")) {
        continueRoutine = false;
    }
    
    
    // *warning_text* updates
    if (t >= 0.0 && warning_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warning_text.tStart = t;  // (not accounting for frame time here)
      warning_text.frameNStart = frameN;  // exact frame index
      
      warning_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (warning_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      warning_text.setAutoDraw(false);
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
    for (const thisComponent of warningComponents)
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

function warningRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'warning'-------
    for (const thisComponent of warningComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    

  counteksik = 0;
  compsound = 0;
  sk = 0;
  ok = 0;
  fk = 0;
  sku = 0;
  oku = 0;
  fku = 0;
  so = 0;
  oo = 0;
  fo =0;
  soo = 0;
  ooo = 0;
  foo =0;
  su = 0;
  ou = 0;
  fu = 0;
  sc = 0;
  oc = 0;
  fc = 0;
  sck = 0;
  ock = 0;
  fck = 0;
  scku = 0;
  ocku =0;
  fcku =0;
  sco = 0;
  oco=0;
  fco=0;
  scoo = 0;
  ocoo = 0;
  fcoo = 0;
  scu = 0;
  ocu=0;
  fcu=0;
    
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
