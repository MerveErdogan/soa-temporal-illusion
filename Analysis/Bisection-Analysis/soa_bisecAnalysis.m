%SoA, delay, walking stickman
%05.10.2020
%Merve Erdogan


clear;
%IMPORTANT: the place of the folder may change
t = dir('C:\Users\merdogan19\Desktop\Bisection Task\Online Data');

%importing data into tables
for sub = 1:length(t)
    Columns.Subject(sub).key_press = []; 
    Columns.Subject(sub).response = [];
    Columns.Subject(sub).speed = [];
    Columns.Subject(sub).delay = [];
    SoA.Subject(sub).Data = [];
    all.Subject(sub).Data =[];
    if t(sub).name(end) ~= '.'
        all.Subject(sub).Data = readtable(t(sub).name);
    end
end

%convert noncells to cells to get a homogenous table
%numeric data are noncells: delay, slider response,
%key_press_rt,videoDuration
for subj = 1:length(all.Subject)
    if isempty(all.Subject(subj).Data) == 0
        all.Subject(subj).Data.delay = num2cell(all.Subject(subj).Data.delay);
        all.Subject(subj).Data.slider_response = num2cell(all.Subject(subj).Data.slider_response);
        all.Subject(subj).Data.key_press_rt = num2cell(all.Subject(subj).Data.key_press_rt);
        all.Subject(subj).Data.VideoDuration = num2cell(all.Subject(subj).Data.VideoDuration);
    end
end


%to get colum number for related data because it changes among participants
%reading headers
for subj = 1:length(all.Subject)
    if isempty(all.Subject(subj).Data) == 0
        for tit = 1:length( all.Subject(subj).Data.Properties.VariableNames)
            if ismember({'key_press_keys'} , all.Subject(subj).Data.Properties.VariableNames(1,tit))
                Columns.Subject(subj).key_press = tit;
            elseif ismember({'slider_response'} , all.Subject(subj).Data.Properties.VariableNames(1,tit))
                Columns.Subject(subj).response = tit;
            elseif ismember({'Speed'} , all.Subject(subj).Data.Properties.VariableNames(1,tit))
                Columns.Subject(subj).speed = tit;
            elseif ismember({'key_press_rt'} , all.Subject(subj).Data.Properties.VariableNames(1,tit))
                Columns.Subject(subj).key_pressRt = tit;
            elseif ismember({'VideoDuration'} , all.Subject(subj).Data.Properties.VariableNames(1,tit))
                Columns.Subject(subj).VideoDur = tit;
            elseif ismember({'bisec_resp_keys'} , all.Subject(subj).Data.Properties.VariableNames(1,tit))
                Columns.Subject(subj).bisec_resp = tit;
            elseif ismember({'OutcomeStart'} , all.Subject(subj).Data.Properties.VariableNames(1,tit))
                Columns.Subject(subj).outcome = tit;
            elseif ismember({'delay'} , all.Subject(subj).Data.Properties.VariableNames(1,tit))
                Columns.Subject(subj).delay = tit;
            end
        end
    end
end

%converting tables into matrixes
for i = 1:length(all.Subject)
    if isempty(all.Subject(i).Data) == 0
        indData.subj(i).Data = [];
        indData.subj(i).Data = table2array(all.Subject(i).Data(:,...
            [Columns.Subject(i).key_press Columns.Subject(i).response...
            Columns.Subject(i).speed Columns.Subject(i).key_pressRt ...
            Columns.Subject(i).VideoDur Columns.Subject(i).bisec_resp ...
            Columns.Subject(i).outcome Columns.Subject(i).delay]));  
    end
end


