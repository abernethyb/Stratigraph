USE [master]

IF db_id('StratigraphMVP') IS NULl
  CREATE DATABASE [StratigraphMVP]
GO

USE [StratigraphMVP]
GO

DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Report];
DROP TABLE IF EXISTS [Structure];
DROP TABLE IF EXISTS [Sample];
DROP TABLE IF EXISTS [Stratigraphy];
DROP TABLE IF EXISTS [Layer];
DROP TABLE IF EXISTS [UserProfileReport];
GO


CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY IDENTITY,
  [UserName] nvarchar(50) NOT NULL,
  [FirstName] nvarchar(50) NOT NULL,
  [LastName] nvarchar(50) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [FirebaseId] nvarchar(28) NOT NULL
)
GO

CREATE TABLE [Report] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(255) NOT NULL,
  [CreateDate] datetime NOT NULL,
  [CompleteDate] datetime
)
GO

CREATE TABLE [UserProfileReport] (
  [Id] integer PRIMARY KEY IDENTITY,
  [UserProfileId] integer NOT NULL,
  [ReportId] integer NOT NULL
)
GO

CREATE TABLE [Structure] (
  [Id] integer PRIMARY KEY IDENTITY,
  [ReportId] integer NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [Image] nvarchar(255),
  [Location] nvarchar(255),
  [YearCunstructed] integer
)
GO

CREATE TABLE [Sample] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(255) NOT NULL,
  [UserProfileId] integer NOT NULL,
  [StratigraphyId] integer,
  [StructureId] integer NOT NULL,
  [DateTaken] datetime,
  [Image] nvarchar(255) NOT NULL,
  [LocationDescription] nvarchar(255),
  [RoomNumber] integer NOT NULL
)
GO

CREATE TABLE [Stratigraphy] (
  [Id] integer PRIMARY KEY IDENTITY,
  [UserProfileId] integer NOT NULL,
  [ReportId] integer NOT NULL,
  [CreateDate] datetime NOT NULL,
  [Notes] nvarchar(500)
)
GO

CREATE TABLE [Layer] (
  [Id] integer PRIMARY KEY IDENTITY,
  [StratigraphyId] integer NOT NULL,
  [FinishPeriod] nvarchar(50),
  [BeginDate] datetime,
  [EndDate] datetime,
  [Pigments] nvarchar(255),
  [Colors] nvarchar(255),
  [Medium] nvarchar(50),
  [Gloss] nvarchar(50),
  [Notes] nvarchar(555)
)
GO


ALTER TABLE [Sample] ADD FOREIGN KEY ([StratigraphyId]) REFERENCES [Stratigraphy] ([Id])
GO

ALTER TABLE [Stratigraphy] ADD FOREIGN KEY ([ReportId]) REFERENCES [Report] ([Id])
GO

ALTER TABLE [UserProfileReport] ADD FOREIGN KEY ([ReportId]) REFERENCES [Report] ([Id])
GO

ALTER TABLE [UserProfileReport] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Layer] ADD FOREIGN KEY ([StratigraphyId]) REFERENCES [Stratigraphy] ([Id])
GO

ALTER TABLE [Sample] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Stratigraphy] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Structure] ADD FOREIGN KEY ([ReportId]) REFERENCES [Report] ([Id])
GO

ALTER TABLE [Sample] ADD FOREIGN KEY ([StructureId]) REFERENCES [Structure] ([Id])
GO
