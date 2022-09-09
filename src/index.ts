type CalendarWidgetStringOrArrayOfStrings = Record<string, string | string[]>;

interface CalendarWidgetOptions {
	startYear: number;
	startMonth: number;
	container: string;
	translations: CalendarWidgetStringOrArrayOfStrings;
}

const doc: Document = document;
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

const selectors: Record<string, string> = {
	body: '#ts-calendar__body',
	year: '#ts-calendar__year',
	month: '#ts-calendar__month'
};

const today: Date = new Date();
const defaultStartYear: number = today.getFullYear();
const defaultStartMonth: number = today.getMonth();
const defaultStartDay: number = today.getDate();

const get = (selector: string): HTMLElement | null => doc.querySelector(selector);

const add = (type: string): HTMLElement => doc.createElement(type);

// prettier-ignore
const onClick = (selector: string, callback: (event: MouseEvent) => void): void => get(selector)?.addEventListener('click', callback);

const renderCaption = (translations: CalendarWidgetStringOrArrayOfStrings): string => `
<caption>
    <button id="ts-calendar__prev" title="${translations.prevMonthTitle}">${translations.prevMonth}</button>
    <span id="ts-calendar__month"></span>
    <span id="ts-calendar__year"></span>
    <button id="ts-calendar__next" title="${translations.nextMonthTitle}">${translations.nextMonth}</button>
</caption>
`;

const renderDays = (days: string[]): string => days.map((day: string): string => `<th>${day}</th>`).join('');

const renderHeader = (translations: CalendarWidgetStringOrArrayOfStrings): string => `
<thead>
    <tr>
        ${renderDays(translations.days as string[])}
    </tr>
</thead>
`;

const renderTable = (translations: CalendarWidgetStringOrArrayOfStrings): string => `
<table class="simple-calendar-widget">
    ${renderCaption(translations)}
    ${renderHeader(translations)}
    <tbody id="ts-calendar__body"></tbody>
</table>
`;

const renderCalendar = (
	year: number,
	month: number,
	selectorsList: Record<string, string>,
	translations: CalendarWidgetStringOrArrayOfStrings
): void => {
	const bodyEl: HTMLElement | null = get(selectorsList.body);
	const yearEl: HTMLElement | null = get(selectorsList.year);
	const monthEl: HTMLElement | null = get(selectorsList.month);
	const firstDay: number = new Date(year, month).getDay();
	const allDays: number = 32 - new Date(year, month, 32).getDate();

	let day = 1;

	if (bodyEl) {
		bodyEl.innerHTML = '';
	}

	if (yearEl) {
		yearEl.innerHTML = year.toString();
	}

	if (monthEl) {
		monthEl.innerHTML = translations.months[month];
	}

	for (let i = 0; i < 6; i++) {
		const tr: HTMLElement = add('tr');

		for (let j = 0; j < 7; j++) {
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

		bodyEl?.append(tr);
	}
};

const addListeners = (
	startYear: number,
	startMonth: number,
	translations: CalendarWidgetStringOrArrayOfStrings
): void => {
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

const defaultTranslations: CalendarWidgetStringOrArrayOfStrings = {
	days: defaultDays,
	months: defaultMonths,
	prevMonth: '&larr;',
	nextMonth: '&rarr;',
	prevMonthTitle: 'Previous month',
	nextMonthTitle: 'Next month'
};

export const renderCalendarWidget = ({
	startYear = defaultStartYear,
	startMonth = defaultStartMonth,
	container = 'body',
	translations = defaultTranslations
}: CalendarWidgetOptions) => {
	const el = get(container);

	if (el) {
		el.innerHTML = renderTable(translations);
	}

	renderCalendar(startYear, startMonth, selectors, translations);
	addListeners(startYear, startMonth, translations);
};