%only pressed and responded data/pooled/only pressed data analysed
%pooled manner, no need to separate to ind.
%matrix order: 
%key_press response speed key_pressRt videodur bisec outcome delay
DataOnlyPressed=[];
for i = 1:length(indData.subj)
    if isempty(indData.subj(i).Data) == 0
        for cc = 1:length(indData.subj(i).Data)
            %meaning that key is pressed, space is in 1st column
            if ismember('space',indData.subj(i).Data(cc,1)) 
                
                %response is given
                if ~isnan(cell2mat(indData.subj(i).Data(cc,2))) 
                    
                    if ~isnan(cell2mat(indData.subj(i).Data(cc,7)))
                        y =indData.subj(i).Data(cc,3);
                        if ismember('100fps.mp4',y)
                            DataOnlyPressed(end+1, 1) = str2double(y{1}(1:3));
                        elseif ~ismember('100fps.mp4',y)
                            DataOnlyPressed(end+1, 1) = str2double(y{1}(1:2));
                        end
                        
                        %delay
                        DataOnlyPressed(end, 2) = cell2mat(indData.subj(i).Data(cc,8));
                        
                        DataOnlyPressed(end,7) = cell2mat(indData.subj(i).Data(cc,5));
                        
                        %rounding video duration
                        %video durations are different among individuals 
                        %and trials due to refresh rate of the computers
                        if DataOnlyPressed(end,7)> 1.42 && DataOnlyPressed(end,7) < 1.58
                            DataOnlyPressed(end,3) = 1.5;
                        elseif DataOnlyPressed(end,7)> 2.23  && DataOnlyPressed(end,7) < 2.36
                            DataOnlyPressed(end,3) = 2.25;
                        elseif DataOnlyPressed(end,7)> 2.95  && DataOnlyPressed(end,7)< 3.08
                            DataOnlyPressed(end,3) = 3;
                        elseif DataOnlyPressed(end,7)> 3.70  && DataOnlyPressed(end,7) < 3.85
                            DataOnlyPressed(end,3) = 3.75;
                        elseif DataOnlyPressed(end,7)> 4.42  && DataOnlyPressed(end,7) < 4.58
                            DataOnlyPressed(end,3) = 4.5;
                        elseif DataOnlyPressed(end,7)> 5.20  && DataOnlyPressed(end,7) < 5.33
                            DataOnlyPressed(end,3) = 5.25;
                        end
                        
                        %key_press
                        %key press rt starts at 0.5
                        %adding .5 gives key press rt since the beggining
                        %of the experimetn
                        DataOnlyPressed(end,4) = cell2mat(indData.subj(i).Data(cc,4))+0.5; 
                        
                        %slider response
                        DataOnlyPressed(end, 5) = cell2mat(indData.subj(i).Data(cc,2)); 
                        
                        %converting letter bisection response into numeric
                        %values
                        if ismember('l',indData.subj(i).Data(cc,6))
                            DataOnlyPressed(end, 6) = 1;
                        elseif ismember('g',indData.subj(i).Data(cc,6))
                            DataOnlyPressed(end, 6) = 0;
                        end
                        %keypress to end of the video
                        DataOnlyPressed(end,8) = (DataOnlyPressed(end,7) - DataOnlyPressed(end,4));
                        
                        %subject ID
                        DataOnlyPressed(end,9) = i;
                    end
                end
            end
        end
    end
end


%ind. based data only pressed & soa rated
%to use it with time perception
%time perception is analysed ind. based due to ind. variance
for i = 1:length(indData.subj)
    DataPressed.subject(i).Data =[];
    if isempty(indData.subj(i).Data) == 0
        for cc = 2:length(indData.subj(i).Data)
            if ismember('space',indData.subj(i).Data(cc,1)) %meaning that key is pressed
                if ~isnan(cell2mat(indData.subj(i).Data(cc,2))) %meaning that soa is ranked
                    y =indData.subj(i).Data(cc,3);
                    if ismember('100fps.mp4',y)
                        DataPressed.subject(i).Data(end+1, 1) = str2double(y{1}(1:3));
                    elseif ~ismember('100fps.mp4',y)
                        DataPressed.subject(i).Data(end+1, 1) = str2double(y{1}(1:2));
                    end
                    DataPressed.subject(i).Data(end, 2) = cell2mat(indData.subj(i).Data(cc,8)); %delay
                    DataPressed.subject(i).Data(end,3) = cell2mat(indData.subj(i).Data(cc,5)); %video dur
                    
                    DataPressed.subject(i).Data(end,4) = cell2mat(indData.subj(i).Data(cc,4)) + 0.5; %key press rt
                    DataPressed.subject(i).Data(end,5) = DataPressed.subject(i).Data(end,3) - DataPressed.subject(i).Data(end,4); %key_press.rt to end of the video
                        
                    if ismember('l',indData.subj(i).Data(cc,6))
                        DataPressed.subject(i).Data(end,6) = 1;
                    end
                    
                    if ismember('g',indData.subj(i).Data(cc,6))
                        DataPressed.subject(i).Data(end,6) = 0;
                    end
                    
                    if DataPressed.subject(i).Data(end,3)> 1.42 && DataPressed.subject(i).Data(end,3) < 1.58
                        DataPressed.subject(i).Data(end,7) = 1.5;
                    elseif DataPressed.subject(i).Data(end,3)> 2.23  && DataPressed.subject(i).Data(end,3) < 2.36
                        DataPressed.subject(i).Data(end,7) = 2.25;
                    elseif DataPressed.subject(i).Data(end,3)> 2.95  && DataPressed.subject(i).Data(end,3)< 3.08
                        DataPressed.subject(i).Data(end,7) = 3;
                    elseif DataPressed.subject(i).Data(end,3)> 3.70  && DataPressed.subject(i).Data(end,3) < 3.83
                        DataPressed.subject(i).Data(end,7) = 3.75;
                    elseif DataPressed.subject(i).Data(end,3)> 4.42  && DataPressed.subject(i).Data(end,3) < 4.58
                        DataPressed.subject(i).Data(end,7) = 4.5;
                    elseif DataPressed.subject(i).Data(end,3)> 5.20  && DataPressed.subject(i).Data(end,3) < 5.33
                        DataPressed.subject(i).Data(end,7) = 5.25;
                    end
                    DataPressed.subject(i).Data(end, 8) = cell2mat(indData.subj(i).Data(cc,2)); %soa response
                end
            end
        end
    end
end

