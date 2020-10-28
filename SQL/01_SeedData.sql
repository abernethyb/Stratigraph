
--User Profile Data

insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('zarundell0', 'Zilvia', 'Arundell', 'zarundell0@yelp.com', '3eaJ9ig');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('gnisen1', 'Gloriane', 'Nisen', 'gnisen1@soundcloud.com', 'Ills4jCK8SPd');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('sianittello2', 'Sergent', 'Ianittello', 'sianittello2@weibo.com', 'sCLsOKD');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('elaban3', 'Engracia', 'Laban', 'elaban3@nps.gov', 'fOTfJ1rjnc');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('lisoldi4', 'Lacy', 'Isoldi', 'lisoldi4@gov.uk', 'gkDLJtErY');

--Report Data

insert into Report (Name, CreateDate, CompleteDate) values ('Myotis lucifugus', '2019-12-16', '2020-06-17');
insert into Report (Name, CreateDate, CompleteDate) values ('Lepus arcticus', '2020-04-29', null);
insert into Report (Name, CreateDate, CompleteDate) values ('Fratercula corniculata', '2020-02-04', null);
insert into Report (Name, CreateDate, CompleteDate) values ('Eurocephalus anguitimens', '2020-05-10', '2019-12-21');
insert into Report (Name, CreateDate, CompleteDate) values ('Corvus brachyrhynchos', '2020-06-09', null);
insert into Report (Name, CreateDate, CompleteDate) values ('Paraxerus cepapi', '2019-11-15', null);
insert into Report (Name, CreateDate, CompleteDate) values ('Eudyptula minor', '2020-05-20', null);
insert into Report (Name, CreateDate, CompleteDate) values ('Anastomus oscitans', '2020-01-10', null);
insert into Report (Name, CreateDate, CompleteDate) values ('Pterocles gutturalis', '2020-03-10', '2020-09-01');
insert into Report (Name, CreateDate, CompleteDate) values ('Amphibolurus barbatus', '2020-07-30', null);

--UserProfileReport date

insert into UserProfileReport (UserProfileId, ReportId) values (1, 1);
insert into UserProfileReport (UserProfileId, ReportId) values (2, 2);
insert into UserProfileReport (UserProfileId, ReportId) values (1, 3);
insert into UserProfileReport (UserProfileId, ReportId) values (1, 4);
insert into UserProfileReport (UserProfileId, ReportId) values (4, 5);
insert into UserProfileReport (UserProfileId, ReportId) values (5, 6);
insert into UserProfileReport (UserProfileId, ReportId) values (3, 7);
insert into UserProfileReport (UserProfileId, ReportId) values (2, 8);
insert into UserProfileReport (UserProfileId, ReportId) values (1, 9);
insert into UserProfileReport (UserProfileId, ReportId) values (4, 10);