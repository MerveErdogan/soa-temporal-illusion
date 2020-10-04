%SoA, delay, walking stickman
%05.10.2020
%Merve Erdogan


clear;
t = dir('C:\Users\merdogan19\OneDrive\Masaüstü\SoA_Temporal\SoA_repro');

%importing data into tables
for sub = 1:length(t) %not to count matlab file
    Columns.Subject(sub).key_press = []; %columns order change among subjects.
    Columns.Subject(sub).response = [];
    Columns.Subject(sub).speed = [];
    Columns.Subject(sub).delay = [];
    Repro.Subject(sub).Data = [];
    all.Subject(sub).Data =[];
    if t(sub).name(end) ~= '.'
        all.Subject(sub).Data = importdata(t(sub).name);
    end
end
%to get colum number for related data

%reading headers
for subj = 1:length(all.Subject)
    if isempty(all.Subject(subj).Data) == 0
    for tit = 1:length(all.Subject(subj).Data.textdata(1,:))
        if ismember({'key_press.keys'} ,all.Subject(subj).Data.textdata(1,tit))
            Columns.Subject(subj).key_press = tit;
        elseif ismember({'slider.response'} ,all.Subject(subj).Data.textdata(1,tit))
            Columns.Subject(subj).response = tit;
        elseif ismember({'Speed'} ,all.Subject(subj).Data.textdata(1,tit))
            Columns.Subject(subj).speed = tit;
        elseif ismember({'key_press.rt'} ,all.Subject(subj).Data.textdata(1,tit))
            Columns.Subject(subj).key_pressRt = tit;
        elseif ismember({'repro_reelEnd.rt'} ,all.Subject(subj).Data.textdata(1,tit))
                Columns.Subject(subj).repro = tit;
        end
    end
    end
end


%create matrixes
for s = 1:3
    for d = 1:3
        for sub = 1:length(t)
            Speed(s).Delay(d).Subject(sub).Data = []; %3 speed type
            Speed(s).Delay(d).Subject(sub).Data = []; %1,2,3 refers dif. delays
            Speed(s).Delay(d).Subject(sub).Data = [];
            Delay(d).Speed(s).Subject(sub).Data=[]; %short,medium,long delays
            Delay(d).Speed(s).Subject(sub).Data=[];%1,2,3 refers dif. speed
            Delay(d).Speed(s).Subject(sub).Data=[];
        end
    end
end



%for all data to use in SPSS
Data=[];
ii = 1;
for i = 1:length(all.Subject)
    if isempty(all.Subject(i).Data) == 0
    for cc = 1:length(all.Subject(i).Data.textdata)
        if ismember('space',all.Subject(i).Data.textdata(cc,Columns.Subject(i).key_press)) %meaning that key is pressed
            if ismember({'repro_reelEnd.rt'} ,all.Subject(i).Data.textdata)
            if ~isnan(str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response))) && isempty(all.Subject(i).Data.textdata(cc,Columns.Subject(i).repro)) == 0
                y =all.Subject(i).Data.textdata(cc,Columns.Subject(i).speed);
                if ismember('100fps.mp4',y)
                    Data(end+1, 1) = str2double(y{1}(1:3));
                elseif ~ismember('100fps.mp4',y)
                    Data(end+1, 1) = str2double(y{1}(1:2));
                end
                Data(end, 2) = all.Subject(i).Data.data(cc-1,1);
                Data(end, 3) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response));
                [m,n] = size(all.Subject(i).Data.data);
                if n == 3
                Data(end,4) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).key_pressRt));
                elseif n~= 3
                Data(end,4) = all.Subject(i).Data.data(cc-1,4); %keypress is saved in Data in some participants
                end
                Data(end, 5) = (Data(end,2) + Data(end,4) +3); %video duration (keyPressRt + Delay)
                Data(end, 6) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).repro));
                Data(end,7) = Data(end,6)/Data(end,5);
                Data(end,8) = ii;
            end
            end
        end
    end
    ii = ii +1;
    end
end

s = [50 63 100];
d = [.32 .52 .72];
R = [];
for i = 1:3
    R(i) = median(Data(find(Data(:,1) == s(i)),7));
end

