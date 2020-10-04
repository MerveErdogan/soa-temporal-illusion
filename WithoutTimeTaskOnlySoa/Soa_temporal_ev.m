%Merve Erdogan, Sense of Agency, Temporal dilation
%3 different speeds of walking stickman (50,63,100)
%2 different outcome delay (.32, .52)

sca;
close all;
clearvars;
Screen('CloseAll');
Screen('Preference', 'SkipSyncTests', 1);
rng('shuffle');
PsychDefaultSetup(2);

% %% Get participant information
prompt = {'Subject Number', 'Gender',  'Age', 'Right_handed'}; 
defaults = {'99',  'f', '99', 'y'};
answer = inputdlg(prompt, 'Experimental Setup1 Information', 1, defaults);
[subject, gender, age, handedness] = deal(answer{:});

% Get the screen numbers
screens = Screen('Screens');
screenNumber=max(Screen('Screens'));

%variables
speed = [100,63,50,100,63,50];
duration = [0.32, 0.52,0.32, 0.52,0.32, 0.52,]; %randomize edildiginde sirali olmasin diye
each = 30;
totalTrial = length(speed)*each*length(duration); %20 each 3 different speed 2 duration
trainingTrial = 4;
SoaRating = zeros(1,totalTrial);
durationinexp = zeros(1,totalTrial);
speedinexp = zeros(1,totalTrial);
trainingRating = zeros(1,trainingTrial);

% Sound specialities
% Initialize Sounddriver
InitializePsychSound(1);
% Number of channels and Frequency of the sound
nrchannels = 2;
freq = 48000;
% How many times to we wish to play the sound
repetitions = 1;
% Length of the beep
beepLengthSecs = 0.1;
% Start immediately (0 = immediately)
startCue = 0;
% Should we wait for the device to really start (1 = yes)
% INFO: See help PsychPortAudio
waitForDeviceStart = 1;

% Draw to the external screen if avaliable
screenNumber = max(screens);
[resx, resy] = Screen('WindowSize',screenNumber); %screen size in pixels

% Define black and white
white = WhiteIndex(screenNumber);
black = BlackIndex(screenNumber);

% Open an on screen window
[window, windowRect] = PsychImaging('OpenWindow', screenNumber, black);

% Get the size of the on screen window
[screenXpixels, screenYpixels] = Screen('WindowSize', window);
screenX = 30.5;
pixel = screenXpixels/screenX;
width = pixel*3.2;
% Query the frame duration
ifi = Screen('GetFlipInterval', window);

%Reply rectangle variables
ReplyRect = [900 550 1100 600];

% Set up alpha-blending for smooth (anti-aliased) line
Screen('BlendFunction', window, 'GL_SRC_ALPHA', 'GL_ONE_MINUS_SRC_ALPHA');

% Setup the text type for the window
Screen('TextFont', window, 'Ariel');
Screen('TextSize', window, 36);

% Get the centre coordinate of the window
[xCenter, yCenter] = RectCenter(windowRect);

% Sync us and get a time stamp
vbl = Screen('Flip', window);
waitframes = 1;

% Maximum priority level
topPriorityLevel = MaxPriority(window);
Priority(topPriorityLevel);

%Texts
Briefing = ['Merhaba! Bu deneyde sizden her denemede\nistediginiz herhangi bir an "SPACE" tusuna basmaniz\n\nve denemelerde olusan\nbeep sesiyle tusa basmaniz arasindaki nedenselligi degerlendirmeniz istenmektedir.\n\nDevam etmek icin lutfen herhangi bir tusa basiniz.'];
Briefing2 = ['Her denemede ekranda yuruyen bir çöp adam belirecek.\n\nBunun sesin olusmasiyla herhangi bir sebepsel iliskisi yoktur.\n\nDevam etmek icin lutfen herhangi bir tusa basiniz.'];
Briefing3 = ['Çöp adam ekranda oldugu sürece ona bakmaniz gerekmektedir.'];
Test = ['Lutfen 1"den 9"a ne kadar sese sizin tusa basmanizin sebep oldugunu hissettiginizi\nklavyeyi kullanarak giriniz?'];
TrialText = ['Hazir oldugunuzda istediginiz herhangi bir an SPACE tusuna basiniz'];
Likert = [' 1                                            9\n Hic                                         Tamamen'];
instructions={Briefing, Briefing2,Briefing3};
 
