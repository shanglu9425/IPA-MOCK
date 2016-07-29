findEntityById = function(arr, sgrId, sgId) {
	for(var el in arr) {
		// hasOwnProperty ensures prototypes aren't considered
		if(arr.hasOwnProperty(el)) {
			if (arr[el].id == sgrId) {
				if (sgId) {
					for (var sgEl in arr[el].sectionGroups) {
						if (arr[el].sectionGroups.hasOwnProperty(sgEl)) {
							if (arr[el].sectionGroups[sgEl].id == sgId) {
								return arr[el].sectionGroups[sgEl];
							}
						}
					}
				} else {
					return arr[el];
				}
			}
		}
	}

	return undefined;
}

getRandomIncreasingArray = function (length) {
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr.push(Math.floor(Math.random() * (4 * i + 1) + 25));
	}
	return arr;
}

angular.module('coursesApp', []);

angular.module('coursesApp').factory("appStateService", function ($rootScope) {
	return {
		setActiveCell: function (cellSgrId, cellSgId) {
			$rootScope.$emit("cellChanged", {
				sgrId: cellSgrId,
				sgId: cellSgId
			});
		},
		resetActiveCell: function () {
			$rootScope.$emit("cellChanged", {});
		}
	}
});

angular.module('coursesApp').factory("courseService", function () {
	return {
		getCourses: function () {
			return [
				// Course 1
				{
					"id": 1,
					"title": "Introduction to Psychology",
					"subjectCode": "PSC",
					"courseNumber": "001",
					"sequenceDescription": "001",
					"tags": [
						{
							"id": 1,
							"name": "Undergraduate",
							"color": "#bada55"
						},
						{
							"id": 3,
							"name": "Core Course",
							"color": "#6943cc"
						}
					],
					sectionGroups: [
						{
							"id": 1,
							"isActive": false,
							"term": "Fall Quarter",
							"subjectCode": "PSC",
							"courseNumber": "001",
							"sequenceDescription": "001",
							"isSeries": false,
							"maxSeats": 200,
							"seats": [33, 44, 23, 35, 52],
							"enrollment": [43, 63, 15, 63, 35],
							"demand": [55, 43, 64, 13, 66],
							"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
							"sections": [
								{
									"id": 1,
									"sequence": "001",
									"seats": 200,
									"enrollment": 198
								}
							]
						},
						{
							"id": 2,
							"isActive": true,
							"term": "Winter Quarter",
							"subjectCode": "PSC",
							"courseNumber": "001",
							"sequenceDescription": "001",
							"isSeries": false,
							"maxSeats": 150,
							"seats": [65, 70, 60, 75, 75],
							"enrollment": [66, 57, 60, 69, 75],
							"demand": [67, 65, 55, 72, 70],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 2,
									"sequence": "001",
									"seats": 130,
									"enrollment": 99
								}
							]
						},
						{
							"id": 3,
							"isActive": true,
							"term": "Spring Quarter",
							"subjectCode": "PSC",
							"courseNumber": "001",
							"sequenceDescription": "001",
							"isSeries": false,
							"maxSeats": 150,
							"seats": [35, 30, 40, 55, 50],
							"enrollment": [40, 43, 37, 47, 45],
							"demand": [32, 43, 40, 50, 50],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 3,
									"sequence": "001",
									"seats": 150,
									"enrollment": 144
								}
							]
						}
					]
				},
				{
					"id": 2,
					"title": "Introduction to Psychology",
					"subjectCode": "PSC",
					"courseNumber": "001",
					"sequenceDescription": "002",
					"tags": [
						{
							"id": 1,
							"name": "Undergraduate",
							"color": "#bada55"
						},
						{
							"id": 3,
							"name": "Core Course",
							"color": "#6943cc"
						}
					],
					sectionGroups: [
						{
							"id": 4,
							"isActive": false,
							"term": "Fall Quarter",
							"subjectCode": "PSC",
							"courseNumber": "001",
							"sequenceDescription": "002",
							"isSeries": false,
							"maxSeats": 130,
							"seats": [33, 44, 23, 35, 52],
							"enrollment": [43, 63, 15, 63, 35],
							"demand": [55, 43, 64, 13, 66],
							"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
							"sections": [
								{
									"id": 1,
									"sequence": "002",
									"seats": 130,
									"enrollment": 198
								}
							]
						},
						{
							"id": 5,
							"isActive": true,
							"term": "Winter Quarter",
							"subjectCode": "PSC",
							"courseNumber": "001",
							"sequenceDescription": "002",
							"isSeries": false,
							"maxSeats": 100,
							"seats": [65, 70, 60, 75, 75],
							"enrollment": [66, 57, 60, 69, 75],
							"demand": [67, 65, 55, 72, 70],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 2,
									"sequence": "002",
									"seats": 100,
									"enrollment": 99
								}
							]
						},
						{
							"id": 6,
							"isActive": true,
							"term": "Spring Quarter",
							"subjectCode": "PSC",
							"courseNumber": "001",
							"sequenceDescription": "002",
							"isSeries": false,
							"maxSeats": 95,
							"seats": [35, 30, 40, 55, 50],
							"enrollment": [40, 43, 37, 47, 45],
							"demand": [32, 43, 40, 50, 50],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 3,
									"sequence": "002",
									"seats": 50,
									"enrollment": 144
								}
							]
						}
					]
				},
				{
					"id": 3,
					"title": "Development Psychobiol",
					"subjectCode": "PSC",
					"courseNumber": "113",
					"sequenceDescription": "A Series",
					"tags": [
						{
							"id": 2,
							"name": "Graduate",
							"color": "#34ba61"
						},
						{
							"id": 3,
							"name": "Core Course",
							"color": "#6943cc"
						}
					],
					sectionGroups: [
						{
							"id": 7,
							"isActive": false,
							"term": "Fall Quarter",
							"subjectCode": "PSC",
							"courseNumber": "113",
							"sequenceDescription": "A Series",
							"isSeries": true,
							"maxSeats": 75,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5), // Different census snapshots, not different years
							"sections": [
								{
									"id": 1,
									"sequence": "A01",
									"seats": 25,
									"enrollment": 198
								},
								{
									"id": 2,
									"sequence": "A02",
									"seats": 25,
									"enrollment": 198
								},
								{
									"id": 3,
									"sequence": "A03",
									"seats": 25,
									"enrollment": 198
								}
							]
						},
						{
							"id": 8,
							"isActive": true,
							"term": "Winter Quarter",
							"subjectCode": "PSC",
							"courseNumber": "113",
							"sequenceDescription": "A Series",
							"isSeries": true,
							"maxSeats": 60,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5),
							"sections": [
								{
									"id": 1,
									"sequence": "A01",
									"seats": 20,
									"enrollment": 99
								},
								{
									"id": 2,
									"sequence": "A02",
									"seats": 20,
									"enrollment": 198
								},
								{
									"id": 3,
									"sequence": "A03",
									"seats": 20,
									"enrollment": 198
								}
							]
						},
						{
							"id": 9,
							"isActive": true,
							"term": "Spring Quarter",
							"subjectCode": "PSC",
							"courseNumber": "113",
							"sequenceDescription": "A Series",
							"isSeries": true,
							"maxSeats": 45,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5),
							"sections": [
								{
									"id": 1,
									"sequence": "A01",
									"seats": 15,
									"enrollment": 144
								},
								{
									"id": 2,
									"sequence": "A02",
									"seats": 15,
									"enrollment": 198
								},
								{
									"id": 3,
									"sequence": "A03",
									"seats": 15,
									"enrollment": 198
								}
							]
						}
					]
				},
				{
					"id": 4,
					"title": "Development Psychobiol",
					"subjectCode": "PSC",
					"courseNumber": "113",
					"sequenceDescription": "B Series",
					"tags": [
						{
							"id": 2,
							"name": "Graduate",
							"color": "#34ba61"
						},
						{
							"id": 3,
							"name": "Core Course",
							"color": "#6943cc"
						}
					],
					sectionGroups: [
						{
							"id": 10,
							"isActive": false,
							"term": "Fall Quarter",
							"subjectCode": "PSC",
							"courseNumber": "113",
							"sequenceDescription": "B Series",
							"isSeries": true,
							"maxSeats": 50,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5), // Different census snapshots, not different years
							"sections": [
								{
									"id": 1,
									"sequence": "B01",
									"seats": 25,
									"enrollment": 198
								},
								{
									"id": 2,
									"sequence": "B02",
									"seats": 25,
									"enrollment": 198
								}
							]
						},
						{
							"id": 11,
							"isActive": true,
							"term": "Winter Quarter",
							"subjectCode": "PSC",
							"courseNumber": "113",
							"sequenceDescription": "B Series",
							"isSeries": true,
							"maxSeats": 40,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5),
							"sections": [
								{
									"id": 1,
									"sequence": "B01",
									"seats": 30,
									"enrollment": 99
								},
								{
									"id": 2,
									"sequence": "B02",
									"seats": 40,
									"enrollment": 198
								}
							]
						},
						{
							"id": 12,
							"isActive": true,
							"term": "Spring Quarter",
							"subjectCode": "PSC",
							"courseNumber": "113",
							"sequenceDescription": "B Series",
							"isSeries": true,
							"maxSeats": 40,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5),
							"sections": [
								{
									"id": 1,
									"sequence": "B01",
									"seats": 20,
									"enrollment": 144
								},
								{
									"id": 2,
									"sequence": "B02",
									"seats": 20,
									"enrollment": 198
								}
							]
						}
					]
				},
				{
					"id": 5,
					"title": "Research Meth in Psych",
					"subjectCode": "PSC",
					"courseNumber": "041",
					"sequenceDescription": "001",
					"tags": [
						{
							"id": 1,
							"name": "Undergraduate",
							"color": "#bada55"
						},
						{
							"id": 3,
							"name": "Core Course",
							"color": "#6943cc"
						}
					],
					sectionGroups: [
						{
							"id": 4,
							"isActive": false,
							"term": "Fall Quarter",
							"subjectCode": "PSC",
							"courseNumber": "041",
							"sequenceDescription": "002",
							"isSeries": false,
							"maxSeats": 130,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5), // Different census snapshots, not different years
							"sections": [
								{
									"id": 1,
									"sequence": "002",
									"seats": 130,
									"enrollment": 198
								}
							]
						},
						{
							"id": 5,
							"isActive": true,
							"term": "Winter Quarter",
							"subjectCode": "PSC",
							"courseNumber": "041",
							"sequenceDescription": "002",
							"isSeries": false,
							"maxSeats": 100,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5),
							"sections": [
								{
									"id": 2,
									"sequence": "002",
									"seats": 100,
									"enrollment": 99
								}
							]
						},
						{
							"id": 6,
							"isActive": true,
							"term": "Spring Quarter",
							"subjectCode": "PSC",
							"courseNumber": "041",
							"sequenceDescription": "002",
							"isSeries": false,
							"maxSeats": 95,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5),
							"sections": [
								{
									"id": 3,
									"sequence": "002",
									"seats": 50,
									"enrollment": 144
								}
							]
						}
					]
				},
				{
					"id": 6,
					"title": "Hormones & Behavior",
					"subjectCode": "PSC",
					"courseNumber": "123",
					"sequenceDescription": "A Series",
					"tags": [
						{
							"id": 2,
							"name": "Graduate",
							"color": "#34ba61"
						},
						{
							"id": 3,
							"name": "Core Course",
							"color": "#6943cc"
						}
					],
					sectionGroups: [
						{
							"id": 7,
							"isActive": false,
							"term": "Fall Quarter",
							"subjectCode": "PSC",
							"courseNumber": "123",
							"sequenceDescription": "A Series",
							"isSeries": true,
							"maxSeats": 75,
							"seats": [33, 44, 23, 35, 52],
							"enrollment": [43, 63, 15, 63, 35],
							"demand": [55, 43, 64, 13, 66],
							"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
							"sections": [
								{
									"id": 1,
									"sequence": "A01",
									"seats": 25,
									"enrollment": 198
								},
								{
									"id": 2,
									"sequence": "A02",
									"seats": 25,
									"enrollment": 198
								},
								{
									"id": 3,
									"sequence": "A03",
									"seats": 25,
									"enrollment": 198
								}
							]
						},
						{
							"id": 8,
							"isActive": true,
							"term": "Winter Quarter",
							"subjectCode": "PSC",
							"courseNumber": "123",
							"sequenceDescription": "A Series",
							"isSeries": true,
							"maxSeats": 60,
							"seats": [65, 70, 60, 75, 75],
							"enrollment": [66, 57, 60, 69, 75],
							"demand": [67, 65, 55, 72, 70],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 1,
									"sequence": "A01",
									"seats": 20,
									"enrollment": 99
								},
								{
									"id": 2,
									"sequence": "A02",
									"seats": 20,
									"enrollment": 198
								},
								{
									"id": 3,
									"sequence": "A03",
									"seats": 20,
									"enrollment": 198
								}
							]
						},
						{
							"id": 9,
							"isActive": true,
							"term": "Spring Quarter",
							"subjectCode": "PSC",
							"courseNumber": "123",
							"sequenceDescription": "A Series",
							"isSeries": true,
							"maxSeats": 45,
							"seats": [35, 30, 40, 55, 50],
							"enrollment": [40, 43, 37, 47, 45],
							"demand": [32, 43, 40, 50, 50],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 1,
									"sequence": "A01",
									"seats": 15,
									"enrollment": 144
								},
								{
									"id": 2,
									"sequence": "A02",
									"seats": 15,
									"enrollment": 198
								},
								{
									"id": 3,
									"sequence": "A03",
									"seats": 15,
									"enrollment": 198
								}
							]
						}
					]
				},
				{
					"id": 7,
					"title": "Agent-Based Modeling",
					"subjectCode": "PSC",
					"courseNumber": "120",
					"sequenceDescription": "B Series",
					"tags": [
						{
							"id": 2,
							"name": "Graduate",
							"color": "#34ba61"
						},
						{
							"id": 3,
							"name": "Core Course",
							"color": "#6943cc"
						}
					],
					sectionGroups: [
						{
							"id": 10,
							"isActive": false,
							"term": "Fall Quarter",
							"subjectCode": "PSC",
							"courseNumber": "120",
							"sequenceDescription": "B Series",
							"isSeries": true,
							"maxSeats": 50,
							"seats": [33, 44, 23, 35, 52],
							"enrollment": [43, 63, 15, 63, 35],
							"demand": [55, 43, 64, 13, 66],
							"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
							"sections": [
								{
									"id": 1,
									"sequence": "B01",
									"seats": 25,
									"enrollment": 198
								},
								{
									"id": 2,
									"sequence": "B02",
									"seats": 25,
									"enrollment": 198
								}
							]
						},
						{
							"id": 11,
							"isActive": true,
							"term": "Winter Quarter",
							"subjectCode": "PSC",
							"courseNumber": "120",
							"sequenceDescription": "B Series",
							"isSeries": true,
							"maxSeats": 40,
							"seats": [65, 70, 60, 75, 75],
							"enrollment": [66, 57, 60, 69, 75],
							"demand": [67, 65, 55, 72, 70],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 1,
									"sequence": "B01",
									"seats": 30,
									"enrollment": 99
								},
								{
									"id": 2,
									"sequence": "B02",
									"seats": 40,
									"enrollment": 198
								}
							]
						},
						{
							"id": 12,
							"isActive": true,
							"term": "Spring Quarter",
							"subjectCode": "PSC",
							"courseNumber": "120",
							"sequenceDescription": "B Series",
							"isSeries": true,
							"maxSeats": 40,
							"seats": [35, 30, 40, 55, 50],
							"enrollment": [40, 43, 37, 47, 45],
							"demand": [32, 43, 40, 50, 50],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 1,
									"sequence": "B01",
									"seats": 20,
									"enrollment": 144
								},
								{
									"id": 2,
									"sequence": "B02",
									"seats": 20,
									"enrollment": 198
								}
							]
						}
					]
				},
				{
					"id": 8,
					"title": "Comparative Neuroanatomy",
					"subjectCode": "PSC",
					"courseNumber": "124",
					"sequenceDescription": "001",
					"tags": [
						{
							"id": 1,
							"name": "Undergraduate",
							"color": "#bada55"
						},
						{
							"id": 3,
							"name": "Core Course",
							"color": "#6943cc"
						}
					],
					sectionGroups: [
						{
							"id": 4,
							"isActive": false,
							"term": "Fall Quarter",
							"subjectCode": "PSC",
							"courseNumber": "124",
							"sequenceDescription": "002",
							"isSeries": false,
							"maxSeats": 130,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5), // Different census snapshots, not different years
							"sections": [
								{
									"id": 1,
									"sequence": "002",
									"seats": 130,
									"enrollment": 198
								}
							]
						},
						{
							"id": 5,
							"isActive": true,
							"term": "Winter Quarter",
							"subjectCode": "PSC",
							"courseNumber": "124",
							"sequenceDescription": "002",
							"isSeries": false,
							"maxSeats": 100,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5),
							"sections": [
								{
									"id": 2,
									"sequence": "002",
									"seats": 100,
									"enrollment": 99
								}
							]
						},
						{
							"id": 6,
							"isActive": true,
							"term": "Spring Quarter",
							"subjectCode": "PSC",
							"courseNumber": "124",
							"sequenceDescription": "002",
							"isSeries": false,
							"maxSeats": 95,
							"seats": getRandomIncreasingArray(5),
							"enrollment": getRandomIncreasingArray(5),
							"demand": getRandomIncreasingArray(5),
							"census": getRandomIncreasingArray(5),
							"sections": [
								{
									"id": 3,
									"sequence": "002",
									"seats": 50,
									"enrollment": 144
								}
							]
						}
					]
				},
				{
					"id": 9,
					"title": "Language and Cognition",
					"subjectCode": "PSC",
					"courseNumber": "132",
					"sequenceDescription": "A Series",
					"tags": [
						{
							"id": 2,
							"name": "Graduate",
							"color": "#34ba61"
						},
						{
							"id": 3,
							"name": "Core Course",
							"color": "#6943cc"
						}
					],
					sectionGroups: [
						{
							"id": 7,
							"isActive": false,
							"term": "Fall Quarter",
							"subjectCode": "PSC",
							"courseNumber": "132",
							"sequenceDescription": "A Series",
							"isSeries": true,
							"maxSeats": 75,
							"seats": [33, 44, 23, 35, 52],
							"enrollment": [43, 63, 15, 63, 35],
							"demand": [55, 43, 64, 13, 66],
							"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
							"sections": [
								{
									"id": 1,
									"sequence": "A01",
									"seats": 25,
									"enrollment": 198
								},
								{
									"id": 2,
									"sequence": "A02",
									"seats": 25,
									"enrollment": 198
								},
								{
									"id": 3,
									"sequence": "A03",
									"seats": 25,
									"enrollment": 198
								}
							]
						},
						{
							"id": 8,
							"isActive": true,
							"term": "Winter Quarter",
							"subjectCode": "PSC",
							"courseNumber": "132",
							"sequenceDescription": "A Series",
							"isSeries": true,
							"maxSeats": 60,
							"seats": [65, 70, 60, 75, 75],
							"enrollment": [66, 57, 60, 69, 75],
							"demand": [67, 65, 55, 72, 70],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 1,
									"sequence": "A01",
									"seats": 20,
									"enrollment": 99
								},
								{
									"id": 2,
									"sequence": "A02",
									"seats": 20,
									"enrollment": 198
								},
								{
									"id": 3,
									"sequence": "A03",
									"seats": 20,
									"enrollment": 198
								}
							]
						},
						{
							"id": 9,
							"isActive": true,
							"term": "Spring Quarter",
							"subjectCode": "PSC",
							"courseNumber": "132",
							"sequenceDescription": "A Series",
							"isSeries": true,
							"maxSeats": 45,
							"seats": [35, 30, 40, 55, 50],
							"enrollment": [40, 43, 37, 47, 45],
							"demand": [32, 43, 40, 50, 50],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 1,
									"sequence": "A01",
									"seats": 15,
									"enrollment": 144
								},
								{
									"id": 2,
									"sequence": "A02",
									"seats": 15,
									"enrollment": 198
								},
								{
									"id": 3,
									"sequence": "A03",
									"seats": 15,
									"enrollment": 198
								}
							]
						}
					]
				},
				{
					"id": 10,
					"title": "Neurobiology of Learning",
					"subjectCode": "PSC",
					"courseNumber": "137",
					"sequenceDescription": "B Series",
					"tags": [
						{
							"id": 2,
							"name": "Graduate",
							"color": "#34ba61"
						},
						{
							"id": 3,
							"name": "Core Course",
							"color": "#6943cc"
						}
					],
					sectionGroups: [
						{
							"id": 10,
							"isActive": false,
							"term": "Fall Quarter",
							"subjectCode": "PSC",
							"courseNumber": "137",
							"sequenceDescription": "B Series",
							"isSeries": true,
							"maxSeats": 50,
							"seats": [33, 44, 23, 35, 52],
							"enrollment": [43, 63, 15, 63, 35],
							"demand": [55, 43, 64, 13, 66],
							"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
							"sections": [
								{
									"id": 1,
									"sequence": "B01",
									"seats": 25,
									"enrollment": 198
								},
								{
									"id": 2,
									"sequence": "B02",
									"seats": 25,
									"enrollment": 198
								}
							]
						},
						{
							"id": 11,
							"isActive": true,
							"term": "Winter Quarter",
							"subjectCode": "PSC",
							"courseNumber": "137",
							"sequenceDescription": "B Series",
							"isSeries": true,
							"maxSeats": 40,
							"seats": [65, 70, 60, 75, 75],
							"enrollment": [66, 57, 60, 69, 75],
							"demand": [67, 65, 55, 72, 70],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 1,
									"sequence": "B01",
									"seats": 30,
									"enrollment": 99
								},
								{
									"id": 2,
									"sequence": "B02",
									"seats": 40,
									"enrollment": 198
								}
							]
						},
						{
							"id": 12,
							"isActive": true,
							"term": "Spring Quarter",
							"subjectCode": "PSC",
							"courseNumber": "137",
							"sequenceDescription": "B Series",
							"isSeries": true,
							"maxSeats": 40,
							"seats": [35, 30, 40, 55, 50],
							"enrollment": [40, 43, 37, 47, 45],
							"demand": [32, 43, 40, 50, 50],
							"census": [70, 55, 57, 60, 61],
							"sections": [
								{
									"id": 1,
									"sequence": "B01",
									"seats": 20,
									"enrollment": 144
								},
								{
									"id": 2,
									"sequence": "B02",
									"seats": 20,
									"enrollment": 198
								}
							]
						}
					]
				}
			];
		}
	}
});

