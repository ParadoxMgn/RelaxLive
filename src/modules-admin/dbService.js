import { error } from "./error";

export class DbService {
  async dataGet(option = "") {
    try {
      const response = await fetch(`http://localhost:4545/data${option}`);

      if (response.ok) {
        return await response.json();
      } else {
        throw error();
      }
    } catch (error) {
      error();
    }
  }

  async dataSend(method, data, option = "") {
    try {
      const response = await fetch(`http://localhost:4545/data${option}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw error();
      }
    } catch (error) {
      error();
    }
  }
}