%all data(not pressed,no soa all included)/individual based/for bisection
%analysis
for i = 1:length(all.Subject)
    DataAll.subject(i).Data =[];
    if isempty(indData.subj(i).Data) == 0
        for cc = 2:length(indData.subj(i).Data)
            %starts from the isnan trials
            if ~isnan(cell2mat(indData.subj(i).Data(cc,8))) 
                
                y =indData.subj(i).Data(cc,3);
                if ismember('100fps.mp4',y)
                    DataAll.subject(i).Data(end+1, 1) = str2double(y{1}(1:3));
                elseif ~ismember('100fps.mp4',y)
                    DataAll.subject(i).Data(end+1, 1) = str2double(y{1}(1:2));
                end
                %delay
                DataAll.subject(i).Data(end, 2) = cell2mat(indData.subj(i).Data(cc,8)); 
                %videodur
                DataAll.subject(i).Data(end,3) = cell2mat(indData.subj(i).Data(cc,5)); 
                
                if ismember('space',indData.subj(i).Data(cc,1))
                    %key_pressRt
                    DataAll.subject(i).Data(end,4) = cell2mat(indData.subj(i).Data(cc,4)) + 0.5; 
                    %key_press.rt to end of the video
                    DataAll.subject(i).Data(end,5) = DataAll.subject(i).Data(end,3) - DataAll.subject(i).Data(end,4); 
                    DataAll.subject(i).Data(end,9) = 1;
                else
                    DataAll.subject(i).Data(end,9) = 2;
                end
                
                if ismember('l',indData.subj(i).Data(cc,6))
                    DataAll.subject(i).Data(end,6) = 1;
                elseif ismember('g',indData.subj(i).Data(cc,6))
                    DataAll.subject(i).Data(end,6) = 0;
                end
                
                %rounding video durations
                DataAll.subject(i).Data(end,7) = cell2mat(indData.subj(i).Data(cc,5));
                if DataAll.subject(i).Data(end,7)> 1.42 && DataAll.subject(i).Data(end,7) < 1.58
                    DataAll.subject(i).Data(end,7) = 1.5;
                elseif DataAll.subject(i).Data(end,7)> 2.23  && DataAll.subject(i).Data(end,7) < 2.36
                    DataAll.subject(i).Data(end,7) = 2.25;
                elseif DataAll.subject(i).Data(end,7)> 2.95  && DataAll.subject(i).Data(end,7)< 3.08
                    DataAll.subject(i).Data(end,7) = 3;
                elseif DataAll.subject(i).Data(end,7)> 3.70  && DataAll.subject(i).Data(end,7) < 3.83
                    DataAll.subject(i).Data(end,7) = 3.75;
                elseif DataAll.subject(i).Data(end,7)> 4.24  && DataAll.subject(i).Data(end,7) < 4.58
                    DataAll.subject(i).Data(end,7) = 4.5;
                elseif DataAll.subject(i).Data(end,7)> 5.20  && DataAll.subject(i).Data(end,7) < 5.33
                    DataAll.subject(i).Data(end,7) = 5.25;
                end
                DataAll.subject(i).Data(end, 8) = cell2mat(indData.subj(i).Data(cc,2));
            end
        end
    end
end

%SD of durations to see if there is high variance due to refresh rates
durationStd = [];
for i =3:length(DataAll.subject)-1
    durationStd(end+1,1) = i;
    durationStd(end,2) = std(DataAll.subject(i).Data(DataAll.subject(i).Data(:,7)==1.5,3));
    durationStd(end,3) = std(DataAll.subject(i).Data(DataAll.subject(i).Data(:,7)==2.25,3));
    durationStd(end,4) = std(DataAll.subject(i).Data(DataAll.subject(i).Data(:,7)==3,3));
    durationStd(end,5) = std(DataAll.subject(i).Data(DataAll.subject(i).Data(:,7)==3.75,3));
    durationStd(end,6) = std(DataAll.subject(i).Data(DataAll.subject(i).Data(:,7)==4.5,3));
    durationStd(end,7) = std(DataAll.subject(i).Data(DataAll.subject(i).Data(:,7)==5.25,3));
end

%in 4.5 duration some participants have 250 ms difference??
for i = 3:length(DataAll.subject)
    if isempty(DataAll.subject(i).Data(DataAll.subject(i).Data(:,3)<4.3 & DataAll.subject(i).Data(:,7)==4.5 ,1))==0
    disp(i)
    end
end


%answer to bisection task (long or short)
for i = 3:length(DataAll.subject)
    bisec.Subject(i).Data.Speed(1).data.duration = [];
    bisec.Subject(i).Data.Speed(2).data.duration = [];
    bisec.Subject(i).Data.Speed(3).data.duration = [];
    for c = 1:length(DataAll.subject(i).Data)
        if DataAll.subject(i).Data(c,1) == 50
            bisec.Subject(i).Data.Speed(1).data.duration(end+1,1) = DataAll.subject(i).Data(c,7); %duration
            bisec.Subject(i).Data.Speed(1).data.duration(end,2) = DataAll.subject(i).Data(c,6); %bisec resp
        elseif DataAll.subject(i).Data(c,1) == 63
            bisec.Subject(i).Data.Speed(2).data.duration(end+1,1) = DataAll.subject(i).Data(c,7);
            bisec.Subject(i).Data.Speed(2).data.duration(end,2) = DataAll.subject(i).Data(c,6);
        elseif DataAll.subject(i).Data(c,1) == 100
            bisec.Subject(i).Data.Speed(3).data.duration(end+1,1) = DataAll.subject(i).Data(c,7);
            bisec.Subject(i).Data.Speed(3).data.duration(end,2) = DataAll.subject(i).Data(c,6);
        end
    end
