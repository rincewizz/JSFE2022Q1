class WinnersModel {
  private host: string;

  constructor() {
    this.host = 'http://127.0.0.1:3000/';
  }

  getWinners(page: number, limit: number, sort: 'id'|'wins'|'time' = 'time', order: 'ASC'|'DESC' = 'ASC') {
    return fetch(`${this.host}winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  }

  getWinner(id: number) {
    return fetch(`${this.host}winners/${id}`);
  }

  createWinner(id: number, wins: number, time: number) {
    return fetch(`${this.host}winners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ id, wins, time }),
    });
  }

  updateWinner(id: number, wins: number, time: number) {
    return fetch(`${this.host}winners/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ wins, time }),
    });
  }
}

export default WinnersModel;
