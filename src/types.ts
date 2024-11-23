export interface Event {
  id: number;
  name: string;
  category: string;
  location: string;
  description: string | null;
  start_datetime: string;
  end_datetime: string;
  price: string;
  image_url: string | null;
  event_url: string | null;
}