end

%checking for trial numbers equality
for i =3:length(DataAll.subject)
    trial.subject(i).Data =[];
    for m = 1:3
        trial.subject(i).Data(1,m) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==1.5);
        trial.subject(i).Data(2,m) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==2.25);
        trial.subject(i).Data(3,m) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==3);
        trial.subject(i).Data(4,m) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==3.75);
        trial.subject(i).Data(5,m) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==4.5);
        trial.subject(i).Data(6,m) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==5.25);
    end
end

%to check if all speed cond. is showed an equal time (10 trials)
for i = 3:length(trial.subject)
    for c = 1:6
    if trial.subject(i).Data(c,1) <10 || trial.subject(i).Data(c,2) <10 || trial.subject(i).Data(c,3) <10
        disp(i)
        
    end  
end
end

% to check if trial are spread equally
for i = 3:length(trial.subject)
    for m = 1:3
        for c = 1:length(trial.subject(i).Data)
            if trial.subject(i).Data(c,1) == 11
                disp(i)
                disp(m)
            end
        end
    end
end



%bisection analysis starts
%individual based probability of long answer, seperated by speed
for i =3:length(DataAll.subject)
    prob.subject(i).data.speed(1).Data.leng =[];
    prob.subject(i).data.speed(2).Data.leng =[];
    prob.subject(i).data.speed(3).Data.leng =[];
    for m = 1:3
        prob.subject(i).data.speed(m).Data.leng(end+1,1) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1) == 1.5 & bisec.Subject(i).Data.Speed(m).data.duration(:,2) == 1)/sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==1.5);
        prob.subject(i).data.speed(m).Data.leng(end+1,1) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==2.25 & bisec.Subject(i).Data.Speed(m).data.duration(:,2) == 1)/sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==2.25);
        prob.subject(i).data.speed(m).Data.leng(end+1,1) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==3 & bisec.Subject(i).Data.Speed(m).data.duration(:,2) == 1)/sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==3);
        prob.subject(i).data.speed(m).Data.leng(end+1,1) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==3.75 & bisec.Subject(i).Data.Speed(m).data.duration(:,2) == 1)/sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==3.75);
        prob.subject(i).data.speed(m).Data.leng(end+1,1) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==4.5 & bisec.Subject(i).Data.Speed(m).data.duration(:,2) == 1)/sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==4.5);
        prob.subject(i).data.speed(m).Data.leng(end+1,1) = sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==5.25 & bisec.Subject(i).Data.Speed(m).data.duration(:,2) == 1)/sum(bisec.Subject(i).Data.Speed(m).data.duration(:,1)==5.25);
    end
end

%individual based probability of long answer total, not seperated by speed
for i = 3:length(prob.subject)
    probTotal.subject(i).Data =[];
    for m = 1:3
        probTotal.subject(i).Data = [probTotal.subject(i).Data transpose(prob.subject(i).data.speed(m).Data.leng)];
    end
end



%pooled probability to see the general effect
tot=[];
totalprob=[];
for m = 1:18
for i = 3:length(probTotal.subject)
    tot = [tot probTotal.subject(i).Data(1,m)];
end
totalprob = [totalprob mean(tot)];
tot=[];
end

weibul(duration,totalprob)

rsquares = [];
parameters =[];
notfitted_parameters = [];
%weibull cum. curve fit
longProbTotalData = [];
duration = linspace(1.5, 5.25 ,6);
for i=3:length(probTotal.subject)
    longProbTotalData = probTotal.subject(i).Data;
    [x1,y1] = weibul(duration,longProbTotalData);
    rsquares(end+1,1) = i;
    rsquares(end,2) = [y1.cond1.adjrsquare];
    rsquares(end,3) = [y1.cond2.adjrsquare];
    rsquares(end,4) = [y1.cond3.adjrsquare];
    parameters(end+1,1) = x1.cond1.a;
    parameters(end,2) = x1.cond1.b;
    parameters(end,3) = x1.cond2.a;
    parameters(end,4) = x1.cond2.b;
    parameters(end,5) = x1.cond3.a;
    parameters(end,6) = x1.cond3.b;
    
%     notfitted_parameters(end+1,1) = i;  %parameters of non-fitted in a seperate matrix
%     notfitted_parameters(end,2) = x1.cond1.a;
%     notfitted_parameters(end,3) = x1.cond1.b;
%     notfitted_parameters(end,4) = x1.cond2.a;
%     notfitted_parameters(end,5) = x1.cond2.b;
%     notfitted_parameters(end,6) = x1.cond3.a;
%     notfitted_parameters(end,7) = x1.cond3.b;
end


%create a matrix with shuffled version of parameters to ge t a value from
% shuffled = parameters;

