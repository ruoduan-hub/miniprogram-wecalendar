type MarkCalendarItemType = {
  date: string;
  pointColor: string;
};

type E_type<P> = {
  detail: P;
};


export default interface WeCalendar {
  isToday: boolean;
  markCalendarList: MarkCalendarItemType[];
  defaultDate: string;
  showFolding: boolean;
  weeekLayer: Number;
  onSelect: (
    e: E_type<{
      day: string;
    }>
  ) => void;
  onRangeDate: (
    e: E_type<{
      beginTime: string;
      endTime: string;
    }>
  ) => void;
}
