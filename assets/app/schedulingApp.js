angular.module('schedulingApp', []);

angular.module('schedulingApp').factory("appStateService", function ($rootScope) {
	return {
		checkedSectionGroupIds: [],

		setFilters: function (filters) {
			$rootScope.$emit("cellChanged", {
				filters: filters
			});
		},
		setSectionGroup: function (sectionGroup) {
			this.setActivity({});
			$rootScope.$emit("sectionGroupSelected", sectionGroup);
		},
		setActivity: function (activity) {
			$rootScope.$emit("activitySelected", activity);
		},
		toggleCheckedSectionGroup: function (sectionGroupId) {
			if ( this.checkedSectionGroupIds.indexOf(sectionGroupId) > -1) {
				var index = this.checkedSectionGroupIds.indexOf(sectionGroupId);
				this.checkedSectionGroupIds.splice(index, 1);
			} else {
				this.checkedSectionGroupIds.push(sectionGroupId);
			}
			console.log("checkedSectionGroupsChanged");
			console.log(this.checkedSectionGroupIds);
			$rootScope.$emit("checkedSectionGroupsChanged", this.checkedSectionGroupIds);
		}
	}
});

angular.module('schedulingApp').factory("timePatternService", function() {
	return {
		// UC Davis Registrar Standard Times. Copied in Jun 2015
		// https://registrar.ucdavis.edu/faculty-staff/scheduling-guide/codes.cfm
		_standardTimePatterns: {
			50: {
				dayIndicators: ['0101000','0010100','0101010','0111100','0111010'],
				times: [
					{start: '08:00:00',end: '08:50:00'},
					{start: '09:00:00',end: '09:50:00'},
					{start: '10:00:00',end: '10:50:00'},
					{start: '11:00:00',end: '11:50:00'},
					{start: '12:10:00',end: '13:00:00'},
					{start: '13:10:00',end: '14:00:00'},
					{start: '14:10:00',end: '15:00:00'},
					{start: '15:10:00',end: '16:00:00'},
					{start: '16:10:00',end: '17:00:00'},
					{start: '17:10:00',end: '18:00:00'},
					{start: '18:10:00',end: '19:00:00'},
					{start: '19:10:00',end: '20:00:00'},
					{start: '20:10:00',end: '21:00:00'},
					{start: '21:10:00',end: '22:00:00'}
				]
			},
			80: {
				dayIndicators: ['0010100'],
				times: [
					{start: '07:30:00',end: '08:50:00'},
					{start: '09:00:00',end: '10:20:00'},
					{start: '10:30:00',end: '11:50:00'},
					{start: '12:10:00',end: '13:30:00'},
					{start: '12:10:00',end: '13:30:00'},
					{start: '13:40:00',end: '15:00:00'},
					{start: '15:10:00',end: '16:30:00'},
					{start: '16:40:00',end: '18:00:00'},
					{start: '18:10:00',end: '19:30:00'},
					{start: '19:40:00',end: '21:00:00'}
				]
			},
			110: {
				dayIndicators: ['0101000','0010100'],
				times: [
					{start: '08:00:00',end: '09:50:00'},
					{start: '10:00:00',end: '11:50:00'},
					{start: '12:10:00',end: '14:00:00'},
					{start: '14:10:00',end: '16:00:00'},
					{start: '16:10:00',end: '18:00:00'},
					{start: '18:10:00',end: '20:00:00'},
					{start: '20:10:00',end: '22:00:00'}
				]
			}
		},

		/* Public Methods */
		getStandardTimePatterns: function() {
			return this._standardTimePatterns;
		},
		getMeridianTime: function(time) {
			if (!time) {
				return {hours: '--', minutes: '--', meridian: '--'};
			}

			var timeArr = time.split(':');

			var hours = parseInt(timeArr[0]);
			if (hours === 0) hours = 12;
			else if (hours > 12) hours = hours % 12;

			var minutes = parseInt(timeArr[1]);
			var meridian = timeArr[0] < 12 ? 'AM' : 'PM';

			return {hours: hours, minutes: minutes, meridian: meridian};
		}

	};
});

