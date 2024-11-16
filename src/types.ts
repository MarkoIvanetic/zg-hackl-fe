export interface Event {
  id: number;
  name: string;
  event_type: string;
  location: string;
  description: string | null;
  start_datetime: string;
  end_datetime: string;
  price: string;
  media_url: string | null;
  event_url: string | null;
}