angular.module('coursesApp').controller('CoursesCtrl', ['$rootScope', '$scope', 'courseService', 'appStateService', function ($rootScope, $scope, courseService, appStateService) {
	$scope.workgroup = {
		"tags": [
			{
				"id": 1,
				"name": "Undergraduate",
				"color": "#bada55"
			},
			{
				"id": 2,
				"name": "Graduate",
				"color": "#34ba61"
			},
			{
				"id": 3,
				"name": "Core Course",
				"color": "#6943cc"
			}
		]
	};

	$scope.getSectionSeatsTotal = function(sectionGroup) {
		if ( !sectionGroup.sections ) {
			return "";
		}
		var total = 0;

		sectionGroup.sections.forEach(function(section) {
				total+= section.seats;
		});

		return total;
	};

	// Returns true if the sum of section seats is more than 15% off from the maxSeats
	$scope.requiresAttention = function (sg) {
		var total = $scope.getSectionSeatsTotal(sg);
		var maxSeats = sg.maxSeats;
		return (Math.abs(total - maxSeats) / maxSeats) > 0.15;
	};

	$scope.addRowForm = function(index) {
		var newCourse = {
			"id": 0,
			sectionGroups: [
				{
					"isActive": false,
				},
				{
					"isActive": true,
				},
				{
					"isActive": true,
				}
			]
		};

		$scope.courses.splice(index,0, newCourse);
	};

	$scope.deleteSectionGroup = function (index) {
		$scope.courses.splice(index, 1);
	};

	$rootScope.$on("cellChanged", function (event, newCell) {
		$scope.selectedCell = newCell;
		$scope.selectedEntity = findEntityById($scope.courses, newCell.sgrId, newCell.sgId);

		$scope.workgroupEntityTags = [];
		$scope.workgroup.tags.forEach(function (tag) {
			tag.isSelected = $scope.isTagSelected(tag);
			$scope.workgroupEntityTags.push(tag);
		});

		$scope.$apply();
	});
	$scope.courses = courseService.getCourses();

	$scope.isTagSelected = function (tag) {
		if ($scope.selectedEntity === undefined || $scope.selectedEntity.tags === undefined) return;
		return $scope.selectedEntity.tags.some(function (seTag) {
			return seTag.id === tag.id;
		});
	};

	$scope.nextSequence = function (sg) {
		var lastSection = sg.sections[sg.sections.length - 1];
		var number = parseInt(lastSection.sequence.slice(-1)) + 1;
		var character = lastSection.sequence.slice(0, 1);
		return character + "0" + number;
	};

	$scope.closeDetails = function () {
		appStateService.resetActiveCell();
	};
}]);