angular.module('schedulingApp').factory("courseService", function () {
	return {
		getSectionGroups: function () {
			return [
				{
					"id": 1,
					"isActive": false,
					"term": "Fall Quarter",
					"subjectCode": "PSC",
					"courseNumber": "001",
					"sequenceDescription": "001",
					"title": "Introduction to Psychology",
					"units": "4.0",
					"isSeries": false,
					"maxSeats": 200,
					"seats": [33, 44, 23, 35, 52],
					"enrollment": [43, 63, 15, 63, 35],
					"demand": [55, 43, 64, 13, 66],
					"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
					"instructor": "Sagit, Bob",
					"sharedActivities": [
					],
					"sections": [
						{
							"id": 1,
							"sequence": "001",
							"seats": 200,
							"enrollment": 198,
							"activities": [
								{
									"id": 1,
									"sgId": 1,
									"type": "Lecture",
									"dayIndicator": "0010100",
									"startTime": "09:00",
									"endTime": "10:50",
									"room": null,
									"sequence": "001",
									"isBannerRoom": true
								},
								{
									"id": 2,
									"sgId": 1,
									"type": "Discussion",
									"dayIndicator": "0100000",
									"startTime": "13:10",
									"endTime": "14:00",
									"room": "YOUNG 186",
									"sequence": "001",
									"isBannerRoom": true
								}
							]
						}
					]
				},
				{
					"id": 2,
					"isActive": false,
					"term": "Fall Quarter",
					"subjectCode": "PSC",
					"courseNumber": "001",
					"sequenceDescription": "002",
					"title": "Introduction to Psychology",
					"units": "4.0",
					"isSeries": false,
					"maxSeats": 130,
					"seats": [33, 44, 23, 35, 52],
					"enrollment": [43, 63, 15, 63, 35],
					"demand": [55, 43, 64, 13, 66],
					"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
					"instructor": "Brown, Suzi",
					"sharedActivities": [
					],
					"sections": [
						{
							"id": 1,
							"sequence": "002",
							"seats": 130,
							"enrollment": 198,
							"activities": [
								{
									"id": 3,
									"sgId": 2,
									"type": "Lecture",
									"dayIndicator": "0101010",
									"startTime": "08:00",
									"endTime": "08:50",
									"room": null,
									"sequence": "002",
									"isBannerRoom": true
								},
								{
									"id": 4,
									"sgId": 2,
									"type": "Discussion",
									"dayIndicator": "0001000",
									"startTime": "10:00",
									"endTime": "10:50",
									"room": "YOUNG 186",
									"sequence": "002",
									"isBannerRoom": true
								},
							]
						}
					]
				},
				{
					"id": 3,
					"isActive": false,
					"term": "Fall Quarter",
					"subjectCode": "PSC",
					"courseNumber": "113",
					"sequenceDescription": "A Series",
					"title": "Development Psychobiol",
					"units": "3.0",
					"isSeries": true,
					"maxSeats": 75,
					"seats": [33, 44, 23, 35, 52],
					"enrollment": [43, 63, 15, 63, 35],
					"demand": [55, 43, 64, 13, 66],
					"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
					"instructor": "McGlophlin, Sarah",
					"sharedActivities": [
						{
							"id": 5,
							"sgId": 3,
							"type": "Lecture",
							"dayIndicator": "0010100",
							"startTime": "08:00",
							"endTime": "09:50",
							"room": null,
							"sequence": "A Series",
							"isBannerRoom": true
						},
					],
					"sections": [
						{
							"id": 1,
							"sequence": "A01",
							"seats": 25,
							"enrollment": 198,
							"activities": [
								{
									"id": 6,
									"sgId": 3,
									"type": "Discussion",
									"dayIndicator": "0100000",
									"startTime": "15:10",
									"endTime": "16:00",
									"room": "YOUNG 106",
									"sequence": "A01",
									"isBannerRoom": true
								},
							]
						},
						{
							"id": 2,
							"sequence": "A02",
							"seats": 25,
							"enrollment": 198,
							"activities": [
								{
									"id": 7,
									"sgId": 3,
									"type": "Discussion",
									"dayIndicator": "0001000",
									"startTime": "13:10",
									"endTime": "14:00",
									"room": "YOUNG 200",
									"sequence": "A02",
									"isBannerRoom": true
								},
							]
						},
						{
							"id": 3,
							"sequence": "A03",
							"seats": 25,
							"enrollment": 198,
							"activities": [
								{
									"id": 8,
									"sgId": 3,
									"type": "Discussion",
									"dayIndicator": "0000010",
									"startTime": "13:00",
									"endTime": "13:50",
									"room": "YOUNG 99",
									"sequence": "A03",
									"isBannerRoom": true
								},
							]
						}
					]
				},
				{
					"id": 26,
					"isActive": false,
					"term": "Fall Quarter",
					"subjectCode": "PSC",
					"courseNumber": "146",
					"sequenceDescription": "001",
					"title": "Development of Memory",
					"units": "3.0",
					"isSeries": true,
					"maxSeats": 50,
					"seats": [33, 44, 23, 35, 52],
					"enrollment": [43, 63, 15, 63, 35],
					"demand": [55, 43, 64, 13, 66],
					"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
					"instructor": "Lu, Sammy",
					"sharedActivities": [
						{
							"id": 9,
							"sgId": 4,
							"type": "Lecture",
							"dayIndicator": "0000110",
							"startTime": "15:10",
							"endTime": "17:00",
							"room": null,
							"sequence": "001",
							"isBannerRoom": true
						},
					],
					"sections": [
						{
							"id": 1,
							"sequence": "001",
							"seats": 25,
							"enrollment": 198,
							"activities": [
								{
									"id": 10,
									"sgId": 4,
									"type": "Discussion",
									"dayIndicator": "000100",
									"startTime": "09:00",
									"endTime": "09:50",
									"room": "YOUNG 186",
									"sequence": "001",
									"isBannerRoom": true
								},
							]
						},
						{
							"id": 2,
							"sequence": "B02",
							"seats": 25,
							"enrollment": 198,
							"activities": [
								{
									"id": 11,
									"sgId": 4,
									"type": "Discussion",
									"dayIndicator": "0001000",
									"startTime": "11:00",
									"endTime": "11:50",
									"room": "YOUNG 209",
									"sequence": "B02",
									"isBannerRoom": true
								},
							]
						}
					]
				},
				{
					"id": 25,
					"isActive": false,
					"term": "Fall Quarter",
					"subjectCode": "PSC",
					"courseNumber": "103A",
					"sequenceDescription": "001",
					"title": "Stat Analys Psych Data",
					"units": "4.0",
					"isSeries": true,
					"maxSeats": 50,
					"seats": [33, 44, 23, 35, 52],
					"enrollment": [43, 63, 15, 63, 35],
					"demand": [55, 43, 64, 13, 66],
					"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
					"instructor": "Lu, Sammy",
					"sharedActivities": [
						{
							"id": 12,
							"sgId": 4,
							"type": "Lecture",
							"dayIndicator": "0001010",
							"startTime": "12:10",
							"endTime": "14:00",
							"room": null,
							"sequence": "B Series",
							"isBannerRoom": true
						},
					],
					"sections": [
						{
							"id": 1,
							"sequence": "B01",
							"seats": 25,
							"enrollment": 198,
							"activities": [
								{
									"id": 13,
									"sgId": 4,
									"type": "Discussion",
									"dayIndicator": "0010000",
									"startTime": "10:00",
									"endTime": "10:50",
									"room": "YOUNG 186",
									"sequence": "B01",
									"isBannerRoom": true
								},
							]
						},
						{
							"id": 2,
							"sequence": "B02",
							"seats": 25,
							"enrollment": 198,
							"activities": [
								{
									"id": 14,
									"sgId": 4,
									"type": "Discussion",
									"dayIndicator": "0001000",
									"startTime": "11:00",
									"endTime": "11:50",
									"room": "YOUNG 209",
									"sequence": "B02",
									"isBannerRoom": true
								},
							]
						}
					]
				},
				{
					"id": 24,
					"isActive": false,
					"term": "Fall Quarter",
					"subjectCode": "PSC",
					"courseNumber": "113",
					"sequenceDescription": "B Series",
					"title": "Development Psychobiol",
					"units": "3.0",
					"isSeries": true,
					"maxSeats": 50,
					"seats": [33, 44, 23, 35, 52],
					"enrollment": [43, 63, 15, 63, 35],
					"demand": [55, 43, 64, 13, 66],
					"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
					"instructor": "Lu, Sammy",
					"sharedActivities": [
						{
							"id": 15,
							"sgId": 4,
							"type": "Lecture",
							"dayIndicator": "0110000",
							"startTime": "12:10",
							"endTime": "14:00",
							"room": null,
							"sequence": "B Series",
							"isBannerRoom": true
						},
					],
					"sections": [
						{
							"id": 1,
							"sequence": "B01",
							"seats": 25,
							"enrollment": 198,
							"activities": [
								{
									"id": 16,
									"sgId": 4,
									"type": "Discussion",
									"dayIndicator": "0010000",
									"startTime": "08:00",
									"endTime": "08:50",
									"room": "YOUNG 186",
									"sequence": "B01",
									"isBannerRoom": true
								},
							]
						},
						{
							"id": 2,
							"sequence": "B02",
							"seats": 25,
							"enrollment": 198,
							"activities": [
								{
									"id": 17,
									"sgId": 4,
									"type": "Discussion",
									"dayIndicator": "0001000",
									"startTime": "11:00",
									"endTime": "11:50",
									"room": "YOUNG 209",
									"sequence": "B02",
									"isBannerRoom": true
								},
							]
						}
					]
				},
				{
					"id": 23,
					"isActive": false,
					"term": "Fall Quarter",
					"subjectCode": "PSC",
					"courseNumber": "100Y",
					"sequenceDescription": "001",
					"title": "Cognitive Psychology",
					"units": "4.0",
					"isSeries": false,
					"maxSeats": 200,
					"seats": [33, 44, 23, 35, 52],
					"enrollment": [43, 63, 15, 63, 35],
					"demand": [55, 43, 64, 13, 66],
					"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
					"instructor": "Sagit, Bob",
					"sharedActivities": [
					],
					"sections": [
						{
							"id": 1,
							"sequence": "001",
							"seats": 200,
							"enrollment": 198,
							"activities": [
								{
									"id": 18,
									"sgId": 1,
									"type": "Lecture",
									"dayIndicator": "0010100",
									"startTime": "013:00",
									"endTime": "13:50",
									"room": null,
									"sequence": "001",
									"isBannerRoom": true
								},
								{
									"id": 19,
									"sgId": 1,
									"type": "Discussion",
									"dayIndicator": "000100",
									"startTime": "15:10",
									"endTime": "16:00",
									"room": "YOUNG 186",
									"sequence": "001",
									"isBannerRoom": true
								}
							]
						}
					]
				},
				{
					"id": 22,
					"isActive": false,
					"term": "Fall Quarter",
					"subjectCode": "PSC",
					"courseNumber": "001",
					"sequenceDescription": "121",
					"title": "Physiological Psychology",
					"units": "4.0",
					"isSeries": false,
					"maxSeats": 130,
					"seats": [33, 44, 23, 35, 52],
					"enrollment": [43, 63, 15, 63, 35],
					"demand": [55, 43, 64, 13, 66],
					"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
					"instructor": "Brown, Suzi",
					"sharedActivities": [
					],
					"sections": [
						{
							"id": 1,
							"sequence": "002",
							"seats": 130,
							"enrollment": 198,
							"activities": [
								{
									"id": 20,
									"sgId": 2,
									"type": "Lecture",
									"dayIndicator": "0101010",
									"startTime": "09:00",
									"endTime": "09:50",
									"room": null,
									"sequence": "002",
									"isBannerRoom": true
								},
								{
									"id": 21,
									"sgId": 2,
									"type": "Discussion",
									"dayIndicator": "000100",
									"startTime": "17:00",
									"endTime": "17:50",
									"room": "YOUNG 186",
									"sequence": "002",
									"isBannerRoom": true
								},
							]
						}
					]
				},
				{
					"id": 8,
					"isActive": false,
					"term": "Fall Quarter",
					"subjectCode": "PSC",
					"courseNumber": "001",
					"sequenceDescription": "123",
					"title": "Hormones & Behavior",
					"units": "4.0",
					"isSeries": false,
					"maxSeats": 200,
					"seats": [33, 44, 23, 35, 52],
					"enrollment": [43, 63, 15, 63, 35],
					"demand": [55, 43, 64, 13, 66],
					"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
					"instructor": "Sagit, Bob",
					"sharedActivities": [
					],
					"sections": [
						{
							"id": 1,
							"sequence": "001",
							"seats": 200,
							"enrollment": 198,
							"activities": [
								{
									"id": 22,
									"sgId": 1,
									"type": "Lecture",
									"dayIndicator": "0101010",
									"startTime": "11:00",
									"endTime": "11:50",
									"room": null,
									"sequence": "001",
									"isBannerRoom": true
								},
								{
									"id": 23,
									"sgId": 1,
									"type": "Discussion",
									"dayIndicator": "0100000",
									"startTime": "13:10",
									"endTime": "14:00",
									"room": "YOUNG 186",
									"sequence": "001",
									"isBannerRoom": true
								}
							]
						}
					]
				},
				{
					"id": 9,
					"isActive": false,
					"term": "Fall Quarter",
					"subjectCode": "PSC",
					"courseNumber": "143",
					"sequenceDescription": "001",
					"title": "Infant Development",
					"units": "4.0",
					"isSeries": false,
					"maxSeats": 130,
					"seats": [33, 44, 23, 35, 52],
					"enrollment": [43, 63, 15, 63, 35],
					"demand": [55, 43, 64, 13, 66],
					"census": [70, 55, 57, 60, 61], // Different census snapshots, not different years
					"instructor": "Brown, Suzi",
					"sharedActivities": [
					],
					"sections": [
						{
							"id": 1,
							"sequence": "002",
							"seats": 130,
							"enrollment": 198,
							"activities": [
								{
									"id": 24,
									"sgId": 2,
									"type": "Lecture",
									"dayIndicator": "0010000",
									"startTime": "018:00",
									"endTime": "19:50",
									"room": null,
									"sequence": "002",
									"isBannerRoom": true
								},
								{
									"id": 25,
									"sgId": 2,
									"type": "Discussion",
									"dayIndicator": "0010000",
									"startTime": "11:00",
									"endTime": "11:50",
									"room": "YOUNG 186",
									"sequence": "002",
									"isBannerRoom": true
								},
							]
						}
					]
				}
			];
		},
		getSectionGroupById: function (id) {
			var sectionGroups = this.getSectionGroups();
			for (var i = 0; i < sectionGroups.length; i++) {
				if (sectionGroups[i].id == id) {
					return sectionGroups[i];
				}
			}
		},
		getSectionGroupsByIds: function (sectionGroupIds) {
			var sectionGroups = [];

			sectionGroupIds.forEach( function(sectionGroupId) {
				sectionGroups.push(this.getSectionGroupById(sectionGroupId));
			}, this);

			return sectionGroups;
		}
	}
});