%TextVariables
textFont = 'Courier'; %our text font
textSize = 36;
textStyle = 1;
Screen('TextSize', window, textSize);
Screen('TextFont', window, textFont);
Screen('TextStyle', window, textStyle);

%Briefing starts
HideCursor;
for instruction = instructions  
DrawFormattedText(window, instruction{:},...
'center', resy * 0.25, white);
Screen('Flip', window);
WaitSecs(0.5);
KbWait;
end


%Experiment beginning


randomspeed = Shuffle(speed);
randomdur = Shuffle(duration);
element = 0;
for total = 1:2
    
for trial = 1:length(speed) %to test each speed type
element = element+1;
DrawFormattedText(window, TrialText,...
'center', resy * 0.25, white);
Screen('Flip', window);
WaitSecs(1.5); 
videoString=sprintf('C:\\Users\\merve\\OneDrive\\SoA_Temporal_illusion\\%0.0ffps.mp4',randomspeed(trial)); %used to get the correct movie from file
movie = Screen('OpenMovie', window , videoString);


% Start playback engine:
Screen('PlayMovie', movie, 1);
playMovieSwitch=1;

keyPressTime = Inf;
keyIsDown = false;

while playMovieSwitch && (GetSecs - keyPressTime) < randomdur(trial)
tex = Screen('GetMovieImage', window, movie);

% Valid texture returned? A negative value means end of movie reached:
if tex<=0
% We're done, break out of loop:
break;
end
% Draw the new texture immediately to screen:
Screen('DrawTexture', window, tex);

% Update display:
Screen('Flip', window);

% Release texture:
Screen('Close', tex);

if ~keyIsDown
[keyIsDown, keyPressTime, KeyCode] = KbCheck;
tic
end  

end
toc
%outcome comes beep
pahandle = PsychPortAudio('Open', [], 1, 1, freq, nrchannels);
PsychPortAudio('Volume', pahandle, 0.5);
outcome = MakeBeep(500, beepLengthSecs, freq);
PsychPortAudio('FillBuffer', pahandle, [outcome;outcome]);
PsychPortAudio('Start', pahandle, repetitions, startCue, waitForDeviceStart);
[actualStartTime, ~, ~, estStopTime] = PsychPortAudio('Stop', pahandle, 1, 1);
PsychPortAudio('Close', pahandle);

% Close movie:
Screen('CloseMovie', movie);
DrawFormattedText(window, Test,'center', resy * 0.25, white);
Screen('DrawLine',window,white,500, 400, 1500, 400);
DrawFormattedText(window, Likert,resx*0.24, resy*0.4, white);
Screen('FrameRect',window, white, ReplyRect,4);
reply=Ask(window, '     ', white, black,'GetChar',ReplyRect);
replynum = str2double(reply);
SoaRating(trial) = replynum;
Screen('Flip', window);
WaitSecs(0.5);
Screen('Flip',window);   

end
end

workspace = [subject, '.mat'];
save(workspace);
T = table(randomdur, randomspeed,SoaRating);
filename = [subject,'.csv'];
writetable(T, filename);

DrawFormattedText(window, '\n\n\n\nDeney bitti. Katiliminiz icin tesekkurler!','center',resy*.025,white);
Screen('Flip',window);
WaitSecs(1); %otherwise,it flips automatically to the next frame
KbWait;
Screen('CloseAll');
sca;
ShowCursor;

 



