import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      const name = item.name ? item.name.toLowerCase() : '';
      const totalAmount = item.totalAmount ? item.totalAmount.toString() : '';
      return name.includes(searchText) || totalAmount.includes(searchText);
    });
  }
}
