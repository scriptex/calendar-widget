(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var doc = document;
    var defaultDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var defaultMonths = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'Septemer',
        'October',
        'November',
        'December'
    ];
    var selectors = {
        body: '#ts-calendar__body',
        year: '#ts-calendar__year',
        month: '#ts-calendar__month'
    };
    var today = new Date();
    var defaultStartYear = today.getFullYear();
    var defaultStartMonth = today.getMonth();
    var defaultStartDay = today.getDate();
    var get = function (selector) { return doc.querySelector(selector); };
    var add = function (type) { return doc.createElement(type); };
    // prettier-ignore
    var onClick = function (selector, callback) { return get(selector).addEventListener('click', callback); };
    var renderCaption = function (translations) { return "\n<caption>\n    <button id=\"ts-calendar__prev\" title=\"" + translations.prevMonthTitle + "\">" + translations.prevMonth + "</button>\n    <span id=\"ts-calendar__month\"></span>\n    <span id=\"ts-calendar__year\"></span>\n    <button id=\"ts-calendar__next\" title=\"" + translations.nextMonthTitle + "\">" + translations.nextMonth + "</button>\n</caption>\n"; };
    var renderDays = function (days) { return days.map(function (day) { return "<th>" + day + "</th>"; }).join(''); };
    var renderHeader = function (translations) { return "\n<thead>\n    <tr>\n        " + renderDays(translations.days) + "\n    </tr>\n</thead>\n"; };
    var renderTable = function (translations) { return "\n<table>\n    " + renderCaption(translations) + "\n    " + renderHeader(translations) + "\n    <tbody id=\"ts-calendar__body\"></tbody>\n</table>\n"; };
    var renderCalendar = function (year, month, selectors, translations) {
        var bodyEl = get(selectors.body);
        var yearEl = get(selectors.year);
        var monthEl = get(selectors.month);
        var firstDay = new Date(year, month).getDay();
        var allDays = 32 - new Date(year, month, 32).getDate();
        var day = 1;
        bodyEl.innerHTML = '';
        yearEl.innerHTML = year.toString();
        monthEl.innerHTML = translations.months[month];
        for (var i = 0; i < 6; i++) {
            var tr = add('tr');
            for (var j = 0; j < 7; j++) {
                var td = add('td');
                if (i === 0 && j < firstDay) {
                    td.classList.add('is--empty');
                }
                else if (day > allDays) {
                    break;
                }
                else {
                    td.innerHTML = day.toString();
                    if (year === defaultStartYear && month === defaultStartMonth && day === defaultStartDay) {
                        td.classList.add('is--today');
                    }
                    day++;
                }
                tr.append(td);
            }
            bodyEl.append(tr);
        }
    };
    var addListeners = function (startYear, startMonth, translations) {
        onClick('#ts-calendar__prev', function (event) {
            event.preventDefault();
            var isFirstMonth = startMonth === 0;
            startMonth = isFirstMonth ? 11 : startMonth - 1;
            startYear = isFirstMonth ? startYear - 1 : startYear;
            renderCalendar(startYear, startMonth, selectors, translations);
        });
        onClick('#ts-calendar__next', function (event) {
            event.preventDefault();
            var isLastMonth = startMonth === 11;
            startMonth = isLastMonth ? 0 : startMonth + 1;
            startYear = isLastMonth ? startYear + 1 : startYear;
            renderCalendar(startYear, startMonth, selectors, translations);
        });
    };
    var defaultTranslations = {
        days: defaultDays,
        months: defaultMonths,
        prevMonth: '&larr;',
        nextMonth: '&rarr;',
        prevMonthTitle: 'Previous month',
        nextMonthTitle: 'Next month'
    };
    exports.renderCalendarWidget = function (startYear, startMonth, container, translations) {
        if (startYear === void 0) { startYear = defaultStartYear; }
        if (startMonth === void 0) { startMonth = defaultStartMonth; }
        if (container === void 0) { container = 'body'; }
        if (translations === void 0) { translations = defaultTranslations; }
        get(container).innerHTML = renderTable(translations);
        renderCalendar(startYear, startMonth, selectors, translations);
        addListeners(startYear, startMonth, translations);
    };
    exports.default = exports.renderCalendarWidget;
});
// Usage: renderCalendarWidget();
