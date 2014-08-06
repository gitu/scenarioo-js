/* scenarioo-client
 * Copyright (C) 2014, scenarioo.org Development Team
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

var ScenarioDocuWriter = require('./scenarioDocuWriter.js');
var ScenariooJasmineReporter = require('./scenariooJasmineReporter.js');

var scenarioojs = {

    reporter: ScenariooJasmineReporter,
    docuWriter: ScenarioDocuWriter,

    describeUseCase: function (useCaseName, callback) {
        return describe({name: useCaseName, description: useCaseName}, callback);
    },

    describeUseCaseExtended: function (useCaseName, useCaseDescription, callback) {
        return describe({name: useCaseName, description: useCaseDescription}, callback);
    },

    describeScenario: function (scenarioName, callback) {

        return it({name: scenarioName, description: scenarioName}, callback);
    },

    describeScenarioExtended: function (scenarioName, scenarioDescription, callback) {
        return it({name: scenarioName, description: scenarioDescription}, callback);
    }

};

module.exports = scenarioojs;