angular.module('coursesApp').directive('sgCell', function (appStateService) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			element.on('click', function (e) {
				e.stopPropagation();
				appStateService.setActiveCell(attrs.cellSgrId, attrs.cellSgId);
			});
		}
	}
});

angular.module('coursesApp').directive('unselectCell', function (appStateService) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			element.on('click', function (e) {
				e.stopPropagation();
				appStateService.resetActiveCell();
			});
		}
	}
});

angular.module('coursesApp').directive('sgChart', function (appStateService, $rootScope, $timeout) {
	return {
		restrict: 'E',
		template: '<canvas></canvas>',
		replace: true,
		scope: {
			sg: '='
		},
		link: function (scope, element, attrs) {
			var ctx = element[0].getContext("2d");
			scope.$watch('sg', function () {
				console.log(scope.sg);
				if (scope.sg && scope.sg.seats && scope.sg.demand && scope.sg.enrollment) {

					var type, labels, datasets;
					if (scope.sg.isActive) {	// SG is in historical mode
						type = 'line';
						labels = [2011, 2012, 2013, 2014, 2015];
						datasets = [
							{
								label: "Seats",
								lineTension: 0,
								backgroundColor: "rgba(179,181,198,0.2)",
								borderColor: "rgba(179,181,198,1)",
								pointBackgroundColor: "rgba(179,181,198,1)",
								pointBorderColor: "#fff",
								pointHoverBackgroundColor: "#fff",
								pointHoverBorderColor: "rgba(179,181,198,1)",
								data: scope.sg.seats
							},
							{
								label: "Demand",
								lineTension: 0,
								backgroundColor: "rgba(200,181,150,0.2)",
								borderColor: "rgba(200,181,150,1)",
								pointBackgroundColor: "rgba(200,181,150,1)",
								pointBorderColor: "#fff",
								pointHoverBackgroundColor: "#fff",
								pointHoverBorderColor: "rgba(179,181,198,1)",
								data: scope.sg.demand
							},
							{
								label: "Enrollment",
								lineTension: 0,
								backgroundColor: "rgba(255,99,132,0.2)",
								borderColor: "rgba(255,99,132,1)",
								pointBackgroundColor: "rgba(255,99,132,1)",
								pointBorderColor: "#fff",
								pointHoverBackgroundColor: "#fff",
								pointHoverBorderColor: "rgba(255,99,132,1)",
								data: scope.sg.enrollment
							}
						];
					} else {
						type = 'bar';
						labels = ['Day 1', 'Day 5', 'Day 15', 'Day 20', 'Current'];
						datasets = [
							{
								label: "Census",
								lineTension: 0,
								backgroundColor: "rgba(179,181,198,0.5)",
								borderColor: "rgba(179,181,198,1)",
								pointBackgroundColor: "rgba(179,181,198,1)",
								pointBorderColor: "#fff",
								pointHoverBackgroundColor: "#fff",
								pointHoverBorderColor: "rgba(179,181,198,1)",
								data: scope.sg.census
							}
						];
					}

					Chart.defaults.global.defaultFontColor = "#888";
					// Chart.defaults.global.responsive = false;
					$timeout(function () {
						var myChart = new Chart(ctx, {
							type: type,
							data: {
								labels: labels,
								datasets: datasets
							},
							options: {
								scales: {
									yAxes: [{
										ticks: {
											beginAtZero: true
										}
									}]
								}
							}
						});
						// ctx.canvas.style.height = "200px";
						// ctx.canvas.style.width = "100%";
						// ctx.canvas.height = 200;
						$rootScope.$on("cellChanged", function () {
							if (myChart) { myChart.destroy(); }
						});
					});
				}
			}, true);
		}
	}
});


