
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

--layer data

insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (3, 'Aonyx cinerea', '1840-05-15', '2020-09-14', 'Oncorhynchus nerka', '#26a38d', 'Odocoileus hemionus', 'Hystrix indica', 'Praesent blandit. Nam nulla.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (10, 'Sus scrofa', '1958-08-14', '2020-09-18', 'Centrocercus urophasianus', '#86c119', 'Eolophus roseicapillus', 'Salvadora hexalepis', 'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (1, 'Pedetes capensis', '1972-03-21', '2020-10-24', 'Ara chloroptera', '#a3fd07', 'Ovis ammon', 'Chionis alba', 'Ut at dolor quis odio consequat varius.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (8, 'Balearica pavonina', '1950-01-22', '2020-09-23', 'Potos flavus', '#30867b', 'Felis concolor', 'Otocyon megalotis', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (5, 'Ovis canadensis', '1886-08-10', '2019-12-01', 'Aegypius occipitalis', '#e4f84a', 'Nasua narica', 'Ara ararauna', 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (4, 'Geospiza sp.', '1847-03-16', '2020-10-21', 'Phascogale tapoatafa', '#b6095c', 'Varanus sp.', 'Connochaetus taurinus', 'Nunc purus.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (2, 'Bassariscus astutus', '1884-11-03', '2020-03-25', 'Ateles paniscus', '#ce9428', 'Antechinus flavipes', 'Cacatua galerita', 'Quisque porta volutpat erat.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (1, 'Hippotragus niger', '1877-11-14', '2019-12-09', 'Eurocephalus anguitimens', '#e1d539', 'Geochelone elegans', 'Meles meles', 'Aenean lectus. Pellentesque eget nunc.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (4, 'Bubulcus ibis', '1817-11-28', '2020-04-05', 'Canis aureus', '#037a08', 'Gyps bengalensis', 'Canis mesomelas', 'Nullam molestie nibh in lectus.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (9, 'Marmota monax', '1883-10-07', '2020-04-10', 'Pituophis melanaleucus', '#6a59d5', 'Ciconia episcopus', 'Paraxerus cepapi', 'Nulla facilisi.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (10, 'Kobus defassa', '1938-09-07', '2020-10-18', 'Eudyptula minor', '#575969', 'Geococcyx californianus', 'Columba livia', 'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (3, 'Tayassu tajacu', '1959-07-18', '2020-08-02', 'Tetracerus quadricornis', '#e0e089', 'Larus dominicanus', 'Petaurus breviceps', 'Cras pellentesque volutpat dui.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (3, 'Casmerodius albus', '1823-10-02', '2019-11-28', 'Corvus albicollis', '#c7d9af', 'Chloephaga melanoptera', 'Uraeginthus bengalus', 'Aenean auctor gravida sem.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (8, 'Laniaurius atrococcineus', '1833-07-06', '2020-06-24', 'Terathopius ecaudatus', '#f39114', 'Lasiorhinus latifrons', 'Herpestes javanicus', 'Duis aliquam convallis nunc.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (10, 'Catharacta skua', '1882-06-10', '2020-07-29', 'Phalacrocorax niger', '#1846ce', 'Panthera pardus', 'Actophilornis africanus', 'Nulla facilisi.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (5, 'Ursus maritimus', '1919-12-15', '2020-09-14', 'Helogale undulata', '#a63c8e', 'Mirounga angustirostris', 'Lama glama', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (2, 'Corvus albus', '1961-01-06', '2020-09-05', 'Genetta genetta', '#cce81c', 'Naja nivea', 'Rhabdomys pumilio', 'Vivamus vestibulum sagittis sapien.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (8, 'Haliaetus leucogaster', '1839-08-01', '2019-11-24', 'Corvus albicollis', '#716bb7', 'Zosterops pallidus', 'unavailable', 'Nullam molestie nibh in lectus. Pellentesque at nulla.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (1, 'Sula dactylatra', '1880-07-31', '2020-06-17', 'Alligator mississippiensis', '#7a6220', 'Phalacrocorax albiventer', 'Manouria emys', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (1, 'Oryx gazella', '1913-09-10', '2019-12-17', 'Chamaelo sp.', '#930cd9', 'Alopochen aegyptiacus', 'Microcavia australis', 'Quisque porta volutpat erat.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (3, 'Anas bahamensis', '1865-05-27', '2020-07-26', 'Mazama gouazoubira', '#bdcb26', 'Cercopithecus aethiops', 'Psittacula krameri', 'Aenean sit amet justo. Morbi ut odio.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (9, 'Dipodomys deserti', '1807-07-30', '2020-02-01', 'Ciconia ciconia', '#b78d2c', 'Equus hemionus', 'Uraeginthus granatina', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (1, 'unavailable', '1816-03-01', '2020-10-05', 'Chlamydosaurus kingii', '#2c2f40', 'Prionace glauca', 'Isoodon obesulus', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (8, 'Tachyglossus aculeatus', '1916-06-05', '2020-05-18', 'Junonia genoveua', '#66ad03', 'Alopex lagopus', 'Physignathus cocincinus', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (10, 'Coracias caudata', '1850-05-09', '2020-03-05', 'Sylvicapra grimma', '#cdcbd8', 'Morelia spilotes variegata', 'Trichoglossus haematodus moluccanus', 'Proin at turpis a pede posuere nonummy. Integer non velit.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (5, 'Conolophus subcristatus', '1975-04-02', '2020-03-02', 'Spermophilus richardsonii', '#cbc973', 'Aegypius occipitalis', 'Bos frontalis', 'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (4, 'Nesomimus trifasciatus', '1934-01-14', '2020-06-26', 'Sylvicapra grimma', '#ba5bac', 'Choloepus hoffmani', 'Rangifer tarandus', 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (1, 'Eurocephalus anguitimens', '1857-05-28', '2019-12-23', 'Lasiorhinus latifrons', '#76b59d', 'Alcelaphus buselaphus cokii', 'Dendrocitta vagabunda', 'Praesent id massa id nisl venenatis lacinia.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (8, 'Ara chloroptera', '1932-12-30', '2020-01-12', 'Uraeginthus granatina', '#3bb3e1', 'Nesomimus trifasciatus', 'Sula dactylatra', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (3, 'Tadorna tadorna', '1809-03-04', '2020-08-18', 'Haliaeetus leucocephalus', '#67d0a9', 'Ninox superciliaris', 'Chlamydosaurus kingii', 'Pellentesque ultrices mattis odio.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (3, 'Paraxerus cepapi', '1834-10-08', '2020-09-04', 'Caiman crocodilus', '#673399', 'Felis concolor', 'Aegypius occipitalis', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (1, 'Macropus rufus', '1974-06-03', '2020-08-19', 'Chlidonias leucopterus', '#584805', 'Colobus guerza', 'Corvus albicollis', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (10, 'Vombatus ursinus', '1898-12-04', '2020-10-25', 'Odocoileus hemionus', '#b14bc4', 'Marmota caligata', 'Hystrix indica', 'Nam nulla.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (9, 'Cracticus nigroagularis', '1954-11-12', '2020-06-16', 'Anathana ellioti', '#de26e2', 'Passer domesticus', 'Ardea golieth', 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (9, 'Nycticorax nycticorax', '1946-03-18', '2020-08-01', 'Phalacrocorax carbo', '#8147cb', 'Larus fuliginosus', 'Bucephala clangula', 'Duis mattis egestas metus.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (5, 'Thylogale stigmatica', '1837-07-11', '2020-03-17', 'Ramphastos tucanus', '#c682dc', 'Tauraco porphyrelophus', 'unavailable', 'Nunc rhoncus dui vel sem.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (10, 'Axis axis', '1861-11-05', '2020-03-27', 'Chlamydosaurus kingii', '#c2773c', 'Mazama gouazoubira', 'Fratercula corniculata', 'Aliquam erat volutpat.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (10, 'Speotyte cuniculata', '1886-08-17', '2020-02-27', 'Charadrius tricollaris', '#73188a', 'Lorythaixoides concolor', 'Phoenicopterus chilensis', 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (7, 'Lepilemur rufescens', '1939-03-12', '2020-08-06', 'Ratufa indica', '#5aa404', 'unavailable', 'Propithecus verreauxi', 'Etiam pretium iaculis justo. In hac habitasse platea dictumst.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (8, 'Plegadis ridgwayi', '1805-12-31', '2019-11-21', 'Uraeginthus angolensis', '#6bf7d4', 'Sylvicapra grimma', 'Cervus duvauceli', 'Ut tellus. Nulla ut erat id mauris vulputate elementum.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (1, 'Bubalus arnee', '1879-04-28', '2020-03-26', 'Centrocercus urophasianus', '#1d297d', 'Acrobates pygmaeus', 'Phasianus colchicus', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (5, 'Macropus fuliginosus', '1875-09-10', '2020-08-13', 'Tayassu tajacu', '#e845b3', 'Cebus nigrivittatus', 'Sarcophilus harrisii', 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (7, 'Toxostoma curvirostre', '1840-03-27', '2019-12-17', 'Bettongia penicillata', '#ed7eeb', 'Grus canadensis', 'unavailable', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (3, 'Trichechus inunguis', '1979-04-01', '2020-07-18', 'Vanellus armatus', '#b680b6', 'Phoca vitulina', 'Lepus arcticus', 'Sed ante.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (10, 'Sarkidornis melanotos', '1882-04-21', '2020-03-12', 'Canis lupus baileyi', '#bab7b2', 'Canis aureus', 'Pavo cristatus', 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (4, 'Chlidonias leucopterus', '1852-01-17', '2020-02-13', 'Vanessa indica', '#fa8445', 'Gyps bengalensis', 'Martes americana', 'Proin at turpis a pede posuere nonummy.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (9, 'Actophilornis africanus', '1847-04-04', '2019-11-06', 'Eolophus roseicapillus', '#6fdc08', 'Uraeginthus angolensis', 'Phalacrocorax carbo', 'Phasellus in felis. Donec semper sapien a libero.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (9, 'Perameles nasuta', '1915-08-30', '2020-10-02', 'Dendrocitta vagabunda', '#e57010', 'Neotis denhami', 'Vanellus chilensis', 'Curabitur gravida nisi at nibh.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (6, 'Larus dominicanus', '1896-12-06', '2020-10-21', 'Globicephala melas', '#0f0aa4', 'Nesomimus trifasciatus', 'Alcelaphus buselaphus cokii', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.');
insert into Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes) values (3, 'Paroaria gularis', '1819-06-14', '2020-03-14', 'unavailable', '#6298cf', 'Kobus leche robertsi', 'Macropus agilis', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.');






