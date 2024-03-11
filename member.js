function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'member.html',
        controller: function() {
        this.skills = [];
        this.addSkill = function(skill) {
            this.skills.push(skill);
        };
        },
        controllerAs: 'member'
    };
    }