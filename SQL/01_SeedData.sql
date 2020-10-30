
--User Profile Data

insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('zarundell0', 'Zilvia', 'Arundell', 'zarundell0@yelp.com', '3eaJ9ig');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('gnisen1', 'Gloriane', 'Nisen', 'gnisen1@soundcloud.com', 'Ills4jCK8SPd');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('sianittello2', 'Sergent', 'Ianittello', 'sianittello2@weibo.com', 'sCLsOKD');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('elaban3', 'Engracia', 'Laban', 'elaban3@nps.gov', 'fOTfJ1rjnc');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('lisoldi4', 'Lacy', 'Isoldi', 'lisoldi4@gov.uk', 'gkDLJtErY');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('zarull0', 'Fiona', 'Arundell', 'Arnll0@yelp.com', 'vewGEFEfw4wf');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('gnisrefeden1', 'steve', 'Nisen', 'gn1@cloud.com', 'feerfsdsrf');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('wefrettello2', 'Elenore', 'Ianittello', 'stan2@web.com', 'sCL4w4frfsrfD');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('elafrffrrtran3', 'Stan', 'Laban', 'el3@npst.govx', '3r3f4rfgrfeFED');
insert into [UserProfile] (UserName, FirstName, LastName, Email, FirebaseId) values ('lisolgfrte4rfdi4', 'Bob', 'Isoldi', 'bob@govx.ukx', 'gkDLJt3efw3wErY');

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
insert into UserProfileReport (UserProfileId, ReportId) values (3, 3);
insert into UserProfileReport (UserProfileId, ReportId) values (4, 4);
insert into UserProfileReport (UserProfileId, ReportId) values (5, 5);
insert into UserProfileReport (UserProfileId, ReportId) values (6, 6);
insert into UserProfileReport (UserProfileId, ReportId) values (7, 7);
insert into UserProfileReport (UserProfileId, ReportId) values (8, 8);
insert into UserProfileReport (UserProfileId, ReportId) values (9, 9);
insert into UserProfileReport (UserProfileId, ReportId) values (10, 10);

--structure data

insert into Structure (ReportId, Name, Image, Location, YearCunstructed) values (1, 'Rattlesnake, horned', 'http://dummyimage.com/211x222.jpg/ff4444/ffffff', '674 Shopko Street', 1906);
insert into Structure (ReportId, Name, Image, Location, YearCunstructed) values (2, 'American beaver', 'http://dummyimage.com/151x130.bmp/5fa2dd/ffffff', '6188 Hazelcrest Center', 1804);
insert into Structure (ReportId, Name, Image, Location, YearCunstructed) values (3, 'Cougar', 'http://dummyimage.com/121x232.bmp/dddddd/000000', '62 Westridge Alley', 1794);
insert into Structure (ReportId, Name, Image, Location, YearCunstructed) values (4, 'European shelduck', 'http://dummyimage.com/110x164.bmp/cc0000/ffffff', '50 Monica Alley', 1907);
insert into Structure (ReportId, Name, Image, Location, YearCunstructed) values (5, 'Beisa oryx', 'http://dummyimage.com/145x153.bmp/ff4444/ffffff', '22 Lotheville Crossing', 1904);
insert into Structure (ReportId, Name, Image, Location, YearCunstructed) values (6, 'Common genet', 'http://dummyimage.com/117x198.bmp/dddddd/000000', '48 Rigney Plaza', 1900);
insert into Structure (ReportId, Name, Image, Location, YearCunstructed) values (7, 'Sunbird, lesser double-collared', 'http://dummyimage.com/204x122.bmp/cc0000/ffffff', '54 Tennessee Avenue', 1804);
insert into Structure (ReportId, Name, Image, Location, YearCunstructed) values (8, 'Laughing dove', 'http://dummyimage.com/176x154.bmp/5fa2dd/ffffff', '36356 Sherman Circle', 1891);
insert into Structure (ReportId, Name, Image, Location, YearCunstructed) values (9, 'Goose, knob-nosed', 'http://dummyimage.com/101x213.png/5fa2dd/ffffff', '898 Cody Court', 1913);
insert into Structure (ReportId, Name, Image, Location, YearCunstructed) values (10, 'Coot, red-knobbed', 'http://dummyimage.com/216x206.bmp/dddddd/000000', '6598 Novick Plaza', 1889);