%parameters of fits with adjrsqr < .7 are replaced with random params from
%the same sample distribution of the parameters.
% for m = 2:4
%     for c = 1:length(rsquares(:,m))
%         if rsquares(c,m) < 0.7
%             if m ==2
%                 shuffled(:,1:2) = parameters(randperm(length(parameters)),1:2);
%                 notfitted_parameters(notfitted_parameters(:,1)==c+2,2) = shuffled(1,1);
%                 notfitted_parameters(notfitted_parameters(:,1)==c+2,3) = shuffled(1,2);
%             elseif m ==3
%                 shuffled(:,3:4) = parameters(randperm(length(parameters)),3:4);
%                 notfitted_parameters(notfitted_parameters(:,1)==c+2,4) = shuffled(1,3);
%                 notfitted_parameters(notfitted_parameters(:,1)==c+2,5) = shuffled(1,4);
%             elseif m ==4
%                 shuffled(:,5:6) = parameters(randperm(length(parameters)),5:6);
%                 notfitted_parameters(notfitted_parameters(:,1)==c+2,6)= shuffled(1,5);
%                 notfitted_parameters(notfitted_parameters(:,1)==c+2,7) = shuffled(1,6);
%             end
%         end
%     end
% end

% %adding parameters of not-fitted fits after replacement with random values
% for c = 1:length(notfitted_parameters)
% parameters(end+1,:) = notfitted_parameters(c,2:7);
% end

pse =[];
for i = 1:length(parameters)
    pse(end+1,1) = i;
    pse(end,2) = parameters(i,2)*(log(2))^(1/(parameters(i,1)));
    pse(end,3) = parameters(i,4)*(log(2))^(1/(parameters(i,3)));
    pse(end,4) = parameters(i,6)*(log(2))^(1/(parameters(i,5)));
end

pseDif = [];

pseDif(:,1) = pse(:,2)-pse(:,3);
pseDif(:,2) = pse(:,3)-pse(:,4);
pseDif(:,3) = pse(:,2)-pse(:,4);

soaIndSpeedDelay = [];
%soa ind. base into a matrix
for i=3:length(all.Subject)
    soaIndSpeedDelay(end+1,1) = i;
    soaIndSpeedDelay(end,2) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,1) == 50,8));
    soaIndSpeedDelay(end,3) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,1) == 63,8));
    soaIndSpeedDelay(end,4) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,1) == 100,8));
    soaIndSpeedDelay(end,8) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,2) == .32,8));
    soaIndSpeedDelay(end,9) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,2) == .52,8));
    soaIndSpeedDelay(end,10) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,2) == .72,8));
end

%speed soa mean differences to compare with pse difference correlation
soaIndSpeedDelay(:,5) = soaIndSpeedDelay(:,2)-soaIndSpeedDelay(:,3);
soaIndSpeedDelay(:,6) = soaIndSpeedDelay(:,3)-soaIndSpeedDelay(:,4);
soaIndSpeedDelay(:,7) = soaIndSpeedDelay(:,2)-soaIndSpeedDelay(:,4);

%total mean of soa dep. on Speed
totalSpeed=[];
totalSpeed(end+1,1) = mean(soaIndSpeedDelay(:,2));
totalSpeed(end,2) = mean(soaIndSpeedDelay(:,3));
totalSpeed(end,3) = mean(soaIndSpeedDelay(:,4));

%total mean of soa dep. on Delay
totalDelay=[];
totalDelay(end+1,1) = mean(soaIndSpeedDelay(:,8));
totalDelay(end,2) = mean(soaIndSpeedDelay(:,9));
totalDelay(end,3) = mean(soaIndSpeedDelay(:,10));

%delay & speed soa means of ind.
SoaRanking.Data = [];
for i = 1:length(all.Subject)
    x = 1;
    if isempty(indData.subj(i).Data) == 0
        for del = [.32,.52,.72]
            for speeds = [50 63 100]
                if x == 1
               SoaRanking.Data(end+1,x) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,1)==speeds & DataPressed.subject(i).Data(:,2)==del,8));
                else
                SoaRanking.Data(end,x) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,1)==speeds & DataPressed.subject(i).Data(:,2)==del,8));                
                end
                x = x+1;
            end
        end
    end
end


ss = mean(SoaRanking.Data(:,1));
sm = mean(SoaRanking.Data(:,2));
sf = mean(SoaRanking.Data(:,3));
ms = mean(SoaRanking.Data(:,4));
mm = mean(SoaRanking.Data(:,5));
mf = mean(SoaRanking.Data(:,6));
ls = mean(SoaRanking.Data(:,7));
lm = mean(SoaRanking.Data(:,8));
lf = mean(SoaRanking.Data(:,9));

