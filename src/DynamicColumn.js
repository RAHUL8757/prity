import React from "react";
import Gallery from "react-photo-gallery";
import Measure from "react-measure";
import Lightbox from "react-images";
// import Bigimage from "../images/bigimage.jpg"

const photos = [
  {
    src: require("./selectedPhoto/DSC (1).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (2).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (3).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (4).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (5).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (6).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (7).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (8).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (9).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (10).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (11).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (12).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (13).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (14).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (15).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (16).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (17).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (18).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (19).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (20).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (21).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (22).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (23).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (24).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (25).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (26).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (27).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (28).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (29).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (30).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (31).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (32).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (33).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (34).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (35).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (36).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (37).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (38).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (39).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (40).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (41).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (42).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (43).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (44).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (45).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (46).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (47).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (48).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (49).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (50).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (51).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (52).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (53).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (54).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (55).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (56).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (57).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (58).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (59).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (60).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (61).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (62).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (63).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (64).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (65).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (66).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (67).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (68).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (69).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (70).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (71).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (72).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (73).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (74).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (75).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (76).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (77).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (78).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (79).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (80).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (81).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (82).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (83).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (84).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (85).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (86).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (87).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (88).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (89).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (90).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (91).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (91).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (92).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (93).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (94).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (95).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (96).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (97).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (98).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (99).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (100).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (101).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (102).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (103).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (104).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (105).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (106).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (107).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (108).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (109).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (110).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (111).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (112).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (113).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (114).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (115).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (116).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (117).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (118).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (119).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (120).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (121).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (122).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (123).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (124).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (125).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (126).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (127).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (128).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (129).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (130).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (131).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (132).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (133).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (134).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (135).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (136).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (137).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (138).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (139).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (140).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (141).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (142).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (143).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (144).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (145).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (146).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (147).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (148).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (149).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (150).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (151).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (152).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (153).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (154).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (155).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (156).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (157).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (158).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (159).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (160).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (161).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (162).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (163).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (164).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (165).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (166).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (167).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (168).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (169).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (170).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (171).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (172).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (173).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (174).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (175).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (176).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (177).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (178).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (179).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (180).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (181).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (182).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (183).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (184).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (185).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (186).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (187).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (188).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (189).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (190).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (191).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (191).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (192).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (193).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (194).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (195).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (196).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (197).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (198).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (199).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (200).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (201).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (202).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (203).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (204).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (205).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (206).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (207).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (208).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (209).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (210).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (211).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (212).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (213).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (214).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (215).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (216).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (217).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (218).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (219).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (220).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (221).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (222).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (223).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (224).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (225).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (226).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (227).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (228).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (229).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (230).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (231).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (232).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (233).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (234).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (235).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (236).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (237).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (238).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (239).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (240).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (241).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (242).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (243).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (244).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (245).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (246).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (247).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (248).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (249).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (250).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (251).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (252).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (253).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (254).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (255).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (256).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (257).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (258).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (259).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (260).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (261).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (262).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (263).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (264).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (265).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (266).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (267).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (268).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (269).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (270).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (271).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (272).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (273).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (274).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (275).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (276).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (277).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (278).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (279).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (280).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (281).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (282).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (283).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (284).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (285).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (286).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (287).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (288).JPG"),
    width: 3,
    height: 2
  },
   {
    src: require("./selectedPhoto/DSC (289).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (290).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (291).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (291).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (292).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (293).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (294).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (295).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (296).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (297).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (298).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (300).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (301).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (302).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (303).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (304).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (305).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (306).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (307).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (308).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (309).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (310).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (311).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (312).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (313).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (314).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (315).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (316).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (317).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (318).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (319).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (320).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (321).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (322).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (323).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (324).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (325).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (326).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (327).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (328).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (329).JPG"),
    width: 3,
    height: 2
  },
  {
    src:  require("./selectedPhoto/DSC (330).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (331).JPG"),
    width: 3,
    height: 2
  },
  {
    src: require("./selectedPhoto/DSC (332).JPG"),
    width: 3,
    height: 2
  },
  
];

// to best see the results, click the popout button in the preview browser
// and resize your browser

class DynamicGallery extends React.Component {
  constructor() {
    super();
    this.state = { width: -1 };
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  render() {
    const width = this.state.width;
    return (
      <Measure
        bounds
        onResize={contentRect =>
          this.setState({ width: contentRect.bounds.width })
        }
      >
        {({ measureRef }) => {
          if (width < 1) {
            return <div ref={measureRef} />;
          }
          let columns = 1;
          if (width >= 480) {
            columns = 2;
          }
          if (width >= 1024) {
            columns = 3;
          }
          if (width >= 1824) {
            columns = 4;
          }
          return (
            <div ref={measureRef} style={{ height: 500, overflow: "scroll" }}>
              <Gallery
                photos={photos}
                columns={columns}
                onClick={this.openLightbox}
              />
              <Lightbox
                images={photos}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
              />
            </div>
          );
        }}
      </Measure>
    );
  }
}
export default DynamicGallery;