angular.module('schedulingApp').controller('SchedulingCtrl', ['$rootScope', '$scope', 'courseService', 'appStateService', 'timePatternService', '$timeout', function ($rootScope, $scope, courseService, appStateService, timePatternService, $timeout) {
	$scope.selectedSG = {};
	$scope.selectedActivity = {};
	$scope.days = ['M','T','W','R','F','S','U'];
	$scope.checkedSectionGroupIds = [];
	$scope.filters = [];

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
	$scope.standardPatterns = timePatternService.getStandardTimePatterns();

	// Find sectionGroup in 2d array, sgrId is for optimization
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

	$scope.sectionGroups = courseService.getSectionGroups();

	$scope.selectSG = function (sg) {

		if ($scope.selectedSG.id == sg.id) {
			sg = {};
		}
		appStateService.setSectionGroup(sg);
	};
	$rootScope.$on("sectionGroupSelected", function (event, newSG) {
		$scope.selectedSG = newSG;
	});

	$scope.selectActivity = function (activity) {
		appStateService.setActivity(activity);
	};

	$rootScope.$on("activitySelected", function (event, newActivity) {
		$timeout(function () {
			$scope.selectedActivity = newActivity;
			$scope.$apply();
		});
	});

	$rootScope.$on("checkedSectionGroupsChanged", function (event, checkedSectionGroupIds) {
		$scope.checkedSectionGroupIds = checkedSectionGroupIds;

		$scope.filters.length = 0;
		checkedSectionGroupIds.forEach(function (id) {
			var sg = courseService.getSectionGroupById(id);
			$scope.filters.push({ "id": id, "displayName": sg.subjectCode + " " + sg.courseNumber });
		})
	});

	$scope.toggleDay = function(index) {
		var dayArr = $scope.selectedActivity.dayIndicator.split('');
		dayArr[index] = Math.abs(1 - parseInt(dayArr[index])).toString();
		$scope.selectedActivity.dayIndicator = dayArr.join('');
	};

	$scope.closeDetails = function () {
		appStateService.resetActiveCell();
	};

	$scope.getWeekDays = function(dayIndicator, dayIndicators) {
		var dayArr = dayIndicator.split('');

		var dayStr = '';
		angular.forEach(dayArr, function(day, i) {
			if (day === '1') dayStr = dayStr + $scope.days[i];
		});

		return dayStr;
	};

	$scope.getMeridianTime = function (time) {
		var time = timePatternService.getMeridianTime(time);
		return ('0' + time.hours).slice(-2) + ':' + ('0' + time.minutes).slice(-2) + ' ' + time.meridian;
	};

	$scope.toggleCheckedSectionGroup = function(sgId) {
		appStateService.toggleCheckedSectionGroup(sgId);
	}
}]);

