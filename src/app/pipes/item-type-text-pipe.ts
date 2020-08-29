import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'itemTypeTextPipe' })
export class ItemTypeTextPipe implements PipeTransform {
    transform(itemType: string): string {
        switch (itemType) {
            case 'BOOK': {
                return 'Book'
            }
            case 'FILM': {
                return 'Movie'
            }
        }
    }
}