%ind. based & total long-short means sep by duration 
LongShortTotal=[];
for i = 1:length(indData.subj)
    if isempty(indData.subj(i).Data) == 0
        LongShort.Subj(i).Data = [];
        for dur = [1.5,2.25,3,3.75,4.5,5.25]
            for answ = 0:1
                if isnan(mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,7)==dur & DataPressed.subject(i).Data(:,6)==answ,8)))== 0
                    LongShort.Subj(i).Data(end+1,1) = dur;
                    LongShort.Subj(i).Data(end,3) = answ;
                    LongShort.Subj(i).Data(end,4) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,7)==dur & DataPressed.subject(i).Data(:,6)==answ,8));
                    LongShort.Subj(i).Data(end,5) = sum(DataPressed.subject(i).Data(:,7)==dur & DataPressed.subject(i).Data(:,6)==answ);
                    if answ == 0 && ~isnan(mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,7)==dur & DataPressed.subject(i).Data(:,6)==1,8))) || answ == 1 && ~isnan(mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,7)==dur & DataPressed.subject(i).Data(:,6)==0,8)))
                        LongShortTotal(end+1,1) = i;
                        LongShortTotal(end,2) = dur;
                        LongShortTotal(end,4) = answ;
                        LongShortTotal(end,5) = LongShort.Subj(i).Data(end,4);
                        LongShortTotal(end,6) = LongShort.Subj(i).Data(end,5);
                    end
                end
            end
        end
    end
end

%6 durations are in different matrixes
%in each duration short & long responded trials mean soa + the number of trials
LongShortDurSep.Dur.Data = [];
for dur = [1.5,2.25,3,3.75,4.5,5.25]
        if isempty(LongShortDurSep.Dur(end).Data) == 1
            LongShortDurSep.Dur(end).Data(:,1) = LongShortTotal(LongShortTotal(:,2) == dur & LongShortTotal(:,4) == 0,5);
            LongShortDurSep.Dur(end).Data(:,2) = LongShortTotal(LongShortTotal(:,2) == dur  & LongShortTotal(:,4) == 1,5);
            LongShortDurSep.Dur(end).Data(:,3) = LongShortTotal(LongShortTotal(:,2) == dur & LongShortTotal(:,4) == 0,6);
            LongShortDurSep.Dur(end).Data(:,4) = LongShortTotal(LongShortTotal(:,2) == dur & LongShortTotal(:,4) == 1,6);
        else
            LongShortDurSep.Dur(end+1).Data(:,1) = LongShortTotal(LongShortTotal(:,2) == dur & LongShortTotal(:,4) == 0,5);
            LongShortDurSep.Dur(end).Data(:,2) = LongShortTotal(LongShortTotal(:,2) == dur & LongShortTotal(:,4) == 1,5);
            LongShortDurSep.Dur(end).Data(:,3) = LongShortTotal(LongShortTotal(:,2) == dur & LongShortTotal(:,4) == 0,6);
            LongShortDurSep.Dur(end).Data(:,4) = LongShortTotal(LongShortTotal(:,2) == dur & LongShortTotal(:,4) == 1,6);
        end
end

%at least 10 trials in both long & short responded are included to the
%analysis
LongShortEnoughTrialDurSep.Dur.Data = [];
for a = 1:6
    if isempty(LongShortDurSep.Dur(a).Data) == 1
        LongShortEnoughTrialDurSep.Dur(a).Data(:,1) = LongShortDurSep.Dur(a).Data(LongShortDurSep.Dur(a).Data(:,3) >=5 & LongShortDurSep.Dur(a).Data(:,4) >=10,1);
        LongShortEnoughTrialDurSep.Dur(a).Data(:,2) = LongShortDurSep.Dur(a).Data(LongShortDurSep.Dur(a).Data(:,3) >=5 & LongShortDurSep.Dur(a).Data(:,4) >=10,2);
        LongShortEnoughTrialDurSep.Dur(a).Data(:,3) = LongShortDurSep.Dur(a).Data(LongShortDurSep.Dur(a).Data(:,3) >=5 & LongShortDurSep.Dur(a).Data(:,4) >=10,3);
        LongShortEnoughTrialDurSep.Dur(a).Data(:,4) = LongShortDurSep.Dur(a).Data(LongShortDurSep.Dur(a).Data(:,3) >=5 & LongShortDurSep.Dur(a).Data(:,4) >=10,4);
    else
        LongShortEnoughTrialDurSep.Dur(a).Data(:,1) = LongShortDurSep.Dur(a).Data(LongShortDurSep.Dur(a).Data(:,3) >=5 & LongShortDurSep.Dur(a).Data(:,4) >=10,1);
        LongShortEnoughTrialDurSep.Dur(a).Data(:,2) = LongShortDurSep.Dur(a).Data(LongShortDurSep.Dur(a).Data(:,3) >=5 & LongShortDurSep.Dur(a).Data(:,4) >=10,2);
        LongShortEnoughTrialDurSep.Dur(a).Data(:,3) = LongShortDurSep.Dur(a).Data(LongShortDurSep.Dur(a).Data(:,3) >=5 & LongShortDurSep.Dur(a).Data(:,4) >=10,3);
        LongShortEnoughTrialDurSep.Dur(a).Data(:,4) = LongShortDurSep.Dur(a).Data(LongShortDurSep.Dur(a).Data(:,3) >=5 & LongShortDurSep.Dur(a).Data(:,4) >=10,4);
    end
end