angular.module('schedulingApp').directive('activitiesCalendar', function ($rootScope, appStateService, courseService) {
	return {
		restrict: 'E',
		template: '<div id="calendar"></div>',
		replace: true,
		link: function (scope, element, attrs) {
			scope.calendarEvents = [];
			scope.selectedSectionGroup = {};
			scope.selectedActivity = {};
			scope.checkedSectionGroupIds = [];

			var refreshCalendar = function () {
				getActivities();
				scope.calendar.fullCalendar('removeEvents');
				scope.calendar.fullCalendar('addEventSource', scope.calendarEvents[0]);
				scope.calendar.fullCalendar('rerenderEvents');
			}

			var getActivities = function () {
				// Each of these If blocks will add to a 'events array'
				// The event making function will color them appropriately
				var calendarActivities = [];

				// Add Selected sectionGroup activities
				if (scope.selectedSectionGroup.id) {
					calendarActivities = calendarActivities.concat(
						createCalendarEvents(scope.selectedSectionGroup, null)
					);
				}

				// Add checked sectionGroups activities
				if (scope.checkedSectionGroupIds.length > 0) {
					var sectionGroups = courseService.getSectionGroupsByIds(scope.checkedSectionGroupIds);
					sectionGroups.forEach(function (sg) {
						if (sg.id !== scope.selectedSectionGroup.id) {
							calendarActivities = calendarActivities.concat(
								createCalendarEvents(sg, "#006600")
							);
						}
					});
				}

				// Do this if the array is still empty at this pointer
				if (scope.checkedSectionGroupIds.length === 0 && !scope.selectedSectionGroup.id) {
					var sectionGroups = courseService.getSectionGroups();
					sectionGroups.forEach(function (sg) {
						calendarActivities = calendarActivities.concat(
							createCalendarEvents(sg, "#006600")
						);
					});
				}

				scope.calendarEvents.length = 0;
				scope.calendarEvents.push(calendarActivities);
				return calendarActivities;
			};

			var activityToEvents = function (activity, title) {
				var calendarActivities = [];
				if (activity.startTime && activity.endTime) {
					var dayArray = activity.dayIndicator.split('');

					var start = activity.startTime.split(':').map(Number);
					var end = activity.endTime.split(':').map(Number);

					dayArray.forEach(function(d,i) {
						if (d === '1') {
							var activityStart = moment().day(i).hour(start[0]).minute(start[1]).second(0).format('llll');
							var activityEnd = moment().day(i).hour(end[0]).minute(end[1]).second(0).format('llll');

							calendarActivities.push({
								title: title,
								start: activityStart,
								end: activityEnd,
								activityId: activity.id,
								editable: scope.selectedActivity.id === activity.id
							});
						}
					});
				}
				return calendarActivities;
			};

			var sectionGroupToEvents = function (sectionGroup) {
				var calendarActivities = [];

				if (sectionGroup.id) {
					sectionGroup.sharedActivities.forEach(function (activity) {
						var title = getActivityTitle(sectionGroup, activity);
						calendarActivities = calendarActivities.concat(activityToEvents(activity, title));
					});
					sectionGroup.sections.forEach(function (section) {
						section.activities.forEach(function (activity) {
							var title = getActivityTitle(sectionGroup, activity);
							calendarActivities = calendarActivities.concat(activityToEvents(activity, title));
						});
					});
				}

				return calendarActivities;
			};

			var createCalendarEvents = function (sectionGroup, color) {
				var hiliteColor = "#303641"
				var calendarActivities = sectionGroupToEvents(sectionGroup);
				calendarActivities.forEach(function (event) {
					event.color = (scope.selectedActivity.id === event.activityId) ? hiliteColor : color;
				});
				return calendarActivities;
			};

			var getActivityTitle = function(sectionGroup, activity) {
				return sectionGroup.subjectCode + " " + sectionGroup.courseNumber + " - " + activity.sequence;
			};

			$rootScope.$on("sectionGroupSelected", function (event, newSG) {
				scope.selectedSectionGroup = newSG;
				refreshCalendar();
			});

			$rootScope.$on("activitySelected", function (event, newActivity) {
				if (newActivity.hasWarning) { return; }
				scope.selectedActivity = newActivity;
				refreshCalendar();
			});

			$rootScope.$on("checkedSectionGroupsChanged", function (event, checkedSectionGroupIds) {
				scope.checkedSectionGroupIds = checkedSectionGroupIds;
				refreshCalendar();
			});

			getActivities();

			var neonCalendar = neonCalendar || {};

			neonCalendar.$container = $(".calendar-env");

			$.extend(neonCalendar, {
				isPresent: neonCalendar.$container.length > 0
			});

			if($.isFunction($.fn.fullCalendar))
			{
				scope.calendar = element;
				var parentAspectRatio = element.parent().width() / element.parent().height();

				scope.calendar.fullCalendar({
					defaultView: 'agendaWeek',
					allDaySlot: false,
					allDayDefault: false,
					aspectRatio: parentAspectRatio,
					height: "auto",
					minTime: '06:00',
					maxTime: '18:00',
					header: false,
					slotEventOverlap: false,
					eventSources: scope.calendarEvents,
					eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {
						scope.selectedActivity.hasWarning = true;
						appStateService.setActivity(scope.selectedActivity);
					},
					eventResize: function( event, delta, revertFunc, jsEvent, ui, view ) {
						scope.selectedActivity.hasWarning = true;
						appStateService.setActivity(scope.selectedActivity);
					}
				});
			}
		}
	}
});
angular.module('schedulingApp').directive('stopEvent', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			element.bind(attr.stopEvent, function (e) {
				e.stopPropagation();
			});
		}
	};
});
angular.module('schedulingApp').directive('toolPa', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			element.tooltip();
		}
	};
});