%putting reproduction data for individual based repro comparison
for i =1:length(t)
    if isempty(all.Subject(i).Data) == 0
        for c = 2:length(all.Subject(i).Data.textdata)
            if ismember({'repro_reelEnd.rt'} ,all.Subject(i).Data.textdata(1,:))
                if ismember('space',all.Subject(i).Data.textdata(c,Columns.Subject(i).key_press)) %meaning that key is pressed
                    if ~isnan(str2double(all.Subject(i).Data.textdata(c,Columns.Subject(i).response)))
                        y =all.Subject(i).Data.textdata(c,Columns.Subject(i).speed);
                        if ismember('100fps.mp4',y)
                            Repro.Subject(i).Data(end+1, 1) = str2double(y{1}(1:3));
                        elseif ~ismember('100fps.mp4',y)
                            Repro.Subject(i).Data(end+1, 1) = str2double(y{1}(1:2));
                        end
                        Repro.Subject(i).Data(end,2) = all.Subject(i).Data.data(c-1,1); %delay
                        Repro.Subject(i).Data(end,3)= str2double(all.Subject(i).Data.textdata(c,Columns.Subject(i).response));
                        [m,n] = size(all.Subject(i).Data.data);
                        if n == 3
                            Repro.Subject(i).Data(end,4) = str2double(all.Subject(i).Data.textdata(c,Columns.Subject(i).key_pressRt)) + all.Subject(i).Data.data(c-1,1) +3;
                        elseif n~= 3
                            Repro.Subject(i).Data(end,4) = all.Subject(i).Data.data(c-1,4) + all.Subject(i).Data.data(c-1,1) + 3; %keypress is saved in Data in some participants
                        end
                        
                        Repro.Subject(i).Data(end,5) = str2double(all.Subject(i).Data.textdata(c,Columns.Subject(i).repro));
                        Repro.Subject(i).Data(end,6) =  Repro.Subject(i).Data(end,5)/ Repro.Subject(i).Data(end,4);
                    end
                end
            end
        end
    end
end


ReproInd =[];
SoAIndSp =[];
SoAIndDp= [];
for i = 1:length(Repro.Subject)
    if isempty(Repro.Subject(i).Data) == 0
        if ismember({'repro_reelEnd.rt'} ,all.Subject(i).Data.textdata(1,:))
            for m = 1:3
                if m == 1
                ReproInd(end+1,1) = i;
                SoAIndSp(end+1,1) = i;
                ReproInd(end,2) = median(Repro.Subject(i).Data(find(Repro.Subject(i).Data(:,1) == s(m)),6)); %i starts from 3
                SoAIndSp(end,2) = median(Repro.Subject(i).Data(find(Repro.Subject(i).Data(:,1) == s(m)),3));
                elseif m == 2
                 ReproInd(end,3) = median(Repro.Subject(i).Data(find(Repro.Subject(i).Data(:,1) == s(m)),6));
                 SoAIndSp(end,3) = median(Repro.Subject(i).Data(find(Repro.Subject(i).Data(:,1) == s(m)),3));
                elseif m == 3
                 ReproInd(end,4) = median(Repro.Subject(i).Data(find(Repro.Subject(i).Data(:,1) == s(m)),6));
                 SoAIndSp(end,4) = median(Repro.Subject(i).Data(find(Repro.Subject(i).Data(:,1) == s(m)),3));
            end
        end
    end
end
end


for subjec = 1:length(t)
    if isempty(all.Subject(subjec).Data) == 0
    for c = 1:length(all.Subject(subjec).Data.data)
        if ismember('space',all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).key_press)) %meaning that key is pressed
            if ~isnan(str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response)))
                if ismember('50fps.mp4',all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).speed)) %slow speed
                    
                    if all.Subject(subjec).Data.data(c-1,1) == 0.3200 %short delay
                        Speed(1).Delay(1).Subject(subjec).Data(end+1,1)= str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        Delay(1).Speed(1).Subject(subjec).Data(end+1,1)= str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        
                    elseif all.Subject(subjec).Data.data(c-1,1) == 0.5200%medium delay
                        Speed(1).Delay(2).Subject(subjec).Data(end+1,1) = str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        Delay(2).Speed(1).Subject(subjec).Data(end+1,1) = str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        
                    elseif all.Subject(subjec).Data.data(c-1,1) == 0.7200 %long delay
                        Speed(1).Delay(3).Subject(subjec).Data (end+1,1) = str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        Delay(3).Speed(1).Subject(subjec).Data(end+1,1) =  str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                    end
                elseif ismember('63fps.mp4',all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).speed)) %medium speed
                    
                    if all.Subject(subjec).Data.data(c-1,1) == 0.3200 %short delay
                        Speed(2).Delay(1).Subject(subjec).Data(end+1,1)=str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        Delay(1).Speed(2).Subject(subjec).Data(end+1,1)=str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        
                    elseif all.Subject(subjec).Data.data(c-1,1) == 0.5200 %medium delay
                        Speed(2).Delay(2).Subject(subjec).Data(end+1,1)= str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        Delay(2).Speed(2).Subject(subjec).Data(end+1,1)= str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        
                    elseif all.Subject(subjec).Data.data(c-1,1) == 0.7200 %long delay
                        Speed(2).Delay(3).Subject(subjec).Data(end+1,1)= str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        Delay(3).Speed(2).Subject(subjec).Data(end+1,1)= str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                    end
                elseif ismember('100fps.mp4',all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).speed)) %fast speed
                    
                    if all.Subject(subjec).Data.data(c-1,1) == 0.3200%short delay
                        Speed(3).Delay(1).Subject(subjec).Data(end+1,1)=str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        Delay(1).Speed(3).Subject(subjec).Data(end+1,1)=str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        
                    elseif all.Subject(subjec).Data.data(c-1,1) == 0.5200 %medium delay
                        Speed(3).Delay(2).Subject(subjec).Data(end+1,1)=str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        Delay(2).Speed(3).Subject(subjec).Data(end+1,1)=str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        
                    elseif all.Subject(subjec).Data.data(c-1,1) == 0.7200 %long delay
                        Speed(3).Delay(3).Subject(subjec).Data(end+1,1)= str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                        Delay(3).Speed(3).Subject(subjec).Data(end+1,1) = str2double(all.Subject(subjec).Data.textdata(c,Columns.Subject(subjec).response));
                    end
                end
            end
        end
        
    end
    end