%means of dur. till the end of the video of ind. sep. by long and short to compare if key is
%pressed earlier in long responded trials
%not seperated by speed
keypress.data=[];
for i = 3:length(DataPressed.subject)
    if isempty(all.Subject(i).Data) == 0
        for dur = [1.5,2.25,3,3.75,4.5,5.25]
            if ~isnan(mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,7)==dur &  DataPressed.subject(i).Data(:,6)==0,5))) && ~isnan (mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,7)==dur &  DataPressed.subject(i).Data(:,6)==1,5)))
            keypress.data(end+1,1) = dur;
            keypress.data(end,2)=mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,7)==dur &  DataPressed.subject(i).Data(:,6)==0,5));
            keypress.data(end,3)=mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,7)==dur & DataPressed.subject(i).Data(:,6)==1,5));
            keypress.data(end,4)=sum(DataPressed.subject(i).Data(:,7)==dur & DataPressed.subject(i).Data(:,6)==0);
            keypress.data(end,5)=sum(DataPressed.subject(i).Data(:,7)==dur & DataPressed.subject(i).Data(:,6)==1);
            end
        end
    end
end

%key press means of ind. sep. by duation long and short to compare if key is
%pressed earlier in long responded trials
keyDurSep.dur.data = [];
for dur = [1.5,2.25,3,3.75,4.5,5.25]
    if isempty(keyDurSep)
        keyDurSep.dur(end).data(:,1) = keypress.data(keypress.data(:,1)==dur, 2);
        keyDurSep.dur(end).data(:,2) = keypress.data(keypress.data(:,1)==dur,3);
    else
        keyDurSep.dur(end+1).data(:,1)= keypress.data(keypress.data(:,1)==dur, 2);
        keyDurSep.dur(end).data(:,2)= keypress.data(keypress.data(:,1)==dur, 3);
        keyDurSep.dur(end).data(:,3) = keypress.data(keypress.data(:,1)==dur, 4);
        keyDurSep.dur(end).data(:,4) = keypress.data(keypress.data(:,1)==dur, 5);
    end
end

%not enough trials for long & short in every duration or person
%only the ones who have at least 10 trials in both long & short are
%compared
keyDurEnoughTrials.dur.Data =[];
for a = 2:7
        keyDurEnoughTrials.dur(a).Data(:,1)= keyDurSep.dur(a).data(keyDurSep.dur(a).data(:,3) >= 5 &keyDurSep.dur(a).data(:,4) >=10,1);
        keyDurEnoughTrials.dur(a).Data(:,2)= keyDurSep.dur(a).data(keyDurSep.dur(a).data(:,3) >= 5 &keyDurSep.dur(a).data(:,4) >=10,2);
        keyDurEnoughTrials.dur(a).Data(:,3) = keyDurSep.dur(a).data(keyDurSep.dur(a).data(:,3) >= 5 &keyDurSep.dur(a).data(:,4) >=10,3);
        keyDurEnoughTrials.dur(a).Data(:,4) = keyDurSep.dur(a).data(keyDurSep.dur(a).data(:,3) >= 5 &keyDurSep.dur(a).data(:,4) >=10,4);
end

%mean key press to end of the video, sep. by duration and speed
%to compare if lasted video dur. is longer in slow videos
%colums are speed, rows are duration
x = 1;
for  i = 1:length(DataPressed.subject)
    if isempty(DataPressed.subject(i).Data) == 0
        KeyPressSepSpeedDur.subject(i).Data =[];
        y = 1;
        for dur = [1.5, 2.25,3,3.75,4.5,5.25]
            for sp = [50,63,100]
                KeyPressSepSpeedDur.subject(i).Data(y,x) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,7) == dur & DataPressed.subject(i).Data(:,1) == sp,4));
                x = x+1;
            end
            y = y+1;
            x = 1;
        end
    end
end

%mean key press to end of the video sep. by only speed
%mean of duration is taken
KeyPressSepSpeedMean =[];
x = 1;
y = 1;
for  i = 1:length(DataPressed.subject)
    if isempty(DataPressed.subject(i).Data) == 0
        for sp = [50,63,100]
            KeyPressSepSpeedMean(y,x) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,1) == sp,5));
            x = x+1;
        end
        y = y+1;
        x = 1;
    end
end

%mean key pres to end of the video dur. is grouped depen. on the video
%duration + sep. by the speed
%shortslow shortmedium shortfast etc.
KeyPressSpss = [];
for i = 1:length(KeyPressSepSpeed.subject)
    if isempty(KeyPressSepSpeed.subject(i).Data) ==0
        KeyPressSpss(end+1,1:3) = KeyPressSepSpeedDur.subject(i).Data(1,:);
        KeyPressSpss(end,4:6) = KeyPressSepSpeedDur.subject(i).Data(2,:);
        KeyPressSpss(end,7:9) = KeyPressSepSpeedDur.subject(i).Data(3,:);
        KeyPressSpss(end,10:12) = KeyPressSepSpeedDur.subject(i).Data(4,:);
        KeyPressSpss(end,13:15) = KeyPressSepSpeedDur.subject(i).Data(5,:);
        KeyPressSpss(end,16:18) = KeyPressSepSpeedDur.subject(i).Data(6,:);
    end