--data for samples


insert into Sample (Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber) values ('717505184-0', 1, null, 1, '2020-02-01', 'http://dummyimage.com/137x158.png/cc0000/ffffff', 'Ut tellus.', 890);
insert into Sample (Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber) values ('377537871-5', 2, null, 2, '2020-03-13', 'http://dummyimage.com/213x109.jpg/ff4444/ffffff', 'Nulla mollis molestie lorem.', 759);
insert into Sample (Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber) values ('717660774-5', 3, null, 3, '2020-06-26', 'http://dummyimage.com/105x210.bmp/ff4444/ffffff', 'Curabitur in libero ut massa volutpat convallis.', 268);
insert into Sample (Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber) values ('682321189-X', 4, null, 4, '2019-12-07', 'http://dummyimage.com/246x232.png/cc0000/ffffff', 'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.', 964);
insert into Sample (Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber) values ('219533483-5', 5, null, 5, '2020-10-23', 'http://dummyimage.com/125x148.png/dddddd/000000', 'Aenean lectus. Pellentesque eget nunc.', 554);
insert into Sample (Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber) values ('681113732-0', 6, null, 6, '2020-10-22', 'http://dummyimage.com/170x205.png/5fa2dd/ffffff', 'Morbi vel lectus in quam fringilla rhoncus.', 467);
insert into Sample (Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber) values ('586291055-7', 7, null, 7, '2020-10-01', 'http://dummyimage.com/188x163.bmp/cc0000/ffffff', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.', 696);
insert into Sample (Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber) values ('753421688-5', 8, null, 8, '2020-07-17', 'http://dummyimage.com/158x175.bmp/ff4444/ffffff', 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 682);
insert into Sample (Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber) values ('762545270-0', 9, null, 9, '2020-08-16', 'http://dummyimage.com/226x232.png/ff4444/ffffff', 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 248);
insert into Sample (Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber) values ('275232837-0', 10, null, 10, '2020-08-18', 'http://dummyimage.com/239x135.png/dddddd/000000', 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', 824);


--stratigraphy data

insert into Stratigraphy (UserProfileId, ReportId, CreateDate, Notes) values (1, 1, '2020-01-14', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.');
insert into Stratigraphy (UserProfileId, ReportId, CreateDate, Notes) values (2, 2, '2020-04-27', 'Praesent id massa id nisl venenatis lacinia.');
insert into Stratigraphy (UserProfileId, ReportId, CreateDate, Notes) values (3, 3, '2020-01-07', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.');
insert into Stratigraphy (UserProfileId, ReportId, CreateDate, Notes) values (4, 4, '2020-09-28', 'Nulla tempus.');
insert into Stratigraphy (UserProfileId, ReportId, CreateDate, Notes) values (5, 5, '2020-10-10', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.');
insert into Stratigraphy (UserProfileId, ReportId, CreateDate, Notes) values (6, 6, '2020-05-19', 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.');
insert into Stratigraphy (UserProfileId, ReportId, CreateDate, Notes) values (7, 7, '2020-01-02', 'Aenean auctor gravida sem.');
insert into Stratigraphy (UserProfileId, ReportId, CreateDate, Notes) values (8, 8, '2020-04-06', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.');
insert into Stratigraphy (UserProfileId, ReportId, CreateDate, Notes) values (9, 9, '2019-11-19', 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.');
insert into Stratigraphy (UserProfileId, ReportId, CreateDate, Notes) values (10, 10, '2020-01-02', 'Mauris lacinia sapien quis libero.');