end

slow = []; %to put each delay and speed level seperatly
medium=[];
fast=[];
short=[];
Medium=[];
long=[];

for sp = 1:3
    for dl = 1:3
        for subs = 3:length(t)
            if sp == 1
                slow = [slow; Speed(sp).Delay(dl).Subject(subs).Data];
            elseif sp == 2
                medium = [medium; Speed(sp).Delay(dl).Subject(subs).Data];
            elseif sp == 3
                fast = [fast; Speed(sp).Delay(dl).Subject(subs).Data];
            end
            if dl == 1
                short = [short; Speed(sp).Delay(dl).Subject(subs).Data];
            elseif dl == 2
                Medium = [Medium; Speed(sp).Delay(dl).Subject(subs).Data];
            elseif dl == 3
                long = [long; Speed(sp).Delay(dl).Subject(subs).Data];
            end
        end
    end
end

shortslow =[]; %fix delay with dif. speed
shortmedium = [];
shortfast =[];
mediumslow =[];
mediummedium=[];
mediumfast=[];
longslow=[];
longmedium=[];
longfast=[];
for sub = 3:length(t)
    shortslow = [shortslow; Delay(1).Speed(1).Subject(sub).Data];
    shortmedium =[shortmedium; Delay(1).Speed(2).Subject(sub).Data];
    shortfast = [shortfast; Delay(1).Speed(3).Subject(sub).Data];
    mediumslow = [mediumslow; Delay(2).Speed(1).Subject(sub).Data];
    mediummedium= [mediummedium; Delay(2).Speed(2).Subject(sub).Data];
    mediumfast =[mediumfast; Delay(2).Speed(3).Subject(sub).Data];
    longslow = [longslow; Delay(3).Speed(1).Subject(sub).Data];
    longmedium = [longmedium; Delay(3).Speed(2).Subject(sub).Data];
    longfast = [longfast; Delay(3).Speed(3).Subject(sub).Data];
end

short = [shortslow; shortmedium; shortfast];
medium = [mediumslow; mediummedium; mediumfast];
long = [longslow; longmedium; longfast];
delTotal =[mean(short) mean(medium) mean(long)];

save soa_repro all Data shortslow shortmedium shortfast mediumslow mediummedium mediumfast longslow longmedium longfast Delay Speed delTotal
clear;
load soa_repro


ss = mean(shortslow);
sm = mean(shortmedium);
sf = mean(shortfast);
ms = mean(mediumslow);
mm = mean(mediummedium);
mf = mean(mediumfast);
ls = mean(longslow);
lm = mean(longmedium);
lf = mean(longfast);


%fix delay with the mean of dif. speed level
shortDifSpeed= [ss sm sf];
mediumDifSpeed = [ms mm mf];
longDifSpeed = [ls lm lf];
DelayGenel = [mean(shortDifSpeed) mean(mediumDifSpeed) mean(longDifSpeed)];

%fix speed with the mean of dif. delay level
slowDifDelay = [ss ms ls];
mediumDifDelay = [sm mm lm];
fastDifDelay = [sf mf lf];
SpeedGenel = [mean(slowDifDelay) mean(mediumDifDelay) mean(fastDifDelay)];


x =[1:3];
X = repmat(x,1,3);
figure(1)
scatter(x,SpeedGenel);
title('Speed');
xticks([1 2 3]);
xticklabels({'50fps','63fps','100fps'});
ylabel('agency rating');
figure(2)
scatter(x,DelayGenel);
title('Delay');
xticks([1 2 3]);
xticklabels({'0.3200','0.5200','0.7200'})
ylabel('agency rating');

figure(3)
scatter(x,shortDifSpeed);
title('Short delay with Different Speed');
xticks([1 2 3]);
xticklabels({'50fps','63fps','100fps'});
ylabel('agency rating');

figure(4)
scatter(x,mediumDifSpeed);
title('Medium delay with Different Speed');
xticks([1 2 3]);
xticklabels({'50fps','63fps','100fps'});
ylabel('agency rating');

figure(5)
scatter(x,longDifSpeed);
title('Long delay with Different Speed');
xticks([1 2 3]);
xticklabels({'50fps','63fps','100fps'});
ylabel('agency rating');

figure(6)
scatter(x,slowDifDelay);
title('Slow speed with Different delay');
xticks([1 2 3]);
xticklabels({'0.32','0.52','0.72'});
ylabel('agency rating');

figure(7)
scatter(x,mediumDifDelay);
title('Medium speed with Different delay');
xticks([1 2 3]);
xticklabels({'0.32','0.52','0.72'});
ylabel('agency rating');

figure(8)
scatter(x,fastDifDelay);
title('Fast speed with Different delay');
xticks([1 2 3]);
xticklabels({'0.32','0.52','0.72'});
ylabel('agency rating');