end

%to calcu. bisec. resp after the key press
%durations after the key press is grouped with 1 sec. range
for i =1:length(DataPressed.subject)
    bisecafterkey.subj(i).data =[];
    if isempty(DataPressed.subject(i).Data) == 0
        y = 1;
        for sp = [50,63,100]
            for dur = 0:4
                bisecafterkey.subj(i).data(1,end+1) = sum(DataPressed.subject(i).Data(:,1) == sp & DataPressed.subject(i).Data(:,5)>dur & DataPressed.subject(i).Data(:,5)<dur+1 & DataPressed.subject(i).Data(:,6) == 1)/sum(DataPressed.subject(i).Data(:,1) == sp & DataPressed.subject(i).Data(:,5)>dur & DataPressed.subject(i).Data(:,5)<dur+1);
            end
        end
    end
end

%biec. weibull with 5 duration points
durationss = [1,2,3,4,5];
keyrsquares = [];
keyparameters =[];
keynotfitted_parameters = [];
%weibull cum. curve fit
keylongProbTotalData = [];
for i=3:length(probTotal.subject)
    [x1,y1] = weibul(durationss,bisecafterkey.subj(i).data);
    keyrsquares(end+1,1) = i;
    keyrsquares(end,2) = [y1.cond1.adjrsquare];
    keyrsquares(end,3) = [y1.cond2.adjrsquare];
    keyrsquares(end,4) = [y1.cond3.adjrsquare];
    keyparameters(end+1,1) = x1.cond1.a;
    keyparameters(end,2) = x1.cond1.b;
    keyparameters(end,3) = x1.cond2.a;
    keyparameters(end,4) = x1.cond2.b;
    keyparameters(end,5) = x1.cond3.a;
    keyparameters(end,6) = x1.cond3.b;
    
end

keypse =[];
for i = 1:length(keyparameters)
    keypse(end+1,1) = i;
    keypse(end,2) = keyparameters(i,2)*(log(2))^(1/(keyparameters(i,1)));
    keypse(end,3) = keyparameters(i,4)*(log(2))^(1/(keyparameters(i,3)));
    keypse(end,4) = keyparameters(i,6)*(log(2))^(1/(keyparameters(i,5)));
end


y = 1;
keypressspeed =[];
for i = 1:length(DataPressed.subject)
     x = 1;
    if isempty(DataPressed.subject(i).Data) == 0
        for sl = [0,1]
            keypressspeed(y,x) = mean(DataPressed.subject(i).Data(DataPressed.subject(i).Data(:,6) == sl,4));
        x = x+1;
        end
        y = y+1;
    end
end

y = 1;
x = 1;
soartmean = [];
for i = 1:length(DataPressed.subject)
    x = 1;
    if isempty(DataPressed.subject(i).Data) == 0
       soartmean(y,x) = mean(DataPressed.subject(i).Data(:,8));
       soartmean(y,x+1) = mean(DataPressed.subject(i).Data(:,4));
        x = x+2;
        end
        y = y+1;
end


save bisec

%fix delay with the mean of dif. speed level
shortDifSpeed= [ss sm sf];
mediumDifSpeed = [ms mm mf];
longDifSpeed = [ls lm lf];
fixDellDifSpeed = [shortDifSpeed mediumDifSpeed longDifSpeed];

%fix speed with the mean of dif. delay level
slowDifDelay = [ss ms ls];
mediumDifDelay = [sm mm lm];
fastDifDelay = [sf mf lf];
fixSpeedDifDell = [slowDifDelay mediumDifDelay fastDifDelay];


x =[1:3];
X = repmat(x,1,3);
figure(1)
scatter(x,totalSpeed);
title('Speed');
xticks([1 2 3]);
xticklabels({'50fps','63fps','100fps'});
ylabel('agency rating');
figure(2)
scatter(x,totalDelay);
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
hold on;
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


%delay/key press to end of the video proportion is regressed to the soa
%soa is sig. lower in the 1.5 duration
%it may be related to the delay/key press to end of the video proportion
%checking if with the increase in that proportion soa is decreased
x= 1;
y = 1;
count = 1;
coeff = [];
counttt = 1;

for i =1:length(DataPressed.subject)
   a =[];

  
    if isempty(DataPressed.subject(i).Data) == 0
        for c = 1:length(DataPressed.subject(i).Data)
            a(y,x) = DataPressed.subject(i).Data(c,2)/DataPressed.subject(i).Data(c,5);
            a(y,x+1) = DataPressed.subject(i).Data(c,8);
            y = y +1;
        end
        lm = fitlm(a(:,1),a(:,2));
        coeff(end+1,1) = lm.Coefficients.Estimate(2,1);
        coeff(end,2) = lm.Coefficients.pValue(2,1);
        if coeff(end,2) < 0.05
        coeff(end,3) = 1;
        else
        coeff(end,3) = 0;
        end
        if coeff(end,1) <0
            count = count +1;
        end
        if coeff(end,1) <0 && coeff(end,3) <1
            counttt = counttt +1;
        end
        y = 1;
        x = 1;
    end
end


