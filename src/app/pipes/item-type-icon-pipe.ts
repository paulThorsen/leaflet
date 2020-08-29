import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'itemTypeIconPipe' })
export class ItemTypeIconPipe implements PipeTransform {
    transform(itemType: string): string {
        switch (itemType) {
            case 'BOOK': {
                return '&#xe91f;'
            }
            case 'FILM': {
                return '&#xe914;'
            }
        }
    }
}
