export interface IndexedList<T> {
	[key: string]: T;
}

const doc: HTMLDocument = document;

const defaultDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const defaultMonths: string[] = [
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

const selectors: IndexedList<string> = {
	body: '#ts-calendar__body',
	year: '#ts-calendar__year',
	month: '#ts-calendar__month'
};

const today = new Date();

let defaultStartYear: number = today.getFullYear();
let defaultStartMonth: number = today.getMonth();
let defaultStartDay: number = today.getDate();

const get = (selector: string): HTMLElement => doc.querySelector(selector);

const add = (type: string): HTMLElement => doc.createElement(type);

// prettier-ignore
const onClick = (selector: string, callback: (event: MouseEvent) => void): void => get(selector).addEventListener('click', callback);

const renderCaption = (translations: IndexedList<string | string[]>): string => `
<caption>
    <button id="ts-calendar__prev" title="${translations.prevMonthTitle}">${translations.prevMonth}</button>
    <span id="ts-calendar__month"></span>
    <span id="ts-calendar__year"></span>
    <button id="ts-calendar__next" title="${translations.nextMonthTitle}">${translations.nextMonth}</button>
</caption>
`;

const renderDays = (days: string[]): string => days.map((day: string): string => `<th>${day}</th>`).join('');

const renderHeader = (translations: IndexedList<string | string[]>): string => `
<thead>
    <tr>
        ${renderDays(translations.days as string[])}
    </tr>
</thead>
`;

const renderTable = (translations: IndexedList<string | string[]>): string => `
<table>
    ${renderCaption(translations)}
    ${renderHeader(translations)}
    <tbody id="ts-calendar__body"></tbody>
</table>
`;

const renderCalendar = (
	year: number,
	month: number,
	selectors: IndexedList<string>,
	translations: IndexedList<string | string[]>
): void => {
	const bodyEl: HTMLElement = get(selectors.body);
	const yearEl: HTMLElement = get(selectors.year);
	const monthEl: HTMLElement = get(selectors.month);
	const firstDay: number = new Date(year, month).getDay();
	const allDays: number = 32 - new Date(year, month, 32).getDate();

	let day: number = 1;

	bodyEl.innerHTML = '';
	yearEl.innerHTML = year.toString();
	monthEl.innerHTML = translations.months[month];

	for (let i: number = 0; i < 6; i++) {
		const tr: HTMLElement = add('tr');

		for (let j: number = 0; j < 7; j++) {
			const td: HTMLElement = add('td');

			if (i === 0 && j < firstDay) {
				td.classList.add('is--empty');
			} else if (day > allDays) {
				break;
			} else {
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

const addListeners = (startYear: number, startMonth: number, translations: IndexedList<string | string[]>): void => {
	onClick('#ts-calendar__prev', (event: MouseEvent) => {
		event.preventDefault();

		const isFirstMonth: boolean = startMonth === 0;

		startMonth = isFirstMonth ? 11 : startMonth - 1;
		startYear = isFirstMonth ? startYear - 1 : startYear;

		renderCalendar(startYear, startMonth, selectors, translations);
	});

	onClick('#ts-calendar__next', (event: MouseEvent) => {
		event.preventDefault();

		const isLastMonth: boolean = startMonth === 11;

		startMonth = isLastMonth ? 0 : startMonth + 1;
		startYear = isLastMonth ? startYear + 1 : startYear;

		renderCalendar(startYear, startMonth, selectors, translations);
	});
};

const defaultTranslations: IndexedList<string | string[]> = {
	days: defaultDays,
	months: defaultMonths,
	prevMonth: '&larr;',
	nextMonth: '&rarr;',
	prevMonthTitle: 'Previous month',
	nextMonthTitle: 'Next month'
};

export const renderCalendarWidget = (
	startYear: number = defaultStartYear,
	startMonth: number = defaultStartMonth,
	container: string = 'body',
	translations: IndexedList<string | string[]> = defaultTranslations
) => {
	get(container).innerHTML = renderTable(translations);
	renderCalendar(startYear, startMonth, selectors, translations);
	addListeners(startYear, startMonth, translations);
};

// Usage: renderCalendarWidget();
