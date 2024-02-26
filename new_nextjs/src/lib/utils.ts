import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


export const blurDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAAXNSR0IArs4c6QAAAG1JREFUGFdj3Hz8xX8mJgYGTjY2MP729SPD3ftXGRgnrzz+n4nxHwMnGxMDBysLw7cvnxnu3rvOwGgZXfWfjek7Ax/rFwYuZkaGT+++MezYdISBkZHZ/z+DxBcGHbE3DPwsbAwfzn1luPrvOgMAB84kvFAzCNgAAAAASUVORK5CYII='