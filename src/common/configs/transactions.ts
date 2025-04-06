import { getCategoriesList } from "./categoriesList";

export const getTransactionsList = () => {
  const categories = getCategoriesList();
  const transactions: Record<
    string,
    Array<{ name: string; price: number; datetime: string }>
  > = {};

  categories.forEach((category) => {
    transactions[category] = generateTestTransactions(category);
  });

  return transactions;
};

const generateTestTransactions = (category: string) => {
  const items: Record<
    string,
    { name: string; price: number; datetime: string }[]
  > = {
    // Аксессуары: [
    //   { name: "Часы", price: 15000, datetime: "20.12.2024, 13:46" },
    //   { name: "Ремень", price: 3500, datetime: "18.11.2024, 11:43" },
    //   { name: "Солнечные очки", price: 7000, datetime: "17.12.2024, 11:33" },
    // ],
    // Аренда: [
    //   { name: "Аренда квартиры", price: 30000, datetime: "16.10.2024, 11:17" },
    //   { name: "Аренда офиса", price: 50000, datetime: "17.06.2024, 18:14" },
    //   { name: "Аренда машины", price: 15000, datetime: "03.07.2024, 22:48" },
    // ],
    // Еда: [
    //   {
    //     name: "Продукты на неделю",
    //     price: 5000,
    //     datetime: "14.03.2024, 13:18",
    //   },
    //   { name: "Обед в кафе", price: 1200, datetime: "13.11.2024, 14:16" },
    //   { name: "Кофе с собой", price: 350, datetime: "16.10.2024, 12:20" },
    // ],
    // Зарплата: [
    //   { name: "Зарплата за март", price: 80000, datetime: "20.12.2024 13:46" },
    //   { name: "Аванс за апрель", price: 40000, datetime: "20.12.2024 13:46" },
    //   { name: "Премия", price: 15000, datetime: "20.12.2024 13:46" },
    // ],
    // "Одежда и обувь": [
    //   { name: "Джинсы", price: 5000, datetime: "20.12.2024 13:46" },
    //   { name: "Кроссовки", price: 8000, datetime: "20.12.2024 13:46" },
    //   { name: "Зимняя куртка", price: 15000, datetime: "20.12.2024 13:46" },
    // ],
    // Разное: [
    //   { name: "Книга", price: 800, datetime: "20.12.2024 13:46" },
    //   { name: "Билет в кино", price: 500, datetime: "20.12.2024 13:46" },
    //   { name: "Подарок", price: 2500, datetime: "20.12.2024 13:46" },
    // ],
    // Транспорт: [
    //   { name: "Проездной на месяц", price: 2000, datetime: "20.12.2024 13:46" },
    //   { name: "Такси", price: 500, datetime: "20.12.2024 13:46" },
    //   { name: "Ремонт машины", price: 10000, datetime: "20.12.2024 13:46" },
    // ],
  };

  return items[category] || [];
};
