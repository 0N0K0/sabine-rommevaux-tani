const MONTHS = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
];

type ParsedDate = {
  day?: number;
  month?: number;
  year: number;
};

function parseDate(value: string): ParsedDate {
  const parts = value.split('/');

  if (parts.length === 3) {
    return {
      day: Number(parts[0]),
      month: Number(parts[1]),
      year: Number(parts[2]),
    };
  }

  if (parts.length === 2) {
    return {
      month: Number(parts[0]),
      year: Number(parts[1]),
    };
  }

  return {
    year: Number(value),
  };
}

function formatDate(date: ParsedDate): string {
  if (date.day && date.month) {
    const day = date.day === 1 ? '1er' : date.day;
    return `${day}&nbsp;${MONTHS[date.month - 1]}&nbsp;${date.year}`;
  }

  if (date.month) {
    return `${MONTHS[date.month - 1]}&nbsp;${date.year}`;
  }

  return `${date.year}`;
}

function joinWithAnd(items: string[]): string {
  if (items.length === 1) {
    return items[0];
  }

  if (items.length === 2) {
    return `${items[0]} et&nbsp;${items[1]}`;
  }

  return `${items.slice(0, -1).join(', ')} et&nbsp;${items.at(-1)}`;
}

export function formatDates(values: string[]): string {
  const dates = values.map(parseDate);

  if (dates.length === 1) {
    const date = dates[0];

    if (date.day) {
      return `le&nbsp;${formatDate(date)}`;
    }

    return formatDate(date);
  }

  const hasDays = dates.every((date) => date.day !== undefined);

  // Même mois + même année
  const sameMonthAndYear = dates.every(
    (date) => date.month === dates[0].month && date.year === dates[0].year,
  );

  if (hasDays && sameMonthAndYear) {
    const days = dates.map((date) =>
      date.day === 1 ? '1er' : date.day!.toString(),
    );

    return `les&nbsp;${joinWithAnd(days)}&nbsp;${
      MONTHS[dates[0].month! - 1]
    }&nbsp;${dates[0].year}`;
  }

  // Même année, avec des jours
  const sameYear = dates.every((date) => date.year === dates[0].year);

  if (hasDays && sameYear) {
    const formatted = dates.map((date) => {
      const day = date.day === 1 ? '1er' : date.day;

      return date.month ? `${day}&nbsp;${MONTHS[date.month - 1]}` : `${day}`;
    });

    return `les&nbsp;${joinWithAnd(formatted)}&nbsp;${dates[0].year}`;
  }

  // Cas général : mois ou années différents
  const formatted = joinWithAnd(dates.map(formatDate));

  return hasDays ? `les&nbsp;${formatted}` : formatted;
}
export function formatPeriod(startValue: string, endValue?: string): string {
  const start = parseDate(startValue);

  if (!endValue) {
    if (start.day && start.month) {
      return `depuis&nbsp;le&nbsp;${formatDate(start)}`;
    }

    if (start.month) {
      return `depuis&nbsp;${formatDate(start)}`;
    }

    return `depuis&nbsp;${start.year}`;
  }

  const end = parseDate(endValue);

  // 12/06/2025 → 18/06/2025
  if (
    start.day &&
    end.day &&
    start.month === end.month &&
    start.year === end.year
  ) {
    return `du&nbsp;${start.day} au&nbsp;${end.day}&nbsp;${MONTHS[start.month! - 1]}&nbsp;${start.year}`;
  }

  // 12/06/2025 → 18/07/2025
  if (start.day && end.day && start.year === end.year) {
    return `du&nbsp;${start.day}&nbsp;${MONTHS[start.month! - 1]} au&nbsp;${end.day}&nbsp;${MONTHS[end.month! - 1]}&nbsp;${end.year}`;
  }

  // 06/2025 → 07/2025
  if (start.month && end.month && start.year === end.year) {
    return `de&nbsp;${MONTHS[start.month - 1]} à&nbsp;${MONTHS[end.month - 1]}&nbsp;${start.year}`;
  }

  // 2002 → 2004
  if (!start.month && !end.month) {
    return `de&nbsp;${start.year} à&nbsp;${end.year}`;
  }

  return `de&nbsp;${formatDate(start)} à&nbsp;${formatDate(end)}`;
}

export function formatPeriods(
  periods: { startDate: string; endDate?: string }[],
): string {
  return joinWithAnd(
    periods.map((period) => formatPeriod(period.startDate, period.endDate)),
  );
}