angular.module('coursesApp').directive('courseInput', function (appStateService) {
	return {
		restrict: 'E',
		template: '<input type="text" class="form-control typeahead" placeholder="Enter course" />',
		replace: true,
		link: function (scope, element, attrs) {
			var substringMatcher = function(strs) {
				return function findMatches(q, cb) {
					var matches, substringRegex;

					// an array that will be populated with substring matches
					matches = [];

					// regex used to determine if a string contains the substring `q`
					substrRegex = new RegExp(q, 'i');

					// iterate through the pool of strings and for any string that
					// contains the substring `q`, add it to the `matches` array
					$.each(strs, function(i, str) {
						if (substrRegex.test(str)) {
							matches.push(str);
						}
					});

					cb(matches);
				};
			};

			var states = [
				'PSC 001 General Psychology',
				'PSC 041 Research Meth in Psych',
				'PSC 098 Directed Gp Study',
				'PSC 099 Special Study',
				'PSC 100 Cognitive Psychology',
				'PSC 100Y Cognitive Psychology',
				'PSC 101 Intro to Bio Psych',
				'PSC 103A Stat Analys Psych Data',
				'PSC 103B Stat Analys Psych Data',
				'PSC 113 Developmental Psychobiol'
			];

			element.typeahead({
				hint: true,
				highlight: true,
				minLength: 1
			},
			{
				name: 'states',
				source: substringMatcher(states)
			});

		}
	}
});
