%SoA, delay, walking stickman
%05.10.2020
%Merve Erdogan


clear;
t = dir('C:\Users\merdogan19\OneDrive\Masaüstü\SoA_Temporal\soa_temporal1');

%importing data into tables
for sub = 1:length(t) %not to count matlab file
    Columns.Subject(sub).key_press = []; %columns order change among subjects.
    Columns.Subject(sub).response = [];
    Columns.Subject(sub).speed = [];
    Columns.Subject(sub).delay = [];
    SoA.Subject(sub).Data = [];
    all.Subject(sub).Data =[];
    if t(sub).name(end) ~= '.'
        all.Subject(sub).Data = importdata(t(sub).name);
    end
end
%to get colum number for related data

%reading headers
for subj = 1:length(t)
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
            elseif ismember({'delay'} ,all.Subject(subj).Data.textdata(1,tit))
                Columns.Subject(subj).delay = tit;
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



for i = 1:length(t)
    if isempty(all.Subject(i).Data) == 0
        DataIndPressed.sub(i).data=[];
        for cc = 1:length(all.Subject(i).Data.textdata)
            if ismember('space',all.Subject(i).Data.textdata(cc,Columns.Subject(i).key_press)) %meaning that key is pressed
                if ~isnan(str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response)))
                    y =all.Subject(i).Data.textdata(cc,Columns.Subject(i).speed);
                    if ismember('100fps.mp4',y)
                        DataIndPressed.sub(i).data(end+1, 1) = str2double(y{1}(1:3));
                    elseif ~ismember('100fps.mp4',y)
                        DataIndPressed.sub(i).data(end+1, 1) = str2double(y{1}(1:2));
                    end
                    DataIndPressed.sub(i).data(end, 2) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).delay));
                    DataIndPressed.sub(i).data(end, 3) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response));
                end
            end
        end
    end
end

SoaMeans =[];
for i = 1:length(DataIndPressed.sub)
    if isempty(DataIndPressed.sub(i).data) == 0
       SoaMeans(end+1,1) =i;
       SoaMeans(end,2) = mean(DataIndPressed.sub(i).data(DataIndPressed.sub(i).data(:,1) == 50 & DataIndPressed.sub(i).data(:,2) == .32,3));
       SoaMeans(end,3) = mean(DataIndPressed.sub(i).data(DataIndPressed.sub(i).data(:,1) == 63 & DataIndPressed.sub(i).data(:,2) == .32,3));
       SoaMeans(end,4) = mean(DataIndPressed.sub(i).data(DataIndPressed.sub(i).data(:,1) == 100 & DataIndPressed.sub(i).data(:,2) == .32,3));
       SoaMeans(end,5) = mean(DataIndPressed.sub(i).data(DataIndPressed.sub(i).data(:,1) == 50 & DataIndPressed.sub(i).data(:,2) == .52,3));
       SoaMeans(end,6) = mean(DataIndPressed.sub(i).data(DataIndPressed.sub(i).data(:,1) == 63 & DataIndPressed.sub(i).data(:,2) == .52,3));
       SoaMeans(end,7) = mean(DataIndPressed.sub(i).data(DataIndPressed.sub(i).data(:,1) == 100 & DataIndPressed.sub(i).data(:,2) == .52,3));
       SoaMeans(end,8) = mean(DataIndPressed.sub(i).data(DataIndPressed.sub(i).data(:,1) == 50 & DataIndPressed.sub(i).data(:,2) == .72,3));
       SoaMeans(end,9) = mean(DataIndPressed.sub(i).data(DataIndPressed.sub(i).data(:,1) == 63 & DataIndPressed.sub(i).data(:,2) == .72,3));
       SoaMeans(end,10) = mean(DataIndPressed.sub(i).data(DataIndPressed.sub(i).data(:,1) == 100 & DataIndPressed.sub(i).data(:,2) == .72,3));
    end
end

%Soa
ss = mean(SoaMeans(:,2));
sm = mean(SoaMeans(:,3));
sf = mean(SoaMeans(:,4));
ms = mean(SoaMeans(:,5));
mm = mean(SoaMeans(:,6));
mf = mean(SoaMeans(:,7));
ls = mean(SoaMeans(:,8));
lm = mean(SoaMeans(:,9));
lf =mean(SoaMeans(:,10));


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
figure(1)
scatter(x,SpeedGenel);
title('Soa on Speed');
xticks([1 2 3]);
xticklabels({'50fps','63fps','100fps'});
ylabel('agency rating');
hold on;



figure(2)
scatter(x,DelayGenel);
title('Delay');
xticks([1 2 3]);
xticklabels({'0.3200','0.5200','0.7200'})
ylabel('agency rating');

figure(3)
scatter(x,shortDifSpeed);
title('Short delay with Different Speed Soa');
xticks([1 2 3]);
xticklabels({'50fps','63fps','100fps'});
ylabel('agency rating');
hold on;

figure(4)
scatter(x,mediumDifSpeed);
title('Medium delay with Different Speed Soa');
xticks([1 2 3]);
xticklabels({'50fps','63fps','100fps'});
ylabel('agency rating');


figure(5)
scatter(x,longDifSpeed);
title('Long delay with Different Speed Soa');
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

