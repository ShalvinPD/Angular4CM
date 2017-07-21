import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 0,  name: 'Bipin' },
      { id: 11, name: 'Shalvin' },
      { id: 12, name: 'Praseed' },
      { id: 13, name: 'Vaisakh' },
      { id: 14, name: 'Sarath' },
      { id: 15, name: 'Naveen' },
      { id: 16, name: 'Dinny' },
      { id: 17, name: 'Sonith' },
      { id: 18, name: 'Letti' },
      { id: 19, name: 'Mahin' },
      { id: 20, name: 'Shijith' }
    ];
    return {contacts};
  }
}
